import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Users, MapPin, Clock, Globe } from "lucide-react";

const Analytics = () => {
  const analyticsFeatures = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Travel Patterns",
      value: "Real-time Insights",
      description: "Comprehensive analysis of travel behavior across India"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth Trends",
      value: "Predictive Models",
      description: "Advanced forecasting for transportation infrastructure"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Demographics",
      value: "Population Analysis",
      description: "Detailed traveler demographics and preferences"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Route Optimization",
      value: "Smart Planning",
      description: "Data-driven route and infrastructure planning"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-heritage-deep-blue text-white">
            <Globe className="h-4 w-4 mr-2" />
            NATPAC Partnership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Advanced Analytics Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering NATPAC scientists with comprehensive travel data analytics 
            for informed transportation planning and policy decisions
          </p>
        </div>

        {/* Main Dashboard Preview */}
        <div className="mb-16">
          <Card className="border-0 shadow-cultural bg-gradient-to-br from-card to-card/50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-primary">Live Dashboard Preview</CardTitle>
              <CardDescription className="text-lg">
                Real-time transportation insights at your fingertips
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Mock Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {analyticsFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-gradient-cultural border border-heritage-golden/20">
                    <div className="inline-flex p-3 rounded-xl bg-heritage-saffron text-white mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <div className="text-2xl font-bold text-heritage-deep-blue mb-2">{feature.value}</div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Mock Chart Area */}
              <div className="relative h-64 bg-heritage-warm/30 rounded-xl border border-heritage-golden/20 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-heritage-saffron mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">Interactive Data Visualization</h4>
                  <p className="text-muted-foreground">Charts, maps, and trends updated in real-time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-0 bg-gradient-cultural">
            <CardHeader>
              <Clock className="h-12 w-12 text-heritage-saffron mx-auto mb-4" />
              <CardTitle className="text-xl">Real-time Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Instant data processing and analysis as trips are logged across the country
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-cultural">
            <CardHeader>
              <MapPin className="h-12 w-12 text-heritage-saffron mx-auto mb-4" />
              <CardTitle className="text-xl">Geographic Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Detailed regional analysis helping identify infrastructure needs and priorities
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-cultural">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-heritage-saffron mx-auto mb-4" />
              <CardTitle className="text-xl">Predictive Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Advanced modeling to forecast future transportation demands and trends
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="heritage" size="lg" className="mr-4">
            Access Dashboard
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;