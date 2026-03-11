import PlusIcons from "./PlusIcons";

export default function CTA() {
  return (
    <section className="py-[var(--section-padding)]">
      <div className="container-main">
        <div className="relative rounded-[var(--radius-card)] overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light px-8 py-20 md:px-16 text-center text-white">
          {/* Glass background circles */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/[0.07] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/[0.07] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] rounded-full bg-white/[0.04] -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-[30%] right-[30%] w-[120px] h-[120px] rounded-full bg-white/[0.03] pointer-events-none" />

          {/* Frosted glass accent shapes */}
          <div className="absolute top-10 right-[10%] w-20 h-20 rounded-[var(--radius-card)] bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rotate-12 pointer-events-none" />
          <div className="absolute bottom-10 left-[8%] w-16 h-16 rounded-[var(--radius-card)] bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] -rotate-12 pointer-events-none" />
          <div className="absolute top-[55%] right-[5%] w-10 h-10 rounded-lg bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rotate-45 pointer-events-none" />

          {/* Plus icon corners — Webflow style */}
          <PlusIcons
            corners={["top-left", "top-right", "bottom-left", "bottom-right"]}
            className="text-white opacity-20"
          />

          <div className="relative max-w-[600px] mx-auto z-1">
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.12] font-medium tracking-tight mb-4">
              The next demand letter{" "}
              <span className="font-accent">doesn&apos;t have to be yours</span>
            </h2>
            <p className="text-white/75 mb-10 text-lg">
              Most issues are easy fixes — once you know they exist.
              Five minutes from now, you could know exactly where your store stands.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#pricing"
                className="btn bg-white text-primary hover:bg-white/90 hover:translate-y-[-1px] shadow-lg shadow-black/10"
              >
                Start Free Scan
              </a>
              <a
                href="mailto:hello@suitproof.com"
                className="btn border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
