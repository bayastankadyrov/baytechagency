
import AnimatedText from "./AnimatedText";
import { Check } from "lucide-react";

type WhyChooseUsProps = {
  language: 'en' | 'ru';
};

const WhyChooseUs = ({ language }: WhyChooseUsProps) => {
  const translations = {
    en: {
      title: "Why Choose Us",
      subtitle: "What sets our design studio apart from the competition",
      reasons: [
        {
          title: "Exceptional Quality",
          description: "Our design team consists of award-winning professionals who deliver nothing but excellence."
        },
        {
          title: "Timely Delivery",
          description: "We understand the importance of deadlines and always deliver projects on or before the agreed date."
        },
        {
          title: "Innovative Solutions",
          description: "We stay ahead of design trends and technology to provide cutting-edge solutions."
        },
        {
          title: "Client-Centric Approach",
          description: "Your vision and goals are our priority. We listen, adapt, and deliver results that exceed expectations."
        },
        {
          title: "Transparent Process",
          description: "We maintain clear communication throughout the project, so you're never left wondering about progress."
        },
        {
          title: "Post-Launch Support",
          description: "Our relationship doesn't end after launch. We provide ongoing support to ensure your long-term success."
        }
      ]
    },
    ru: {
      title: "Почему Выбирают Нас",
      subtitle: "Что отличает нашу дизайн-студию от конкурентов",
      reasons: [
        {
          title: "Исключительное Качество",
          description: "Наша команда дизайнеров состоит из признанных профессионалов, которые обеспечивают только превосходный результат."
        },
        {
          title: "Своевременная Доставка",
          description: "Мы понимаем важность сроков и всегда доставляем проекты вовремя или раньше согласованной даты."
        },
        {
          title: "Инновационные Решения",
          description: "Мы опережаем тенденции дизайна и технологий, чтобы предоставлять передовые решения."
        },
        {
          title: "Клиентоориентированный Подход",
          description: "Ваше видение и цели - наш приоритет. Мы слушаем, адаптируемся и превосходим ожидания."
        },
        {
          title: "Прозрачный Процесс",
          description: "Мы поддерживаем четкую коммуникацию на протяжении всего проекта, чтобы вы всегда знали о ходе работы."
        },
        {
          title: "Поддержка После Запуска",
          description: "Наши отношения не заканчиваются после запуска. Мы обеспечиваем постоянную поддержку для вашего долгосрочного успеха."
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="why-choose-us" className="section-container bg-primary/5 dark:bg-primary/10">
      <div className="text-center mb-16">
        <AnimatedText
          text={t.title}
          tag="h2"
          className="section-heading dark:text-white"
          animation="slide-up"
        />
        <AnimatedText
          text={t.subtitle}
          tag="p"
          className="section-subheading"
          animation="fade"
          delay={200}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {t.reasons.map((reason, index) => (
          <div 
            key={index} 
            className="fade-in-section bg-white dark:bg-black/10 border border-primary/10 dark:border-primary/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
          >
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
                  <Check className="h-5 w-5 text-primary dark:text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold font-display mb-2 dark:text-white">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
