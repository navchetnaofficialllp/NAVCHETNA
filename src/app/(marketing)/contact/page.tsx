import type { Metadata } from "next";
import Script from "next/script";
import { CalendarDays } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Schedule a Meeting — NAVCHETNA TECHNOLOGIES",
  description: "Book a 30-minute meeting with Navchetna Technologies.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-16 md:pt-36 md:pb-24">
      <section className="relative overflow-hidden">
        
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
              <p className="section-eyebrow mb-4 justify-center">Schedule a meeting</p>
              <h1 className="section-heading text-[clamp(2rem,4vw,3.15rem)]">
                Let&apos;s make progress, together.
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-black/80">
                Choose a time that works for you, and we&apos;ll use the session to understand your goals and explore the right next step.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-hidden border border-black/[0.08] bg-white" style={{ borderRadius: "4px" }}>
              <div className="flex items-center gap-3 px-5 py-4 sm:px-7" style={{ borderBottom: "1px solid rgba(10,10,10,0.12)" }}>
                <span className="inline-flex size-9 items-center justify-center bg-black/[0.04] text-black/80" style={{ borderRadius: "4px" }}>
                  <CalendarDays className="size-4"  strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[13px] font-medium text-black/75">30-minute introduction</p>
                  <p className="text-[12px] text-black/45">Select a convenient date and time below.</p>
                </div>
              </div>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/navchetna-official-llp/30min?primary_color=ff008a"
                style={{ minWidth: 320, height: 700 }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </main>
  );
}
