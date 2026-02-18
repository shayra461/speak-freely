import { FadeIn } from "@/components/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlertTriangle, Lock, Unlock, XCircle, CheckCircle } from "lucide-react";
import atWorkImage from "@/assets/at-work.jpg";
import awayFromWorkImage from "@/assets/away-from-work.jpg";
import { useRef } from "react";

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <FadeIn>
          <div className="container-narrow text-center mb-20">
            <motion.p
              className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Problem
            </motion.p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Anonymity doesn’t always <br className="hidden md:block" />
              ensure honesty
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Organizations believe employees can be entirely honest without concern. But when
              surveys happen <strong>inside</strong> the workplace, the data is often
              filtered, guarded, and incomplete—creating a dangerous blind spot.
            </p>
          </div>
        </FadeIn>

        {/* Dynamic Comparison Grid - Horizontal Way */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* Left: The Reality (Negative) */}
          <FadeIn direction="right" delay={0.2} className="h-full">
            <motion.div
              className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/50 transition-colors duration-500 z-10" />
              <motion.img
                src={atWorkImage}
                alt="Tense office environment"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ scale: 1.1 }} // Slight zoom for parallax feel
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.7 }}
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3 text-white">
                    <div className="p-2 bg-rose-500/80 rounded-lg">
                      <Lock className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl">Internal Surveys</h3>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span>Fear of retaliation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span>Response bias</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span>"Corporate safe" answers</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Right: The Solution (Positive) */}
          <FadeIn direction="left" delay={0.4} className="h-full">
            <motion.div
              className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-sky-200/50 ring-4 ring-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              style={{ y }} // Parallax effect
            >
              <div className="absolute inset-0 bg-sky-900/30 group-hover:bg-sky-900/40 transition-colors duration-500 z-10" />
              <motion.img
                src={awayFromWorkImage}
                alt="Relaxed reflection"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ scale: 1.1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.7 }}
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3 text-slate-900">
                    <div className="p-2 bg-sky-500 rounded-lg text-white">
                      <Unlock className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl">Away From Work</h3>
                  </div>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Speak freely</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Radically honest</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>True organizational health</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
