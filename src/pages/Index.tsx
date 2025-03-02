
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import PackageDiscounts from "@/components/PackageDiscounts";
import WorkProcess from "@/components/WorkProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add intersection observer for fade-in sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const fadeElements = document.querySelectorAll(".fade-in-section");
    fadeElements.forEach((el) => observer.observe(el));

    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      });
    });

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased smooth-scroll">
      <NavBar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <WhyChooseUs />
        <PackageDiscounts />
        <WorkProcess />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
