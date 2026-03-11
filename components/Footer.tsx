const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "mailto:hello@redarrow.dev" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-16 overflow-hidden">
      {/* Subtle background orb */}
      <div className="orb orb-primary w-[300px] h-[300px] -bottom-[100px] right-[10%] opacity-40" />

      <div className="container-main relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 no-underline mb-4">
              <div className="w-7 h-7 rounded-[var(--radius-card)] bg-primary flex items-center justify-center shadow-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-base font-semibold tracking-tight text-text">
                Red Arrow
              </span>
            </a>
            <p className="text-sm text-text-tertiary leading-relaxed">
              Compliance monitoring for e-commerce brands that want to stay ahead
              of regulatory risk.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-tertiary hover:text-primary transition-colors no-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} Red Arrow. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-text-tertiary hover:text-primary transition-colors no-underline">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-text-tertiary hover:text-primary transition-colors no-underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
