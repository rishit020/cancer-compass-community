import Layout from "@/components/layout/Layout";
import { Heart, Users, Calendar, Gift } from "lucide-react";

const benefits = [
  { icon: Heart, text: "Make a real difference in families' lives" },
  { icon: Users, text: "Join a supportive community of like-minded volunteers" },
  { icon: Calendar, text: "Flexible scheduling to fit your availability" },
  { icon: Gift, text: "Gain valuable experience and skills" },
];

const Volunteer = () => {

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

              <div className="w-full bg-muted/30 rounded-xl p-6 pb-10">
                <div className="w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSczfRs_gmOndpreDvvomiMpJ9JlayczKR4-jz5AhdCMP2p73g/viewform?embedded=true"
                    height="800"
                    loading="lazy"
                    className="w-full border-0"
                    style={{ minHeight: "800px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;
