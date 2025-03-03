
import { cn } from "@/lib/utils";
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
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={cn(
            "portfolio-filter-btn",
            activeFilter === filter ? "active" : "inactive"
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {getDisplayName(filter)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
