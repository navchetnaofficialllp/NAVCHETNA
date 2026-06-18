import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Connectt.live — AI-Powered B2B Video Meetings | Navchetna",
  description:
    "Ultra-low latency, AI-powered B2B video meeting platform. One of the most affordable enterprise video solutions built for teams that can't afford lag.",
};

const features = [
  {
    title: "Ultra-Low Latency",
    desc: "Sub-100ms latency powered by our optimised WebRTC infrastructure — no buffering, no dropped frames, just pure clarity.",
  },
  {
    title: "AI-Enhanced Meetings",
    desc: "Live transcription, smart summaries, action item extraction, and real-time noise cancellation — all built in.",
  },
  {
    title: "Most Affordable B2B Tier",
    desc: "Enterprise-grade video without enterprise pricing. One of the cheapest per-seat plans in the market, period.",
  },
  {
    title: "Built for B2B",
    desc: "Team workspaces, meeting rooms, calendar integrations, recording, and role-based access — ready on day one.",
  },
  {
    title: "End-to-End Encrypted",
    desc: "Every session is encrypted in transit and at rest. Your conversations stay yours.",
  },
  {
    title: "Works Everywhere",
    desc: "No downloads required. Browser-native on desktop and mobile — one link, instant join.",
  },
];

const stats = [
  { value: "<100ms", label: "Latency" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "10×", label: "Cheaper than Zoom Enterprise" },
  { value: "AI-First", label: "From day one" },
];

export default function ConnecttPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 sm:pt-32 md:pt-40 pb-16 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(72,105,133,0.05) 0%, rgba(125,72,53,0.03) 40%, #ffffff 100%)",
        }}
      >
        <div className="grid-overlay" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-black/50 mb-6">
                <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                Now Available
              </span>
              <h1
                className="text-black text-balance"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Meetings that{" "}
                <span className="serif-italic">think with you.</span>
              </h1>
              <p
                className="mt-6 max-w-xl"
                style={{ color: "rgba(0,0,0,0.52)", lineHeight: 1.7, fontSize: "1rem" }}
              >
                Connectt.live is an AI-powered, ultra-low latency B2B video
                meeting platform — one of the most affordable in the market.
                Built for teams that need reliability, intelligence, and speed
                without the bloated price tag.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-black/80 transition-colors"
                  style={{ height: "2.75rem" }}
                >
                  Request Early Access
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-black/[0.12] px-6 text-sm font-semibold text-black/70 hover:text-black hover:border-black/25 transition-colors"
                  style={{ height: "2.75rem" }}
                >
                  Get a Demo
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className="section-container mt-12">
          <div className="section-divider" />
        </div>
      </section>

      {/* Hero Image */}
      <section className="section-container py-8 md:py-12">
        <ScrollReveal>
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-black/[0.07]">
            <Image
              src="/assets/connecttbg.png"
              alt="Connectt.live — AI Video Meeting Platform"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
              quality={75}
              priority
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Stats */}
      <section className="section-container py-12 md:py-16">
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-black/[0.07] rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center px-6 py-8"
                style={{ background: i % 2 === 0 ? "rgba(0,0,0,0.015)" : "#ffffff" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    color: "#000",
                  }}
                >
                  {s.value}
                </span>
                <span className="mt-1.5 text-[11px] font-medium text-black/40 uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Features */}
      <section className="section-container py-10 md:py-16">
        <ScrollReveal>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">
            Platform
          </p>
          <h2 className="section-heading mb-10">
            Everything your team <span className="serif-italic">needs.</span>
          </h2>
        </ScrollReveal>
        <div className="section-divider mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 60}>
              <div className="border border-black/[0.07] rounded-xl p-6 hover:border-black/[0.14] transition-colors">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ color: "rgba(0,0,0,0.52)", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  {f.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container py-14 md:py-20">
        <ScrollReveal>
          <div
            className="relative isolate overflow-hidden rounded-2xl flex flex-col items-center text-center"
            style={{
              background: "linear-gradient(135deg, #fdfbf7 0%, #f8f6ff 50%, #fef9f5 100%)",
              border: "1px solid rgba(0,0,0,0.08)",
              padding: "clamp(2.5rem, 8vw, 3.5rem) clamp(1.5rem, 5vw, 3rem)",
            }}
          >
            <span className="absolute top-0 left-0 w-12 h-px bg-linear-to-r from-black/15 to-transparent" />
            <span className="absolute top-0 left-0 h-12 w-px bg-linear-to-b from-black/15 to-transparent" />
            <span className="absolute bottom-0 right-0 w-12 h-px bg-linear-to-l from-black/15 to-transparent" />
            <span className="absolute bottom-0 right-0 h-12 w-px bg-linear-to-t from-black/15 to-transparent" />
            <h2
              className="mb-4 text-balance"
              style={{
                fontFamily: "var(--font-waldenburg)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#000",
              }}
            >
              Ready to upgrade your{" "}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #d4845a 0%, #8b6bc7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                team meetings?
              </span>
            </h2>
            <p
              className="max-w-xl"
              style={{ color: "rgba(0,0,0,0.60)", lineHeight: 1.65, fontSize: "0.92rem", marginBottom: "1.75rem" }}
            >
              Join the waitlist and be among the first B2B teams to experience
              AI-native, ultra-low latency video meetings at a price that makes sense.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-black/80 transition-colors"
              style={{ height: "2.5rem" }}
            >
              Get Early Access
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
