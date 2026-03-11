import PlusIcons from "./PlusIcons";

const TESTIMONIALS = [
  {
    quote:
      "A competitor got hit with an ADA demand letter and we panicked. Red Arrow found 12 issues on our store — we fixed the critical ones that same afternoon. Huge peace of mind.",
    name: "Sarah Chen",
    title: "Head of E-Commerce, Bloom Naturals",
    rating: 5,
    initials: "SC",
    accentBg: "bg-primary-bg",
    accentText: "text-primary",
    featured: true,
  },
  {
    quote:
      "Seeing actual lawsuits mapped to our exact issues is what got our CEO to finally take this seriously. We went from 'it won't happen to us' to 'fix this today' overnight.",
    name: "Marcus Rivera",
    title: "COO, Peak Performance Co.",
    rating: 5,
    initials: "MR",
    accentBg: "bg-secondary-light",
    accentText: "text-secondary",
    featured: false,
  },
  {
    quote:
      "32 health score to 89 in two weeks. The roadmap literally tells you what to fix first and how long each fix takes. We knocked out the biggest risks before lunch.",
    name: "Emily Thornton",
    title: "Founder, Thornton & Co.",
    rating: 5,
    initials: "ET",
    accentBg: "bg-green-light",
    accentText: "text-green",
    featured: false,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-[var(--section-padding)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-alt" />
      <div className="orb orb-primary w-[400px] h-[400px] top-[10%] -left-[100px]" />
      <div className="orb orb-secondary w-[500px] h-[500px] bottom-[10%] -right-[150px]" />

      <div className="container-main relative">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-pill rounded-[var(--radius-pill)] px-4 py-1.5 mb-6 mx-auto">
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              From Store Owners
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.12] font-medium tracking-tight">
            Brands that{" "}
            <span className="font-accent">stopped waiting to get sued</span>
          </h2>
        </div>

        {/* Testimonial cards — Webflow: .testimonials-card with .first variant */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1080px] mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`relative overflow-hidden p-8 flex flex-col ${
                t.featured
                  ? "feature-card-solid"
                  : "glass-card"
              }`}
            >
              {/* Plus icons at two corners — Webflow pattern */}
              <PlusIcons
                corners={["top-left", "bottom-right"]}
                className={t.featured ? "opacity-8" : ""}
              />

              <div className="relative z-1 flex flex-col flex-1">
                <Stars count={t.rating} />
                <p className="mt-5 mb-8 text-sm leading-relaxed flex-1 text-text">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.accentBg} ${t.accentText} flex items-center justify-center text-sm font-semibold`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-text-tertiary">{t.title}</div>
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
