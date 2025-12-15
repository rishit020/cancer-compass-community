import { useEffect, useState, useRef } from "react";
import { DollarSign, Users, Calendar, Gift } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: 1000,
    suffix: "+",
    prefix: "$",
    label: "Raised So Far (and growing)",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    prefix: "",
    label: "Active Volunteers",
  },
  {
    icon: Calendar,
    value: 10,
    suffix: "+",
    prefix: "",
    label: "Events Organized",
  },
  {
    icon: Gift,
    value: 25,
    suffix: "+",
    prefix: "",
    label: "Care Packages Delivered",
  },
];

const AnimatedCounter = ({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const ImpactStats = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      
      {/* Decorative gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Making a Real Difference
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Every donation, every volunteer hour, and every event brings us closer to our goal of supporting families affected by cancer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group"
            >
              {/* Card with premium styling */}
              <div className="relative p-8 rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_hsl(43,85%,55%,0.2)]">
                {/* Icon container - always visible */}
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                
                {/* Animated number */}
                <div className="text-center mb-3">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                
                {/* Label - high contrast */}
                <p className="text-center text-foreground/80 text-sm font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
