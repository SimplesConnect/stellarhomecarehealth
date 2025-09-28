import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";

const CoverageSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const counties = [
    {
      name: "Middlesex County",
      cities: ["Woburn", "Cambridge", "Somerville", "Medford", "Malden", "Melrose", "Stoneham", "Reading"]
    },
    {
      name: "Norfolk County", 
      cities: ["Quincy", "Brookline", "Newton", "Wellesley", "Dedham", "Westwood", "Norwood", "Canton"]
    },
    {
      name: "Worcester County",
      cities: ["Worcester", "Framingham", "Marlborough", "Shrewsbury", "Westborough", "Grafton", "Millbury", "Auburn"]
    },
    {
      name: "Bristol County",
      cities: ["Attleboro", "Taunton", "Fall River", "New Bedford", "Mansfield", "Norton", "Rehoboth", "Swansea"]
    }
  ];

  return (
    <section id="coverage" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Serving <span className="text-primary">Greater Boston</span>
          </h2>
          <p className="subtitle max-w-3xl mx-auto">
            We proudly serve families across Middlesex, Norfolk, Worcester, and Bristol Counties 
            with comprehensive home healthcare services.
          </p>
        </div>

        {/* Coverage Map/Counties */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {counties.map((county, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-semibold">{county.name}</h3>
                </div>
                <ul className="space-y-2">
                  {county.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-primary mr-2" />
                      {city}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Area Features */}
        <div className="bg-white rounded-2xl shadow-medium p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Quick Response</h4>
              <p className="text-muted-foreground">
                We typically respond to new service requests within 24 hours and can often start care the same day.
              </p>
            </div>

            <div>
              <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Local Knowledge</h4>
              <p className="text-muted-foreground">
                Our team knows the Greater Boston area well, including local healthcare providers and community resources.
              </p>
            </div>

            <div>
              <div className="bg-trust/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-trust" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Always Available</h4>
              <p className="text-muted-foreground">
                24/7 support line ensures you can reach us whenever you need assistance or have questions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Not Sure If We Serve Your Area?</h3>
            <p className="text-muted-foreground mb-6">
              We're expanding our service area regularly. Contact us to see if we can provide care in your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                onClick={scrollToContact}
              >
                Check Coverage
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <a href="tel:781-228-3677" className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Call 781-228-3677
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;