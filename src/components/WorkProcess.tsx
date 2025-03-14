
import AnimatedText from "./AnimatedText";
import { MessageCircle, Lightbulb, PencilRuler, Monitor, Rocket } from "lucide-react";

type WorkProcessProps = {
  language: 'en' | 'ru';
};

const WorkProcess = ({ language }: WorkProcessProps) => {
  const translations = {
    en: {
      title: "Our Work Process",
      subtitle: "How we transform your ideas into reality",
      steps: [
        {
          number: 1,
          title: "Discovery",
          description: "We begin by understanding your business, goals, target audience, and competitive landscape.",
          icon: <MessageCircle className="h-6 w-6 text-white" />
        },
        {
          number: 2,
          title: "Concept Development",
          description: "Our team brainstorms ideas and develops creative concepts based on our research findings.",
          icon: <Lightbulb className="h-6 w-6 text-white" />
        },
        {
          number: 3,
          title: "Design Creation",
          description: "We transform concepts into visual designs, creating prototypes for your approval.",
          icon: <PencilRuler className="h-6 w-6 text-white" />
        },
        {
          number: 4,
          title: "Implementation",
          description: "Once designs are approved, we bring them to life through development and implementation.",
          icon: <Monitor className="h-6 w-6 text-white" />
        },
        {
          number: 5,
          title: "Launch & Support",
          description: "We launch your project and provide ongoing support to ensure everything runs smoothly.",
          icon: <Rocket className="h-6 w-6 text-white" />
        }
      ]
    },
    ru: {
      title: "Наш Рабочий Процесс",
      subtitle: "Как мы превращаем ваши идеи в реальность",
      steps: [
        {
          number: 1,
          title: "Исследование",
          description: "Мы начинаем с понимания вашего бизнеса, целей, целевой аудитории и конкурентной среды.",
          icon: <MessageCircle className="h-6 w-6 text-white" />
        },
        {
          number: 2,
          title: "Разработка Концепции",
          description: "Наша команда генерирует идеи и разрабатывает творческие концепции на основе результатов исследований.",
          icon: <Lightbulb className="h-6 w-6 text-white" />
        },
        {
          number: 3,
          title: "Создание Дизайна",
          description: "Мы превращаем концепции в визуальные дизайны, создавая прототипы для вашего утверждения.",
          icon: <PencilRuler className="h-6 w-6 text-white" />
        },
        {
          number: 4,
          title: "Реализация",
          description: "После утверждения дизайнов мы воплощаем их в жизнь через разработку и внедрение.",
          icon: <Monitor className="h-6 w-6 text-white" />
        },
        {
          number: 5,
          title: "Запуск и Поддержка",
          description: "Мы запускаем ваш проект и обеспечиваем постоянную поддержку, чтобы все работало гладко.",
          icon: <Rocket className="h-6 w-6 text-white" />
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="work-process" className="section-container bg-gradient-to-b from-primary/5 to-background py-20">
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
          className="section-subheading max-w-3xl mx-auto"
          animation="fade"
          delay={200}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Connection line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 md:block hidden"></div>
        
        {t.steps.map((step, index) => (
          <div 
            key={index} 
            className={`fade-in-section flex flex-col md:flex-row gap-6 md:gap-10 mb-12 md:mb-16 items-start md:even:flex-row-reverse ${index === t.steps.length - 1 ? 'mb-0' : ''}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className={`flex-1 md:text-${index % 2 === 0 ? 'right' : 'left'} relative`}>
              <div className="bg-white dark:bg-black/20 border border-primary/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative">
                <h3 className="text-xl font-semibold font-display mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
            
            <div className="flex-shrink-0 flex flex-col items-center z-10">
              <div className="rounded-full bg-primary p-4 shadow-lg">
                {step.icon}
              </div>
              <div className="bg-primary text-white font-bold text-xl rounded-full h-8 w-8 flex items-center justify-center mt-2">
                {step.number}
              </div>
            </div>
            
            <div className="flex-1 hidden md:block"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
