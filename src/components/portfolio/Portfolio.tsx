import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import AnimatedText from "../AnimatedText";
import FilterButtons from "./FilterButtons";
import ProjectCard from "./ProjectCard";
import { getPortfolioData, Project } from "./portfolioData";
type PortfolioProps = {
  language: 'en' | 'ru';
};
const Portfolio = ({
  language
}: PortfolioProps) => {
  const {
    projects,
    translations: t
  } = getPortfolioData(language);
  const filters = t.filters;
  const {
    toast
  } = useToast();
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
  const handleViewDetails = (projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      toast({
        title: language === 'en' ? 'Project Selected' : 'Проект выбран',
        description: project.title,
        variant: "default"
      });
    }
  };
  return <section id="portfolio" className="section-container py-20 bg-gradient-to-b from-slate-50/70 to-slate-100/90 dark:from-slate-900/30 dark:to-slate-800/40 rounded-lg shadow-sm">
      <div className="text-center mb-16">
        <AnimatedText text={t.heading} tag="h2" className="section-heading mb-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70" animation="slide-up" />
        <AnimatedText text={t.subheading} tag="p" className="section-subheading max-w-3xl mx-auto mb-12 text-lg text-muted-foreground" animation="slide-up" delay={300} />
        
        <FilterButtons filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter} language={language} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl py-0 my-0 px-0 mx-[40px] rounded-none bg-transparent">
        {filteredProjects.map((project, index) => <motion.div key={project.id} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: animated ? 1 : 0,
        y: animated ? 0 : 20
      }} transition={{
        duration: 0.5,
        delay: index * 0.1
      }} className="h-full">
            <ProjectCard project={project} index={index} animated={animated} viewDetailsText={t.viewDetails} onViewDetails={() => handleViewDetails(project.id)} />
          </motion.div>)}
      </div>
    </section>;
};
export default Portfolio;