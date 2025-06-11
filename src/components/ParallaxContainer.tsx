
import React, { ReactNode } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  enableOnMobile?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  enableOnMobile = false,
  className = '',
  as: Component = 'div'
}) => {
  const parallaxRef = useParallax({
    speed,
    direction,
    enableOnMobile
  });

  return React.createElement(
    Component,
    {
      ref: parallaxRef,
      className: `${className} gpu-accelerated`,
      style: { willChange: 'transform' }
    },
    children
  );
};

export default ParallaxContainer;
