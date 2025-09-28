import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Margaret Thompson",
      location: "Woburn, MA",
      rating: 5,
      text: "Stellar Homecare Health has been a blessing for our family. The caregiver assigned to my mother is not only professional but genuinely caring. Mom looks forward to her visits and has improved so much since starting their services.",
      service: "Personal Care & Companionship"
    },
    {
      name: "Robert Chen",
      location: "Cambridge, MA", 
      rating: 5,
      text: "After my father's stroke, we needed skilled nursing care at home. The nurses from Stellar are incredibly knowledgeable and helped him regain independence. Their communication with our family is excellent.",
      service: "Skilled Nursing"
    },
    {
      name: "Susan Williams",
      location: "Newton, MA",
      rating: 5,
      text: "We couldn't be happier with the specialized care our grandmother receives. The team understands her dementia and provides the patient, loving support she needs. It gives us such peace of mind.",
      service: "Memory Care"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            What Families Are <span className="text-primary">Saying</span>
          </h2>
          <p className="subtitle max-w-3xl mx-auto">
            The trust and confidence of our clients and their families is what drives us to provide 
            exceptional care every single day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 relative">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6">
                  <div className="bg-primary p-2 rounded-full">
                    <Quote className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Service Badge */}
                <div className="bg-accent px-3 py-1 rounded-full text-xs font-medium text-accent-foreground mb-4 inline-block">
                  {testimonial.service}
                </div>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="bg-gradient-trust rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">5.0</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Families Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Would Recommend</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;