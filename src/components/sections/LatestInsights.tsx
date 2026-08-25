"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export function LatestInsights() {
  const insights = [
    {
      title: "Osmium Launch: Redefining How We Learn",
      date: "Jan 15, 2025",
      tag: "Product Launch",
      link: "/blog/product/osmium",
      image: "/assets/OSMIUM LAUNCH.png"
    },
    {
      title: "Natraj: AR + AI Anatomy Learning Platform",
      date: "Jan 10, 2025",
      tag: "Feature Update",
      link: "/blog/product/natraj",
      image: "/assets/nataraj_mockup.png"
    },
    {
      title: "One on One: Where Teaching Meets Intelligence",
      date: "Apr 15, 2025",
      tag: "Product Launch",
      link: "/blog/product/vedsegment",
      image: "/assets/vedsegment-new.png"
    }
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white border-t" style={{ borderColor: "rgba(10,10,10,0.12)" }}>
      <div className="section-container">
        <ScrollReveal>
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50">Journal</p>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  color: "#1A1A1A",
                  lineHeight: 1.1,
                }}
              >
                Latest Insights.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-black/80 hover:text-black transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View all updates <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <Link
                href={item.link}
                className="group block border bg-[#fafafa] transition-all hover:bg-white"
                style={{
                  borderColor: "rgba(10,10,10,0.12)",
                  borderRadius: "2px",
                }}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b" style={{ borderColor: "rgba(10,10,10,0.12)" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider text-black/50"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.tag}
                    </span>
                    <span
                      className="text-[11px] text-black/40"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.date}
                    </span>
                  </div>
                  <h3
                    className="mb-2 leading-[1.25] text-[#1A1A1A]"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.05rem, 2vw, 1.15rem)",
                      fontWeight: 400,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
