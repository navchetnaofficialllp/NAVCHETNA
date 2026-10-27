"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type FilterCategory = "All" | "Company Story" | "Product Insight" | "Milestone" | "Engineering";

const posts = [
  // ── Product Insights ── (images from /blog/product/[slug] banner)
  {
    title: "RUX: Everything a Developer Needs, All in One Place",
    date: "2025",
    image: "/assets/rux.jpeg",
    alt: "RUX developer platform",
    href: "/blog/product/rux",
    category: "Product Insight" as FilterCategory,
  },
  {
    title: "OsmiumLLM: A Global Benchmark in Education-Focused AI",
    date: "Aug 15, 2025",
    image: "/assets/osmium (1).png",
    alt: "OsmiumLLM global benchmark",
    href: "/blog/product/osmiumllm",
    category: "Product Insight" as FilterCategory,
  },
  {
    title: "Osmium AI: The Future of AI-Powered Education",
    date: "Jan 15, 2025",
    image: "/assets/osmium-mockup.png",
    alt: "Osmium AI platform",
    href: "/blog/product/osmium",
    category: "Product Insight" as FilterCategory,
  },
  {
    title: "Natraj: AR + AI Anatomy Learning Platform",
    date: "Jan 10, 2025",
    image: "/assets/nataraj_mockup.png",
    alt: "Natraj AR anatomy learning",
    href: "/blog/product/natraj",
    category: "Product Insight" as FilterCategory,
  },
  {
    title: "One on One: Where Teaching Meets Intelligence",
    date: "Apr 15, 2025",
    image: "/assets/vedsegment-new.png",
    alt: "One on One tutoring platform",
    href: "/blog/product/vedsegment",
    category: "Product Insight" as FilterCategory,
  },
  {
    title: "Aegis Auth v3.0: The New Standard for Digital Identity",
    date: "Jan 15, 2026",
    image: "/assets/aegis1.png",
    alt: "Aegis Auth security system",
    href: "/blog/product/aegis",
    category: "Product Insight" as FilterCategory,
  },
  {
    title: "NSL: The Silent Engine of Financial Truth",
    date: "Jan 20, 2025",
    image: "/assets/nsl.png",
    alt: "NSL smart billing system",
    href: "/blog/product/nsl",
    category: "Product Insight" as FilterCategory,
  },
  {
    title: "LM Lens: Transforming Chaos into Clean Data",
    date: "Jan 15, 2025",
    image: "/assets/lmlens.png",
    alt: "LM Lens data extraction",
    href: "/blog/product/lmlens",
    category: "Product Insight" as FilterCategory,
  },
  {
    title: "Vajra: The AWS Lambda for AI",
    date: "Mar 1, 2025",
    image: "/assets/osmium (1).png",
    alt: "Vajra GPU cloud infrastructure",
    href: "/blog/product/vajra",
    category: "Product Insight" as FilterCategory,
  },
  {
    title: "Kriya: The Future of AI-Integrated ERP & Project Management",
    date: "Q3 2025",
    image: "/assets/kriya1.png",
    alt: "Kriya ERP and project management",
    href: "/blog/product/kriya",
    category: "Product Insight" as FilterCategory,
  },
  {
    title: "Vyom: Intelligent Customer Relationship Management",
    date: "Q4 2025",
    image: "/assets/osmium-mockup.png",
    alt: "Vyom CRM platform",
    href: "/blog/product/crm",
    category: "Product Insight" as FilterCategory,
  },
  {
    title: "Vega: Autonomous Software Engineering",
    date: "Q4 2025",
    image: "/assets/vedsegment-new.png",
    alt: "Vega agentic software engineering",
    href: "/blog/product/agentic-sde",
    category: "Product Insight" as FilterCategory,
  },
  {
    title: "Yugm: Unified Synced Storage with Version Control",
    date: "2026",
    image: "/assets/nsl.png",
    alt: "Yugm unified storage",
    href: "/blog/product/unified-storage",
    category: "Product Insight" as FilterCategory,
  },

  // ── Company Stories ──
  {
    title: "How five friends built a technology company from one conversation",
    date: "Sep 6, 2024",
    image: "/assets/friends.jpg",
    alt: "The founding team behind Navchetna",
    href: "/blog/company#foundation",
    category: "Company Story" as FilterCategory,
  },

  // ── Milestones ──
  {
    title: "Navchetna is officially recognized by Startup India",
    date: "Dec 22, 2025",
    image: "/DPIIT-header.png",
    alt: "DPIIT Startup India recognition",
    href: "/blog/company#recognition",
    category: "Milestone" as FilterCategory,
  },
  {
    title: "Navchetna Officially Registered as NINELLMS Solutions LLP",
    date: "Aug 6, 2025",
    image: "/assets/friends.jpg",
    alt: "Official company registration",
    href: "/blog/company#registered",
    category: "Milestone" as FilterCategory,
  },
  {
    title: "Navchetna Collaborates with AWS",
    date: "Jul 16, 2025",
    image: "/DPIIT-header.png",
    alt: "AWS Collaboration",
    href: "/blog/company#partnership",
    category: "Milestone" as FilterCategory,
  },
  {
    title: "First Prototype of Osmium AI Completed",
    date: "Sep 15, 2024",
    image: "/assets/osmium-mockup.png",
    alt: "Osmium AI first prototype",
    href: "/blog/company#milestone",
    category: "Milestone" as FilterCategory,
  },

  // ── Engineering ──
  {
    title: "Osmium AI Outperforms All Global LLMs in Educational Benchmarks",
    date: "Aug 15, 2025",
    image: "/assets/osmium (1).png",
    alt: "Osmium AI benchmark results",
    href: "/blog/company#research",
    category: "Engineering" as FilterCategory,
  },
  {
    title: "Fully Independent: Zero Dependencies, 100% In-House",
    date: "Jan 10, 2025",
    image: "/assets/aegis1.png",
    alt: "Full independence engineering",
    href: "/blog/company#independence",
    category: "Engineering" as FilterCategory,
  },
  {
    title: "Aegis Auth: 10+ Layers of Security, Live Now",
    date: "Jan 15, 2025",
    image: "/assets/aegis.png",
    alt: "Aegis Auth launch",
    href: "/blog/company#product",
    category: "Engineering" as FilterCategory,
  },
];

