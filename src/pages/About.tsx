import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  Lightbulb,
  Calendar,
  Globe,
  Target,
  TrendingUp,
  Handshake,
  Megaphone,
  Package,
} from "lucide-react";

const purposes = [
  {
    icon: Heart,
    text: "Raise money to support cancer patients and local foundations that provide treatment assistance and family support",
  },
  {
    icon: Lightbulb,
    text: "Educate our community about cancer and ways to help those fighting it",
  },
  {
    icon: Users,
    text: "Give students meaningful volunteer opportunities to make a positive impact",
  },
  {
    icon: Calendar,
    text: "Organize fundraisers, drives, and awareness events throughout the year",
  },
  {
    icon: Globe,
    text: "Build a supportive environment where anyone can help, donate, or get involved",
  },
];

const goals = [
  {
    icon: TrendingUp,
    title: "Expand Beyond Local",
    description: "Expand beyond small community events and grow into a recognized student-led nonprofit",
  },
  {
    icon: Target,
    title: "Increase Fundraising",
    description: "Increase our yearly fundraising totals (we've already raised over $1,000 and are continuing to grow)",
  },
  {
    icon: Handshake,
    title: "Build Partnerships",
    description: "Partner with more local and regional cancer support programs",
  },
  {
    icon: Users,
    title: "Volunteer Opportunities",
    description: "Create consistent volunteer opportunities for students",
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    description: "Build awareness campaigns that reach schools, neighborhoods, and youth groups",
  },
  {
    icon: Package,
    title: "Direct Family Support",
    description: "Use donations to directly help families in need through supplies, care packages, and financial support",
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
                  Cancer Compass is a student-led nonprofit founded by Rushil R, Vrishab P, and Krish D. We started this organization because we believe no family should face cancer alone.
                </p>
                <p>
                  Our mission is to guide, support, and uplift people affected by cancer by raising funds, spreading awareness, and building a strong volunteer community.
                </p>
                <p>
                  What started as a small initiative to help local families has grown into a dedicated nonprofit organization, bringing together volunteers, donors, and community members who share our vision of ensuring no family faces cancer alone.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border shadow-lg ring-2 ring-primary/10">
                <img
                  src="/images/founders-group-photo.jpg"
                  alt="Cancer Compass founders Rushil R, Vrishab P, and Krish D"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
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
      <section className="section-padding bg-card border-y border-border">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether through donations, volunteering, or simply spreading the word, you can help us support families affected by cancer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/donate">
              <Button variant="gold" size="xl">
                <Heart />
                Make a Donation
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="gold" size="xl">
                <Users />
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
