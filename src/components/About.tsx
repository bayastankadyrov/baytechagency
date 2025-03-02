
import AnimatedText from "./AnimatedText";
import AnimatedImage from "./AnimatedImage";

type AboutProps = {
  language: 'en' | 'ru';
};

const About = ({ language }: AboutProps) => {
  const translations = {
    en: {
      title: "About Our Studio",
      paragraph1: "We are a team of passionate designers and developers dedicated to crafting exceptional digital experiences.",
      paragraph2: "Founded in 2015, our studio has grown from a small team of three to a full-service agency working with clients worldwide. We believe in the power of design to transform businesses and create meaningful connections with audiences.",
      paragraph3: "Our approach is collaborative and strategic, focusing on understanding your unique challenges and goals before creating tailored solutions that drive results. We pride ourselves on attention to detail, innovative thinking, and delivering work that exceeds expectations.",
      quote: "We're committed to excellence in every pixel, line of code, and interaction.",
      quoteAttribution: "— Design Studio Team",
      stats: {
        clients: "Happy Clients",
        projects: "Projects",
        awards: "Awards"
      }
    },
    ru: {
      title: "О Нашей Студии",
      paragraph1: "Мы - команда увлеченных дизайнеров и разработчиков, посвятивших себя созданию исключительных цифровых решений.",
      paragraph2: "Основанная в 2015 году, наша студия выросла из небольшой команды из трех человек в полноценное агентство, работающее с клиентами по всему миру. Мы верим в силу дизайна трансформировать бизнес и создавать значимые связи с аудиторией.",
      paragraph3: "Наш подход строится на сотрудничестве и стратегическом мышлении, фокусируясь на понимании ваших уникальных задач и целей перед созданием индивидуальных решений, которые приносят результаты. Мы гордимся вниманием к деталям, инновационным мышлением и предоставлением работ, превосходящих ожидания.",
      quote: "Мы стремимся к совершенству в каждом пикселе, строке кода и взаимодействии.",
      quoteAttribution: "— Команда Дизайн-Студии",
      stats: {
        clients: "Довольных Клиентов",
        projects: "Проектов",
        awards: "Наград"
      }
    }
  };

  const t = translations[language];

  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <AnimatedText
            text={t.title}
            tag="h2"
            className="section-heading mb-6"
            animation="slide-up"
          />
          
          <div className="space-y-6">
            <AnimatedText
              text={t.paragraph1}
              tag="p"
              className="text-lg"
              animation="fade"
              delay={300}
            />
            
            <AnimatedText
              text={t.paragraph2}
              tag="p"
              animation="fade"
              delay={400}
            />
            
            <AnimatedText
              text={t.paragraph3}
              tag="p"
              animation="fade"
              delay={500}
            />
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4 text-center opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: 'forwards' }}>
            <div className="p-4 rounded-lg bg-secondary">
              <div className="text-3xl font-display font-bold">50+</div>
              <div className="text-sm text-muted-foreground mt-1">{t.stats.clients}</div>
            </div>
            <div className="p-4 rounded-lg bg-secondary">
              <div className="text-3xl font-display font-bold">120+</div>
              <div className="text-sm text-muted-foreground mt-1">{t.stats.projects}</div>
            </div>
            <div className="p-4 rounded-lg bg-secondary">
              <div className="text-3xl font-display font-bold">10</div>
              <div className="text-sm text-muted-foreground mt-1">{t.stats.awards}</div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 md:-inset-6 bg-primary/5 rounded-2xl rotate-3 transform transition-all duration-500 group-hover:rotate-1"></div>
            <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Our design team at work"
                className="w-full h-full object-cover"
                animation="scale"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-lg opacity-0 animate-slide-up" style={{ animationDelay: "800ms", animationFillMode: 'forwards' }}>
              <p className="text-sm font-medium">
                {t.quote}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{t.quoteAttribution}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
