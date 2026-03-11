import PlusIcons from "./PlusIcons";

const STATS = [
  {
    value: "4,000+",
    label: "ADA Lawsuits in 2025",
    detail: "E-commerce is the #1 target for serial filers",
    accent: "text-primary",
    circle: "deco-primary",
    barWidth: "85%",
  },
  {
    value: "$200K+",
    label: "Avg. Store Exposure",
    detail: "Estimated liability found per scan",
    accent: "text-secondary",
    circle: "deco-secondary",
    barWidth: "90%",
  },
  {
    value: "~35%",
    label: "Fixed in an Afternoon",
    detail: "Quick wins that slash your risk fast",
    accent: "text-green",
    circle: "deco-green",
    barWidth: "35%",
  },
  {
    value: "5 min",
    label: "First Scan Results",
    detail: "No setup, no code, no waiting around",
    accent: "text-primary",
    circle: "deco-primary",
    barWidth: "50%",
  },
];

export default function Stats() {
  return (
    <section className="relative py-[var(--section-padding)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-alt" />
      <div className="orb orb-primary w-[500px] h-[500px] -top-[100px] left-[30%]" />
      <div className="orb orb-green w-[400px] h-[400px] -bottom-[100px] right-[20%]" />

      <div className="container-main relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-pill rounded-[var(--radius-pill)] px-4 py-1.5 mb-6 mx-auto">
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              The Reality
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.12] font-medium tracking-tight">
            The lawsuit industry{" "}
            <span className="font-accent">is booming</span>
          </h2>
        </div>

        {/* Stat cards — Webflow: .glas-card + .card-01 style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-card relative overflow-hidden p-6 md:p-7"
            >
              {/* Plus icon corners */}
              <PlusIcons corners={["top-right"]} />

              {/* Circle decoration */}
              <div className={`circle-decoration ${stat.circle} w-[160px] h-[160px] -bottom-[50px] -right-[50px]`} />

              <div className="relative z-1">
                <div className={`text-3xl md:text-4xl font-semibold tracking-tight mb-2 ${stat.accent}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-text-tertiary mb-4">
                  {stat.detail}
                </div>
                {/* Grow bar — Webflow .grow-bar */}
                <div className="grow-bar" style={{ width: stat.barWidth }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
