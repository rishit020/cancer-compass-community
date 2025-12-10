import { useEffect, useState, useRef } from "react";
import { DollarSign, Users, Calendar, Gift } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: 1000,
    suffix: "+",
    prefix: "$",
    label: "Raised for Cancer Patients",
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
    <div ref={ref} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const ImpactStats = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Making a Real Difference
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Every donation, every volunteer hour, and every event brings us closer to our goal of supporting families affected by cancer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="text-secondary-foreground/70 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
