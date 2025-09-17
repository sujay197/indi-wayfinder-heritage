import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TripTracking from "@/components/TripTracking";
import Heritage from "@/components/Heritage";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <TripTracking />
      <Heritage />
      <Analytics />
      <Footer />
    </div>
  );
};

export default Index;
