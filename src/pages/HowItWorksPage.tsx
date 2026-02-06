import { Navbar } from "@/components/Navbar";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 gradient-navy">
          <div className="container-narrow text-center">
            <FadeIn>
              <p className="text-sky-glow font-semibold text-sm uppercase tracking-widest mb-3">
                The Process
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
                How It Works
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
                A simple, confidential process designed to give you clarity and direction — on your terms.
              </p>
            </FadeIn>
          </div>
        </section>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
