import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { Shield, FlaskConical, Scale, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypewriterText } from "@/components/TypewriterText";
// NOTE: Please save your image as 'new-hero-image.jpg' in the src/assets folder
import heroImage from "@/assets/new-hero-image.jpg";



export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with parallax feel */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="A diverse group of working adults representing various industries, races, and ages"
          className="w-full h-full object-cover object-[50%_25%] scale-105"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 8, ease: "easeOut" }}
          loading="eager"
        />
        {/* Added a darker overlay to ensure text readability against the bright new image */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-sky/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">


            <div className="min-h-[100px] md:min-h-[140px] lg:min-h-[180px] flex flex-col justify-center overflow-visible">
              <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary-foreground whitespace-nowrap">
                <TypewriterText text="Navigate Workplace Challenges" delay={0.5} speed={0.05} />
                <br />
                <span className="text-sky-glow">
                  <TypewriterText text="Safely & Privately" delay={2.2} speed={0.06} />
                </span>
              </h1>
            </div>

            <FadeIn delay={0.4}>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-primary-foreground/75 max-w-xl">
                Confidential, judgment-free conversations to help you navigate
                uncomfortable workplace problems — safely, privately, and away
                from your employer.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild className="h-auto py-4 px-8 leading-tight text-center">
                  <Link to="/contact" className="group flex items-center justify-center gap-2">
                    <Shield className="h-5 w-5 text-white" strokeWidth={2.5} />
                    <span>Start a Confidential and Psychologically Safe Conversation</span>
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/who-this-is-for">Who This Is For</Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="mt-12 max-w-2xl p-4 bg-primary-foreground/5 border-l-2 border-sky-glow/50 rounded-r-xl backdrop-blur-sm">
                <div className="flex gap-3">
                  <Shield className="h-5 w-5 text-sky-glow shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed text-primary-foreground/70 italic">
                    <span className="font-semibold not-italic">Disclaimer:</span> Away from Work, LLC does not provide advice, legal, medical, financial, therapeutic, or otherwise. Instead, its role is limited to facilitating a safe space for reflection, exploration, and idea generation.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>


        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-sky-glow"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
