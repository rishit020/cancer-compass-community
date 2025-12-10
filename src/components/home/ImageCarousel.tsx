import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselImages = [
  {
    src: "/placeholder.svg",
    alt: "Volunteers at community event",
    caption: "Community Outreach Event",
  },
  {
    src: "/placeholder.svg",
    alt: "Fundraising event",
    caption: "Annual Fundraising Gala",
  },
  {
    src: "/placeholder.svg",
    alt: "Care package assembly",
    caption: "Care Package Assembly Day",
  },
  {
    src: "/placeholder.svg",
    alt: "Team photo",
    caption: "Our Dedicated Team",
  },
  {
    src: "/placeholder.svg",
    alt: "Awareness campaign",
    caption: "Cancer Awareness Campaign",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
            Our Community
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Moments That Matter
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our events, volunteers, and the impact we're making together.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted shadow-xl">
            <img
              src={carouselImages[currentIndex].src}
              alt={carouselImages[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-display text-xl md:text-2xl font-semibold text-secondary-foreground">
                {carouselImages[currentIndex].caption}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg opacity-80 hover:opacity-100"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg opacity-80 hover:opacity-100"
            onClick={goToNext}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
