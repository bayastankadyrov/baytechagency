import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import AnimatedText from "../AnimatedText";
import FilterButtons from "./FilterButtons";
import ProjectCard from "./ProjectCard";
import { getPortfolioData, Project } from "./portfolioData";
import AnimatedImage from "../AnimatedImage";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
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
      setSelectedProject(project);
      setDialogOpen(true);
      toast({
        title: language === 'en' ? 'Project Selected' : 'Проект выбран',
        description: project.title,
        variant: "default"
      });
    }
  };
  
  return (
    <section id="portfolio" className="section-container py-20 bg-gradient-to-b from-slate-50/70 to-slate-100/90 dark:from-slate-900/30 dark:to-slate-800/40 rounded-lg shadow-sm">
      <div className="text-center mb-16">
        <AnimatedText 
          text={t.heading} 
          tag="h2" 
          className="section-heading mb-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70" 
          animation="slide-up" 
        />
        <AnimatedText 
          text={t.subheading} 
          tag="p" 
          className="section-subheading max-w-3xl mx-auto mb-12 text-lg text-muted-foreground" 
          animation="slide-up" 
          delay={300} 
        />
        
        <FilterButtons filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter} language={language} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl py-0 my-0 px-0 mx-auto md:mx-[40px] rounded-none bg-transparent">
        {filteredProjects.map((project, index) => (
          <motion.div 
            key={project.id} 
            initial={{
              opacity: 0,
              y: 20
            }} 
            animate={{
              opacity: animated ? 1 : 0,
              y: animated ? 0 : 20
            }} 
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }} 
            className="h-full"
          >
            <ProjectCard 
              project={project} 
              index={index} 
              animated={animated} 
              viewDetailsText={t.viewDetails} 
              onViewDetails={() => handleViewDetails(project.id)} 
            />
          </motion.div>
        ))}
      </div>
      
      {/* Project Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-display font-bold text-primary">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 grid gap-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <AnimatedImage
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    animation="fade"
                  />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    {language === 'en' ? 'Project Description' : 'Описание проекта'}
                  </h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                  
                  {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-lg font-medium mb-2">
                        {language === 'en' ? 'Technologies' : 'Технологии'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
                    >
                      {language === 'en' ? 'Visit Project' : 'Посетить Проект'} <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
