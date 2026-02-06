import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ResearchSection } from "@/components/ResearchSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorks } from "@/components/HowItWorks";
import { AudienceSection } from "@/components/AudienceSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ResearchSection />
        <SolutionSection />
        <HowItWorks />
        <AudienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
