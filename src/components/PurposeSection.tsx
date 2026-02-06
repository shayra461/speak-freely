import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Target, Heart, Rocket, Star } from "lucide-react";

const values = [
  { icon: Star, label: "Integrity" },
  { icon: Heart, label: "Empathy" },
  { icon: Target, label: "Skill" },
];

const pillars = [
  {
    label: "Purpose",
    content:
      "To shatter historical workplace paradigms by bringing psychological safety to working adults.",
  },
  {
    label: "Mission",
    content:
      "To offer confidential, individually tailored conversations to employees on demand.",
  },
  {
    label: "Vision",
    content:
      "Accelerate the world's transition to healthier workplace environments through accurate, actionable insights gathered away from work.",
  },
];

export function PurposeSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <FadeIn>
          <div className="container-narrow text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Purpose, Mission & Vision
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.label}
              variants={staggerItem}
              className="bg-card rounded-2xl border border-border p-8 shadow-sm"
            >
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                {pillar.label}
              </p>
              <p className="text-foreground leading-relaxed">{pillar.content}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-8">
              Our Values
            </h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {values.map((v) => (
                <div key={v.label} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <v.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-heading font-semibold text-foreground">
                    {v.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
