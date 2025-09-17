import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heritageCollage from "@/assets/heritage-collage.jpg";
import { Clock, MapPin, Star, Calendar } from "lucide-react";

const Heritage = () => {
  const sites = [
    {
      name: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      description: "The epitome of Mughal architecture and a symbol of eternal love",
      rating: 4.9,
      visitTime: "2-3 hours",
      entryFee: "₹50 (Indians)",
      category: "UNESCO World Heritage"
    },
    {
      name: "Red Fort",
      location: "Delhi",
      description: "Magnificent Mughal fortress showcasing Indo-Islamic architecture",
      rating: 4.7,
      visitTime: "1-2 hours", 
      entryFee: "₹35 (Indians)",
      category: "Historical Monument"
    },
    {
      name: "Hawa Mahal",
      location: "Jaipur, Rajasthan",
      description: "The Palace of Winds with intricate pink sandstone facades",
      rating: 4.6,
      visitTime: "45 minutes",
      entryFee: "₹50 (Indians)",
      category: "Royal Palace"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Discover India's Heritage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore magnificent monuments, learn their stories, and plan your cultural journey with detailed insights
          </p>
          
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-cultural">
            <img 
              src={heritageCollage} 
              alt="Indian Heritage Sites Collage" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">500+ Heritage Sites</h3>
              <p className="text-lg opacity-90">From ancient temples to Mughal masterpieces</p>
            </div>
          </div>
        </div>

        {/* Featured Sites */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {sites.map((site, index) => (
            <Card key={index} className="group hover:shadow-heritage transition-all duration-300 border-0 bg-gradient-cultural">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge className="bg-heritage-saffron text-white">
                    {site.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-heritage-golden text-heritage-golden" />
                    <span className="text-sm font-medium">{site.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {site.name}
                </CardTitle>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{site.location}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {site.description}
                </CardDescription>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-heritage-saffron" />
                    <span>{site.visitTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-heritage-saffron" />
                    <span>{site.entryFee}</span>
                  </div>
                </div>
                
                <Button variant="heritage" className="w-full">
                  Explore Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Heritage Sites
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Heritage;