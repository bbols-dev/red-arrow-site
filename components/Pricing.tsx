"use client";

import { useState } from "react";
import PlusIcons from "./PlusIcons";

const PLANS = [
  {
    name: "Starter",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "Know your risk. Fix the easy stuff.",
    features: [
      "Monthly Quick Scan",
      "10+ lawsuit risk patterns",
      "Health score & risk ranking",
      "Quick win roadmap",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 149,
    annualPrice: 119,
    description: "Stay protected as your store grows.",
    features: [
      "Everything in Starter",
      "Full Scan + Deep Scan",
      "Weekly automated monitoring",
      "Real lawsuit case mapping",
      "AI executive briefs",
      "Dollar exposure estimates",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    description: "For portfolios, agencies, and multi-brand ops.",
    features: [
      "Everything in Professional",
      "Unlimited stores",
      "Custom risk patterns",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-[var(--section-padding)] overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-primary w-[500px] h-[500px] top-[20%] -right-[150px]" />
      <div className="orb orb-secondary w-[400px] h-[400px] bottom-[10%] -left-[100px]" />

      {/* Decorative glass rings */}
      <div className="glass-ring w-[150px] h-[150px] top-[12%] left-[10%] opacity-15" />
      <div className="glass-ring w-[80px] h-[80px] bottom-[20%] right-[8%] opacity-20" />

      <div className="container-main relative">
        {/* Header */}
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 glass-pill rounded-[var(--radius-pill)] px-4 py-1.5 mb-6 mx-auto">
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              Pricing
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.12] font-medium tracking-tight mb-4">
            Cheaper than{" "}
            <span className="font-accent">a demand letter</span>
          </h2>
          <p className="text-text-secondary">
            Your first scan is free. See your risk before you commit to anything.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <span
            className={`text-sm font-medium transition-colors ${!annual ? "text-text" : "text-text-tertiary"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-primary" : "bg-text-tertiary/30"}`}
          >
            <div
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${annual ? "translate-x-6" : "translate-x-0.5"}`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${annual ? "text-text" : "text-text-tertiary"}`}
          >
            Annual
          </span>
          {annual && (
            <span className="text-xs font-medium text-green bg-green-light px-2.5 py-0.5 rounded-full">
              Save 20%
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1080px] mx-auto items-start pt-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${plan.popular ? "md:scale-[1.03] z-10" : ""}`}
            >
              {/* Badge sits OUTSIDE the overflow-hidden card */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg z-20">
                  Most Popular
                </div>
              )}

              <div
                className={`relative p-8 h-full transition-all duration-300 ${
                  plan.popular
                    ? "rounded-[var(--radius-card)] bg-gradient-to-br from-primary to-primary-light text-white shadow-2xl shadow-primary/20 overflow-hidden"
                    : "glass-card glass-mesh"
                }`}
              >
                {/* Plus icons */}
                {!plan.popular && (
                  <PlusIcons corners={["top-right", "bottom-left"]} />
                )}
                {plan.popular && (
                  <>
                    {/* Glass shapes inside popular card */}
                    <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-white/[0.08] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[150px] h-[150px] rounded-full bg-white/[0.08] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
                    <div className="absolute top-[40%] right-[10%] w-[80px] h-[80px] rounded-full bg-white/[0.04] pointer-events-none" />
                    <PlusIcons corners={["top-right", "bottom-left"]} className="text-white opacity-20" />
                  </>
                )}

                <div className="relative z-[2]">
                  <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                  <p
                    className={`text-sm mb-6 ${plan.popular ? "text-white/70" : "text-text-tertiary"}`}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    {plan.monthlyPrice ? (
                      <>
                        <span className="text-4xl font-semibold tracking-tight">
                          ${annual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span
                          className={`text-sm ${plan.popular ? "text-white/60" : "text-text-tertiary"}`}
                        >
                          /month
                        </span>
                      </>
                    ) : (
                      <span className="text-4xl font-semibold tracking-tight">
                        Custom
                      </span>
                    )}
                  </div>

                  {/* Glass divider */}
                  <div className={`glass-line mb-6 ${plan.popular ? "opacity-30" : "opacity-60"}`} />

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`mt-0.5 shrink-0 ${plan.popular ? "text-green-300" : "text-green"}`}
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span className={plan.popular ? "text-white/90" : ""}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className={`btn w-full text-center text-xs ${
                      plan.popular
                        ? "bg-white text-primary hover:bg-white/90 shadow-lg"
                        : "btn-primary"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
