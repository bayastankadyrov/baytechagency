
import { cn } from "@/lib/utils";

type FooterProps = {
  language: 'en' | 'ru';
};

const Footer = ({ language }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  const translations = {
    en: {
      studioDescription: "Creating exceptional digital experiences that elevate brands and drive results.",
      services: "Services",
      servicesList: ["Brand Identity", "Web Design", "Digital Marketing", "Mobile Design", "Photography"],
      company: "Company",
      companyList: ["About Us", "Careers", "Blog", "Resources", "Contact"],
      legal: "Legal",
      legalList: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
      copyright: `© ${currentYear} Design Studio. All rights reserved.`,
      tagline: "Crafted with precision and care."
    },
    ru: {
      studioDescription: "Создаем исключительный цифровой опыт, который возвышает бренды и приносит результаты.",
      services: "Услуги",
      servicesList: ["Айдентика Бренда", "Веб-Дизайн", "Цифровой Маркетинг", "Мобильный Дизайн", "Фотография"],
      company: "Компания",
      companyList: ["О Нас", "Карьера", "Блог", "Ресурсы", "Контакты"],
      legal: "Юридическая Информация",
      legalList: ["Политика Конфиденциальности", "Условия Обслуживания", "Политика Использования Файлов Cookie"],
      copyright: `© ${currentYear} Дизайн-Студия. Все права защищены.`,
      tagline: "Создано с точностью и заботой."
    }
  };

  const t = translations[language];
  
  return (
    <footer className="py-16 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Design Studio</h3>
            <p className="text-muted-foreground mb-6 max-w-xs">
              {t.studioDescription}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">{t.services}</h3>
            <ul className="space-y-3">
              {t.servicesList.map((service, index) => (
                <li key={index}><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{service}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">{t.company}</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">{t.companyList[0]}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t.companyList[1]}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t.companyList[2]}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t.companyList[3]}</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{t.companyList[4]}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">{t.legal}</h3>
            <ul className="space-y-3">
              {t.legalList.map((item, index) => (
                <li key={index}><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {t.copyright}
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            {t.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
