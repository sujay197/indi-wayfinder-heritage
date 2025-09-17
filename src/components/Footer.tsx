import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-heritage-deep-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-heritage-golden">
              Smart Travel & Heritage Explorer
            </h3>
            <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
              Revolutionizing transportation planning through intelligent trip tracking 
              while celebrating India's incredible cultural heritage.
            </p>
            <div className="flex gap-4">
              <Button variant="heritage" size="sm">
                Download App
              </Button>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-heritage-deep-blue">
                Learn More
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-heritage-golden">Quick Links</h4>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#" className="hover:text-heritage-golden transition-colors">Heritage Explorer</a></li>
              <li><a href="#" className="hover:text-heritage-golden transition-colors">Trip Tracking</a></li>
              <li><a href="#" className="hover:text-heritage-golden transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="hover:text-heritage-golden transition-colors">NATPAC Partnership</a></li>
              <li><a href="#" className="hover:text-heritage-golden transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-heritage-golden">Contact</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-heritage-golden shrink-0" />
                <span className="text-sm">NATPAC, Thiruvananthapuram, Kerala</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-heritage-golden shrink-0" />
                <span className="text-sm">info@smarttravel.gov.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-heritage-golden shrink-0" />
                <span className="text-sm">+91 471 2548 XXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-heritage-golden shrink-0" />
                <span className="text-sm">www.natpac.gov.in</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-blue-400/30" />

        <div className="flex flex-col md:flex-row justify-between items-center text-blue-100">
          <p className="text-sm">
            &copy; 2024 NATPAC & Smart Travel Heritage Explorer. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-heritage-golden transition-colors">Terms of Service</a>
            <a href="#" className="text-sm hover:text-heritage-golden transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-heritage-golden transition-colors">Data Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;