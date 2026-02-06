import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { Shield, FlaskConical, Scale, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const trustSignals = [
  { icon: Shield, label: "Confidential & Secure" },
  { icon: FlaskConical, label: "Research-Backed Approach" },
  { icon: Scale, label: "Not Legal or Mental Health Advice" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with parallax feel */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="African American professional in calm reflection near a window"
          className="w-full h-full object-cover scale-105"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 8, ease: "easeOut" }}
          loading="eager"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-sky/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-light/30 bg-sky-light/10 backdrop-blur-sm mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Shield className="h-4 w-4 text-sky-glow" />
                <span className="text-sm font-medium text-primary-foreground/90">
                  Confidential & Psychologically Safe
                </span>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-primary-foreground">
                Psychological Safety
                <br />
                <span className="text-sky-glow">Away From Work</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-primary-foreground/75 max-w-xl">
                Confidential, judgment-free conversations to help you navigate
                uncomfortable workplace situations — safely, privately, and away
                from your employer.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact" className="group">
                    Start a Confidential Conversation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/how-it-works">How It Works</Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="mt-12 flex flex-wrap gap-6">
                {trustSignals.map((signal, i) => (
                  <motion.div
                    key={signal.label}
                    className="flex items-center gap-2 text-primary-foreground/70"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.15 }}
                  >
                    <signal.icon className="h-4 w-4 text-sky-glow" />
                    <span className="text-sm font-medium">{signal.label}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Floating Stats Card */}
          <div className="hidden lg:block lg:col-span-5">
            <FadeIn delay={0.6} direction="right">
              <motion.div
                className="bg-card/10 backdrop-blur-md border border-primary-foreground/10 rounded-2xl p-8 shadow-2xl"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-6">
                  Why Away From Work?
                </h3>
                <div className="space-y-5">
                  {[
                    { stat: "85%", desc: "of employees filter workplace survey responses" },
                    { stat: "3x", desc: "more candid when surveyed away from work" },
                    { stat: "40+", desc: "years of executive experience behind AFW" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.stat}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + i * 0.2 }}
                    >
                      <span className="font-heading text-2xl font-bold text-sky-glow">
                        {item.stat}
                      </span>
                      <span className="text-sm text-primary-foreground/70 leading-snug mt-1">
                        {item.desc}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-primary-foreground/10">
                  <Button variant="hero-outline" size="default" className="w-full" asChild>
                    <Link to="/research">Explore the Research</Link>
                  </Button>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-sky-glow"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
