
import AnimatedText from "./AnimatedText";
import AnimatedImage from "./AnimatedImage";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <AnimatedText
            text="About Our Studio"
            tag="h2"
            className="section-heading mb-6"
            animation="slide-up"
          />
          
          <div className="space-y-6">
            <AnimatedText
              text="We are a team of passionate designers and developers dedicated to crafting exceptional digital experiences."
              tag="p"
              className="text-lg"
              animation="fade"
              delay={300}
            />
            
            <AnimatedText
              text="Founded in 2015, our studio has grown from a small team of three to a full-service agency working with clients worldwide. We believe in the power of design to transform businesses and create meaningful connections with audiences."
              tag="p"
              animation="fade"
              delay={400}
            />
            
            <AnimatedText
              text="Our approach is collaborative and strategic, focusing on understanding your unique challenges and goals before creating tailored solutions that drive results. We pride ourselves on attention to detail, innovative thinking, and delivering work that exceeds expectations."
              tag="p"
              animation="fade"
              delay={500}
            />
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4 text-center opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: 'forwards' }}>
            <div className="p-4 rounded-lg bg-secondary">
              <div className="text-3xl font-display font-bold">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
            </div>
            <div className="p-4 rounded-lg bg-secondary">
              <div className="text-3xl font-display font-bold">120+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects</div>
            </div>
            <div className="p-4 rounded-lg bg-secondary">
              <div className="text-3xl font-display font-bold">10</div>
              <div className="text-sm text-muted-foreground mt-1">Awards</div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 md:-inset-6 bg-primary/5 rounded-2xl rotate-3 transform transition-all duration-500 group-hover:rotate-1"></div>
            <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Our design team at work"
                className="w-full h-full object-cover"
                animation="scale"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-lg opacity-0 animate-slide-up" style={{ animationDelay: "800ms", animationFillMode: 'forwards' }}>
              <p className="text-sm font-medium">
                "We're committed to excellence in every pixel, line of code, and interaction."
              </p>
              <p className="text-xs text-muted-foreground mt-1">— Design Studio Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
