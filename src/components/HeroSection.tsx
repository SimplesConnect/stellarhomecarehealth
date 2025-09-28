import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-sm font-medium">Trusted Healthcare Provider</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-text mb-6">
            Compassionate In-Home Care 
            <span className="block text-primary-light">Across Greater Boston</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl mx-auto text-white/95 drop-shadow-lg">
            Personalized care that puts your loved one's health and comfort first. 
            Professional, reliable, and compassionate home healthcare services.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToContact}
              className="min-w-[200px]"
            >
              Request Free Assessment
              <ArrowRight className="h-5 w-5" />
            </Button>

            <Button 
              variant="outline-white" 
              size="xl"
              asChild
              className="min-w-[200px]"
            >
              <a href="tel:781-228-3677" className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call 781-228-3677
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-light mb-1">★★★★★</div>
              <div className="text-sm">5.0 Google Rated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-light mb-1">✓</div>
              <div className="text-sm">Licensed & Insured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-light mb-1">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-light mb-1">4+</div>
              <div className="text-sm">Counties Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;