import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow mx-auto relative z-10">
        <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-border text-center">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
            Join Our Mission
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Whether you donate, volunteer, or spread the word, every action helps us support families facing cancer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/donate">
              <Button variant="gold" size="xl">
                <Heart />
                Donate Now
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="gold" size="xl">
                <Users />
                Become a Volunteer
              </Button>
            </Link>
          </div>

          {/* Upcoming Events Teaser */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Upcoming Events</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["Community Walk for Hope", "Annual Gala Fundraiser", "Care Package Drive"].map(
                (event, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm text-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {event}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
