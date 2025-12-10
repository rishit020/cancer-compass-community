import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { X } from "lucide-react";

const categories = ["All", "Events", "Volunteers", "Outreach", "Fundraisers", "Care Packages"];

const galleryImages = [
  { id: 1, src: "/placeholder.svg", alt: "Community event", category: "Events" },
  { id: 2, src: "/placeholder.svg", alt: "Volunteers helping", category: "Volunteers" },
  { id: 3, src: "/placeholder.svg", alt: "Outreach program", category: "Outreach" },
  { id: 4, src: "/placeholder.svg", alt: "Fundraising gala", category: "Fundraisers" },
  { id: 5, src: "/placeholder.svg", alt: "Care package assembly", category: "Care Packages" },
  { id: 6, src: "/placeholder.svg", alt: "Awareness walk", category: "Events" },
  { id: 7, src: "/placeholder.svg", alt: "Team meeting", category: "Volunteers" },
  { id: 8, src: "/placeholder.svg", alt: "School presentation", category: "Outreach" },
  { id: 9, src: "/placeholder.svg", alt: "Bake sale", category: "Fundraisers" },
  { id: 10, src: "/placeholder.svg", alt: "Delivering packages", category: "Care Packages" },
  { id: 11, src: "/placeholder.svg", alt: "Community gathering", category: "Events" },
  { id: 12, src: "/placeholder.svg", alt: "Volunteer training", category: "Volunteers" },
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
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-secondary-foreground/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
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
