'use client'

import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl'

type GL = Renderer['gl']

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: number
  return function (this: any, ...args: Parameters<T>) {
    window.clearTimeout(timeout)
    timeout = window.setTimeout(() => func.apply(this, args), wait)
  }
}

function lerp(p1: number, p2: number, t: number): number {
  return p1 + (p2 - p1) * t
}

function autoBind(instance: any): void {
  const proto = Object.getPrototypeOf(instance)
  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (key !== 'constructor' && typeof instance[key] === 'function') {
      instance[key] = instance[key].bind(instance)
    }
  })
}

function isTouchEvent(e: any): e is TouchEvent {
  return typeof e === 'object' && e !== null && 'touches' in e
}

function getFontSize(font: string): number {
  const match = font.match(/(\d+)px/)
  return match ? parseInt(match[1], 10) : 30
}

function createTextTexture(
  gl: GL,
  text: string,
  font: string = 'bold 30px monospace',
  color: string = 'black'
): { texture: Texture; width: number; height: number } {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  if (!context) throw new Error('Could not get 2d context')

  context.font = font
  const metrics = context.measureText(text)
  const textWidth = Math.ceil(metrics.width)
  const fontSize = getFontSize(font)
  const textHeight = Math.ceil(fontSize * 1.2)

  canvas.width = textWidth + 20
  canvas.height = textHeight + 20

  context.font = font
  context.fillStyle = color
  context.textBaseline = 'middle'
  context.textAlign = 'center'
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillText(text, canvas.width / 2, canvas.height / 2)

  const texture = new Texture(gl, { generateMipmaps: false })
  texture.image = canvas
  return { texture, width: canvas.width, height: canvas.height }
}

interface TitleProps {
  gl: GL
  plane: Mesh
  renderer: Renderer
  text: string
  textColor?: string
  font?: string
}

class Title {
  gl: GL
  plane: Mesh
  renderer: Renderer
  text: string
  textColor: string
  font: string
  mesh!: Mesh

  constructor({ gl, plane, renderer, text, textColor = '#545050', font = '40px sans-serif' }: TitleProps) {
    autoBind(this)
    this.gl = gl
    this.plane = plane
    this.renderer = renderer
    this.text = text
    this.textColor = textColor
    this.font = font
    this.createMesh()
  }

  createMesh() {
    const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor)
    const geometry = new Plane(this.gl)
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true,
    })
    this.mesh = new Mesh(this.gl, { geometry, program })
    const aspect = width / height
    // Slightly larger text for better readability
    const textHeightScaled = this.plane.scale.y * 0.22
    const textWidthScaled = textHeightScaled * aspect
    this.mesh.scale.set(textWidthScaled, textHeightScaled, 1)
    // Add a bit more space between image and text
    this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeightScaled * 0.6 - 0.08
    this.mesh.setParent(this.plane)
  }
}

interface ScreenSize {
  width: number
  height: number
}

interface Viewport {
  width: number
  height: number
}

interface MediaProps {
  geometry: Plane
  gl: GL
  image: string
  index: number
  length: number
  renderer: Renderer
  scene: Transform
  screen: ScreenSize
  text: string
  viewport: Viewport
  bend: number
  textColor: string
  borderRadius?: number
  font?: string
}

