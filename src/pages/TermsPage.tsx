import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 gradient-navy">
          <div className="container-narrow text-center">
            <FadeIn>
              <p className="text-sky-glow font-semibold text-sm uppercase tracking-widest mb-3">
                Legal
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
                Terms of Use
              </h1>
            </FadeIn>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow">
            <FadeIn>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-sm text-muted-foreground">Last updated: February 2026</p>

                <h2 className="font-heading text-2xl font-bold text-foreground">1. Agreement to Terms</h2>
                <p>
                  By accessing or using the Away From Work, LLC website and services, you agree to be bound
                  by these Terms of Use. If you do not agree with these terms, please do not use our services.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground">2. Description of Services</h2>
                <p>
                  Away From Work provides confidential, psychologically safe conversations for working adults.
                  Our services are NOT therapy, legal advice, mental health treatment, or HR services. They are
                  insight-driven conversations designed to help you process workplace experiences.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground">3. Confidentiality</h2>
                <p>
                  We are committed to maintaining the confidentiality of your sessions. Session content will not
                  be shared with employers, third parties, or any external entities without your explicit consent,
                  except where required by law.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground">4. Limitation of Liability</h2>
                <p>
                  Away From Work, LLC provides insight-driven conversations only. We are not responsible for
                  decisions or actions taken based on conversations had during sessions. Our services should
                  not be substituted for professional legal, medical, or mental health advice.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground">5. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and design, is the property
                  of Away From Work, LLC and is protected by applicable intellectual property laws.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground">6. Contact</h2>
                <p>
                  For questions about these terms, please contact us through our website.
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

export default TermsPage;
