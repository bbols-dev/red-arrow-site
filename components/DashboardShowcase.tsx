import PlusIcons from "./PlusIcons";
import HealthGauge from "./HealthGauge";
import MockWindowChrome from "./MockWindowChrome";
import SeverityBadges from "./SeverityBadges";

const RISK_BARS = [
  { category: "Subscription & Auto-Renewal", amount: "$82K", pct: 100, color: "#C9544D" },
  { category: "Privacy & CCPA", amount: "$54K", pct: 66, color: "#E88D3F" },
  { category: "Health Claims", amount: "$41K", pct: 50, color: "#E88D3F" },
  { category: "Prop 65", amount: "$28K", pct: 34, color: "#9B8FD4" },
  { category: "ADA Accessibility", amount: "$13K", pct: 16, color: "#888888" },
];

export default function DashboardShowcase() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background orbs */}
      <div className="orb orb-primary w-[500px] h-[500px] -top-[100px] -left-[120px]" />
      <div className="orb orb-secondary w-[400px] h-[400px] bottom-[10%] -right-[80px]" />

      <div className="container-main relative">
        {/* Section header */}
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 glass-pill rounded-[var(--radius-pill)] px-4 py-1.5 mb-6">
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              Product Preview
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.12] font-medium tracking-tight">
            See your compliance risk{" "}
            <span className="font-accent">at a glance</span>
          </h2>
        </div>

        {/* Dashboard mockup */}
        <div className="glass-card overflow-hidden">
          <PlusIcons corners={["top-right", "bottom-left"]} />

          <MockWindowChrome title="SuitProof Dashboard">
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* ── Left column ── */}
                <div className="space-y-6">
                  {/* Health score + severity */}
                  <div className="flex items-center gap-6">
                    <div className="relative flex-shrink-0">
                      <HealthGauge score={34} size={100} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold">Health Score</h3>
                      <SeverityBadges critical={4} high={2} medium={3} />
                      <p className="text-[11px] text-text-tertiary">
                        9 findings across 47 pages
                      </p>
                    </div>
                  </div>

                  {/* AI Executive Brief */}
                  <div className="glass-surface p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9B8FD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-xs font-semibold text-secondary">AI Brief</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Four critical subscription-disclosure gaps account for nearly half
                      of your $218K exposure — and three of them are quick fixes that
                      take under five minutes each. Addressing those first would drop
                      your risk by roughly 40%.
                    </p>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "47", label: "Pages Scanned" },
                      { value: "$218K", label: "Exposure" },
                      { value: "6", label: "Quick Fixes" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="glass-surface p-3 rounded-lg text-center"
                      >
                        <div className="text-lg font-semibold tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-text-tertiary uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Right column ── */}
                <div className="space-y-6">
                  {/* Risk Exposure Breakdown */}
                  <div>
                    <h3 className="text-sm font-semibold mb-4">
                      Risk Exposure by Category
                    </h3>
                    <div className="space-y-3">
                      {RISK_BARS.map((bar) => (
                        <div key={bar.category}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-text-secondary">
                              {bar.category}
                            </span>
                            <span className="text-xs font-semibold">
                              {bar.amount}
                            </span>
                          </div>
                          <div className="risk-bar-track">
                            <div
                              className="risk-bar-fill"
                              style={{
                                width: `${bar.pct}%`,
                                backgroundColor: bar.color,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Wins card */}
                  <div className="glass-card-tinted p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-md bg-green-light flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3DAA64" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold">
                        6 Quick Wins Available
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Resolve 60% of your risk exposure in under 5 minutes each.
                      Most stores knock out their biggest gaps in an afternoon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MockWindowChrome>
        </div>
      </div>
    </section>
  );
}
