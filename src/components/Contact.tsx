
import React from 'react';

type ContactProps = {
  language: 'en' | 'ru';
};

const Contact = ({ language }: ContactProps) => {
  // Mock component implementation
  const translations = {
    en: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitButton: "Send Message"
    },
    ru: {
      title: "Связаться с Нами",
      subtitle: "Мы будем рады услышать от вас. Отправьте нам сообщение, и мы ответим как можно скорее.",
      nameLabel: "Имя",
      emailLabel: "Электронная почта",
      messageLabel: "Сообщение",
      submitButton: "Отправить сообщение"
    }
  };

  const t = translations[language];

  return (
    <section id="contact" className="section-container bg-secondary/50">
      <div className="text-center mb-16">
        <h2 className="section-heading">{t.title}</h2>
        <p className="section-subheading">{t.subtitle}</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">{t.nameLabel}</label>
            <input type="text" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">{t.emailLabel}</label>
            <input type="email" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">{t.messageLabel}</label>
            <textarea rows={4} className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg"></textarea>
          </div>
          
          <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium">
            {t.submitButton}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
