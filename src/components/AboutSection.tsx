import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Clock } from "lucide-react";
import aboutImage from "@/assets/about-caregivers.jpg";

const AboutSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="section-heading text-left mb-8">
              Where Care Meets <span className="text-primary">Comfort</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Stellar Homecare Health, we believe that exceptional care should happen in the comfort of your own home. 
              Our mission is to provide compassionate, reliable, and professional healthcare services that enhance the 
              quality of life for our clients and provide peace of mind for their families.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of experience serving Greater Boston, we understand that every individual has unique needs. 
              Our dedicated team of licensed professionals works closely with you and your family to create personalized 
              care plans that promote independence, dignity, and wellbeing.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Compassionate</h4>
                  <p className="text-sm text-muted-foreground">Caring with genuine empathy</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Professional</h4>
                  <p className="text-sm text-muted-foreground">Licensed & certified staff</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-trust/10 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-trust" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Family-Focused</h4>
                  <p className="text-sm text-muted-foreground">Involving families in care</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Reliable</h4>
                  <p className="text-sm text-muted-foreground">Consistent quality care</p>
                </div>
              </div>
            </div>

            <Button 
              variant="secondary" 
              size="lg"
              onClick={scrollToContact}
            >
              Schedule Your Free Assessment
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img 
                src={aboutImage}
                alt="Professional caregivers from Stellar Homecare Health team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 gradient-hero opacity-10"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-strong p-6 max-w-xs">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground mb-2">Years of Excellence</div>
                <div className="text-xs text-muted-foreground">Serving Greater Boston families</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;