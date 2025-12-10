import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[90vh] flex items-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Heart className="w-4 h-4 text-primary" />
            Student-Run Nonprofit
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Guiding Families Through{" "}
            <span className="text-gradient-gold">Cancer's Journey</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delay-1">
            Cancer Compass is a student-run nonprofit raising money, hosting events, and bringing volunteers together to support cancer patients and their families.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
            <Link to="/donate">
              <Button variant="gold" size="xl">
                <Heart className="w-5 h-5" />
                Donate Now
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="outline" size="xl">
                <Users className="w-5 h-5" />
                Become a Volunteer
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" size="xl">
                <Calendar className="w-5 h-5" />
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in-delay-3">
            {[
              { value: "$1,000+", label: "Raised So Far" },
              { value: "50+", label: "Active Volunteers" },
              { value: "10+", label: "Events Hosted" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
