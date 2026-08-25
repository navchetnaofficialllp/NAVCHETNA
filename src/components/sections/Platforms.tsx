import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MonitorSmartphone, Bot, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: MonitorSmartphone,
    title: "Product Development",
    desc: "Web, mobile, desktop, and game experiences built with a clear product plan. We focus on scalable architecture and seamless user experiences across all devices.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    desc: "LLM workflows, recommendation systems, and automation that reduce manual effort. We integrate intelligent agents that learn and adapt to your organizational needs.",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Management",
    desc: "Research, planning, cloud direction, and execution support for growing teams. We provide the technical leadership necessary to guide complex projects to completion.",
  },
];



export function Platforms() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white">
      <div className="section-container relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="section-heading max-w-xl mb-6">
              Practical systems,
              {" "}
              <span style={{ color: "#8b8b8b" }}>shaped with restraint.</span>
            </h2>
            <p
              className="max-w-xl"
              style={{ color: "rgba(0,0,0,0.48)", lineHeight: 1.62, fontSize: "0.98rem" }}
            >
              We keep the workflow focused: understand the problem, shape the experience,
              engineer the system, and support the launch with disciplined iteration.
            </p>
          </div>
        </ScrollReveal>

        {/* Core Services — clean grid with hairline dividers */}
        <ScrollReveal delay={100}>
          <div className="grid md:grid-cols-3" style={{ borderTop: "1px solid rgba(10,10,10,0.12)", borderBottom: "1px solid rgba(10,10,10,0.12)" }}>
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="p-6 md:p-10" style={{ borderRight: index !== 2 ? "1px solid rgba(10,10,10,0.12)" : "none", borderBottom: index !== 2 ? "1px solid rgba(10,10,10,0.12)" : "none" }}>
                <div className="inline-flex size-10 items-center justify-center mb-6" style={{ border: "1px solid rgba(10,10,10,0.12)", borderRadius: "2px" }}>
                  <pillar.icon className="size-[18px] text-black/80 stroke-[1.5]" />
                </div>
                <h3 className="mb-3 text-[1.15rem] text-black font-normal leading-tight tracking-tight" style={{ fontFamily: "var(--font-waldenburg)", fontWeight: 400 }}>
                  {pillar.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.62] text-black/45" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex justify-start mt-6">
            <Link href="/services" className="btn btn-secondary w-max">
              View all services
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
