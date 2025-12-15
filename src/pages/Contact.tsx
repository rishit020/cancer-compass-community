import Layout from "@/components/layout/Layout";
import { Mail, MessageSquare, Clock, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "contact@cancercompass.org",
    description: "We'll respond within 24-48 hours",
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "24-48 hours",
    description: "For non-urgent inquiries",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Community-based",
    description: "Serving families locally",
  },
];

const Contact = () => {

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have questions, ideas, or want to get involved? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-muted rounded-xl">
                <MessageSquare className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Quick Response
                </h3>
                <p className="text-muted-foreground text-sm">
                  For urgent matters, please mention "URGENT" in your subject line and we'll
                  prioritize your message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 md:p-10 border border-border shadow-lg">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and we'll get back to you as soon as possible.
                </p>

                <div className="w-full bg-muted/30 rounded-xl p-6 pb-10">
                  <div className="w-full overflow-hidden rounded-lg">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdfFUO8kDy4SXM_XzsKuobtON4bSrr2fAT_o9HwFNrgCCHyJA/viewform?embedded=true"
                      height="900"
                      loading="lazy"
                      className="w-full border-0"
                      style={{ minHeight: "900px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
