import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { WorkplaceSituationsSection } from "@/components/WorkplaceSituationsSection";
import { ResearchSection } from "@/components/ResearchSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorks } from "@/components/HowItWorks";
import { AudienceSection } from "@/components/AudienceSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <WorkplaceSituationsSection />
        <HowItWorks />
        <ResearchSection />
        <SolutionSection />
        <AudienceSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
