
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Send, CheckCircle } from "lucide-react";

type OrderFormProps = {
  language: 'en' | 'ru';
};

const OrderForm = ({ language }: OrderFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
    budget: ''
  });

  const translations = {
    en: {
      title: "Order a Project",
      description: "Tell us about your project and we'll get back to you with a quote",
      name: "Your Name",
      email: "Email",
      company: "Company (optional)",
      budget: "Budget ($)",
      message: "Project Description",
      submit: "Submit Request",
      processing: "Processing...",
      success: "Request Submitted!",
      errorTitle: "Submission Error",
      errorMessage: "There was an error submitting your request. Please try again.",
      successTitle: "Request Received",
      successMessage: "Thank you! We've received your project request and will contact you soon."
    },
    ru: {
      title: "Заказать проект",
      description: "Расскажите нам о вашем проекте, и мы свяжемся с вами с предложением",
      name: "Ваше имя",
      email: "Электронная почта",
      company: "Компания (опционально)",
      budget: "Бюджет ($)",
      message: "Описание проекта",
      submit: "Отправить запрос",
      processing: "Обработка...",
      success: "Запрос отправлен!",
      errorTitle: "Ошибка отправки",
      errorMessage: "Произошла ошибка при отправке вашего запроса. Пожалуйста, попробуйте еще раз.",
      successTitle: "Запрос получен",
      successMessage: "Спасибо! Мы получили ваш запрос на проект и скоро свяжемся с вами."
    }
  };

  const t = translations[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // In a real implementation, you would make a request to your backend API
      // For now, we'll just simulate the process with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulating successful submission
      setIsSuccess(true);
      toast({
        title: t.successTitle,
        description: t.successMessage,
      });
      
      // Log the order details (in a real app, this would be sent to your backend)
      console.log("Order received:", {
        ...formData,
        timestamp: new Date().toISOString()
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          message: '',
          company: '',
          budget: ''
        });
      }, 3000);
      
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: t.errorTitle,
        description: t.errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{t.title}</CardTitle>
        <CardDescription>{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t.name}</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
                disabled={isLoading || isSuccess}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">{t.email}</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
                disabled={isLoading || isSuccess}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">{t.company}</Label>
              <Input 
                id="company" 
                name="company" 
                value={formData.company} 
                onChange={handleInputChange} 
                disabled={isLoading || isSuccess}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="budget">{t.budget}</Label>
              <Input 
                id="budget" 
                name="budget" 
                type="number" 
                value={formData.budget} 
                onChange={handleInputChange} 
                min="100"
                disabled={isLoading || isSuccess}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">{t.message}</Label>
            <Textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleInputChange} 
              rows={5} 
              required 
              disabled={isLoading || isSuccess}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleSubmit} 
          disabled={isLoading || isSuccess}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t.processing}
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              {t.success}
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              {t.submit}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OrderForm;
