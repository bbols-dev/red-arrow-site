import PlusIcons from "./PlusIcons";

export default function Hero() {
  return (
    <section className="relative pt-[160px] pb-[var(--section-padding)] overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-primary w-[700px] h-[700px] -top-[200px] -right-[100px]" />
      <div className="orb orb-secondary w-[500px] h-[500px] -bottom-[100px] -left-[150px]" />
      <div className="orb orb-green w-[300px] h-[300px] top-[40%] right-[20%] opacity-60" />

      {/* ── Floating glass dashboard card  — Webflow .glas-card style ── */}
      <div className="hidden lg:block absolute top-[180px] right-[8%] w-[280px] glass-card overflow-hidden p-6 animate-float opacity-90 pointer-events-none">
        <PlusIcons corners={["top-right", "bottom-left"]} />
        {/* Circle decoration */}
        <div className="circle-decoration deco-green w-[140px] h-[140px] -bottom-[40px] -right-[40px]" />

        <div className="flex items-center gap-3 mb-3 relative z-1">
          <div className="w-8 h-8 rounded-lg bg-primary-bg flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9544D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <span className="text-xs font-semibold text-primary">4 Lawsuit Risks Found</span>
        </div>
        <div className="flex items-baseline gap-2 relative z-1">
          <span className="text-2xl font-semibold tracking-tight">$218K</span>
          <span className="text-xs text-text-tertiary">estimated exposure</span>
        </div>
        {/* Grow bars — Webflow .grow-bar style */}
        <div className="mt-4 space-y-1.5 relative z-1">
          <div className="grow-bar" style={{ width: "87%" }} />
          <div className="grow-bar" style={{ width: "62%", opacity: 0.6 }} />
          <div className="grow-bar" style={{ width: "45%", opacity: 0.4 }} />
        </div>
      </div>

      {/* ── Second floating card ── */}
      <div className="hidden lg:block absolute bottom-[120px] right-[15%] w-[220px] glass-card overflow-hidden p-5 animate-float-slow opacity-80 pointer-events-none">
        <PlusIcons corners={["top-left", "bottom-right"]} />
        <div className="flex items-center gap-2 mb-2 relative z-1">
          <div className="w-6 h-6 rounded-md bg-green-light flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3DAA64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <span className="text-xs font-medium">3 Quick Fixes</span>
        </div>
        <p className="text-[11px] text-text-tertiary leading-relaxed relative z-1">
          Resolve 60% of risk in under 5 min each
        </p>
      </div>

      <div className="container-main relative">
        <div className="max-w-[640px]">
          {/* Eyebrow pill — Webflow .support-wrapper style */}
          <div className="inline-flex items-center gap-2 glass-pill rounded-[var(--radius-pill)] px-4 py-1.5 mb-8 animate-fade-up opacity-0">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-xs font-medium tracking-wider uppercase text-text-secondary">
              Shopify Compliance Scanner
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.08] font-medium tracking-tight mb-6 animate-fade-up animate-delay-1 opacity-0">
            Serial plaintiffs are{" "}
            <span className="font-accent">already browsing your store</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg text-text-secondary max-w-[530px] mb-10 animate-fade-up animate-delay-2 opacity-0">
            ADA lawsuits. Privacy demand letters. FTC complaints. They target
            Shopify stores with easy-to-find violations. We find them first —
            and tell you exactly what to fix before they do.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-3 opacity-0">
            <a href="#pricing" className="btn btn-primary">
              Scan My Store Free
            </a>
            <a href="#how-it-works" className="btn btn-outline">
              See How It Works
            </a>
          </div>

          {/* Proof points — glass pills */}
          <div className="mt-14 flex flex-wrap items-center gap-3 animate-fade-up animate-delay-4 opacity-0">
            {[
              "No code changes",
              "Results in 5 min",
              "ADA · FTC · CCPA · Prop 65",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 glass-pill rounded-[var(--radius-pill)] px-3.5 py-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3DAA64" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span className="text-xs font-medium text-text-secondary">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
