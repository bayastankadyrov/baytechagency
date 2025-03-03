
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import AnimatedImage from "../AnimatedImage";

type ProjectCardProps = {
  project: {
    id: number;
    title: string;
    category: string;
    categoryDisplay: string;
    imageUrl: string;
    description: string;
  };
  index: number;
  animated: boolean;
  viewDetailsText: string;
};

const ProjectCard = ({ project, index, animated, viewDetailsText }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "project-card", // Note: group class is applied here in JSX, not in CSS
        animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <AnimatedImage
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          animation="blur"
          delay={index * 100}
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {project.categoryDisplay}
        </span>
        <h3 className="text-xl font-display font-bold mt-2 mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
        <div className="mt-4">
          <a
            href="#"
            className="project-link"
          >
            <span>{viewDetailsText}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
