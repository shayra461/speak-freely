import { Navbar } from "@/components/Navbar";
import { PurposeSection } from "@/components/PurposeSection";

import { FounderSection } from "@/components/FounderSection";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 gradient-navy">
          <div className="container-narrow text-center">
            <FadeIn>
              <p className="text-sky-glow font-semibold text-sm uppercase tracking-widest mb-3">
                About Us
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
                Our Story & Mission
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
                Built on decades of executive experience and doctoral research, Away From Work exists to change how employees experience the workplace.
              </p>
            </FadeIn>
          </div>
        </section>

        <PurposeSection />

        <FounderSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
