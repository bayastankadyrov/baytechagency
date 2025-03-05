
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Check, CreditCard } from "lucide-react";

type PaymentFormProps = {
  language: 'en' | 'ru';
  productId: string;
  productName: string;
  amount: number;
};

const PaymentForm = ({ language, productId, productName, amount }: PaymentFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: ''
  });

  const translations = {
    en: {
      title: "Payment Form",
      description: "Enter your payment details to complete the purchase",
      cardNumber: "Card Number",
      expiryDate: "Expiry Date",
      cvv: "CVV",
      name: "Cardholder Name",
      email: "Email",
      total: "Total:",
      payNow: "Pay Now",
      processing: "Processing...",
      success: "Payment Successful!",
      errorTitle: "Payment Error",
      errorMessage: "There was an error processing your payment. Please try again.",
      successTitle: "Payment Complete",
      successMessage: "Your payment has been processed successfully!"
    },
    ru: {
      title: "Форма оплаты",
      description: "Введите данные вашей карты для завершения покупки",
      cardNumber: "Номер карты",
      expiryDate: "Срок действия",
      cvv: "CVV",
      name: "Имя владельца карты",
      email: "Электронная почта",
      total: "Итого:",
      payNow: "Оплатить сейчас",
      processing: "Обработка...",
      success: "Оплата успешна!",
      errorTitle: "Ошибка оплаты",
      errorMessage: "Произошла ошибка при обработке вашего платежа. Пожалуйста, попробуйте еще раз.",
      successTitle: "Оплата завершена",
      successMessage: "Ваш платеж был успешно обработан!"
    }
  };

  const t = translations[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces after every 4 digits
    if (name === 'cardNumber') {
      const formattedValue = value
        .replace(/\s/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim()
        .substring(0, 19);
      
      setFormData({
        ...formData,
        [name]: formattedValue
      });
      return;
    }
    
    // Format expiry date (MM/YY)
    if (name === 'expiryDate') {
      const formattedValue = value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '$1/$2')
        .substring(0, 5);
      
      setFormData({
        ...formData,
        [name]: formattedValue
      });
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // In a real implementation, you would make a request to your payment API
      // For now, we'll just simulate a payment process with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulating successful payment
      setIsSuccess(true);
      toast({
        title: t.successTitle,
        description: t.successMessage,
      });
      
      // Send the order details to your backend/API
      console.log("Payment processed for:", {
        productId,
        productName,
        amount,
        email: formData.email,
        timestamp: new Date().toISOString()
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          name: '',
          email: ''
        });
      }, 3000);
      
    } catch (error) {
      console.error("Payment error:", error);
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
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{t.title}</CardTitle>
        <CardDescription>{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          
          <div className="space-y-2">
            <Label htmlFor="cardNumber">{t.cardNumber}</Label>
            <Input 
              id="cardNumber" 
              name="cardNumber" 
              value={formData.cardNumber} 
              onChange={handleInputChange} 
              placeholder="0000 0000 0000 0000" 
              maxLength={19} 
              required 
              disabled={isLoading || isSuccess}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">{t.expiryDate}</Label>
              <Input 
                id="expiryDate" 
                name="expiryDate" 
                value={formData.expiryDate} 
                onChange={handleInputChange} 
                placeholder="MM/YY" 
                maxLength={5} 
                required 
                disabled={isLoading || isSuccess}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">{t.cvv}</Label>
              <Input 
                id="cvv" 
                name="cvv" 
                value={formData.cvv} 
                onChange={handleInputChange} 
                type="password" 
                maxLength={4} 
                required 
                disabled={isLoading || isSuccess}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="w-full flex justify-between items-center">
          <span className="font-semibold">{t.total}</span>
          <span className="text-xl font-bold">${amount.toFixed(2)}</span>
        </div>
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
              <Check className="mr-2 h-4 w-4" />
              {t.success}
            </>
          ) : (
            <>
              <CreditCard className="mr-2 h-4 w-4" />
              {t.payNow}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentForm;
