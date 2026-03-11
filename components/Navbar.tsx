"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1200px]">
      {/* Webflow-style glass pill navbar: border-radius 100px, blur(40px) */}
      <div className="glass-strong rounded-[100px] px-7 flex items-center justify-between min-h-[4.8rem]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <span className="text-[17px] font-semibold tracking-tight text-text">
            Red Arrow
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors no-underline px-4 py-2 rounded-[var(--radius-pill)] hover:bg-primary-bg/50"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="btn btn-primary text-xs !py-2.5 !px-6">
            Get Started
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-text transition-all duration-300 ${open ? "rotate-45 translate-y-[4px]" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-text transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-text transition-all duration-300 ${open ? "-rotate-45 -translate-y-[4px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong rounded-[var(--radius-card)] mt-2 px-6 pb-6 pt-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-text-secondary hover:text-primary no-underline py-2"
            >
              {link.label}
            </a>
          ))}
          <a href="#pricing" className="btn btn-primary text-xs mt-2 w-fit">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
