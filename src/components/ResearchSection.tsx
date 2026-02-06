import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export function ResearchSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow text-center">
        <FadeIn>
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Research Foundation
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Backed by Research, Not Guesswork
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 bg-card rounded-2xl border border-border p-8 md:p-12 text-left shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-secondary">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">
                  Doctoral Research
                </p>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground leading-snug">
                  "Away from Work Surveys: The Role of Research Setting in
                  Capturing an Accurate Description of Leadership in
                  Organizations"
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              When participants were surveyed away from their employers,
              responses were significantly more candid and accurate. This
              foundational research proves that the setting in which employees
              share their experiences directly impacts the honesty and quality of
              their responses.
            </p>
            <div className="mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link to="/research">Learn About Our Methodology</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
