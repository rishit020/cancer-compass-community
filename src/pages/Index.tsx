import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FoundersSection from "@/components/home/FoundersSection";
import MissionSection from "@/components/home/MissionSection";
import ImpactStats from "@/components/home/ImpactStats";
import ImageCarousel from "@/components/home/ImageCarousel";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FoundersSection />
      <MissionSection />
      <ImpactStats />
      <ImageCarousel />
      <CTASection />
    </Layout>
  );
};

export default Index;
