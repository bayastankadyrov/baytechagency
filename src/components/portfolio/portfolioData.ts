
export type Project = {
  id: number;
  title: string;
  category: string;
  categoryDisplay: string;
  imageUrl: string;
  image: string; // Add this for compatibility
  description: string;
  technologies?: string[]; // Add this field as optional
  link?: string; // Add this field as optional
};

export const getPortfolioData = (language: 'en' | 'ru'): {
  projects: Project[];
  translations: {
    heading: string;
    subheading: string;
    viewDetails: string;
    filters: string[];
  };
} => {
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

  const projects: Project[] = [
    {
      id: 1,
      title: language === 'en' ? "Minimalist E-commerce Platform" : "Минималистичная платформа электронной коммерции",
      category: language === 'en' ? "web design" : "веб-дизайн",
      categoryDisplay: language === 'en' ? "WEB DESIGN" : "ВЕБ-ДИЗАЙН",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", // Add this for compatibility
      description: language === 'en' 
        ? "A clean, modern e-commerce experience focusing on user engagement and conversion."
        : "Чистый, современный опыт электронной коммерции, ориентированный на взаимодействие с пользователем и конверсию.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      link: "https://example.com/ecommerce"
    },
    {
      id: 2,
      title: language === 'en' ? "Creative Agency Brand Identity" : "Фирменный стиль креативного агентства",
      category: language === 'en' ? "branding" : "брендинг",
      categoryDisplay: language === 'en' ? "BRANDING" : "БРЕНДИНГ",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", // Add this for compatibility
      description: language === 'en'
        ? "A comprehensive brand identity system with logo, typography, and visual guidelines."
        : "Комплексная система идентичности бренда с логотипом, типографикой и визуальными рекомендациями.",
      technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
      link: "https://example.com/branding"
    },
    {
      id: 3,
      title: language === 'en' ? "Financial Dashboard App" : "Приложение финансовой панели управления",
      category: language === 'en' ? "web app" : "веб-приложение",
      categoryDisplay: language === 'en' ? "WEB APP" : "ВЕБ-ПРИЛОЖЕНИЕ",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", // Add this for compatibility
      description: language === 'en'
        ? "An intuitive dashboard for tracking investments and financial performance."
        : "Интуитивно понятная панель управления для отслеживания инвестиций и финансовых показателей.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      link: "https://example.com/dashboard"
    },
    {
      id: 4,
      title: language === 'en' ? "Lifestyle Product Campaign" : "Кампания по продукту для образа жизни",
      category: language === 'en' ? "marketing" : "маркетинг",
      categoryDisplay: language === 'en' ? "MARKETING" : "МАРКЕТИНГ",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // Add this for compatibility
      description: language === 'en'
        ? "A multi-channel marketing campaign for premium lifestyle products."
        : "Многоканальная маркетинговая кампания для премиальных продуктов для образа жизни.",
      technologies: ["Social Media", "Email Marketing", "Content Strategy", "Analytics"],
      link: "https://example.com/marketing"
    },
    {
      id: 5,
      title: language === 'en' ? "Wellness Mobile Application" : "Мобильное приложение для здоровья",
      category: language === 'en' ? "mobile app" : "мобильное приложение",
      categoryDisplay: language === 'en' ? "MOBILE APP" : "МОБИЛЬНОЕ ПРИЛОЖЕНИЕ",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", // Add this for compatibility
      description: language === 'en'
        ? "A holistic wellness app designed to improve users' daily habits and health."
        : "Целостное приложение для здоровья, созданное для улучшения ежедневных привычек и здоровья пользователей.",
      technologies: ["React Native", "Firebase", "Redux", "Health APIs"],
      link: "https://example.com/wellness"
    }
  ];

  return {
    projects,
    translations: translations[language]
  };
};
