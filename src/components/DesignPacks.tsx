
import { useState } from "react";
import AnimatedText from "./AnimatedText";
import AnimatedImage from "./AnimatedImage";
import { ArrowRight, Download, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

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
      viewDetails: "View Details",
      buyTitle: "Complete Your Purchase",
      buyDescription: "Fill in your details to purchase this design pack",
      detailsTitle: "Pack Details",
      name: "Full Name",
      email: "Email Address",
      cardNumber: "Card Number",
      expiryDate: "Expiry Date",
      cvv: "CVV",
      submit: "Complete Purchase",
      cancel: "Cancel",
      close: "Close",
      included: "What's Included",
      downloadInfo: "After purchasing, you'll receive a download link via email"
    },
    ru: {
      heading: "Дизайн-Паки",
      subheading: "Премиальные дизайн-ресурсы, созданные для профессиональных дизайнеров",
      buyNow: "Купить Сейчас",
      viewDetails: "Посмотреть Детали",
      buyTitle: "Завершите Покупку",
      buyDescription: "Заполните ваши данные для покупки этого дизайн-пака",
      detailsTitle: "Детали Пакета",
      name: "Полное Имя",
      email: "Адрес Электронной Почты",
      cardNumber: "Номер Карты",
      expiryDate: "Срок Действия",
      cvv: "CVV",
      submit: "Завершить Покупку",
      cancel: "Отмена",
      close: "Закрыть",
      included: "Что Включено",
      downloadInfo: "После покупки вы получите ссылку для скачивания по электронной почте"
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
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);

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
            className="bg-white dark:bg-black/20 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="flex justify-center items-center gap-2 bg-primary text-primary-foreground py-2.5 px-4 rounded-lg font-medium transition-colors hover:bg-primary/90 w-full"
                      onClick={() => setSelectedPack(pack)}
                    >
                      <Download className="h-4 w-4" />
                      <span>{t.buyNow}</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{t.buyTitle}</DialogTitle>
                      <DialogDescription>{t.buyDescription}</DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">{t.name}</label>
                        <input
                          id="name"
                          type="text"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">{t.email}</label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="card" className="text-sm font-medium">{t.cardNumber}</label>
                        <input
                          id="card"
                          type="text"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="expiry" className="text-sm font-medium">{t.expiryDate}</label>
                          <input
                            id="expiry"
                            type="text"
                            placeholder="MM/YY"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="cvv" className="text-sm font-medium">{t.cvv}</label>
                          <input
                            id="cvv"
                            type="text"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          />
                        </div>
                      </div>
                      <div className="mt-6 flex justify-end gap-3">
                        <DialogClose asChild>
                          <Button type="button" variant="outline">{t.cancel}</Button>
                        </DialogClose>
                        <Button type="submit">{t.submit}</Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => setSelectedPack(pack)}
                      className="text-sm font-medium text-primary inline-flex items-center justify-center gap-1 transition-all duration-300 hover:gap-2"
                    >
                      <span>{t.viewDetails}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px]">
                    <DialogHeader>
                      <DialogTitle className="text-xl">{selectedPack?.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img 
                          src={selectedPack?.imageUrl} 
                          alt={selectedPack?.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">{t.included}</h3>
                        <span className="text-xl font-bold text-primary">{selectedPack?.price}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{selectedPack?.description}</p>
                      <ul className="space-y-2 mb-6">
                        {selectedPack?.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-muted-foreground italic mb-6">{t.downloadInfo}</p>
                      <div className="flex justify-end gap-3">
                        <DialogClose asChild>
                          <Button variant="outline">{t.close}</Button>
                        </DialogClose>
                        <Dialog>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <DialogTrigger asChild>
                                  <Button>
                                    <Download className="h-4 w-4 mr-2" />
                                    {t.buyNow}
                                  </Button>
                                </DialogTrigger>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{t.buyNow}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>{t.buyTitle}</DialogTitle>
                              <DialogDescription>{t.buyDescription}</DialogDescription>
                            </DialogHeader>
                            <form className="space-y-4 mt-4">
                              <div className="space-y-2">
                                <label htmlFor="name2" className="text-sm font-medium">{t.name}</label>
                                <input
                                  id="name2"
                                  type="text"
                                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="email2" className="text-sm font-medium">{t.email}</label>
                                <input
                                  id="email2"
                                  type="email"
                                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="card2" className="text-sm font-medium">{t.cardNumber}</label>
                                <input
                                  id="card2"
                                  type="text"
                                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <label htmlFor="expiry2" className="text-sm font-medium">{t.expiryDate}</label>
                                  <input
                                    id="expiry2"
                                    type="text"
                                    placeholder="MM/YY"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label htmlFor="cvv2" className="text-sm font-medium">{t.cvv}</label>
                                  <input
                                    id="cvv2"
                                    type="text"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                  />
                                </div>
                              </div>
                              <div className="mt-6 flex justify-end gap-3">
                                <DialogClose asChild>
                                  <Button type="button" variant="outline">{t.cancel}</Button>
                                </DialogClose>
                                <Button type="submit">{t.submit}</Button>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignPacks;
