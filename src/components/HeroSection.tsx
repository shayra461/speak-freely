import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { Shield, FlaskConical, Scale } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const trustSignals = [
  { icon: Shield, label: "Confidential & Secure" },
  { icon: FlaskConical, label: "Research-Backed Approach" },
  { icon: Scale, label: "Not Legal or Mental Health Advice" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional in calm reflection near a window"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          <FadeIn delay={0.2}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground text-balance">
              Psychological Safety for Working Adults —{" "}
              <span className="text-sky">Away From Work</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-primary-foreground/80 max-w-xl">
              Confidential, judgment-free conversations to help you navigate
              uncomfortable workplace situations — safely, privately, and away
              from your employer.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">Start a Confidential Conversation</a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#how-it-works">How It Works</a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="mt-12 flex flex-wrap gap-6">
              {trustSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="flex items-center gap-2 text-primary-foreground/70"
                >
                  <signal.icon className="h-4 w-4 text-sky-glow" />
                  <span className="text-sm font-medium">{signal.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
