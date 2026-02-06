import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Lock, Server, EyeOff, ShieldCheck, Ban } from "lucide-react";

const privacyItems = [
  { icon: Lock, text: "Confidential sessions" },
  { icon: Server, text: "Secure third-party hosting" },
  { icon: ShieldCheck, text: "Scalable, enterprise-grade infrastructure" },
  { icon: EyeOff, text: "No employer access" },
  { icon: Ban, text: "No session content shared with employers" },
];

export function PrivacySection() {
  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-wide relative z-10">
        <FadeIn>
          <div className="container-narrow text-center mb-16">
            <motion.p
              className="text-sky-glow font-semibold text-sm uppercase tracking-widest mb-3"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Security & Privacy
            </motion.p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
              Your Privacy Comes First
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
          {privacyItems.map((item) => (
            <motion.div
              key={item.text}
              variants={staggerItem}
              className="flex items-center gap-4 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5 backdrop-blur-sm"
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.2)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="h-5 w-5 text-sky-glow flex-shrink-0" />
              </motion.div>
              <span className="text-primary-foreground/90 text-sm font-medium">
                {item.text}
              </span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