class Media {
  extra: number = 0
  geometry: Plane
  gl: GL
  image: string
  index: number
  length: number
  renderer: Renderer
  scene: Transform
  screen: ScreenSize
  text: string
  viewport: Viewport
  bend: number
  textColor: string
  borderRadius: number
  font?: string
  program!: Program
  plane!: Mesh
  title!: Title
  scale!: number
  padding!: number
  width!: number
  widthTotal!: number
  x!: number
  speed: number = 0
  isBefore: boolean = false
  isAfter: boolean = false

  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    renderer,
    scene,
    screen,
    text,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font,
  }: MediaProps) {
    this.geometry = geometry
    this.gl = gl
    this.image = image
    this.index = index
    this.length = length
    this.renderer = renderer
    this.scene = scene
    this.screen = screen
    this.text = text
    this.viewport = viewport
    this.bend = bend
    this.textColor = textColor
    this.borderRadius = borderRadius
    this.font = font
    this.createShader()
    this.createMesh()
    this.createTitle()
    this.onResize()
  }

  createShader() {
    const texture = new Texture(this.gl, {
      generateMipmaps: true,
    })
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          // Keep the plane flat by not modifying the z position
          vec3 p = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          // Smooth antialiasing for edges
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed: { value: 0 },
        uTime: { value: 100 * Math.random() },
        uBorderRadius: { value: this.borderRadius },
      },
      transparent: true,
    })
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = this.image
    img.onload = () => {
      texture.image = img
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight]
    }
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    })
    this.plane.setParent(this.scene)
  }

  createTitle() {
    // Text captions have been disabled; no title mesh is created.
  }

  update(scroll: { current: number; last: number }, direction: 'right' | 'left') {
    this.plane.position.x = this.x - scroll.current - this.extra

    const x = this.plane.position.x
    const H = this.viewport.width / 2

    if (this.bend === 0) {
      this.plane.position.y = 0
      this.plane.rotation.z = 0
    } else {
      const B_abs = Math.abs(this.bend)
      const R = (H * H + B_abs * B_abs) / (2 * B_abs)
      const effectiveX = Math.min(Math.abs(x), H)

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX)
      if (this.bend > 0) {
        this.plane.position.y = -arc
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R)
      } else {
        this.plane.position.y = arc
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R)
      }
    }

    this.speed = scroll.current - scroll.last
    this.program.uniforms.uTime.value += 0.04
    this.program.uniforms.uSpeed.value = this.speed

    const planeOffset = this.plane.scale.x / 2
    const viewportOffset = this.viewport.width / 2
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset
    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal
      this.isBefore = this.isAfter = false
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal
      this.isBefore = this.isAfter = false
    }
  }

  onResize({ screen, viewport }: { screen?: ScreenSize; viewport?: Viewport } = {}) {
    if (screen) this.screen = screen
    if (viewport) {
      this.viewport = viewport
      if (this.plane.program.uniforms.uViewportSizes) {
        this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height]
      }
    }
    this.scale = this.screen.height / 1500
    // Make each card almost screen-sized with a landscape aspect ratio
    const targetHeight = this.viewport.height * 0.65 // ~65% of visible height
    const targetAspect = 16.0 / 9.0
    let cardHeight = targetHeight
    let cardWidth = cardHeight * targetAspect

    // If width would overflow too much, clamp by width and recompute height
    const maxWidth = this.viewport.width * 0.85
    if (cardWidth > maxWidth) {
      cardWidth = maxWidth
      cardHeight = cardWidth / targetAspect
    }

    this.plane.scale.y = cardHeight
    this.plane.scale.x = cardWidth
    this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y]
    this.padding = 2
    this.width = this.plane.scale.x + this.padding
    this.widthTotal = this.width * this.length
    this.x = this.width * this.index
  }
}

interface AppConfig {
  items?: { image: string; text: string }[]
  bend?: number
  textColor?: string
  borderRadius?: number
  font?: string
  scrollSpeed?: number
  scrollEase?: number
}

class App {
  container: HTMLElement
  scrollSpeed: number
  scroll: {
    ease: number
    current: number
    target: number
    last: number
    position?: number
  }
  onCheckDebounce: (...args: any[]) => void
  renderer!: Renderer
  gl!: GL
  camera!: Camera
  scene!: Transform
  planeGeometry!: Plane
  medias: Media[] = []
  mediasImages: { image: string; text: string }[] = []
  screen!: { width: number; height: number }
  viewport!: { width: number; height: number }
  raf: number = 0
  // Track whether the user has completed viewing the gallery once
  hasCompletedOnce: boolean = false

  boundOnResize!: () => void
  boundOnWheel!: (e: Event) => void
  boundOnTouchDown!: (e: MouseEvent | TouchEvent) => void
  boundOnTouchMove!: (e: MouseEvent | TouchEvent) => void
  boundOnTouchUp!: () => void

  isDown: boolean = false
  start: number = 0

  // Move onCheck method before the constructor
  onCheck() {
    // Implementation of onCheck
  }

  constructor(
    container: HTMLElement,
    {
      items,
      bend = 1,
      textColor = '#ffffff',
      borderRadius = 0,
      font = 'bold 30px Figtree',
      scrollSpeed = -0.2,
      scrollEase = 0.05,
    }: AppConfig
  ) {
    document.documentElement.classList.remove('no-js')
    this.container = container
    this.scrollSpeed = scrollSpeed
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 }

    // Initialize methods first
    this.createRenderer()
    this.createCamera()
    this.createScene()
    this.onResize()
    this.createGeometry()

    // Now it's safe to bind onCheck
    this.onCheckDebounce = debounce(this.onCheck.bind(this), 200)

