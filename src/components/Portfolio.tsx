
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "./AnimatedText";
import AnimatedImage from "./AnimatedImage";
import { ArrowRight } from "lucide-react";

type PortfolioProps = {
  language: 'en' | 'ru';
};

type Project = {
  id: number;
  title: string;
  category: string;
  categoryDisplay: string;
  imageUrl: string;
  description: string;
};

const Portfolio = ({ language }: PortfolioProps) => {
  const translations = {
    en: {
      heading: "Our Portfolio",
      subheading: "Explore our diverse range of projects that showcase our capabilities and creative approach.",
      viewDetails: "View project details",
      filters: ["all", "web design", "branding", "web app", "mobile app", "marketing"]
    },
    ru: {
      heading: "Наше Портфолио",
      subheading: "Ознакомьтесь с нашим разнообразным спектром проектов, демонстрирующих наши возможности и творческий подход.",
      viewDetails: "Посмотреть детали проекта",
      filters: ["все", "веб-дизайн", "брендинг", "веб-приложение", "мобильное приложение", "маркетинг"]
    }
  };

  const t = translations[language];

  const projects: Project[] = [
    {
      id: 1,
      title: language === 'en' ? "Minimalist E-commerce Platform" : "Минималистичная платформа электронной коммерции",
      category: language === 'en' ? "web design" : "веб-дизайн",
      categoryDisplay: language === 'en' ? "WEB DESIGN" : "ВЕБ-ДИЗАЙН",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: language === 'en' 
        ? "A clean, modern e-commerce experience focusing on user engagement and conversion."
        : "Чистый, современный опыт электронной коммерции, ориентированный на взаимодействие с пользователем и конверсию."
    },
    {
      id: 2,
      title: language === 'en' ? "Creative Agency Brand Identity" : "Фирменный стиль креативного агентства",
      category: language === 'en' ? "branding" : "брендинг",
      categoryDisplay: language === 'en' ? "BRANDING" : "БРЕНДИНГ",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: language === 'en'
        ? "A comprehensive brand identity system with logo, typography, and visual guidelines."
        : "Комплексная система идентичности бренда с логотипом, типографикой и визуальными рекомендациями."
    },
    {
      id: 3,
      title: language === 'en' ? "Financial Dashboard App" : "Приложение финансовой панели управления",
      category: language === 'en' ? "web app" : "веб-приложение",
      categoryDisplay: language === 'en' ? "WEB APP" : "ВЕБ-ПРИЛОЖЕНИЕ",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: language === 'en'
        ? "An intuitive dashboard for tracking investments and financial performance."
        : "Интуитивно понятная панель управления для отслеживания инвестиций и финансовых показателей."
    },
    {
      id: 4,
      title: language === 'en' ? "Lifestyle Product Campaign" : "Кампания по продукту для образа жизни",
      category: language === 'en' ? "marketing" : "маркетинг",
      categoryDisplay: language === 'en' ? "MARKETING" : "МАРКЕТИНГ",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      description: language === 'en'
        ? "A multi-channel marketing campaign for premium lifestyle products."
        : "Многоканальная маркетинговая кампания для премиальных продуктов для образа жизни."
    },
    {
      id: 5,
      title: language === 'en' ? "Wellness Mobile Application" : "Мобильное приложение для здоровья",
      category: language === 'en' ? "mobile app" : "мобильное приложение",
      categoryDisplay: language === 'en' ? "MOBILE APP" : "МОБИЛЬНОЕ ПРИЛОЖЕНИЕ",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: language === 'en'
        ? "A holistic wellness app designed to improve users' daily habits and health."
        : "Целостное приложение для здоровья, созданное для улучшения ежедневных привычек и здоровья пользователей."
    }
  ];

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

  const getDisplayName = (filterName: string) => {
    switch(filterName) {
      case "all":
        return "All";
      case "web design":
        return "Web Design";
      case "branding":
        return "Branding";
      case "web app":
        return "Web App";
      case "mobile app":
        return "Mobile App";
      case "marketing":
        return "Marketing";
      case "все":
        return "Все";
      case "веб-дизайн":
        return "Веб-Дизайн";
      case "брендинг":
        return "Брендинг";
      case "веб-приложение":
        return "Веб-Приложение";
      case "мобильное приложение":
        return "Мобильное Приложение";
      case "маркетинг":
        return "Маркетинг";
      default:
        return filterName;
    }
  };

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
        
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "portfolio-filter-btn",
                activeFilter === filter ? "active" : "inactive"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {getDisplayName(filter)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "project-card",
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
                  <span>{t.viewDetails}</span>
                  <ArrowRight className="h-4 w-4" />
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
