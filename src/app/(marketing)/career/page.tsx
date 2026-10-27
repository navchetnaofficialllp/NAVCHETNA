import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Briefcase,
  Coffee,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers - NAVCHETNA TECHNOLOGIES",
  description: "Join Navchetna Technologies and help build conscious technology that impacts real lives across India.",
};

const perks = [
  { icon: Rocket, title: "Build What Matters", desc: "Work on products like Osmium AI and Natraj that solve practical problems." },
  { icon: GraduationCap, title: "Learn Every Day", desc: "Explore AI, AR, cloud, product thinking, and design through real work." },
  { icon: Coffee, title: "Builder Energy", desc: "Curious, scrappy, and focused on shipping useful things with taste." },
];

const categories = ["Engineering", "Design", "Business", "Marketing", "Operations"];

export default function CareerPage() {
  return (
    <main className="bg-white">
      <section className="relative border-b border-black/[0.12] pt-28 pb-12 md:pt-36 md:pb-16 bg-white">
        <div className="section-container relative z-10 mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl">

              <h1
                className="text-black text-balance"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, 3.15rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.08,
                }}
              >
                Build useful technology with a focused team.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-black/80" style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7 }}>
                Join Navchetna Technologies and help shape products, platforms,
                and learning systems that create visible impact across India.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-[13px] font-normal text-black/52">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-black/34"  strokeWidth={1.5} />
                  Jodhpur & Ahmedabad
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="size-4 text-black/34" />
                  15+ team members
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#positions" className="btn btn-primary">
                  View positions
                </a>
                <Link href="/about" className="btn btn-secondary">
                  Our story
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 md:py-[4.5rem]">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-black/36">
                  Working Here
                </p>
                <h2 className="section-heading max-w-sm text-black">
                  How we Work.
                </h2>
              </div>
              <p
                className="mb-6 max-w-md text-pretty"
                style={{
                  color: "rgba(0, 0, 0, 0.48)",
                  lineHeight: 1.65,
                  fontSize: "0.88rem",
                }}
              >
                We focus on building, learning, and shipping great products without unnecessary bureaucracy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 border-y border-black/[0.08] mb-16">
            {perks.map((perk, index) => (
              <ScrollReveal key={perk.title} delay={index * 40}>
                <div className={`h-full p-6 md:p-10 ${index !== 2 ? 'border-b md:border-b-0 md:border-r border-black/[0.08]' : ''}`}>
                  <div className="inline-flex size-10 items-center justify-center rounded-xl border border-black/[0.08] mb-6">
                    <perk.icon className="size-[18px] text-black/70 stroke-[1.5]" />
                  </div>
                  <h3 className="mb-3 text-[1.15rem] text-black font-normal leading-tight tracking-tight">
                    {perk.title}
                  </h3>
                  <p className="text-[0.92rem] leading-[1.65] text-black/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {perk.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="positions" className="scroll-mt-24 border-t border-black/[0.06] py-14 md:py-[4.5rem]">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-black/36">
                  Open Positions
                </p>
                <h2 className="section-heading max-w-sm text-black">
                  Current Openings.
                </h2>
              </div>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="rounded-[var(--panel-radius)] bg-white p-6 ring-1 ring-black/[0.06] md:flex md:items-center md:justify-between md:gap-8">
              <div className="flex gap-5">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.08]">
                  <Users className="size-[18px] text-black/70 stroke-[1.5]" />
                </span>
                <div>
                  <h3 className="text-lg font-medium text-black">No open positions currently</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-black/48">
                    We are not actively hiring right now, but we are always open
                    to meeting thoughtful builders who care about product,
                    design, engineering, and impact.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-6 md:mt-0 btn btn-primary flex shrink-0 items-center justify-center gap-2"
              >
                <Mail className="size-4" strokeWidth={1.5} />
                Send Resume
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="section-container">
          <div
            className="relative isolate overflow-hidden flex flex-col items-center text-center bg-[#fafafa]"
            style={{
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "4px",
              padding: "clamp(2.5rem, 8vw, 3.5rem) clamp(1.5rem, 5vw, 3rem)",
            }}
          >
            <ScrollReveal>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2
                  className="mb-4 text-balance"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.04em",
                    color: "#000"
                  }}
                >
                  Don&apos;t see a role? Send us your{" "}
                  work anyway.
                </h2>
                <p
                  className="mb-7 text-black/80"
                  style={{ lineHeight: 1.65, fontSize: "0.92rem", maxWidth: "480px", margin: "0 auto 1.75rem" }}
                >
                  We are always open to meeting thoughtful builders who care about product, design, engineering, and impact.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Get in touch
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
