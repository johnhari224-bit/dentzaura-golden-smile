import { Award, Users, Clock, HeartHandshake, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Award,
    title: "Quality Care",
    description: "Excellence in dental treatments",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled dental professionals",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description: "Open until 8 PM",
  },
  {
    icon: HeartHandshake,
    title: "Patient First",
    description: "Personalized treatment plans",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Main Image Container */}
              <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-card rounded-3xl flex items-center justify-center border border-border shadow-soft">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <span className="font-display text-5xl font-bold text-gradient-blue">DA</span>
                  </div>
                  <p className="font-display text-2xl text-foreground mb-2">DentzAura</p>
                  <p className="text-muted-foreground mb-4">Bandra West, Mumbai</p>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-muted-foreground text-sm">5.0 (23 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-medium uppercase tracking-widest text-sm">About DentzAura</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Where Precision Meets{" "}
              <span className="text-gradient-blue">Compassion</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Led by Dr. Aiman Shaikh, DentzAura blends advanced dental technology with compassionate care. 
              Our clinic combines the latest technology with a warm, 
              patient-centered approach to create an experience unlike any other.
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Located in the heart of Bandra West, Mumbai, we've built a practice where every 
              patient feels valued, heard, and confident in their care. Your smile is our passion.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="tel:+917738943718">
              <Button variant="hero" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call to Book: 077389 43718
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
