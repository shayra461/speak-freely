import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.svg";

const footerLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Band */}
      <div className="section-padding border-b border-primary-foreground/10 relative overflow-hidden">
        {/* Animated background accent */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-narrow text-center relative z-10">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Start Your Confidential Conversation Today
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Take the first step toward clarity and peace of mind — safely, and
              away from your employer.
            </p>
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button variant="hero" size="xl" className="group" asChild>
                <Link to="/contact">
                  Begin Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container-wide py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center group">
            <img
              src={logoWhite}
              alt="Away From Work"
              className="h-14 w-auto"
            />
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <motion.div key={link.label} whileHover={{ y: -2 }}>
                <Link
                  to={link.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Away From Work, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
