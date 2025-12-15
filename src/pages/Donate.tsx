import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Gift, Users, Shield, CheckCircle2, TrendingUp, Eye, Users2 } from "lucide-react";

const impactItems = [
  {
    amount: "$25",
    description: "Provides essential supplies for one care package",
    icon: Gift,
  },
  {
    amount: "$50",
    description: "Helps fund transportation for a patient to treatment",
    icon: DollarSign,
  },
  {
    amount: "$100",
    description: "Supports a family with groceries and necessities for a week",
    icon: Users,
  },
  {
    amount: "$250+",
    description: "Contributes to our major fundraising events and programs",
    icon: Heart,
  },
];

const trustItems = [
  {
    icon: CheckCircle2,
    text: "100% of donations go directly to supporting cancer patients and families",
  },
  {
    icon: TrendingUp,
    text: "Regular updates on how your donation is making an impact",
  },
  {
    icon: Eye,
    text: "Student-led with adult supervision and transparent finances",
  },
  {
    icon: Users2,
    text: "Part of a growing network of community supporters",
  },
];

const Donate = () => {
  const handlePayPalClick = () => {
    // Open PayPal donation link
    window.open("https://paypal.me/cancercompass", "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Support Our Cause
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Make a <span className="text-gradient-gold">Donation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your generosity directly supports cancer patients and their families during their most
              challenging times.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
              Your Impact
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Your Donation Helps
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every dollar makes a difference. Here's how your contribution supports families
              affected by cancer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactItems.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border card-hover text-center group"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="font-display text-3xl font-bold text-primary mb-2">
                  {item.amount}
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Donation CTA */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-section rounded-3xl p-8 md:p-12 border border-border text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-pulse-gold">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-muted-foreground mb-8">
                Click below to donate securely through PayPal. Every contribution, no matter the
                size, helps us support families in need.
              </p>

              {/* PayPal Button */}
              <Button
                variant="gold"
                size="xl"
                className="mb-4"
                onClick={handlePayPalClick}
              >
                <Heart />
                Donate via PayPal
              </Button>

              <p className="text-sm text-muted-foreground">
                PayPal: <span className="text-primary font-medium">@cancercompass</span>
              </p>

              {/* Placeholder PayPal Embed Area */}
              <div className="mt-8 p-6 bg-muted rounded-xl border border-border">
                <p className="text-muted-foreground text-sm mb-2">
                  Alternative: Scan QR code or visit
                </p>
                <a
                  href="https://paypal.me/cancercompass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  paypal.me/cancercompass
                </a>
                <div className="mt-4 w-32 h-32 mx-auto bg-background rounded-lg flex items-center justify-center border border-border p-2">
                  <img
                    src="/images/paypal-qr-code.png"
                    alt="PayPal QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-gradient-section relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
                Transparency & Trust
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Trust Matters
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're committed to transparency and ensuring your donation makes the biggest
                impact possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trustItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed pt-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Other Ways to Support
          </h2>
          <p className="text-muted-foreground mb-8">
            Can't donate right now? There are other meaningful ways you can help our cause.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <a href="/volunteer">
                <Users />
                Volunteer Your Time
              </a>
            </Button>
            <Button variant="gold" size="xl" asChild>
              <a href="/contact">
                <Heart />
                Spread the Word
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
