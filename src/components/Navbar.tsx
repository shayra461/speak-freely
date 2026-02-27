import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who Is This For", href: "/who-this-is-for" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
    >
      <div className="container-wide flex items-center justify-between h-24 lg:h-32">
        {/* Logo */}
        <Link to="/" className="flex items-center group shrink-0">
          <img
            src={logo}
            alt="Away From Work"
            className="h-16 md:h-20 w-auto transition-opacity"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-semibold transition-colors hover:text-accent whitespace-nowrap ${location.pathname === link.href
                ? "text-accent"
                : "text-slate-700"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Button className="h-auto py-2.5 px-4 lg:px-5 bg-[#4BA5DB] hover:bg-[#398DBE] text-white shadow-md rounded-xl w-full max-w-[340px] xl:max-w-[380px] whitespace-normal leading-tight text-[13px] xl:text-sm font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 border-0" asChild>
            <Link to="/contact" className="flex items-center gap-2.5 xl:gap-3 text-left">
              <Shield className="h-5 w-5 shrink-0" strokeWidth={2.5} />
              <span className="text-left text-balance">Start a Confidential and Psychologically Safe Conversation</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-b border-border shadow-xl"
        >
          <div className="container-wide py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-semibold py-2 px-1 ${location.pathname === link.href
                  ? "text-accent"
                  : "text-slate-700 hover:text-accent"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-4 py-3 px-5 h-auto bg-[#4BA5DB] hover:bg-[#398DBE] text-white rounded-xl shadow-md border-0 whitespace-normal leading-tight text-sm font-medium" asChild>
              <Link to="/contact" className="flex items-center justify-center gap-3 text-left">
                <Shield className="h-5 w-5 shrink-0" strokeWidth={2.5} />
                <span className="text-balance text-left">Start a Confidential and Psychologically Safe Conversation</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
