import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function ResearchSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow text-center">
        <FadeIn>
          <motion.p
            className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Research Foundation
          </motion.p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Backed by Research, Not Guesswork
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.div
            className="mt-10 bg-card rounded-2xl border border-border p-8 md:p-12 text-left shadow-sm"
            whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                className="p-3 rounded-lg bg-secondary"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <BookOpen className="h-6 w-6 text-accent" />
              </motion.div>
              <div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">
                  Doctoral Research
                </p>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground leading-snug">
                  "Away from Work Surveys: The Role of Research Setting in
                  Capturing an Accurate Description of Leadership in
                  Organizations"
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              When participants were surveyed away from their employers,
              responses were significantly more candid and accurate. This
              foundational research proves that the setting in which employees
              share their experiences directly impacts the honesty and quality of
              their responses.
            </p>
            <div className="mt-8">
              <Button variant="outline" size="lg" className="group" asChild>
                <Link to="/research">
                  Learn About Our Methodology
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
