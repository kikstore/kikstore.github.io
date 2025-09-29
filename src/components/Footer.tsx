import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "FAQ", href: "/faq" },
  ];

  const categories = [
    { name: "Handbags", href: "/shop?category=handbags" },
    { name: "Jewelry", href: "/shop?category=jewelry" },
    { name: "Accessories", href: "/shop?category=accessories" },
    { name: "Fragrance", href: "/shop?category=fragrance" },
    { name: "Sale Items", href: "/shop?category=sale" },
    { name: "New Arrivals", href: "/shop?category=new" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="border-b border-primary-light/20 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay in Style</h3>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and style tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground/10 border-primary-light/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/20"
              />
              <Button 
                className="gradient-accent text-accent-foreground hover:shadow-accent transition-smooth font-semibold"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold gradient-accent bg-clip-text text-transparent mb-3">
                Luxe
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                Curating luxury fashion and lifestyle products for the discerning individual. 
                Quality, elegance, and sophistication in every piece.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-light/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-light/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-light/20">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-fast"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-primary-foreground/80 hover:text-accent transition-fast"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>123 Luxury Lane</p>
                  <p>Fashion District, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">hello@luxestore.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light/20 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Luxe. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-accent transition-fast">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-accent transition-fast">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-accent transition-fast">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;