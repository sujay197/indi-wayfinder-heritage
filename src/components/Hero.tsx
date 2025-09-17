import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-taj-mahal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Taj Mahal at golden hour" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Smart Travel Data Collection
            <span className="block text-heritage-golden mt-2">
              & Heritage Explorer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing transportation planning through seamless trip tracking while 
            discovering India's incredible cultural heritage
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="heritage" size="lg" className="w-full sm:w-auto">
              Start Exploring Heritage
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
              Track Your Journey
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-heritage-golden">500+</div>
              <div className="text-gray-200">Heritage Sites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-heritage-golden">Real-time</div>
              <div className="text-gray-200">Trip Tracking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-heritage-golden">NATPAC</div>
              <div className="text-gray-200">Partnership</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;