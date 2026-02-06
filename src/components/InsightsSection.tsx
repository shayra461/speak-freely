import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

export function InsightsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow text-center">
        <FadeIn>
          <motion.div
            className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-6"
            whileInView={{ rotate: [0, 360], scale: [0.5, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.15, rotate: 10 }}
          >
            <BarChart3 className="h-6 w-6 text-accent" />
          </motion.div>
          <motion.p
            className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Insights & Phase 2
          </motion.p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Turning Conversations Into Insights
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Away From Work captures anonymized demographic and situational data
            to inform future insights and improve workplace environments globally
            — without compromising individual privacy.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
