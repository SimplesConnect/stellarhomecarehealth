import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Stethoscope, 
  Brain, 
  Utensils, 
  Bath, 
  Home, 
  Activity,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Heart,
      title: "Personal Care",
      description: "Assistance with daily activities including bathing, dressing, grooming, and medication reminders.",
      features: ["Bathing & Hygiene", "Dressing Assistance", "Medication Management", "Mobility Support"]
    },
    {
      icon: Users,
      title: "Companion Care", 
      description: "Social interaction, emotional support, and assistance with light household tasks and errands.",
      features: ["Friendly Companionship", "Light Housekeeping", "Meal Preparation", "Transportation"]
    },
    {
      icon: Stethoscope,
      title: "Skilled Nursing",
      description: "Professional medical care provided by licensed nurses for complex health conditions.",
      features: ["Wound Care", "Injection Administration", "Chronic Disease Management", "Health Monitoring"]
    },
    {
      icon: Brain,
      title: "Specialty Care",
      description: "Specialized support for clients with dementia, Alzheimer's, and other cognitive conditions.",
      features: ["Memory Care", "Behavioral Support", "Safety Supervision", "Family Education"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Comprehensive <span className="text-primary">Care Services</span>
          </h2>
          <p className="subtitle max-w-3xl mx-auto">
            From basic companionship to specialized medical care, we provide a full range of 
            home healthcare services tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-accent rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Additional Services Available</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col items-center">
              <Utensils className="h-6 w-6 text-primary mb-2" />
              <span className="text-sm">Meal Planning</span>
            </div>
            <div className="flex flex-col items-center">
              <Bath className="h-6 w-6 text-primary mb-2" />
              <span className="text-sm">Personal Hygiene</span>
            </div>
            <div className="flex flex-col items-center">
              <Home className="h-6 w-6 text-primary mb-2" />
              <span className="text-sm">Light Housekeeping</span>
            </div>
            <div className="flex flex-col items-center">
              <Activity className="h-6 w-6 text-primary mb-2" />
              <span className="text-sm">Physical Therapy</span>
            </div>
          </div>
          
          <Button 
            variant="default" 
            size="lg"
            onClick={scrollToContact}
          >
            Discuss Your Needs
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;