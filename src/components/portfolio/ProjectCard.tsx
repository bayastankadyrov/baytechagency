
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
  onViewDetails: () => void;
};

const ProjectCard = ({ project, index, animated, viewDetailsText, onViewDetails }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-black/20 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl group">
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
          <button
            onClick={onViewDetails}
            className="text-sm font-medium text-primary inline-flex items-center gap-1 transition-all duration-300 hover:gap-2"
          >
            <span>{viewDetailsText}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
