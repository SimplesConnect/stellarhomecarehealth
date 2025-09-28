import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import stellarIcon from "@/assets/stellar-icon.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div 
              className="flex items-center mb-4 cursor-pointer" 
              onClick={scrollToTop}
            >
              <img 
                src={stellarIcon} 
                alt="Stellar Homecare Health" 
                className="h-8 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-bold text-primary">Stellar Homecare Health</h3>
                <p className="text-sm text-muted">Where Care Meets Comfort</p>
              </div>
            </div>
            
            <p className="text-muted mb-4 max-w-md">
              Providing compassionate, professional home healthcare services across Greater Boston. 
              Licensed, insured, and committed to enhancing quality of life for our clients and their families.
            </p>

            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm">800 West Cummings Park, Woburn, MA 01801</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-2" />
                <a href="tel:781-228-3677" className="text-sm hover:text-primary transition-colors">
                  781-228-3677
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-2" />
                <a href="mailto:info@stellarhomecarehealth.com" className="text-sm hover:text-primary transition-colors">
                  info@stellarhomecarehealth.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection("about")}
                className="block text-sm text-muted hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block text-sm text-muted hover:text-primary transition-colors"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection("coverage")}
                className="block text-sm text-muted hover:text-primary transition-colors"
              >
                Service Areas
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="block text-sm text-muted hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block text-sm text-muted hover:text-primary transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <nav className="space-y-2">
              <div className="text-sm text-muted">Personal Care</div>
              <div className="text-sm text-muted">Companion Care</div>
              <div className="text-sm text-muted">Skilled Nursing</div>
              <div className="text-sm text-muted">Specialty Care</div>
              <div className="text-sm text-muted">Memory Care</div>
              <div className="text-sm text-muted">24/7 Support</div>
            </nav>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted mb-4 md:mb-0">
              © 2024 Stellar Homecare Health. All rights reserved. Licensed & Insured.
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-8 bg-trust/10 border border-trust/20 rounded-lg p-4 text-center">
          <div className="text-sm">
            <span className="font-semibold text-trust">24/7 Emergency Support:</span>
            <a href="tel:781-228-3677" className="ml-2 text-trust hover:text-trust/80 font-semibold">
              781-228-3677
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;