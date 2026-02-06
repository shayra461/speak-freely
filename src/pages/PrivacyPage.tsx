import { Navbar } from "@/components/Navbar";
import { PrivacySection } from "@/components/PrivacySection";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 gradient-navy">
          <div className="container-narrow text-center">
            <FadeIn>
              <p className="text-sky-glow font-semibold text-sm uppercase tracking-widest mb-3">
                Your Safety
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
                Privacy & Security
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
                Your confidentiality is our highest priority. Learn how we protect your privacy at every step.
              </p>
            </FadeIn>
          </div>
        </section>
        <PrivacySection />

        {/* Extended Privacy Details */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <FadeIn>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Privacy Policy
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  At Away From Work, LLC, we take your privacy seriously. This policy describes how we collect,
                  use, and protect your personal information when you use our services.
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground">Information We Collect</h3>
                <p>
                  We collect only the information necessary to provide our services, including your name,
                  email address, and scheduling preferences. Session content remains strictly confidential.
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground">How We Use Your Information</h3>
                <p>
                  Your information is used solely to facilitate your confidential sessions and improve our services.
                  We never share individual session content with employers or third parties.
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground">Data Security</h3>
                <p>
                  We employ enterprise-grade security measures to protect your data, including encrypted storage,
                  secure hosting infrastructure, and strict access controls.
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground">Your Rights</h3>
                <p>
                  You have the right to access, correct, or delete your personal information at any time.
                  Contact us to exercise these rights.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
