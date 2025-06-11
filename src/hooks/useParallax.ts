
import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  enableOnMobile?: boolean;
  threshold?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const {
    speed = 0.5,
    direction = 'up',
    enableOnMobile = false,
    threshold = 0.1
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!elementRef.current || reducedMotion) return;

    // Check if mobile and if mobile parallax is disabled
    const isMobile = window.innerWidth < 768;
    if (isMobile && !enableOnMobile) return;

    const element = elementRef.current;
    let ticking = false;

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);

    const updateParallax = () => {
      if (!isInView || !element) return;

      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate if element is in viewport
      const isVisible = rect.bottom >= 0 && rect.top <= windowHeight;
      
      if (isVisible) {
        // Calculate parallax offset
        const progress = (scrolled - elementTop + windowHeight) / (windowHeight + elementHeight);
        const yPos = progress * speed * 100 * (direction === 'up' ? -1 : 1);
        
        // Use transform3d for GPU acceleration
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    // Throttled scroll event
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [speed, direction, enableOnMobile, threshold, isInView, reducedMotion]);

  return elementRef;
};
