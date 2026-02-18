import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Check, X, ShieldCheck, AlertCircle } from "lucide-react";

const isItems = [
  "Confidential conversations",
  "Individually tailored discussions",
  "Insight-driven, not advice-driven",
];

const isNotItems = ["Legal services", "Mental health treatment"];

export function SolutionSection() {
  return (
    <section className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container-wide relative z-10">
        <FadeIn>
          <div className="container-narrow text-center mb-20">
            <motion.p
              className="text-sky-400 font-bold text-sm uppercase tracking-widest mb-4 inline-block px-3 py-1 bg-sky-500/10 rounded-full border border-sky-500/20"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Solution
            </motion.p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              A Safe Haven for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Working Adults</span>
            </h2>
            <p className="mt-6 text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Away From Work provides a confidential, psychologically safe
              environment where working adults can talk through uncomfortable
              workplace situations without involving HR, management, or legal
              systems.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {/* Positive Card - Elevated */}
          <FadeIn delay={0.2} direction="right">
            <motion.div
              className="relative h-full bg-slate-900/50 rounded-[2rem] border border-sky-500/30 p-10 shadow-xl shadow-sky-900/20 hover:shadow-sky-900/40 transition-shadow duration-500 overflow-hidden group backdrop-blur-sm"
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-indigo-500" />
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 flex items-center justify-center text-sky-400 shadow-sm border border-sky-500/20 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">
                  What AFW Is
                </h3>
              </div>

              <StaggerContainer className="space-y-5">
                {isItems.map((item) => (
                  <motion.div
                    key={item}
                    variants={staggerItem}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20">
                      <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                    </div>
                    <span className="text-lg text-slate-200 font-medium">{item}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </motion.div>
          </FadeIn>

          {/* Negative Card - Muted */}
          <FadeIn delay={0.4} direction="left">
            <motion.div
              className="relative h-full bg-slate-900/30 rounded-[2rem] border border-slate-800 p-10 shadow-lg shadow-black/20 hover:shadow-black/40 transition-shadow duration-500 backdrop-blur-sm"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-4 mb-8 opacity-80">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 shadow-sm border border-slate-700">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-400">
                  What AFW Is Not
                </h3>
              </div>

              <StaggerContainer className="space-y-5">
                {isNotItems.map((item) => (
                  <motion.div
                    key={item}
                    variants={staggerItem}
                    className="flex items-start gap-4 opacity-60 group-hover:opacity-80 transition-opacity"
                  >
                    <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                      <X className="w-3.5 h-3.5 text-rose-400 stroke-[3]" />
                    </div>
                    <span className="text-lg text-slate-500 group-hover:text-slate-400 transition-colors">{item}</span>
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
