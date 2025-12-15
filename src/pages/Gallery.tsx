import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const categories = ["All", "Events", "Volunteers", "Outreach", "Fundraisers", "Care Packages"];

const galleryImages = [
  { id: 1, src: "/images/community-gathering-group.jpg", alt: "Community Gathering with Volunteers", category: "Events" },
  { id: 2, src: "/images/founders-group-photo.jpg", alt: "Cancer Compass Founders Group Photo", category: "Volunteers" },
  { id: 3, src: "/images/fundraising-table.jpg", alt: "Fundraising Event Table Setup", category: "Fundraisers" },
  { id: 4, src: "/images/gallery_1.JPG", alt: "Cancer Compass Community Event in Action", category: "Events" },
  { id: 5, src: "/images/gallery_2.JPG", alt: "Community Gathering and Outreach Event", category: "Outreach" },
  { id: 6, src: "/images/gallery_3.JPG", alt: "Volunteers and Community Members Gathering", category: "Volunteers" },
  { id: 7, src: "/images/gallery_4.JPG", alt: "Fundraising Event Celebration in Action", category: "Fundraisers" },
  { id: 8, src: "/images/gallery_5.JPG", alt: "Community Event and Gathering in Action", category: "Events" },
  { id: 9, src: "/images/gallery_6.JPG", alt: "Volunteer Activities and Outreach in Action", category: "Outreach" },
  { id: 10, src: "/images/gallery_7.JPG", alt: "Care Package Distribution Event in Action", category: "Care Packages" },
  { id: 11, src: "/images/pickleball-event-action.jpg", alt: "Fundraising Pickle Ball Tournament in Action", category: "Fundraisers" },
  { id: 12, src: "/images/pickleball-fundraiser-group.jpg", alt: "Fundraising Pickle Ball Event with Volunteers", category: "Fundraisers" },
  { id: 13, src: "/images/volunteers-group-photo.jpg", alt: "Group of Cancer Compass Volunteers", category: "Volunteers" },
  { id: 14, src: "/images/gallery_8.JPG", alt: "Cancer Compass Community Event in Action", category: "Events" },
  { id: 15, src: "/images/gallery_9.JPG", alt: "Community Outreach and Engagement Event", category: "Outreach" },
  { id: 16, src: "/images/gallery_10.JPG", alt: "Volunteer Activities and Community Support", category: "Volunteers" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Gallery
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Moments of <span className="text-gradient-gold">Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A visual journey through our events, volunteer activities, and community outreach programs.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant="gold"
                size="default"
                className={activeCategory === category ? "shadow-xl scale-105" : "opacity-75 hover:opacity-100"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer card-hover"
                onClick={() => setSelectedImage(image)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 image-fade-in"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-secondary-foreground text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="gold"
            size="icon"
            className="absolute top-4 right-4 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </Button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
            <div className="mt-4 text-center">
              <span className="inline-block bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full mb-2">
                {selectedImage.category}
              </span>
              <p className="text-secondary-foreground text-lg">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
