
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";

type FilterButtonsProps = {
  filters: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  language: 'en' | 'ru';
};

const FilterButtons = ({ 
  filters, 
  activeFilter, 
  setActiveFilter,
  language
}: FilterButtonsProps) => {

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
    <div className="flex flex-wrap justify-center gap-3 mt-8">
      {filters.map((filter, index) => (
        <motion.button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
            activeFilter === filter 
              ? "bg-primary text-primary-foreground" 
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {getDisplayName(filter)}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterButtons;
