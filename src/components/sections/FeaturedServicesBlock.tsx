"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ScrollTextReveal } from "@/components/ui/ScrollTextReveal";

type Service = {
  badge: string;
  title: string;
  desc: string;
  bullets: string[];
};

const images = [
  "/ref/gmhm1kxxzgd-Background7.jpeg",
  "/ref/9dzqkp3d2u4-app-creative.jpeg",
  "/ref/rlartawee0i-app-agents.jpeg",
  "/ref/redchdw2op-bento-orange-blue-2@3x.jpeg",
];

export function FeaturedServicesBlock({ featuredServices }: { featuredServices: Service[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 relative bg-white">
      {/* Top intro text */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 mb-20 lg:mb-32">
        <ScrollTextReveal className="type-5xl text-black max-w-4xl leading-snug">
          Comprehensive solutions for every challenge. We build intelligent systems that scale with your ambition.
        </ScrollTextReveal>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Top hairline border */}
        <div style={{ borderTop: "1px solid rgba(10,10,10,0.12)", width: "100%" }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 relative" style={{ borderLeft: "1px solid rgba(10,10,10,0.12)", borderRight: "1px solid rgba(10,10,10,0.12)" }}>
          
          {/* Left Column: Scrolling Content */}
          <div className="relative" style={{ borderRight: "1px solid rgba(10,10,10,0.12)" }}>
            {featuredServices.map((s, i) => (
              <ServiceTextBlock key={s.title} s={s} index={i} setIndex={setActiveIndex} isLast={i === featuredServices.length - 1} />
            ))}
          </div>

          {/* Right Column: Sticky Media */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32 p-10 xl:p-16">
              <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden bg-warm-50" style={{ borderRadius: "2px", border: "1px solid rgba(10,10,10,0.08)" }}>
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[activeIndex % images.length]}
                      alt="Featured Service Media"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic summary indicator */}
              <div className="mt-8 flex items-center justify-between px-1" style={{ color: "#8b8b8b" }}>
                <span className="type-sm font-medium">{featuredServices[activeIndex].badge}</span>
                <span className="type-sm" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", letterSpacing: "0.08em" }}>0{activeIndex + 1} / 0{featuredServices.length}</span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom hairline border */}
        <div style={{ borderBottom: "1px solid rgba(10,10,10,0.12)", width: "100%" }} />

      </div>
    </section>
  );
}

function ServiceTextBlock({ 
  s, 
  index, 
  setIndex,
  isLast 
}: { 
  s: Service; 
  index: number; 
  setIndex: (i: number) => void;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setIndex(index);
    }
  }, [isInView, index, setIndex]);

  return (
    <div 
      ref={ref} 
      className={`relative flex flex-col justify-center min-h-[70vh] p-10 py-24 md:p-16 lg:p-20 transition-opacity duration-300 ${isInView ? "opacity-100" : "opacity-30 hover:opacity-60"}`}
      style={{ borderBottom: !isLast ? "1px solid rgba(10,10,10,0.12)" : "none" }}
    >
      <span className="type-2xs font-medium uppercase tracking-wider w-fit mb-6" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", letterSpacing: "0.14em", color: "#8b8b8b" }}>
        {s.badge}
      </span>
      <h3 className="type-4xl md:type-5xl text-black mb-6 tracking-tight leading-[1.06]" style={{ fontWeight: 400 }}>{s.title}</h3>
      <p className="type-base text-black/45 leading-relaxed text-pretty max-w-xl">
        {s.desc}
      </p>
      
      <div className="mt-12 space-y-4">
        {s.bullets.map((b) => (
          <div key={b} className="flex items-center gap-3">
            <div className="flex-none" style={{ width: "5px", height: "5px", borderRadius: "1px", background: "rgba(0,0,0,0.18)" }} />
            <span className="type-sm text-black/80 font-medium">{b}</span>
          </div>
        ))}
      </div>
      
      {/* Mobile media fallback */}
      <div className="mt-10 lg:hidden w-full aspect-video relative overflow-hidden" style={{ borderRadius: "2px", border: "1px solid rgba(10,10,10,0.08)" }}>
        <Image
          src={images[index % images.length]}
          alt={s.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
