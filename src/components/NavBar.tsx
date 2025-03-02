
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";

type NavBarProps = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  language: 'en' | 'ru';
  setLanguage: (language: 'en' | 'ru') => void;
};

const NavBar = ({ theme, setTheme, language, setLanguage }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleLanguage = () => setLanguage(language === 'en' ? 'ru' : 'en');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Translations
  const translations = {
    en: {
      portfolio: "Portfolio",
      services: "Services",
      about: "About",
      contact: "Contact",
      studioName: "Design Studio"
    },
    ru: {
      portfolio: "Портфолио",
      services: "Услуги",
      about: "О нас",
      contact: "Контакты",
      studioName: "Дизайн Студия"
    }
  };

  const t = translations[language];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="relative z-10">
          <span className="text-xl font-display font-bold tracking-tight">{t.studioName}</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#portfolio" className="nav-link">{t.portfolio}</a>
          <a href="#services" className="nav-link">{t.services}</a>
          <a href="#about" className="nav-link">{t.about}</a>
          <a href="#contact" className="nav-link">{t.contact}</a>
          
          <div className="flex items-center space-x-3 ml-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="sr-only">Toggle language</span>
              <span className="ml-1 text-xs font-medium">{language.toUpperCase()}</span>
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </nav>
        
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-secondary/50 text-foreground"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary/50 text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="relative z-10 p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-background bg-opacity-100 flex flex-col items-center justify-center space-y-8 md:hidden transition-all duration-300 ease-in-out",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <a 
            href="#portfolio" 
            className="text-xl font-medium"
            onClick={toggleMenu}
          >
            {t.portfolio}
          </a>
          <a 
            href="#services" 
            className="text-xl font-medium"
            onClick={toggleMenu}
          >
            {t.services}
          </a>
          <a 
            href="#about" 
            className="text-xl font-medium"
            onClick={toggleMenu}
          >
            {t.about}
          </a>
          <a 
            href="#contact" 
            className="text-xl font-medium"
            onClick={toggleMenu}
          >
            {t.contact}
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
