import PlusIcons from "./PlusIcons";

const STEPS = [
  {
    num: "01",
    title: "Install in One Click",
    description:
      "Add the app from the Shopify App Store. Read-only access, nothing to configure. Takes about 30 seconds.",
  },
  {
    num: "02",
    title: "We Crawl Your Store",
    description:
      "Our AI visits every product page, policy page, and checkout flow — the same pages a plaintiff's attorney would look at first.",
  },
  {
    num: "03",
    title: "See Your Risk",
    description:
      "Get a prioritized list of issues ranked by lawsuit risk — with dollar exposure estimates and links to real enforcement cases.",
  },
  {
    num: "04",
    title: "Fix It Before Friday",
    description:
      "Quick wins are flagged — most stores knock out their biggest risks in an afternoon. Watch your score climb as you check things off.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-24">
      {/* Background orbs */}
      <div className="orb orb-secondary w-[400px] h-[400px] top-[20%] -right-[100px]" />
      <div className="orb orb-primary w-[300px] h-[300px] bottom-[20%] -left-[80px]" />

      <div className="container-main relative">
        {/* Section header */}
        <div className="text-center max-w-[600px] mx-auto mb-10">
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

        {/* Card stack */}
        <div className="max-w-[720px] mx-auto flex flex-col gap-4">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="glass-card glass-mesh relative overflow-hidden p-6 md:p-8"
            >
              <PlusIcons corners={["top-right", "bottom-left"]} />

              <div className="relative z-[2]">
                <div className="flex items-center gap-5 mb-4">
                  <div className="process-number">{step.num}</div>
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
