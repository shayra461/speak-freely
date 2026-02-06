import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { ExternalLink, Linkedin } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

export function FounderSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <FadeIn direction="left" className="md:col-span-2">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                src={founderImage}
                alt="Dr. Edith Dorsey, Founder of Away From Work"
                className="rounded-2xl shadow-lg w-full max-w-sm mx-auto object-cover aspect-square"
                loading="lazy"
                whileInView={{ opacity: [0, 1], scale: [0.95, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              />
              {/* Decorative accent */}
              <motion.div
                className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl bg-accent/20 -z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              />
            </motion.div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2} className="md:col-span-3">
            <motion.p
              className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About the Founder
            </motion.p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Dr. Edith Dorsey
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              With 40+ years of executive experience across the United States,
              from bedside to boardroom, Dr. Dorsey brings unmatched depth and
              credibility to the mission of workplace psychological safety.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ExternalLink className="h-4 w-4" />
                Founder's Website
              </motion.a>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
