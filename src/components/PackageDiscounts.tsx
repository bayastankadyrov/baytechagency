
import AnimatedText from "./AnimatedText";
import { PencilRuler, Globe, PieChart, Package, BadgePercent, Sparkles } from "lucide-react";

const PackageDiscounts = () => {
  const packages = [
    {
      title: "Starter Bundle",
      discount: "10% Off",
      services: ["Brand Identity", "Website Design", "Social Media Kit"],
      description: "Perfect for new businesses looking to establish their online presence.",
      icon: <PencilRuler className="h-6 w-6 text-primary" />,
      price: "$1,999",
      originalPrice: "$2,220"
    },
    {
      title: "Growth Package",
      discount: "15% Off",
      services: ["Brand Identity", "Website Design", "Social Media Kit", "SEO Optimization", "Content Strategy"],
      description: "Ideal for businesses looking to expand their digital footprint and reach new customers.",
      icon: <Globe className="h-6 w-6 text-primary" />,
      price: "$3,399",
      originalPrice: "$3,999",
      featured: true
    },
    {
      title: "Enterprise Solution",
      discount: "20% Off",
      services: ["Brand Identity", "Website Design", "Social Media Kit", "SEO Optimization", "Content Strategy", "UI/UX Design", "Analytics Dashboard"],
      description: "Comprehensive solution for established businesses aiming for digital transformation.",
      icon: <PieChart className="h-6 w-6 text-primary" />,
      price: "$5,599",
      originalPrice: "$6,999"
    }
  ];

  return (
    <section id="package-discounts" className="section-container">
      <div className="text-center mb-16">
        <AnimatedText
          text="Package Discounts"
          tag="h2"
          className="section-heading"
          animation="slide-up"
        />
        <AnimatedText
          text="Save more when you bundle our services together"
          tag="p"
          className="section-subheading"
          animation="fade"
          delay={200}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
        {packages.map((pkg, index) => (
          <div 
            key={index} 
            className={`fade-in-section relative overflow-hidden rounded-2xl border ${pkg.featured ? 'border-primary shadow-lg ring-2 ring-primary/20' : 'border-border shadow-sm'} bg-card p-6 transition-all duration-300 hover:shadow-md`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {pkg.featured && (
              <div className="absolute -right-10 top-6 rotate-45 bg-primary px-10 py-1 text-xs font-medium text-white">
                Popular
              </div>
            )}
            
            <div className="mb-4 flex items-center gap-3">
              <div className={`rounded-full p-2 ${pkg.featured ? 'bg-primary/20' : 'bg-primary/10'}`}>
                {pkg.icon}
              </div>
              <h3 className="text-xl font-semibold font-display">{pkg.title}</h3>
            </div>
            
            <div className="mb-4 flex items-end gap-2">
              <span className="text-3xl font-bold">{pkg.price}</span>
              <span className="text-lg text-muted-foreground line-through mb-1">{pkg.originalPrice}</span>
            </div>
            
            <div className="mb-4 flex items-center gap-2">
              <BadgePercent className="h-5 w-5 text-primary" />
              <span className="font-medium text-primary">{pkg.discount}</span>
            </div>
            
            <p className="mb-6 text-muted-foreground">{pkg.description}</p>
            
            <div className="mb-6 space-y-2">
              {pkg.services.map((service, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
            
            <button className={`w-full rounded-lg ${pkg.featured ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-foreground hover:bg-secondary/80'} py-2 font-medium transition-colors`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackageDiscounts;
