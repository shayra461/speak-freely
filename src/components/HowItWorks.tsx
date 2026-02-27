import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Calendar, MessageCircle, Compass, Sun, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Globe,
    title: "Explore the website",
    description: "Come to us away from work, on your own terms. Your journey to clarity starts with a simple click in a private browser.",
    color: "bg-sky-400",
    shadow: "shadow-sky-200"
  },
  {
    icon: Calendar,
    title: "Schedule a Session",
    description: "Schedule a Confidential and Psychologically Safe Conversation",
    color: "bg-sky-500",
    shadow: "shadow-sky-300"
  },
  {
    icon: MessageCircle,
    title: "Share Your Problem / Situation",
    description:
      "Speak openly about your workplace experience in a safe and confidential space.",
    color: "bg-blue-500",
    shadow: "shadow-blue-200"
  },
  {
    icon: Compass,
    title: "Explore",
    description: "Discover ideas and possible paths forward",
    color: "bg-blue-600",
    shadow: "shadow-blue-300"
  },
  {
    icon: Sun,
    title: "Leave with Clarity",
    description: "Leave with clarity, understanding, and ideas for consideration",
    color: "bg-indigo-600",
    shadow: "shadow-indigo-200"
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container-wide">
        <FadeIn>
          <div className="container-narrow text-center mb-24">
            <motion.p
              className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Process
            </motion.p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Five simple steps to regaining your peace of mind.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto relative px-4">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[39px] md:left-[59px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-sky-200 via-blue-200 to-indigo-200" />

          <StaggerContainer className="space-y-16 relative" staggerDelay={0.2}>
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="relative flex items-start gap-8 md:gap-12"
              >
                {/* Icon Column */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl ${step.color} ${step.shadow} flex items-center justify-center text-white shadow-xl transition-transform duration-500`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <step.icon className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />

                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 md:w-10 md:h-10 bg-white text-slate-900 rounded-full flex items-center justify-center text-sm md:text-base font-bold shadow-md border border-slate-100">
                      {i + 1}
                    </div>
                  </motion.div>
                </div>

                {/* Text Content Column */}
                <div className="flex-1 pt-2 md:pt-4">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center mt-24">
            <Button variant="hero" size="xl" className="group px-8 md:px-12 py-6 rounded-2xl shadow-2xl shadow-sky-500/20 w-full md:w-auto" asChild>
              <Link to="/contact" className="flex items-center justify-center gap-3">
                <Shield className="h-6 w-6 text-white shrink-0" />
                <span className="text-balance text-left md:text-center">Start a Confidential and Psychologically Safe Conversation</span>
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

