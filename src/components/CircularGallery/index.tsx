'use client';

import { useEffect, useRef } from 'react';
import type { FC, CSSProperties } from 'react';
import { App } from '../CircularGallery';

interface CircularGalleryProps {
  items?: { image: string; text: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
  className?: string;
  style?: CSSProperties;
}

const CircularGallery: FC<CircularGalleryProps> = ({
  items,
  bend = 1,
  textColor = '#ffffff',
  borderRadius = 0,
  font = 'bold 30px Figtree',
  scrollSpeed = 0.6,
  scrollEase = 0.05,
  className = '',
  style = { width: '100%', height: '100vh' },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<App | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Initialize the WebGL app
      appRef.current = new App(containerRef.current, {
        items,
        bend,
        textColor,
        borderRadius,
        font,
        scrollSpeed,
        scrollEase,
      });

      // Cleanup function
      return () => {
        if (appRef.current) {
          // Clean up event listeners
          window.removeEventListener('resize', appRef.current.boundOnResize);
          window.removeEventListener('wheel', appRef.current.boundOnWheel);
          window.removeEventListener('mousedown', appRef.current.boundOnTouchDown);
          window.removeEventListener('mousemove', appRef.current.boundOnTouchMove);
          window.removeEventListener('mouseup', appRef.current.boundOnTouchUp);
          window.removeEventListener('touchstart', appRef.current.boundOnTouchDown);
          window.removeEventListener('touchmove', appRef.current.boundOnTouchMove as any);
          window.removeEventListener('touchend', appRef.current.boundOnTouchUp);

          // Stop RAF loop
          if (appRef.current.raf) cancelAnimationFrame(appRef.current.raf);

          // Remove the canvas element if it exists
          const canvas = containerRef.current?.querySelector('canvas');
          if (canvas) {
            containerRef.current?.removeChild(canvas);
          }
        }
      };
    }
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);

  return <div ref={containerRef} className={`circular-gallery ${className}`} style={style} />;
};

export default CircularGallery;
