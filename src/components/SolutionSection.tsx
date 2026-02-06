import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const isItems = [
  "Confidential conversations",
  "Individually tailored discussions",
  "Insight-driven, not advice-driven",
];

const isNotItems = ["Legal services", "Mental health treatment"];

export function SolutionSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <FadeIn>
          <div className="container-narrow text-center mb-16">
            <motion.p
              className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Solution
            </motion.p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              A Safe Haven for Working Adults
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Away From Work provides a confidential, psychologically safe
              environment where working adults can talk through uncomfortable
              workplace situations without involving HR, management, or legal
              systems.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <motion.div
              className="bg-card rounded-2xl border border-border p-8 shadow-sm h-full"
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-6">
                What AFW Is
              </h3>
              <StaggerContainer className="space-y-4">
                {isItems.map((item) => (
                  <motion.div
                    key={item}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="mt-0.5 p-1 rounded-full bg-secondary"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Check className="h-4 w-4 text-accent" />
                    </motion.div>
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <motion.div
              className="bg-section-alt rounded-2xl border border-border p-8 h-full"
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-6">
                What AFW Is Not
              </h3>
              <StaggerContainer className="space-y-4">
                {isNotItems.map((item) => (
                  <motion.div
                    key={item}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="mt-0.5 p-1 rounded-full bg-muted"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
