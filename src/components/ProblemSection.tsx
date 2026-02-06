import { FadeIn } from "@/components/FadeIn";
import atWorkImage from "@/assets/at-work.jpg";
import awayFromWorkImage from "@/assets/away-from-work.jpg";

export function ProblemSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <FadeIn>
          <div className="container-narrow text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              The Problem
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Why Internal Employee Surveys Often Fail
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Companies rely heavily on internal employee satisfaction surveys,
              assuming employees will be fully honest without fear of
              retaliation. Research shows this assumption is flawed. When surveys
              are conducted inside the workplace, responses are often filtered,
              guarded, or incomplete — creating a false sense of organizational
              health.
            </p>
          </div>
        </FadeIn>

        {/* Split Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn direction="left" delay={0.2}>
            <div className="relative rounded-xl overflow-hidden group">
              <img
                src={atWorkImage}
                alt="Professional in tense office environment"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/60 flex items-end p-6">
                <div>
                  <p className="font-heading font-bold text-xl text-primary-foreground">
                    At Work
                  </p>
                  <p className="text-primary-foreground/80 text-sm mt-1">
                    Guarded · Tense · Cautious
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.3}>
            <div className="relative rounded-xl overflow-hidden group">
              <img
                src={awayFromWorkImage}
                alt="Professional in calm, reflective environment"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/50 flex items-end p-6">
                <div>
                  <p className="font-heading font-bold text-xl text-primary-foreground">
                    Away From Work
                  </p>
                  <p className="text-primary-foreground/80 text-sm mt-1">
                    Calm · Open · Reflective
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
