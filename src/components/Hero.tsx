
import { ArrowDown } from "lucide-react";
import AnimatedText from "./AnimatedText";

type HeroProps = {
  language: 'en' | 'ru';
};

const Hero = ({ language }: HeroProps) => {
  const translations = {
    en: {
      tagline: "Award-winning design studio",
      heading: "We craft beautiful digital experiences that elevate brands",
      subheading: "Our team of designers and developers create stunning websites, apps, and digital products that drive results.",
      getInTouch: "Get in touch",
      viewWork: "View our work",
      scroll: "Scroll"
    },
    ru: {
      tagline: "Отмеченная наградами дизайн-студия",
      heading: "Мы создаем красивый цифровой опыт, который возвышает бренды",
      subheading: "Наша команда дизайнеров и разработчиков создает потрясающие веб-сайты, приложения и цифровые продукты, которые приносят результаты.",
      getInTouch: "Связаться с нами",
      viewWork: "Посмотреть наши работы",
      scroll: "Прокрутить"
    }
  };

  const t = translations[language];

  const handleScrollDown = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium">
            <AnimatedText 
              text={t.tagline} 
              tag="span"
              animation="fade"
              delay={300}
            />
          </div>
          
          <AnimatedText
            text={t.heading}
            tag="h1"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight mb-6 text-edge-cap"
            animation="scale"
            delay={600}
          />
          
          <AnimatedText
            text={t.subheading}
            tag="p"
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
            animation="slide-up"
            delay={900}
          />
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "1200ms" }}>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              {t.getInTouch}
            </a>
            <a 
              href="#portfolio" 
              className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all duration-300 hover:bg-secondary/80"
            >
              {t.viewWork}
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse z-10"
        aria-label="Scroll down"
      >
        <span className="text-sm font-medium mb-2 text-muted-foreground">{t.scroll}</span>
        <ArrowDown className="h-4 w-4" />
      </button>
    </section>
  );
};

export default Hero;
