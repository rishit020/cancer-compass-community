import { Compass, Heart, Users, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Guide",
    description: "Providing direction and resources for families navigating the challenges of cancer treatment and recovery.",
  },
  {
    icon: Heart,
    title: "Support",
    description: "Offering emotional, practical, and financial assistance to those who need it most during difficult times.",
  },
  {
    icon: Users,
    title: "Connect",
    description: "Building a community of volunteers, donors, and supporters united in the fight against cancer.",
  },
  {
    icon: Lightbulb,
    title: "Educate",
    description: "Raising awareness about cancer prevention, treatment options, and ways to help in our community.",
  },
];

const MissionSection = () => {
  return (
    <section className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-wide mx-auto relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
            Our Mission
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Guiding, Supporting & Uplifting
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We exist to ensure no family faces the journey through cancer alone. Our mission is built on four key pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <pillar.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
