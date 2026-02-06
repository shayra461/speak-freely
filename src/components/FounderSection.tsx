import { FadeIn } from "@/components/FadeIn";
import { ExternalLink, Linkedin } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

export function FounderSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <FadeIn direction="left" className="md:col-span-2">
            <div className="relative">
              <img
                src={founderImage}
                alt="Dr. Edith Dorsey, Founder of Away From Work"
                className="rounded-2xl shadow-lg w-full max-w-sm mx-auto object-cover aspect-square"
                loading="lazy"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2} className="md:col-span-3">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              About the Founder
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Dr. Edith Dorsey
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              With 40+ years of executive experience across the United States,
              from bedside to boardroom, Dr. Dorsey brings unmatched depth and
              credibility to the mission of workplace psychological safety.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Founder's Website
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
