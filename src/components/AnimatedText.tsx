
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'scale';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text,
  className = "",
  delay = 0,
  tag = 'p',
  animation = 'fade'
}) => {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (ref.current) {
                ref.current.style.opacity = '1';
                ref.current.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
              }
            }, delay);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' 
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade':
        return 'opacity-0 transition-all duration-700 ease-out';
      case 'slide-up':
        return 'opacity-0 translate-y-8 transition-all duration-700 ease-out';
      case 'slide-down':
        return 'opacity-0 -translate-y-8 transition-all duration-700 ease-out';
      case 'scale':
        return 'opacity-0 scale-95 transition-all duration-700 ease-out';
      default:
        return 'opacity-0 transition-all duration-700 ease-out';
    }
  };
  
  const Tag = tag;
  
  return React.createElement(
    Tag,
    {
      ref,
      className: cn(getAnimationClass(), className),
      style: { transitionDelay: `${delay}ms` }
    },
    text
  );
};

export default AnimatedText;
