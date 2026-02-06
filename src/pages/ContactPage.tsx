import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Shield, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    situation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.preferredDate || !formData.preferredTime) {
      toast({
        title: "Please fill in required fields",
        description: "First name, email, preferred date and time are required.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    toast({
      title: "Session Request Submitted",
      description: "We'll reach out within 24 hours to confirm your session.",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <section className="pt-32 pb-16 gradient-navy">
            <div className="container-narrow text-center">
              <FadeIn>
                <div className="flex justify-center mb-6">
                  <CheckCircle2 className="h-16 w-16 text-sky-glow" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
                  Request Received
                </h1>
                <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
                  Thank you, {formData.firstName}. Your confidential session request has been submitted.
                  We will reach out to you at <strong className="text-primary-foreground">{formData.email}</strong> within
                  24 hours to confirm your session.
                </p>
                <div className="mt-8">
                  <Button variant="hero" size="lg" onClick={() => setSubmitted(false)}>
                    Schedule Another Session
                  </Button>
                </div>
              </FadeIn>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 gradient-navy">
          <div className="container-narrow text-center">
            <FadeIn>
              <p className="text-sky-glow font-semibold text-sm uppercase tracking-widest mb-3">
                Get Started
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
                Schedule a Confidential Session
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
                Take the first step toward clarity. Fill out the form below and we'll reach out
                to confirm your session within 24 hours.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <FadeIn className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date *</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time *</Label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="situation">
                      Briefly describe your situation (optional)
                    </Label>
                    <Textarea
                      id="situation"
                      name="situation"
                      placeholder="Share as much or as little as you'd like. This helps us prepare for your session."
                      rows={4}
                      value={formData.situation}
                      onChange={handleChange}
                    />
                    <p className="text-xs text-muted-foreground">
                      Everything you share is completely confidential.
                    </p>
                  </div>

                  <Button variant="cta" size="lg" type="submit" className="w-full">
                    Submit Session Request
                  </Button>
                </form>
              </FadeIn>

              {/* Sidebar Info */}
              <FadeIn delay={0.2} className="lg:col-span-2">
                <div className="space-y-6">
                  <div className="bg-section-alt rounded-2xl border border-border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-secondary">
                        <Shield className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-heading font-semibold text-foreground">
                        100% Confidential
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Your information is never shared with your employer. All sessions
                      are private and secure.
                    </p>
                  </div>

                  <div className="bg-section-alt rounded-2xl border border-border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-secondary">
                        <Calendar className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-heading font-semibold text-foreground">
                        Flexible Scheduling
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Choose a time that works for you. We offer sessions on your schedule,
                      outside of your work hours.
                    </p>
                  </div>

                  <div className="bg-section-alt rounded-2xl border border-border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-secondary">
                        <Clock className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-heading font-semibold text-foreground">
                        24-Hour Response
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      After submitting your request, we'll reach out within 24 hours to
                      confirm your confidential session.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
