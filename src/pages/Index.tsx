import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import {
  Lightbulb,
  TrendingUp,
  Palette,
  Rocket,
  Users,
  Building2,
  Briefcase,
  Heart,
  ArrowRight,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import heroImage from "@/assets/hero-geometric.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        </div>

        <div className="container relative z-10 px-4 py-20">
          <div className="mx-auto max-w-4xl text-center fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm text-accent">
              <Sparkles className="h-4 w-4" />
              <span className="font-semibold">Student-Led, Founder-Focused</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
              We'll help you focus on{" "}
              <span className="text-gradient">what matters</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground md:text-2xl">
              Student-led, full-stack consulting for founders who want clarity without corporate
              pricing.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group h-14 gap-2 bg-accent px-8 text-lg font-semibold hover:bg-accent/90"
              >
                Work With Us
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-2 border-foreground px-8 text-lg font-semibold hover:bg-foreground hover:text-background"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* What We Do */}
      <section className="py-24">
        <div className="container px-4">
          <div className="mb-16 text-center slide-up">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">What We Do</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Full-stack consulting services designed for founders who need execution, not
              excuses.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={Lightbulb}
              title="Strategy"
              description="Business models, go-to-market plans, and competitive positioning that actually work."
            />
            <ServiceCard
              icon={TrendingUp}
              title="Research"
              description="Market analysis, customer insights, and data-backed recommendations for smart decisions."
            />
            <ServiceCard
              icon={Palette}
              title="Branding"
              description="Identity, messaging, and design that connects with your audience and stands out."
            />
            <ServiceCard
              icon={Rocket}
              title="Growth"
              description="Actionable growth strategies, digital marketing, and execution support to scale fast."
            />
          </div>
        </div>
      </section>

      {/* Why Yunova - Anti-Corporate */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-24">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,43,82,0.02)_50%,transparent_75%)] bg-[length:60px_60px]" />
        <div className="container relative px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              We're not McKinsey.
              <br />
              <span className="text-gradient">We're not MBA robots.</span>
            </h2>
            <p className="mb-12 text-xl text-muted-foreground">
              We're students who get it. Fast execution. Real creativity. Affordable pricing.
              Founder-friendly energy.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Zap, text: "Fast Turnaround" },
                { icon: Sparkles, text: "Creative Solutions" },
                { icon: Target, text: "Data-Backed" },
                { icon: Heart, text: "Founder-Friendly" },
                { icon: TrendingUp, text: "Growth-Focused" },
                { icon: Users, text: "Student Energy" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="group flex items-center gap-3 rounded-2xl border border-border/50 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-background/80"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Work That Works</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Real projects. Real results. Real impact.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <CaseStudyCard
              title="SaaS Go-To-Market"
              category="Strategy"
              result="+340%"
              description="Helped a B2B SaaS startup define their ICP and launch strategy, resulting in 3x user growth in 4 months."
            />
            <CaseStudyCard
              title="Brand Repositioning"
              category="Branding"
              result="+250%"
              description="Refreshed identity and messaging for an e-commerce brand, leading to improved brand recall and engagement."
            />
            <CaseStudyCard
              title="Market Research"
              category="Research"
              result="+180%"
              description="Conducted comprehensive market analysis for a health-tech startup, uncovering new market opportunities."
            />
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="bg-gradient-to-br from-foreground/5 to-accent/5 py-24">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Who We Help</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              We work with ambitious builders who want smart strategy without the corporate
              headache.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {[
              {
                icon: Rocket,
                title: "Startup Founders",
                description: "Early-stage teams building the next big thing",
              },
              {
                icon: Briefcase,
                title: "Entrepreneurs",
                description: "Solo founders and small teams scaling smart",
              },
              {
                icon: Heart,
                title: "NGOs & Non-Profits",
                description: "Mission-driven organizations maximizing impact",
              },
              {
                icon: Building2,
                title: "Small Businesses",
                description: "Growing companies ready to level up",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-3xl border border-border/50 bg-background p-8 transition-all hover-lift hover:border-accent/50"
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:60px_60px]" />
        <div className="container relative px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
                Let's build something that actually works.
              </h2>
              <p className="text-xl text-primary-foreground/80">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Input
                  placeholder="Your Name"
                  className="h-14 border-2 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 backdrop-blur-sm focus:border-primary-foreground/40"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 border-2 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 backdrop-blur-sm focus:border-primary-foreground/40"
                />
              </div>
              <Input
                placeholder="Company / Project Name"
                className="h-14 border-2 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 backdrop-blur-sm focus:border-primary-foreground/40"
              />
              <Textarea
                placeholder="Tell us about your project..."
                rows={6}
                className="resize-none border-2 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 backdrop-blur-sm focus:border-primary-foreground/40"
              />
              <Button
                size="lg"
                className="h-14 w-full bg-primary-foreground text-primary text-lg font-semibold hover:bg-primary-foreground/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <h3 className="mb-2 text-2xl font-bold">Yunova Strategies</h3>
              <p className="text-sm text-muted-foreground">
                Student-led consulting for founders who get it.
              </p>
            </div>
            <div className="text-center text-sm text-muted-foreground sm:text-right">
              <p>© 2025 Yunova Strategies</p>
              <p className="mt-1">Built different. Built better.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
