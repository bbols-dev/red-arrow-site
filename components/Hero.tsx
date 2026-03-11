import PlusIcons from "./PlusIcons";
import HealthGauge from "./HealthGauge";
import MockWindowChrome from "./MockWindowChrome";
import SeverityBadges from "./SeverityBadges";

export default function Hero() {
  return (
    <section className="relative pt-[160px] pb-[var(--section-padding)] overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-primary w-[700px] h-[700px] -top-[200px] -right-[100px]" />
      <div className="orb orb-secondary w-[500px] h-[500px] -bottom-[100px] -left-[150px]" />
      <div className="orb orb-green w-[300px] h-[300px] top-[40%] right-[20%] opacity-60" />

      {/* Decorative glass rings */}
      <div className="hidden lg:block glass-ring w-[300px] h-[300px] top-[100px] right-[5%] opacity-15 animate-float-slow" />
      <div className="hidden lg:block glass-ring w-[80px] h-[80px] top-[60%] left-[12%] opacity-20" />

      {/* ── Floating dashboard preview panel ── */}
      <div className="hidden lg:block absolute top-[170px] right-[6%] w-[340px] glass-card overflow-hidden animate-float opacity-90 pointer-events-none">
        <PlusIcons corners={["top-right", "bottom-left"]} />
        <div className="circle-decoration deco-secondary w-[160px] h-[160px] -bottom-[50px] -right-[50px]" />

        <MockWindowChrome title="SuitProof">
          <div className="p-5 space-y-4 relative z-[2]">
            {/* Health score + severity row */}
            <div className="flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <HealthGauge score={34} size={72} />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-text-tertiary/60 tracking-widest uppercase block">
                  Health Score
                </span>
                <SeverityBadges critical={4} high={2} medium={3} />
              </div>
            </div>

            {/* Brief snippet */}
            <div className="glass-surface p-3 rounded-md">
              <div className="flex items-center gap-1.5 mb-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9B8FD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-[9px] font-semibold text-secondary uppercase tracking-wider">AI Brief</span>
              </div>
              <p className="text-[10px] text-text-tertiary leading-relaxed">
                Four subscription gaps account for half your exposure — three are quick fixes under 5 min each.
              </p>
            </div>

            {/* Risk exposure bar */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-text-secondary font-medium">Total Exposure</span>
                <span className="text-sm font-semibold tracking-tight">$218K</span>
              </div>
              <div className="risk-bar-track">
                <div
                  className="risk-bar-fill"
                  style={{ width: "78%", backgroundColor: "#C9544D" }}
                />
              </div>
            </div>
          </div>
        </MockWindowChrome>
      </div>

      <div className="container-main relative">
        <div className="max-w-[640px]">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 glass-pill rounded-[var(--radius-pill)] px-4 py-1.5 mb-8 animate-fade-up opacity-0">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-xs font-medium tracking-wider uppercase text-text-secondary">
              Shopify Compliance Scanner
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.08] font-medium tracking-tight mb-6 animate-fade-up animate-delay-1 opacity-0">
            The fastest way to{" "}
            <span className="font-accent">lawsuit-proof your store</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg text-text-secondary max-w-[530px] mb-10 animate-fade-up animate-delay-2 opacity-0">
            ADA demand letters cost Shopify brands $10K–$150K to settle.
            SuitProof finds the compliance gaps before plaintiff attorneys
            do — and shows you exactly what to fix.
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
