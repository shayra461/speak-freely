import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Briefcase, Users, Lightbulb, ShieldCheck, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const audiences = [
  {
    icon: Briefcase,
    title: "Employees Across All Industries",
    description:
      "From entry-level to C- suite executives, every working adult deserves a safe space to process workplace experiences.",
  },
  {
    icon: Users,
    title: "Employees experiencing workplace problems / situations",
    description:
      "Those facing uncertainty, discomfort, or difficult interpersonal dynamics at work.",
  },
  {
    icon: Lightbulb,
    title: "Individuals Seeking Clarity",
    description:
      "People who want clarity, perspective and ideas for consideration without the risk of involving their employer.",
  },
];

export function ProblemSection() {
  return (
    <section id="audience" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <FadeIn>
          <div className="container-narrow text-center mb-16">
            <motion.p
              className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Who This Is For
            </motion.p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
              Built for Every Working Adult
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-20">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100">
                <div className="flex items-center gap-3 mb-4 text-rose-600">
                  <HelpCircle className="w-6 h-6" />
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight">The Problem</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Employees don't feel safe being completely honest at work.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-100">
                <div className="flex items-center gap-3 mb-4 text-sky-600">
                  <ShieldCheck className="w-6 h-6" />
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight">The Solution</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A safe haven for working adults. Away From Work provides a confidential, psychologically safe environment where working adults can talk through uncomfortable workplace situations.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed mb-16 space-y-6">
              <p>
                A safe space to reflect, explore, and leave with ideas for consideration. Away from work provides individuals, across all industries, the ability to speak frankly, without their employers being made aware, and without fear of employer retaliation.
              </p>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={0.15}>
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-sm text-center cursor-pointer group"
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-sky flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-16 flex justify-center">
          <Button variant="hero" size="xl" asChild className="px-12">
            <Link to="/how-it-works">How It Works</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
