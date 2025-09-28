import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import stellarLogo from "@/assets/stellar-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={stellarLogo} 
              alt="Stellar Homecare Health - Where Care Meets Comfort" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("coverage")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Coverage
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:781-228-3677" className="flex items-center text-trust hover:text-trust/80 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">781-228-3677</span>
            </a>
            <Button 
              variant="phone" 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Free Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("coverage")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Coverage
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-2">
                <a href="tel:781-228-3677" className="flex items-center text-trust hover:text-trust/80 transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-semibold">781-228-3677</span>
                </a>
                <Button 
                  variant="phone" 
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="w-full"
                >
                  Free Assessment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;