import { useState } from "react";
import AnimatedText from "./AnimatedText";
import AnimatedImage from "./AnimatedImage";
import { ArrowRight, Download } from "lucide-react";

type DesignPacksProps = {
  language: 'en' | 'ru';
};

type Pack = {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
  imageUrl: string;
  downloadLink: string;
};

const DesignPacks = ({ language }: DesignPacksProps) => {
  const translations = {
    en: {
      heading: "Design Packs",
      subheading: "Premium design resources created for professional designers",
      buyNow: "Buy Now",
      viewDetails: "View Details"
    },
    ru: {
      heading: "Дизайн-Паки",
      subheading: "Премиальные дизайн-ресурсы, созданные для профессиональных дизайнеров",
      buyNow: "Купить Сейчас",
      viewDetails: "Посмотреть Детали"
    }
  };

  const t = translations[language];

  const packs: Pack[] = [
    {
      id: 1,
      title: language === 'en' ? "UI Component Library" : "Библиотека UI-компонентов",
      price: language === 'en' ? "$89" : "89$",
      description: language === 'en' 
        ? "A comprehensive library of premium UI components for modern web design projects."
        : "Комплексная библиотека премиальных UI-компонентов для современных веб-проектов.",
      features: language === 'en' 
        ? ["500+ UI components", "Figma & Sketch files", "Responsive layouts", "Dark mode included"] 
        : ["500+ UI-компонентов", "Файлы Figma и Sketch", "Адаптивные макеты", "Тёмная тема включена"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      downloadLink: "#design-pack-1"
    },
    {
      id: 2,
      title: language === 'en' ? "Brand Identity Kit" : "Набор для Фирменного Стиля",
      price: language === 'en' ? "$129" : "129$",
      description: language === 'en'
        ? "Everything you need to create cohesive brand identities for your clients."
        : "Всё необходимое для создания целостного фирменного стиля для ваших клиентов.",
      features: language === 'en' 
        ? ["Logo templates", "Business stationery", "Social media templates", "Brand guidelines template"] 
        : ["Шаблоны логотипов", "Деловая канцелярия", "Шаблоны для соцсетей", "Шаблон руководства по бренду"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      downloadLink: "#design-pack-2"
    },
    {
      id: 3,
      title: language === 'en' ? "Digital Marketing Assets" : "Ресурсы для Цифрового Маркетинга",
      price: language === 'en' ? "$79" : "79$",
      description: language === 'en'
        ? "A complete set of templates for successful digital marketing campaigns."
        : "Полный набор шаблонов для успешных кампаний цифрового маркетинга.",
      features: language === 'en' 
        ? ["Social media posts", "Email templates", "Banner ads", "Landing page templates"] 
        : ["Посты для соцсетей", "Шаблоны электронной почты", "Баннерная реклама", "Шаблоны целевых страниц"],
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      downloadLink: "#design-pack-3"
    }
  ];

  const [hoveredPack, setHoveredPack] = useState<number | null>(null);

  return (
    <section id="design-packs" className="section-container bg-secondary/30">
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
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packs.map((pack, index) => (
          <div
            key={pack.id}
            className="bg-white dark:bg-black/20 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            onMouseEnter={() => setHoveredPack(pack.id)}
            onMouseLeave={() => setHoveredPack(null)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <AnimatedImage
                src={pack.imageUrl}
                alt={pack.title}
                className="w-full h-full object-cover"
                animation="blur"
                delay={index * 100}
                style={{ transform: hoveredPack === pack.id ? 'scale(1.05)' : 'scale(1)' }}
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground py-1 px-3 rounded-full font-medium">
                {pack.price}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-bold mt-2 mb-3">{pack.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{pack.description}</p>
              
              <ul className="space-y-2 mb-6">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col space-y-3">
                <a
                  href={pack.downloadLink}
                  className="flex justify-center items-center gap-2 bg-primary text-primary-foreground py-2.5 px-4 rounded-lg font-medium transition-colors hover:bg-primary/90"
                >
                  <Download className="h-4 w-4" />
                  <span>{t.buyNow}</span>
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-primary inline-flex items-center justify-center gap-1 transition-all duration-300 hover:gap-2"
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

export default DesignPacks;
