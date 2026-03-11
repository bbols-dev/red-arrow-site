const ITEMS = [
  "ADA Web Accessibility Lawsuits Up 300% Since 2018",
  "Average ADA Settlement: $10,000–$50,000",
  "FTC Fines for Missing Disclosures: Up to $50,120/violation",
  "California Prop 65 Notices: 800+ New Filings in 2024",
  "CCPA Privacy Violations: $7,500/intentional violation",
  "Subscription Compliance: FTC's #1 E-Commerce Priority",
  "Serial ADA Filers Target 10–30 Stores Per Month",
  "Auto-Renewal Law Violations: Class Actions on the Rise",
];

export default function ThreatTicker() {
  // Double the items for seamless loop
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden bg-surface-alt border-y border-border py-4">
      <div className="animate-scroll flex whitespace-nowrap gap-12">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            <span className="text-xs font-medium tracking-wide text-text-tertiary uppercase">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
