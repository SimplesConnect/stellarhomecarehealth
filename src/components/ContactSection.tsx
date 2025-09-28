import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    services: [],
    preferredTime: "",
    notes: ""
  });

  const services = [
    "Personal Care",
    "Companion Care", 
    "Skilled Nursing",
    "Specialty Care"
  ];

  const timeSlots = [
    "Morning (8AM - 12PM)",
    "Afternoon (12PM - 5PM)",
    "Evening (5PM - 8PM)",
    "Flexible"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.fullName || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Since we can't implement backend functionality without Supabase, show info message
    toast({
      title: "Assessment Request Received",
      description: "Thank you for your interest! We'll contact you within 24 hours to schedule your free assessment.",
    });

    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      city: "",
      services: [],
      preferredTime: "",
      notes: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Schedule Your <span className="text-primary">Free Assessment</span>
          </h2>
          <p className="subtitle max-w-3xl mx-auto">
            Take the first step towards compassionate home care. Our team will assess your needs 
            and create a personalized care plan at no cost to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Request Free Assessment</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Services Needed (select all that apply)</Label>
                    <div className="grid md:grid-cols-2 gap-3 mt-2">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.services.includes(service)}
                            onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          />
                          <Label htmlFor={service} className="text-sm font-normal">{service}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Preferred Assessment Time</Label>
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                      className="w-full mt-1 p-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select preferred time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about specific care needs, medical conditions, or any questions you have..."
                    />
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Assessment Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href="tel:781-228-3677" className="text-primary hover:text-primary-dark">
                        781-228-3677
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:info@stellarhomecarehealth.com" className="text-primary hover:text-primary-dark">
                        info@stellarhomecarehealth.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-muted-foreground">
                        800 West Cummings Park<br />
                        Woburn, MA 01801
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Support Hours</div>
                      <div className="text-muted-foreground">
                        24/7 Support Line<br />
                        Office: Mon-Fri 8AM-6PM
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Emergency Contact</h4>
                <p className="text-muted-foreground mb-4">
                  For urgent care needs outside business hours, call our 24/7 support line.
                </p>
                <Button variant="phone" size="lg" className="w-full" asChild>
                  <a href="tel:781-228-3677">
                    <Phone className="h-4 w-4 mr-2" />
                    Call 781-228-3677
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;