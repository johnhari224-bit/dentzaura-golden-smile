import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">Get in Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Book Your{" "}
            <span className="text-gradient-purple">Appointment</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your smile? Call us today to schedule your visit.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Main CTA */}
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 text-center mb-8">
            <Phone className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Call to Book Your Appointment
            </h3>
            <a href="tel:+917738943718">
              <Button variant="gold" size="xl" className="text-xl px-10 py-6 h-auto">
                <Phone className="w-6 h-6 mr-3" />
                077389 43718
              </Button>
            </a>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-5 p-6 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">Visit Us</h4>
                <p className="text-muted-foreground">De Joss Apartment, Ice factory lane,</p>
                <p className="text-muted-foreground">Hill Rd, near trios, Bandra West,</p>
                <p className="text-muted-foreground">Mumbai, Maharashtra 400050</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 bg-card border border-border rounded-2xl">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">Working Hours</h4>
                <p className="text-muted-foreground">Open Daily</p>
                <p className="text-muted-foreground">Closes at 8 PM</p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-8 bg-card border border-border rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.83!3d19.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBandra%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DentzAura Location"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
