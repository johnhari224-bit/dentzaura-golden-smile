import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DentzAura | Premium Dental Clinic in Bandra West, Mumbai</title>
        <meta 
          name="description" 
          content="DentzAura dental clinic in Bandra West, Mumbai. Cosmetic dentistry, dental implants, teeth whitening & more. Call 077389 43718 to book your appointment." 
        />
        <meta name="keywords" content="dental clinic, dentist, Bandra West, Mumbai, cosmetic dentistry, teeth whitening, dental implants" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