    // Continue with the rest of initialization
    this.createMedias(items, bend, textColor, borderRadius, font)
    this.update()
    this.addEventListeners()
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
    })
    this.gl = this.renderer.gl
    this.gl.clearColor(0, 0, 0, 0)
    this.container.appendChild(this.renderer.gl.canvas as HTMLCanvasElement)
  }

  createCamera() {
    this.camera = new Camera(this.gl)
    this.camera.fov = 45
    this.camera.position.z = 20
  }

  createScene() {
    this.scene = new Transform()
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 50,
      widthSegments: 100,
    })
  }

  createMedias(
    items: { image: string; text: string }[] | undefined,
    bend: number = 1,
    textColor: string,
    borderRadius: number,
    font: string
  ) {
    const defaultItems = [
      {
        image: `https://picsum.photos/seed/1/800/600?grayscale`,
        text: 'Bridge',
      },
      {
        image: `https://picsum.photos/seed/2/800/600?grayscale`,
        text: 'Desk Setup',
      },
      {
        image: `https://picsum.photos/seed/3/800/600?grayscale`,
        text: 'Waterfall',
      },
      {
        image: `https://picsum.photos/seed/4/800/600?grayscale`,
        text: 'Strawberries',
      },
      {
        image: `https://picsum.photos/seed/5/800/600?grayscale`,
        text: 'Deep Diving',
      },
      {
        image: `https://picsum.photos/seed/16/800/600?grayscale`,
        text: 'Train Track',
      },
      {
        image: `https://picsum.photos/seed/17/800/600?grayscale`,
        text: 'Santorini',
      },
      {
        image: `https://picsum.photos/seed/8/800/600?grayscale`,
        text: 'Blurry Lights',
      },
      {
        image: `https://picsum.photos/seed/9/800/600?grayscale`,
        text: 'New York',
      },
      {
        image: `https://picsum.photos/seed/10/800/600?grayscale`,
        text: 'Good Boy',
      },
      {
        image: `https://picsum.photos/seed/21/800/600?grayscale`,
        text: 'Coastline',
      },
      {
        image: `https://picsum.photos/seed/12/800/600?grayscale`,
        text: 'Palm Trees',
      },
    ]
    // Use at most 5 unique items in the gallery
    const sourceItems = items && items.length ? items : defaultItems
    const galleryItems = sourceItems.slice(0, 5)
    this.mediasImages = galleryItems.concat(galleryItems)
    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.image,
        index,
        length: this.mediasImages.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        text: data.text,
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font,
      })
    })
  }

  onResize = () => {
    const width = this.container.clientWidth || window.innerWidth
    const height = this.container.clientHeight || window.innerHeight
    this.screen = { width, height }

    this.renderer.setSize(width, height)

    const aspect = width / height
    this.camera.perspective({ fov: this.camera.fov, aspect, near: 0.1, far: 100 })

    const fovRad = (this.camera.fov * Math.PI) / 180
    const viewHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.z
    const viewWidth = viewHeight * aspect
    this.viewport = { width: viewWidth, height: viewHeight }

    this.medias.forEach((media) => media.onResize({ screen: this.screen, viewport: this.viewport }))
  }

  addEventListeners() {
    this.boundOnResize = this.onResize
    this.boundOnWheel = this.onWheel.bind(this)
    this.boundOnTouchDown = this.onTouchDown.bind(this)
    this.boundOnTouchMove = this.onTouchMove.bind(this)
    this.boundOnTouchUp = this.onTouchUp.bind(this)

    window.addEventListener('resize', this.boundOnResize)
    window.addEventListener('wheel', this.boundOnWheel, { passive: true } as any)
    window.addEventListener('mousedown', this.boundOnTouchDown)
    window.addEventListener('mousemove', this.boundOnTouchMove)
    window.addEventListener('mouseup', this.boundOnTouchUp)
    window.addEventListener('touchstart', this.boundOnTouchDown, { passive: true } as any)
    window.addEventListener('touchmove', this.boundOnTouchMove, { passive: false })
    window.addEventListener('touchend', this.boundOnTouchUp)
  }

  onWheel(e: WheelEvent | Event) {
    const we = e as WheelEvent
    let delta = we.deltaY ?? 0
    // Normalize delta across devices (pixels vs lines vs pages)
    if (we.deltaMode === 1) delta *= 16 // lines -> px
    if (we.deltaMode === 2) delta *= window.innerHeight // pages -> px

    // Apply strong scaling to reduce sensitivity and clamp per event
    const wheelScale = 0.05
    let normalized = delta * wheelScale
    const maxStep = 30 // px-equivalent per event after scaling
    if (normalized > maxStep) normalized = maxStep
    if (normalized < -maxStep) normalized = -maxStep

    this.scroll.target += normalized * this.scrollSpeed
  }

  onTouchDown(e: MouseEvent | TouchEvent) {
    this.isDown = true
    if (isTouchEvent(e) && e.touches.length > 0) {
      this.start = e.touches[0].clientX
    } else {
      this.start = (e as MouseEvent).clientX
    }
    this.scroll.position = this.scroll.current
  }

  onTouchMove(e: MouseEvent | TouchEvent) {
    if (!this.isDown) return
    const x = isTouchEvent(e) && e.touches.length > 0 ? e.touches[0].clientX : (e as MouseEvent).clientX
    const distance = (this.start - x) * 0.6
    this.scroll.target = this.scroll.position + distance
    const anyEvent = e as any
    if (anyEvent && typeof anyEvent.preventDefault === 'function') {
      anyEvent.preventDefault()
    }
  }

  onTouchUp() {
    this.isDown = false
  }

  update = () => {
    this.scroll.target = Math.max(0, this.scroll.target)
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease)

    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left'
    this.medias.forEach((media) => media.update(this.scroll as any, direction as any))

    this.renderer.render({ scene: this.scene, camera: this.camera })
    this.scroll.last = this.scroll.current
    this.raf = requestAnimationFrame(this.update)
  }

  onTouchDownHandler = (e: MouseEvent | TouchEvent) => this.onTouchDown(e)
}

export { App }
