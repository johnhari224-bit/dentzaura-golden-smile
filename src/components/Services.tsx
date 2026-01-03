import { Smile, Shield, Sparkles, Heart, Zap, Star } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, whitening, and aesthetic treatments tailored to perfection.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Regular check-ups, cleanings, and early detection to keep your oral health pristine.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more confident smile.",
  },
  {
    icon: Heart,
    title: "Gentle Dentistry",
    description: "Anxiety-free experiences with sedation options and a compassionate approach.",
  },
  {
    icon: Zap,
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth with state-of-the-art implant technology.",
  },
  {
    icon: Star,
    title: "Orthodontics",
    description: "Invisalign and traditional braces for perfectly aligned teeth at any age.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Exceptional Care for{" "}
            <span className="text-gradient-purple">Every Smile</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine care to advanced treatments, we offer comprehensive dental services 
            designed around your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="relative font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="relative mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
