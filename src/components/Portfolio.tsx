
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "./AnimatedText";
import AnimatedImage from "./AnimatedImage";

type Project = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Minimalist E-commerce Platform",
    category: "web design",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "A clean, modern e-commerce experience focusing on user engagement and conversion."
  },
  {
    id: 2,
    title: "Creative Agency Brand Identity",
    category: "branding",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "A comprehensive brand identity system with logo, typography, and visual guidelines."
  },
  {
    id: 3,
    title: "Financial Dashboard App",
    category: "web app",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "An intuitive dashboard for tracking investments and financial performance."
  },
  {
    id: 4,
    title: "Lifestyle Product Campaign",
    category: "marketing",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    description: "A multi-channel marketing campaign for premium lifestyle products."
  },
  {
    id: 5,
    title: "Wellness Mobile Application",
    category: "mobile app",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "A holistic wellness app designed to improve users' daily habits and health."
  }
];

const filters = ["all", "web design", "branding", "web app", "mobile app", "marketing"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(false);
    
    setTimeout(() => {
      if (activeFilter === "all") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.category === activeFilter));
      }
      setAnimated(true);
    }, 300);
  }, [activeFilter]);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section id="portfolio" className="section-container">
      <div className="text-center mb-16">
        <AnimatedText
          text="Our Portfolio"
          tag="h2"
          className="section-heading"
          animation="slide-up"
        />
        <AnimatedText
          text="Explore our diverse range of projects that showcase our capabilities and creative approach."
          tag="p"
          className="section-subheading"
          animation="slide-up"
          delay={300}
        />
        
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "group rounded-2xl overflow-hidden bg-white dark:bg-black/20 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl",
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
                {project.category}
              </span>
              <h3 className="text-xl font-display font-bold mt-2 mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <a
                  href="#"
                  className="text-sm font-medium text-primary inline-flex items-center transition-all duration-300 hover:translate-x-1"
                >
                  View project details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
