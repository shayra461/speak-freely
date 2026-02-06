import { Navbar } from "@/components/Navbar";
import { ResearchSection } from "@/components/ResearchSection";
import { ProblemSection } from "@/components/ProblemSection";
import { InsightsSection } from "@/components/InsightsSection";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

const ResearchPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 gradient-navy">
          <div className="container-narrow text-center">
            <FadeIn>
              <p className="text-sky-glow font-semibold text-sm uppercase tracking-widest mb-3">
                Our Foundation
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
                Research & Methodology
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
                Every conversation at Away From Work is grounded in doctoral research — not assumptions.
              </p>
            </FadeIn>
          </div>
        </section>
        <ProblemSection />
        <ResearchSection />
        <InsightsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ResearchPage;
