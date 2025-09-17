import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import appMockup from "@/assets/app-mockup.jpg";
import { Smartphone, MapPin, Clock, Users, Route, Zap } from "lucide-react";

const TripTracking = () => {
  const trackingFeatures = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Auto-Detection",
      description: "GPS-powered origin & destination tracking"
    },
    {
      icon: <Route className="h-5 w-5" />,
      title: "Travel Mode",
      description: "Automatic detection of bus, train, car, etc."
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Trip Timing",
      description: "Precise departure and arrival times"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Co-travelers",
      description: "Track accompanying travelers with consent"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Smart Nudges",
      description: "Intelligent reminders for trip logging"
    }
  ];

  return (
    <section className="py-20 bg-gradient-cultural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <Badge className="mb-4 bg-heritage-deep-blue text-white">
                <Smartphone className="h-4 w-4 mr-2" />
                Smart Technology
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Effortless Trip Tracking
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Revolutionary mobile technology that captures comprehensive travel data 
                for NATPAC's transportation planning while keeping the experience seamless 
                for users.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {trackingFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card/60 backdrop-blur-sm border border-heritage-golden/20">
                  <div className="p-2 rounded-lg bg-heritage-saffron text-white shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="heritage" size="lg">
                Start Tracking Trips
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn More
              </Button>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={appMockup} 
                alt="Smart Travel App Interface" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-heritage"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-8 -left-8 bg-card rounded-2xl p-6 shadow-cultural border border-heritage-golden/20 hidden lg:block">
              <div className="text-2xl font-bold text-heritage-saffron">98%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-cultural border border-heritage-golden/20 hidden lg:block">
              <div className="text-2xl font-bold text-heritage-deep-blue">10K+</div>
              <div className="text-sm text-muted-foreground">Daily Trips</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripTracking;