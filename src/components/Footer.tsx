import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

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
      <div className="section-padding border-b border-primary-foreground/10">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Start Your Confidential Conversation Today
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Take the first step toward clarity and peace of mind — safely, and
              away from your employer.
            </p>
            <div className="mt-8">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Begin Now</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container-wide py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-sky-glow" />
            <span className="font-heading font-semibold text-sm">
              Away From Work, LLC
            </span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
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
