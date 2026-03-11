import PlusIcons from "./PlusIcons";
import HealthGauge from "./HealthGauge";

const FIXES = [
  {
    title: "Add missing privacy policy link",
    effort: "Quick Win",
    effortColor: "bg-green-light text-green",
    risk: "$12K",
  },
  {
    title: "Update subscription disclosure",
    effort: "Quick Win",
    effortColor: "bg-green-light text-green",
    risk: "$28K",
  },
  {
    title: "Add Prop 65 warning to 3 products",
    effort: "Medium",
    effortColor: "bg-amber-light text-amber",
    risk: "$15K",
  },
  {
    title: "Fix auto-renewal cancellation flow",
    effort: "Medium",
    effortColor: "bg-amber-light text-amber",
    risk: "$22K",
  },
];

export default function FixRoadmap() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background orbs */}
      <div className="orb orb-green w-[400px] h-[400px] top-[20%] -left-[100px]" />
      <div className="orb orb-primary w-[350px] h-[350px] bottom-[10%] -right-[80px]" />

      <div className="container-main relative">
        {/* Section header */}
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 glass-pill rounded-[var(--radius-pill)] px-4 py-1.5 mb-6">
            <span className="text-xs font-medium tracking-wider uppercase text-green">
              Fix Roadmap
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.12] font-medium tracking-tight">
            From at-risk to{" "}
            <span className="font-accent">protected</span>
          </h2>
        </div>

        <div className="glass-card overflow-hidden p-8 md:p-10">
          <PlusIcons corners={["top-right", "bottom-left"]} />
          <div className="circle-decoration deco-green w-[250px] h-[250px] -top-[80px] -right-[80px]" />

          <div className="grid md:grid-cols-2 gap-10 relative z-[2]">
            {/* ── Left: Before / After gauges ── */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-6 md:gap-10">
                {/* Before */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <HealthGauge score={34} size={110} />
                  </div>
                  <span className="mt-2 text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                    Before
                  </span>
                </div>

                {/* Arrow */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 opacity-40">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>

                {/* After */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <HealthGauge score={89} size={110} />
                  </div>
                  <span className="mt-2 text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                    After
                  </span>
                </div>
              </div>

              <p className="mt-6 text-sm text-text-secondary text-center max-w-[280px]">
                Most stores reach 80+ within a week by tackling quick wins first
              </p>
            </div>

            {/* ── Right: Quick wins queue ── */}
            <div>
              <div className="mb-5">
                <h3 className="text-lg font-semibold tracking-tight mb-1">
                  Your Fix Roadmap
                </h3>
                <p className="text-xs text-text-tertiary">
                  Prioritized by risk reduction
                </p>
              </div>

              <div className="space-y-3">
                {FIXES.map((fix, i) => (
                  <div
                    key={i}
                    className="glass-card-tinted p-4 rounded-lg flex items-center gap-3"
                  >
                    {/* Checkbox icon */}
                    <div className="w-5 h-5 rounded border border-border-strong flex-shrink-0 flex items-center justify-center">
                      <span className="text-[10px] text-text-tertiary">{i + 1}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {fix.title}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${fix.effortColor}`}>
                        {fix.effort}
                      </span>
                      <span className="text-xs font-semibold text-primary">
                        {fix.risk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
