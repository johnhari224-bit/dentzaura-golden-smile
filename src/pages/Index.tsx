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
        <title>DentzAura | Dr. Aiman Shaikh | Dental Clinic in Bandra West, Mumbai</title>
        <meta 
          name="description" 
          content="DentzAura dental clinic by Dr. Aiman Shaikh in Bandra West, Mumbai. Emergency services, pediatric care, cosmetic dentistry. 5-star rated. Call 077389 43718." 
        />
        <meta name="keywords" content="dental clinic, dentist Bandra West, Dr Aiman Shaikh, Mumbai dentist, emergency dental, pediatric dentistry, cosmetic dentistry" />
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
