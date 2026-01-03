import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Cosmetic Dentistry",
    "Emergency Services",
    "Pediatric Care",
    "Dental Implants",
    "Teeth Whitening",
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-foreground">Dentz</span>
              <span className="text-gradient-blue">Aura</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Where precision meets compassion. Experience premium dental care designed 
              around your comfort and confidence.
            </p>
            <a 
              href="tel:+917738943718" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              077389 43718
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact Info</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>De Joss Apartment, Ice factory lane, Hill Rd, near trios, Bandra West, Mumbai 400050</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Open · Closes 8 PM</span>
              </li>
              <li>
                <a href="tel:+917738943718" className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold">077389 43718</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} DentzAura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
