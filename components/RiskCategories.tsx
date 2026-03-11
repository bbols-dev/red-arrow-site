import PlusIcons from "./PlusIcons";

const CATEGORIES = [
  {
    name: "Health & Supplement Claims",
    subtitle: "FDA/FTC structure-function rules",
    findings: 12,
    exposure: "$45K",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9544D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    accent: "primary" as const,
  },
  {
    name: "Prop 65 (California)",
    subtitle: "Warning label requirements",
    findings: 8,
    exposure: "$28K",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E88D3F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
        <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    accent: "amber" as const,
  },
  {
    name: "Privacy & CCPA",
    subtitle: "Data collection & cookie consent",
    findings: 15,
    exposure: "$54K",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9B8FD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    accent: "secondary" as const,
  },
  {
    name: "Advertising & FTC",
    subtitle: "Testimonials, disclosures, pricing",
    findings: 10,
    exposure: "$32K",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9544D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    accent: "primary" as const,
  },
  {
    name: "Subscription & Auto-Renewal",
    subtitle: "ROSCA + state auto-renewal laws",
    findings: 9,
    exposure: "$82K",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3DAA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
      </svg>
    ),
    accent: "green" as const,
  },
  {
    name: "ADA Accessibility",
    subtitle: "WCAG 2.1 AA / screen reader compliance",
    findings: 14,
    exposure: "$38K",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9B8FD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/>
      </svg>
    ),
    accent: "secondary" as const,
  },
];

const CIRCLE_COLORS = {
  primary: "deco-primary",
  secondary: "deco-secondary",
  green: "deco-green",
  amber: "deco-primary",
};

export default function RiskCategories() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background orbs */}
      <div className="orb orb-secondary w-[500px] h-[500px] top-[10%] -right-[120px]" />
      <div className="orb orb-green w-[350px] h-[350px] bottom-[15%] -left-[100px]" />

      <div className="container-main relative">
        {/* Section header */}
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 glass-pill rounded-[var(--radius-pill)] px-4 py-1.5 mb-6">
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              What We Cover
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.12] font-medium tracking-tight">
            Six compliance domains,{" "}
            <span className="font-accent">one dashboard</span>
          </h2>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="glass-card glass-mesh relative overflow-hidden p-6"
            >
              <PlusIcons corners={["top-right", "bottom-left"]} className="opacity-10" />
              <div className={`circle-decoration ${CIRCLE_COLORS[cat.accent]} w-[160px] h-[160px] -bottom-[40px] -right-[40px]`} />

              <div className="relative z-[2]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/60 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {cat.name}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                  {cat.subtitle}
                </p>
                <div className="flex items-center gap-2">
                  <div className="glass-pill rounded-full px-2.5 py-1">
                    <span className="text-[10px] font-medium text-text-secondary">
                      {cat.findings} common findings
                    </span>
                  </div>
                  <div className="glass-pill rounded-full px-2.5 py-1">
                    <span className="text-[10px] font-semibold text-primary">
                      {cat.exposure} avg
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
