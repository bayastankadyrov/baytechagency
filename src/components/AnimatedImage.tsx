import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  animation?: "fade" | "blur" | "slide-up";
  delay?: number;
  style?: React.CSSProperties;  // Add this line
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className,
  animation = "fade",
  delay = 0,
  style,
}) => {
  let animationClass = "";

  switch (animation) {
    case "fade":
      animationClass = "animate-fade-in";
      break;
    case "blur":
      animationClass = "animate-blur-in";
      break;
    case "slide-up":
      animationClass = "animate-slide-up";
      break;
    default:
      animationClass = "animate-fade-in";
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn(className, animationClass)}
      style={{ ...style, animationDelay: `${delay}ms` }}
    />
  );
};

export default AnimatedImage;
