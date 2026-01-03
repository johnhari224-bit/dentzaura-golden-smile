import { Button } from "@/components/ui/button";
import { Sparkles, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="DentzAura dental clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Premium Dental Care in Bandra West</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Your Smile,{" "}
            <span className="text-gradient-gold">Perfected</span>
            <br />
            <span className="text-primary">With Care</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Experience world-class dentistry in an environment designed for your comfort. 
            Where cutting-edge technology meets compassionate care.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="tel:+917738943718">
              <Button variant="gold" size="xl" className="group">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 077389 43718
              </Button>
            </a>
            <a href="#services">
              <Button variant="heroOutline" size="xl">
                Explore Services
              </Button>
            </a>
          </div>

          {/* Location Info */}
          <div 
            className="flex items-center gap-3 mt-10 pt-8 border-t border-border/50 opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <MapPin className="w-5 h-5 text-accent" />
            <p className="text-muted-foreground">
              Bandra West, Mumbai · Open until 8 PM
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
