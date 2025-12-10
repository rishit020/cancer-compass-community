import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Heart, Users, Calendar, Gift, CheckCircle2 } from "lucide-react";

const interestAreas = [
  { id: "event-help", label: "Event Help", description: "Assist at our community events and fundraisers" },
  { id: "logistics", label: "Logistics", description: "Help with planning, organization, and coordination" },
  { id: "outreach", label: "Outreach", description: "Spread awareness and connect with the community" },
  { id: "fundraising", label: "Fundraising", description: "Help raise funds through various initiatives" },
];

const benefits = [
  { icon: Heart, text: "Make a real difference in families' lives" },
  { icon: Users, text: "Join a supportive community of like-minded volunteers" },
  { icon: Calendar, text: "Flexible scheduling to fit your availability" },
  { icon: Gift, text: "Gain valuable experience and skills" },
];

const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interests: [] as string[],
    availability: "",
    experience: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, interestId]
        : prev.interests.filter((id) => id !== interestId),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName.trim() || !formData.email.trim()) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }

    if (formData.interests.length === 0) {
      toast({
        title: "Select at least one interest",
        description: "Please select at least one area you're interested in.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application submitted!",
      description: "Thank you for your interest in volunteering. We'll be in touch soon!",
    });

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      interests: [],
      availability: "",
      experience: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Join Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Become a <span className="text-gradient-gold">Volunteer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your time and skills can make a meaningful difference in the lives of cancer patients and their families.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-muted border-b border-border">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-sm font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-6 md:p-10 border border-border shadow-lg">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
                Volunteer Application
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Fill out the form below and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="bg-background"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-background"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                    className="bg-background"
                  />
                </div>

                {/* Areas of Interest */}
                <div className="space-y-3">
                  <Label className="text-foreground">
                    Areas of Interest <span className="text-destructive">*</span>
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {interestAreas.map((area) => (
                      <div
                        key={area.id}
                        className={`flex items-start gap-3 p-4 rounded-lg border transition-all cursor-pointer ${
                          formData.interests.includes(area.id)
                            ? "border-primary bg-primary/5"
                            : "border-border bg-background hover:border-primary/50"
                        }`}
                        onClick={() =>
                          handleInterestChange(area.id, !formData.interests.includes(area.id))
                        }
                      >
                        <Checkbox
                          id={area.id}
                          checked={formData.interests.includes(area.id)}
                          onCheckedChange={(checked) =>
                            handleInterestChange(area.id, checked as boolean)
                          }
                          className="mt-0.5"
                        />
                        <div>
                          <Label
                            htmlFor={area.id}
                            className="text-foreground font-medium cursor-pointer"
                          >
                            {area.label}
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5">{area.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-2">
                  <Label htmlFor="availability" className="text-foreground">
                    Availability
                  </Label>
                  <Input
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    placeholder="e.g., Weekends, After 3pm on weekdays"
                    className="bg-background"
                  />
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-foreground">
                    Relevant Experience
                  </Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Tell us about any relevant experience or skills you have..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;
