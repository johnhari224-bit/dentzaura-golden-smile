import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Executive",
    content: "DentzAura completely transformed my smile. The team's attention to detail and genuine care made every visit a pleasure. I've never felt more confident!",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Business Owner",
    content: "After years of dental anxiety, I finally found a practice that understands. The gentle approach and modern technology made my implant procedure seamless.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Software Engineer",
    content: "From the luxurious waiting room to the painless procedures, everything about DentzAura exceeds expectations. This is premium dental care done right.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            What Our <span className="text-gradient-gold">Patients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real patients who've experienced the DentzAura difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Quote className="w-4 h-4 text-accent-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
