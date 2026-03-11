import PlusIcons from "./PlusIcons";
import Image from "next/image";

const FEATURES = [
  {
    num: "01",
    title: "Finds What Plaintiffs Find",
    description:
      "Our AI crawls your store the same way serial litigants do — checking every product page, policy, and checkout flow against 10+ risk areas including ADA, FTC, CCPA, and Prop 65.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/>
        <path d="M10 21h4"/>
      </svg>
    ),
    illustration: "/illustrations/crosshair.svg",
    accent: "primary" as const,
  },
  {
    num: "02",
    title: "Real Risk, Not Noise",
    description:
      "Every finding is weighted by severity, how many pages are affected, and whether people are actively suing over it. You see what actually puts your store at risk — not a generic checklist.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    illustration: "/illustrations/bar-chart.svg",
    accent: "secondary" as const,
  },
  {
    num: "03",
    title: "Fix the Big Stuff Fast",
    description:
      "We flag which issues take under 5 minutes to fix and knock out the most risk. Most stores eliminate 30–40% of their exposure in a single afternoon.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    illustration: "/illustrations/starburst.svg",
    accent: "green" as const,
  },
  {
    num: "04",
    title: "See Who's Suing (and Why)",
    description:
      "Real lawsuits and FTC actions mapped to your specific issues. When your team asks \"how bad is this, really?\" — you'll have the receipts.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    illustration: "/illustrations/circle-frame.svg",
    accent: "primary" as const,
  },
  {
    num: "05",
    title: "Plain-English Briefs",
    description:
      "AI-generated summaries your whole team can understand. No legal jargon — just what's wrong, why it matters, and what to do first.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    illustration: "/illustrations/document.svg",
    accent: "secondary" as const,
  },
  {
    num: "06",
    title: "Every Page, Every Risk",
    description:
      "Quick Scan checks a sample in minutes. Full Scan crawls your entire store. Deep Scan catches the stuff your theme templates hide. Nothing slips through.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    illustration: "/illustrations/globe.svg",
    accent: "green" as const,
  },
];

const ACCENT_COLORS = {
  primary: {
    iconBg: "bg-primary-bg",
    iconText: "text-primary",
    iconHover: "group-hover:bg-primary group-hover:text-white",
    circle: "deco-primary",
  },
  secondary: {
    iconBg: "bg-secondary-light",
    iconText: "text-secondary",
    iconHover: "group-hover:bg-secondary group-hover:text-white",
    circle: "deco-secondary",
  },
  green: {
    iconBg: "bg-green-light",
    iconText: "text-green",
    iconHover: "group-hover:bg-green group-hover:text-white",
    circle: "deco-green",
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-[var(--section-padding)] overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-primary w-[500px] h-[500px] top-[10%] -left-[150px]" />
      <div className="orb orb-secondary w-[600px] h-[600px] bottom-[10%] -right-[200px]" />
      <div className="orb orb-green w-[350px] h-[350px] top-[50%] left-[40%]" />

      {/* Base background */}
      <div className="absolute inset-0 bg-surface-alt" />

      <div className="container-main relative">
        {/* Section header */}
        <div className="max-w-[530px] mb-16">
          <div className="inline-flex items-center gap-2 glass-pill rounded-[var(--radius-pill)] px-4 py-1.5 mb-6">
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              What We Catch
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.12] font-medium tracking-tight mb-4">
            The stuff that gets{" "}
            <span className="font-accent">stores sued</span>
          </h2>
          <p className="text-text-secondary">
            Not a generic checklist. AI analyzes your actual pages, products,
            and policies — then scores each issue by how likely it is to
            attract a lawsuit.
          </p>
        </div>

        {/* Feature grid — glass cards with SVG illustration backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => {
            const colors = ACCENT_COLORS[f.accent];
            return (
              <div
                key={f.num}
                className="group feature-card-solid glass-shimmer relative overflow-hidden p-7 min-h-[260px]"
              >
                {/* Plus icons at corners */}
                <PlusIcons corners={["top-right", "bottom-left"]} className="opacity-10" />

                {/* Circle decoration */}
                <div className={`circle-decoration ${colors.circle} w-[200px] h-[200px] -bottom-[60px] -right-[60px]`} />

                {/* SVG illustration watermark */}
                <div className="glass-icon-wrap -bottom-[20px] -right-[20px] w-[180px] h-[180px]">
                  <Image
                    src={f.illustration}
                    alt=""
                    width={180}
                    height={180}
                    className="w-full h-full object-contain"
                    aria-hidden="true"
                  />
                </div>

                <div className="relative z-[2]">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center ${colors.iconText} ${colors.iconHover} transition-colors`}>
                      {f.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-text-tertiary/40 tracking-wider">
                      {f.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
