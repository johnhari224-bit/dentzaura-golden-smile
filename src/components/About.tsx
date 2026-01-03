import { Award, Users, Clock, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized excellence in dental care",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Board-certified specialists",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Evening & weekend appointments",
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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-deep/20 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Main Image Container */}
              <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-card rounded-3xl flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-6">
                    <span className="font-display text-5xl font-bold text-gradient-gold">DA</span>
                  </div>
                  <p className="font-display text-2xl text-foreground mb-2">DentzAura</p>
                  <p className="text-muted-foreground">Excellence in Every Smile</p>
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-lg">
                <p className="font-display text-4xl font-bold text-gradient-gold mb-1">98%</p>
                <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-accent/30 rounded-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent font-medium uppercase tracking-widest text-sm">About DentzAura</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Where Precision Meets{" "}
              <span className="text-gradient-gold">Compassion</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At DentzAura, we believe exceptional dental care goes beyond technical expertise. 
              Our state-of-the-art facility combines the latest technology with a warm, 
              patient-centered approach to create an experience unlike any other.
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Founded by leading dental professionals, we've built a practice where every 
              patient feels valued, heard, and confident in their care. Your smile is our passion.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
