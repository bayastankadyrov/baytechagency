
import { Camera, Globe, Layout, Paintbrush, Smartphone, Users } from "lucide-react";
import AnimatedText from "./AnimatedText";

const services = [
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: "Brand Identity",
    description: "We create distinctive brand identities that resonate with your audience and stand out in the market."
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Web Design",
    description: "Our web designs blend aesthetics with functionality to deliver engaging and intuitive user experiences."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions that amplify your brand's reach and connect with your target audience."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Design",
    description: "User-centric mobile interfaces that provide seamless experiences across all devices and platforms."
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Photography",
    description: "Professional photography services that capture your brand's essence and elevate your visual content."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "User Research",
    description: "In-depth user research to inform design decisions and create products that truly meet user needs."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-container bg-secondary/50">
      <div className="text-center mb-16">
        <AnimatedText
          text="Our Services"
          tag="h2"
          className="section-heading"
          animation="slide-up"
        />
        <AnimatedText
          text="We offer a comprehensive range of design services to help your brand stand out and connect with your audience."
          tag="p"
          className="section-subheading"
          animation="slide-up"
          delay={300}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div 
            key={service.title}
            className="service-card opacity-0 animate-fade-in"
            style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
          >
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
              {service.icon}
            </div>
            <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
