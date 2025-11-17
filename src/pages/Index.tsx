import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ImpactDashboard } from "@/components/sections/ImpactDashboard";
import { UserTypes } from "@/components/sections/UserTypes";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeaturedProjects />
      <HowItWorks />
      <ImpactDashboard />
      <UserTypes />
      <Footer />
    </div>
  );
};

export default Index;
