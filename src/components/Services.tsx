
import { Camera, Globe, Layout, Paintbrush, Smartphone, Users } from "lucide-react";
import AnimatedText from "./AnimatedText";

type ServicesProps = {
  language: 'en' | 'ru';
};

const Services = ({ language }: ServicesProps) => {
  const translations = {
    en: {
      title: "Our Services",
      subtitle: "We offer a comprehensive range of design services to help your brand stand out and connect with your audience.",
      services: [
        {
          icon: <Paintbrush className="h-6 w-6" />,
          title: "Brand Identity",
          description: "We create distinctive brand identities that resonate with your audience and stand out in the market."
        },
        {
          icon: <Layout className="h-6 w-6" />,
          title: "Web Design",
          description: "Our web designs blend aesthetics with functionality to deliver engaging and intuitive user experiences."
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Digital Marketing",
          description: "Strategic marketing solutions that amplify your brand's reach and connect with your target audience."
        },
        {
          icon: <Smartphone className="h-6 w-6" />,
          title: "Mobile Design",
          description: "User-centric mobile interfaces that provide seamless experiences across all devices and platforms."
        },
        {
          icon: <Camera className="h-6 w-6" />,
          title: "Photography",
          description: "Professional photography services that capture your brand's essence and elevate your visual content."
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "User Research",
          description: "In-depth user research to inform design decisions and create products that truly meet user needs."
        }
      ]
    },
    ru: {
      title: "Наши Услуги",
      subtitle: "Мы предлагаем комплексный спектр дизайнерских услуг, чтобы помочь вашему бренду выделиться и установить связь с вашей аудиторией.",
      services: [
        {
          icon: <Paintbrush className="h-6 w-6" />,
          title: "Айдентика Бренда",
          description: "Мы создаем отличительные идентичности бренда, которые находят отклик у вашей аудитории и выделяются на рынке."
        },
        {
          icon: <Layout className="h-6 w-6" />,
          title: "Веб-Дизайн",
          description: "Наши веб-дизайны сочетают эстетику с функциональностью для создания привлекательного и интуитивно понятного пользовательского опыта."
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Цифровой Маркетинг",
          description: "Стратегические маркетинговые решения, усиливающие охват вашего бренда и устанавливающие связь с целевой аудиторией."
        },
        {
          icon: <Smartphone className="h-6 w-6" />,
          title: "Мобильный Дизайн",
          description: "Ориентированные на пользователя мобильные интерфейсы, обеспечивающие плавный опыт на всех устройствах и платформах."
        },
        {
          icon: <Camera className="h-6 w-6" />,
          title: "Фотография",
          description: "Профессиональные фотографические услуги, которые запечатлевают суть вашего бренда и улучшают ваш визуальный контент."
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Пользовательские Исследования",
          description: "Глубокие исследования пользователей для информирования решений по дизайну и создания продуктов, которые действительно отвечают потребностям пользователей."
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="services" className="section-container bg-secondary/50">
      <div className="text-center mb-16">
        <AnimatedText
          text={t.title}
          tag="h2"
          className="section-heading"
          animation="slide-up"
        />
        <AnimatedText
          text={t.subtitle}
          tag="p"
          className="section-subheading"
          animation="slide-up"
          delay={300}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {t.services.map((service, index) => (
          <div 
            key={service.title}
            className="service-card opacity-0 animate-fade-in"
            style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
          >
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
              {service.icon}
            </div>
            <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
