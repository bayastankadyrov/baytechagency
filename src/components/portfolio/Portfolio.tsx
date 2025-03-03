
import { useState, useEffect } from "react";
import AnimatedText from "../AnimatedText";
import FilterButtons from "./FilterButtons";
import ProjectCard from "./ProjectCard";
import { getPortfolioData, Project } from "./portfolioData";

type PortfolioProps = {
  language: 'en' | 'ru';
};

const Portfolio = ({ language }: PortfolioProps) => {
  const { projects, translations: t } = getPortfolioData(language);
  const filters = t.filters;

  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(false);
    
    setTimeout(() => {
      if (activeFilter === filters[0]) {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.category === activeFilter));
      }
      setAnimated(true);
    }, 300);
  }, [activeFilter, filters, projects]);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section id="portfolio" className="section-container py-20">
      <div className="text-center mb-16">
        <AnimatedText
          text={t.heading}
          tag="h2"
          className="section-heading mb-4"
          animation="slide-up"
        />
        <AnimatedText
          text={t.subheading}
          tag="p"
          className="section-subheading max-w-3xl mx-auto mb-12"
          animation="slide-up"
          delay={300}
        />
        
        <FilterButtons 
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          language={language}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            animated={animated}
            viewDetailsText={t.viewDetails}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
