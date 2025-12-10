import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  Lightbulb,
  Calendar,
  Gift,
  Globe,
  Target,
  TrendingUp,
  Handshake,
  Megaphone,
  Package,
  ArrowRight,
} from "lucide-react";

const purposes = [
  {
    icon: Heart,
    text: "Raise money for patients and treatment-support foundations",
  },
  {
    icon: Lightbulb,
    text: "Educate the community about cancer and how to help",
  },
  {
    icon: Users,
    text: "Provide meaningful student volunteer opportunities",
  },
  {
    icon: Calendar,
    text: "Run fundraisers, drives, and awareness events",
  },
  {
    icon: Globe,
    text: "Build an inclusive support network for affected families",
  },
];

const goals = [
  {
    icon: TrendingUp,
    title: "Grow Beyond Local",
    description: "Expand our reach beyond local events to impact more communities across the region.",
  },
  {
    icon: Target,
    title: "Increase Fundraising",
    description: "Set and achieve higher yearly fundraising totals to provide more support.",
  },
  {
    icon: Handshake,
    title: "Build Partnerships",
    description: "Partner with local and regional cancer support programs for greater impact.",
  },
  {
    icon: Users,
    title: "Volunteer Opportunities",
    description: "Create ongoing volunteering opportunities for students and community members.",
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    description: "Launch wider awareness campaigns to educate about cancer prevention and support.",
  },
  {
    icon: Package,
    title: "Direct Family Support",
    description: "Directly support families with supplies, care packages, and financial assistance.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Story of <span className="text-gradient-gold">Hope</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A student-led initiative born from the belief that no family should face cancer alone.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
                Where It Began
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Founded by Students, Driven by Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cancer Compass was founded by three high school students—Rushil R, Vrishab P, and Krish D—who
                  witnessed firsthand the challenges that families face when navigating a cancer diagnosis.
                </p>
                <p>
                  What started as a small initiative to help local families has grown into a dedicated nonprofit
                  organization, bringing together volunteers, donors, and community members who share our vision.
                </p>
                <p>
                  Our name reflects our mission: to be a compass for families, guiding them through the difficult
                  journey of cancer treatment with support, resources, and hope.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border shadow-lg">
                <img
                  src="/placeholder.svg"
                  alt="Cancer Compass founders"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="section-padding bg-gradient-section">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Purpose
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything we do is centered around supporting cancer patients and their families.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {purposes.map((purpose, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card p-5 rounded-xl border border-border card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <purpose.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{purpose.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
              Looking Ahead
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Key Goals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're constantly working to expand our impact and reach more families in need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <goal.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {goal.title}
                </h3>
                <p className="text-muted-foreground text-sm">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-secondary-foreground/70 mb-8 max-w-xl mx-auto">
            Whether through donations, volunteering, or simply spreading the word, you can help us support families affected by cancer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/donate">
              <Button variant="gold" size="lg" className="group">
                <Heart className="w-5 h-5" />
                Make a Donation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button
                variant="outline"
                size="lg"
                className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
              >
                <Users className="w-5 h-5" />
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
