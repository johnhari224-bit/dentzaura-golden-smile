import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DentzAura | Premium Dental Care in Beverly Hills</title>
        <meta 
          name="description" 
          content="Experience world-class dentistry at DentzAura. Cosmetic dentistry, dental implants, teeth whitening & more. Book your consultation today." 
        />
        <meta name="keywords" content="dental clinic, dentist, cosmetic dentistry, teeth whitening, dental implants, Beverly Hills" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
