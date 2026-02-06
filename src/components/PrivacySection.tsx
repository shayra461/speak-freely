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
    <section id="privacy" className="section-padding gradient-navy">
      <div className="container-wide">
        <FadeIn>
          <div className="container-narrow text-center mb-16">
            <p className="text-sky-glow font-semibold text-sm uppercase tracking-widest mb-3">
              Security & Privacy
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
              Your Privacy Comes First
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {privacyItems.map((item) => (
            <motion.div
              key={item.text}
              variants={staggerItem}
              className="flex items-center gap-4 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5"
            >
              <item.icon className="h-5 w-5 text-sky-glow flex-shrink-0" />
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
