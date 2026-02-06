import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Briefcase, Users, Lightbulb } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Employees Across All Industries",
    description:
      "From entry-level to executive, every working adult deserves a safe space to process workplace experiences.",
  },
  {
    icon: Users,
    title: "Professionals Navigating Conflict",
    description:
      "Those facing uncertainty, discomfort, or difficult interpersonal dynamics at work.",
  },
  {
    icon: Lightbulb,
    title: "Individuals Seeking Clarity",
    description:
      "People who want perspective and direction without the risk of involving their employer.",
  },
];

export function AudienceSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-wide">
        <FadeIn>
          <div className="container-narrow text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Who This Is For
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Built for Every Working Adult
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="bg-card rounded-2xl border border-border p-8 shadow-sm text-center"
            >
              <div className="w-14 h-14 rounded-xl gradient-sky flex items-center justify-center mx-auto mb-5 shadow-md">
                <item.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