const FILTERS: FilterCategory[] = ["All", "Company Story", "Product Insight", "Milestone", "Engineering"];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filtered = activeFilter === "All"
    ? posts
    : posts.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-12 border-b border-black/[0.06]">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.4rem, 6vw, 4rem)",
                  fontWeight: 500,
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                  color: "#0A0A0A",
                }}
              >
                News &amp; Insights
              </h1>
              <p
                className="mt-5 max-w-lg text-pretty"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "rgba(0,0,0,0.48)",
                }}
              >
                Follow the stories behind our products, the people building them, and the technology moving us forward.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Filter Chips ── */}
      <section className="pt-10 pb-2">
        <div className="section-container">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => {
                const active = activeFilter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className="transition-all duration-200 active:scale-95"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      height: "32px",
                      padding: "0 14px",
                      borderRadius: "9999px",
                      fontSize: "12.5px",
                      fontWeight: active ? 600 : 400,
                      fontFamily: "var(--font-body)",
                      letterSpacing: "0",
                      border: active ? "1px solid rgba(0,0,0,0.20)" : "1px solid rgba(0,0,0,0.09)",
                      background: active ? "#0A0A0A" : "transparent",
                      color: active ? "#ffffff" : "rgba(0,0,0,0.55)",
                      cursor: "pointer",
                    }}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Cards Grid ── */}
      <section className="pt-10 pb-20 md:pb-28">
        <div className="section-container">
          {filtered.length === 0 ? (
            <p className="text-sm text-black/50 py-16 text-center" style={{ fontFamily: "var(--font-body)" }}>
              No posts in this category yet.
            </p>
          ) : (
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, index) => (
                <ScrollReveal key={post.href + post.title} delay={Math.min(index * 40, 200)}>
                  <Link href={post.href} className="group flex h-full flex-col focus-visible:outline-none">
                    {/* Thumbnail */}
                    <div
                      className="relative overflow-hidden bg-warm-50"
                      style={{
                        aspectRatio: "10/7",
                        borderRadius: "4px",
                        border: "1px solid rgba(0,0,0,0.07)",
                      }}
                    >
                      <Image
                        src={post.image}
                        alt={post.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col pt-5">
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "11.5px",
                          color: "rgba(0,0,0,0.35)",
                          letterSpacing: "0.01em",
                          marginBottom: "8px",
                        }}
                      >
                        {post.date}
                      </p>
                      <h2
                        className="transition-colors group-hover:text-black/80"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "clamp(0.975rem, 1.4vw, 1.075rem)",
                          fontWeight: 500,
                          lineHeight: 1.3,
                          letterSpacing: "-0.015em",
                          color: "#0A0A0A",
                        }}
                      >
                        {post.title}
                      </h2>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
