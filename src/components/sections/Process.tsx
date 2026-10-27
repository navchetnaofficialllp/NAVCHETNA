"use client";

import { useState } from "react";
import { MagnifyingGlass, Lightning, Rocket, CheckCircle, Handshake, HandHeart } from "@phosphor-icons/react";
import Image from "next/image";

const phases = [
  {
    id: "plan",
    label: "Plan",
    title: "Plan",
    desc: "Every project begins with clarity. We listen, research, and map a practical strategy aligned on timelines, budgets, and goals.",
    items: [
      { icon: MagnifyingGlass, title: "Deep Research", desc: "Understand the market, needs, and scale." },
      { icon: Handshake, title: "Strategic Alignment", desc: "Transparent communication from day one." },
    ],
  },
  {
    id: "development",
    label: "Development",
    title: "Development",
    desc: "Our engineers bring ideas to life with a rigorous approach that balances speed, reliability, and long-term maintainability.",
    items: [
      { icon: Lightning, title: "Agile Execution", desc: "Flexible, rapid, and adaptive to change." },
      { icon: CheckCircle, title: "Zero-Compromise", desc: "Every line tested for reliability." },
    ],
  },
  {
    id: "release",
    label: "Release",
    title: "Release",
    desc: "Seamless launches, careful monitoring, and ongoing support keep the system performing after it ships.",
    items: [
      { icon: Rocket, title: "Seamless Deployment", desc: "A steady path from build to production." },
      { icon: HandHeart, title: "Lifecycle Support", desc: "An extension of your team post-release." },
    ],
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const current = phases[active];

  return (
    <section className="relative overflow-hidden py-8 md:py-14">

      <div className="section-sep" />

      <div className="section-container">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.16em", color: "#8b8b8b" }}>Process</p>
            <h2 className="section-heading">Executing vision with <span style={{ color: "#8b8b8b" }}>steady precision.</span></h2>
          </div>
          <p
            className="max-w-md"
            style={{ color: "rgba(0,0,0,0.48)", lineHeight: 1.62, fontSize: "0.94rem" }}
          >
            Every project deserves a thoughtful start, a strong build, and a confident launch.
          </p>
        </div>

        {/* Hairline divider */}
        <div className="section-divider mb-10" />

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Phase List */}
          <div className="flex flex-col gap-6" style={{ borderLeft: "1px solid rgba(10,10,10,0.12)", paddingLeft: "1.5rem" }}>
            {phases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActive(index)}
                className="text-left group relative"
              >
                {/* Active indicator — small square, not dot */}
                <div 
                  className="absolute -left-[25px] top-2 transition-all duration-200"
                  style={{ 
                    width: "6px",
                    height: "6px",
                    borderRadius: "1px",
                    background: active === index ? "#0A0A0A" : "transparent",
                  }}
                />
                
                <h3
                  className="text-xl transition-colors duration-200"
                  style={{ 
                    fontFamily: "var(--font-waldenburg)", 
                    fontWeight: 400,
                    color: active === index ? "#0A0A0A" : "rgba(0,0,0,0.25)" 
                  }}
                >
                  0{index + 1}. {phase.title}
                </h3>
                
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ 
                    maxHeight: active === index ? "100px" : "0px",
                    opacity: active === index ? 1 : 0,
                    marginTop: active === index ? "0.5rem" : "0"
                  }}
                >
                  <p className="text-sm text-black/45 pr-4">{phase.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Content details */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[21/9] w-full overflow-hidden bg-black/[0.02]" style={{ borderRadius: "4px" }}>
              <Image
                src={["/assets/Frame 110.png", "/assets/Frame 112.png", "/assets/Frame 113.png"][active]}
                alt={current.title}
                fill
                className="object-cover"
                quality={88}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {current.items.map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    {/* Flat icon box */}
                    <div className="flex w-8 h-8 shrink-0 items-center justify-center"
                         style={{ background: "rgba(0,0,0,0.04)", borderRadius: "4px" }}>
                      <item.icon weight="regular" className="w-4 h-4" style={{ color: "#0A0A0A" }} />
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        letterSpacing: "-0.015em",
                        color: "#0A0A0A",
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                  <div className="pt-1" />
                  <p style={{ color: "rgba(0,0,0,0.45)", lineHeight: 1.62, fontSize: "0.85rem" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
