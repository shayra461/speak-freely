import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ResearchSection } from "@/components/ResearchSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PurposeSection } from "@/components/PurposeSection";
import { AudienceSection } from "@/components/AudienceSection";
import { PrivacySection } from "@/components/PrivacySection";
import { InsightsSection } from "@/components/InsightsSection";
import { FounderSection } from "@/components/FounderSection";
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
        <PurposeSection />
        <AudienceSection />
        <PrivacySection />
        <InsightsSection />
        <FounderSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
