import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Calendar, MessageCircle, Compass, Sun, ArrowRight, ArrowRight as ArrowIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="section-padding bg-section-alt overflow-hidden">
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
              The Process
            </motion.p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              How It Works
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative" staggerDelay={0.1}>
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="relative"
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-card/80 backdrop-blur-sm group">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
                  >
                    <step.icon className="h-7 w-7 text-sky-500" />
                    <div className="absolute inset-0 bg-sky-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>

                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Step 0{i + 1}
                    </p>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-sky-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Indicator for flow on desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-0 text-slate-300">
                      <ArrowIcon className="w-6 h-6 opacity-30" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <Button variant="cta" size="lg" className="group rounded-full px-8 shadow-lg shadow-sky-500/20" asChild>
              <Link to="/contact">
                Schedule Your Session
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
