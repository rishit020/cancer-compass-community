import { Quote } from "lucide-react";

const founders = [
  {
    name: "Rushil R",
    role: "Co-Founder",
    description: "Driven by a passion to make a difference in the lives of cancer patients and their families.",
  },
  {
    name: "Vrishab P",
    role: "Co-Founder",
    description: "Committed to building a community of support and compassion for those affected by cancer.",
  },
  {
    name: "Krish D",
    role: "Co-Founder",
    description: "Dedicated to creating meaningful volunteer opportunities that truly make an impact.",
  },
];

const FoundersSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
            Our Story
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our Founders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three students united by a shared vision: ensuring no family faces cancer alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border card-hover text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors duration-300">
                <span className="font-display text-2xl font-bold text-muted-foreground">
                  {founder.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {founder.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-4">{founder.role}</p>

              <div className="relative">
                <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-1" />
                <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                  {founder.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
