import PlusIcons from "./PlusIcons";

const STEPS = [
  {
    num: "01",
    title: "Install in One Click",
    description:
      "Add the app from the Shopify App Store. Read-only access, nothing to configure. Takes about 30 seconds.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "We Crawl Your Store",
    description:
      "Our AI visits every product page, policy page, and checkout flow — the same pages a plaintiff's attorney would look at first.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "See Your Risk",
    description:
      "Get a prioritized list of issues ranked by lawsuit risk — with dollar exposure estimates and links to real enforcement cases.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Fix It Before Friday",
    description:
      "Quick wins are flagged — most stores knock out their biggest risks in an afternoon. Watch your score climb as you check things off.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-[var(--section-padding)] overflow-clip">
      {/* Background orbs */}
      <div className="orb orb-secondary w-[400px] h-[400px] top-[20%] -right-[100px]" />
      <div className="orb orb-primary w-[300px] h-[300px] bottom-[20%] -left-[80px]" />

      {/* Decorative glass rings */}
      <div className="glass-ring w-[200px] h-[200px] top-[15%] left-[8%] opacity-20" />
      <div className="glass-ring w-[120px] h-[120px] bottom-[25%] right-[12%] opacity-15" />

      <div className="container-main relative">
        {/* Section header */}
        <div className="text-center max-w-[600px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 glass-pill rounded-[var(--radius-pill)] px-4 py-1.5 mb-6 mx-auto">
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              How It Works
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.12] font-medium tracking-tight">
            From zero to{" "}
            <span className="font-accent">protected in minutes</span>
          </h2>
        </div>

        {/* Sticky card stack */}
        <div className="max-w-[720px] mx-auto">
          {STEPS.map((step) => (
            <div key={step.num} className="sticky-card glass-card glass-mesh relative overflow-hidden p-8 md:p-10">
              {/* Plus corner decorations */}
              <PlusIcons corners={["top-right", "bottom-left"]} />

              <div className="relative z-[2]">
                {/* Top row: process number circle + step label */}
                <div className="flex items-center gap-5 mb-6">
                  {/* Process number */}
                  <div className="process-number">
                    {step.num}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-text-tertiary/50 tracking-widest uppercase block mb-0.5">
                      Step {step.num}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed pl-[80px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
