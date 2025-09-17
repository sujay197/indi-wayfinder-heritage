import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Camera, BarChart3, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Smart Trip Tracking",
      description: "Automatically capture trip details with GPS and travel mode detection",
      badge: "AI-Powered"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Heritage Explorer",
      description: "Discover cultural sites, monuments, and their rich history",
      badge: "Cultural"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Traveller Insights",
      description: "Track accompanying travelers with demographic analysis",
      badge: "Analytics"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Real-time Data",
      description: "Instant trip logging with automatic reminders and nudges",
      badge: "Live"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "NATPAC Dashboard",
      description: "Advanced analytics for transportation planning decisions",
      badge: "Research"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy First",
      description: "Consent-driven data collection with enterprise-grade security",
      badge: "Secure"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining cutting-edge technology with India's cultural richness for comprehensive travel insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative group hover:shadow-heritage transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-xl bg-gradient-hero text-white shadow-cultural">
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="bg-heritage-golden/20 text-heritage-saffron border-heritage-golden/30">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;