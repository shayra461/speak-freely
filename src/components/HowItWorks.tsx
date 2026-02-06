import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Calendar, MessageCircle, Compass, Sun } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Visit the Website",
    description: "Come to us away from work, on your own terms.",
  },
  {
    icon: Calendar,
    title: "Schedule a Session",
    description: "Book a confidential conversation at a time that suits you.",
  },
  {
    icon: MessageCircle,
    title: "Share Your Situation",
    description:
      "Speak openly about your workplace experience in a safe space.",
  },
  {
    icon: Compass,
    title: "Explore Perspectives",
    description: "Discover new angles and possible paths forward together.",
  },
  {
    icon: Sun,
    title: "Leave with Clarity",
    description: "Walk away with greater understanding and personal direction.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-section-alt">
      <div className="container-wide">
        <FadeIn>
          <div className="container-narrow text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              The Process
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              How It Works
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="max-w-3xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <motion.div key={step.title} variants={staggerItem}>
              <div className="flex gap-6 items-start">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl gradient-sky flex items-center justify-center shadow-md">
                    <step.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-16 bg-border mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    Step {i + 1}
                  </p>
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <div className="text-center mt-8">
            <Button variant="cta" size="lg" asChild>
              <a href="#contact">Schedule Your Session</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
