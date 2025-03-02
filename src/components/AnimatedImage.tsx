
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  delay?: number;
  animation?: 'fade' | 'scale' | 'slide-up' | 'blur';
  priority?: boolean;
}

const AnimatedImage = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  delay = 0,
  animation = 'blur',
  priority = false
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' 
      }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isIntersecting && imgRef.current) {
      if (imgRef.current.complete) {
        setTimeout(() => setIsLoaded(true), delay);
      } else {
        imgRef.current.onload = () => {
          setTimeout(() => setIsLoaded(true), delay);
        };
      }
    }
  }, [isIntersecting, delay]);
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade':
        return 'opacity-0 transition-all duration-700 ease-out';
      case 'scale':
        return 'opacity-0 scale-95 transition-all duration-700 ease-out';
      case 'slide-up':
        return 'opacity-0 translate-y-8 transition-all duration-700 ease-out';
      case 'blur':
        return 'opacity-0 filter blur-xl transition-all duration-700 ease-out';
      default:
        return 'opacity-0 transition-all duration-700 ease-out';
    }
  };
  
  return (
    <div className={cn("overflow-hidden", containerClassName)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          getAnimationClass(),
          isLoaded && "opacity-100 scale-100 translate-y-0 blur-0",
          className
        )}
      />
    </div>
  );
};

export default AnimatedImage;
