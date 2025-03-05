
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaymentForm, OrderForm } from '@/components/payments';
import AnimatedText from '@/components/AnimatedText';

type PaymentSectionProps = {
  language: 'en' | 'ru';
};

const PaymentSection = ({ language }: PaymentSectionProps) => {
  const [activeTab, setActiveTab] = useState("order");
  
  const translations = {
    en: {
      heading: "Payment & Ordering",
      subheading: "Place an order or make a payment for your design services",
      orderTab: "Order a Project",
      paymentTab: "Make a Payment",
      designPackTitle: "Premium Design Pack",
      designPackPrice: 199.99
    },
    ru: {
      heading: "Оплата и Заказ",
      subheading: "Разместите заказ или произведите оплату за дизайн-услуги",
      orderTab: "Заказать проект",
      paymentTab: "Произвести оплату",
      designPackTitle: "Премиум дизайн-пакет",
      designPackPrice: 199.99
    }
  };
  
  const t = translations[language];

  return (
    <section id="payment" className="section-container bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background">
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
          className="section-subheading max-w-3xl mx-auto"
          animation="slide-up"
          delay={300}
        />
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Tabs 
          defaultValue="order" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="mx-auto"
        >
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="order">{t.orderTab}</TabsTrigger>
            <TabsTrigger value="payment">{t.paymentTab}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="order" className="animate-fade-in">
            <OrderForm language={language} />
          </TabsContent>
          
          <TabsContent value="payment" className="animate-fade-in">
            <PaymentForm 
              language={language} 
              productId="design-pack-premium"
              productName={t.designPackTitle}
              amount={t.designPackPrice}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PaymentSection;
