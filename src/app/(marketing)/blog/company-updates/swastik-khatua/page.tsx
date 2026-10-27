"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Briefcase, Lightbulb, MapPin, Calendar, Award, Code } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function SwastikProfilePage() {
  return (
    <div className="bg-white min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">

        {/* Breadcrumb */}
        <ScrollReveal>
          <div className="mb-10 flex items-center gap-2 text-[11px] font-medium tracking-widest text-black/50 uppercase">
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <span>/</span>
            <span className="hover:text-black transition-colors cursor-pointer">Company Updates</span>
            <span>/</span>
            <span className="text-black/80">Swastik Khatua</span>
          </div>
        </ScrollReveal>

        {/* Profile Header */}
        <ScrollReveal delay={50}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-10">
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0  overflow-hidden shadow-lg border border-black/[0.08]">
              <Image
                src="/assets/swastik 2.jpeg"
                alt="Swastik Khatua"
                fill
                sizes="(max-width: 768px) 160px, 224px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col flex-1 pt-1">
              <h1
                className="text-3xl md:text-4xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-black via-[#7D4835] to-[#333]"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 500, letterSpacing: "-0.04em" }}
              >
                Swastik Khatua
              </h1>
              <p className="text-[15px] font-normal tracking-wide text-black/80 uppercase mb-5" style={{ fontFamily: "var(--font-body)" }}>
                Co-Founder & Frontend Engineer <span className="text-black/50 mx-2">•</span> Navchetna Technologies
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm border border-black/10 bg-black/[0.02] text-[11px] font-medium tracking-wider text-black/70">
                  <Lightbulb className="w-3.5 h-3.5 text-black/80"  strokeWidth={1.5} />
                  Tech Visionary
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm border border-black/10 bg-black/[0.02] text-[11px] font-medium tracking-wider text-black/70">
                  <Code className="w-3.5 h-3.5 text-black/80"  strokeWidth={1.5} />
                  Frontend Engineer
                </span>
              </div>

              <div className="flex flex-col gap-2 text-[13px] text-black/80" style={{ fontFamily: "var(--font-body)" }}>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-black/50"  strokeWidth={1.5} />
                  Born August 16, 2006 · Age 19
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-black/50"  strokeWidth={1.5} />
                  Kukarwada, Gujarat, India
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Intro Highlight */}
        <ScrollReveal delay={100}>
          <div className="relative mb-12 pl-8 md:pl-12 py-2">
            <span
              className="absolute -top-4 left-0 text-7xl md:text-9xl text-black/[0.06] leading-none pointer-events-none select-none"
              style={{ fontFamily: "var(--font-heading)", fontStyle: "normal" }}
            >
              "
            </span>
            <p className="relative z-10 text-base md:text-xl text-black/80 leading-relaxed" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.04em" }}>
              At just 19, Swastik is not just another name in technology — he is the symbol of next-gen innovation, transforming ideas into reality through code and determination.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-20">

          {/* Left Column: Biography */}
          <div className="space-y-8 text-black/85" style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", lineHeight: 1.7 }}>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.04em" }}>The Rising Tech Visionary</h2>
                <p className="mb-4">
                  Born on August 16, 2006, in Kukarwada, Gujarat, India, Swastik Khatua is not just another name in technology — he is the symbol of next-gen innovation. At just 19, Swastik has already carved a niche for himself as a Co-Founder of Osmium AI, an AI-driven EdTech platform, and as a pioneering frontend engineer.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.04em" }}>Family & Early Life</h2>
                <p className="mb-4">
                  Swastik comes from a modest family background, where financial challenges were a constant part of life. Growing up, he witnessed the value of hard work, determination, and resourcefulness. Despite the constraints, his family always encouraged him to dream bigger and chase excellence.
                </p>
                <p>
                  These circumstances became the foundation of his resilience — fueling his drive to achieve more and create opportunities, not just for himself but for others.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.04em" }}>The Journey of Innovation</h2>
                <p className="mb-4">
                  Swastik&apos;s journey is fueled by raw passion, relentless curiosity, and an unshakable determination to transform ideas into reality. His technical arsenal includes React.js, Angular, Next.js, Tailwind CSS, JavaScript, TypeScript, and advanced state management systems.
                </p>
                <p>
                  For him, code is not just syntax — it is art, a medium to craft seamless, powerful, and futuristic user experiences.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.04em" }}>Osmium AI — Rewriting Education</h2>
                <p className="mb-4">
                  With Osmium AI, Swastik is rewriting the future of education. The platform doesn&apos;t just deliver learning — it predicts competitive exam questions, tailors study plans, and guides careers with AI precision.
                </p>
                <p>
                  His vision is crystal clear: empower learners with tools so advanced that education feels less like a burden and more like a superpower.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.04em" }}>Beyond Osmium AI</h2>
                <p className="mb-4">
                  But Osmium AI is just the beginning. Swastik has also delved into AI-powered experiments such as hand gesture-controlled systems, real-time collaborative platforms rivaling global innovations, and projects that push the boundary of what&apos;s possible.
                </p>
                <p>
                  His performances in hackathons, SIH 2024–25, and Breached 5.0 showcase his ability to think beyond the ordinary and execute under pressure.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.04em" }}>Mindset & Vision</h2>
                <p className="mb-4">
                  What makes Swastik stand apart is not just his skillset — it&apos;s his mindset. Coming from a financially modest background, he understands the value of perseverance and innovation. He is a creator who doesn&apos;t wait for opportunities but builds them, a learner who thrives in challenges, and a leader who believes in shaping technology with purpose.
                </p>
                <p>
                  At just 19, he embodies the fire of a generation determined to change the world. Swastik Khatua is not the future — he is the present, and he is unstoppable.
                </p>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6">

            {/* Roles */}
            <ScrollReveal delay={150}>
              <div className="p-6  bg-black/[0.02] border border-black/[0.06]">
                <h3 className="text-[11px] font-medium uppercase tracking-widest text-black/50 mb-6 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5"  strokeWidth={1.5} /> Leadership Positions
                </h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-[12.5px] font-medium text-black/80">Co-Founder & Frontend Engineer</span>
                    <span className="text-[11px] text-black/80 mt-0.5">NINELLMS SOLUTIONS LLP (Navchetna)</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[12.5px] font-medium text-black/80">Co-Founder</span>
                    <span className="text-[11px] text-black/80 mt-0.5">Osmium AI — AI EdTech Platform</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Key Achievements */}
            <ScrollReveal delay={200}>
              <div className="p-7  bg-white border border-black/[0.06] shadow-sm">
                <h3 className="text-[11px] font-medium uppercase tracking-widest text-black/50 mb-6 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5"  strokeWidth={1.5} /> Key Achievements
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[11px] font-medium text-black/70 mb-3 border-b border-black/5 pb-2">Hackathons & Competitions</h4>
                    <ul className="space-y-2.5 text-[12px] text-black/80 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-black/20 shrink-0" />
                        <span>SIH 2024–25 participant</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-black/20 shrink-0" />
                        <span>Breached 5.0 hackathon competitor</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-black/20 shrink-0" />
                        <span>Multiple hackathon podium performances</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-medium text-black/70 mb-3 border-b border-black/5 pb-2">AI Innovations</h4>
                    <ul className="space-y-2.5 text-[12px] text-black/80 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-black/20 shrink-0" />
                        <span>Hand gesture-controlled AI systems</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-black/20 shrink-0" />
                        <span>Real-time collaborative platforms</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-black/20 shrink-0" />
                        <span>Co-creator of Osmium AI EdTech platform</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-medium text-black/70 mb-3 border-b border-black/5 pb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["React.js", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "JavaScript"].map((tech) => (
                        <span key={tech} className="px-2 py-1  bg-black/[0.03] border border-black/[0.07] text-[11px] font-normal text-black/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

        {/* Back Link */}
        <ScrollReveal>
          <div className="mt-12 pt-6 border-t  border-black/20">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-normal text-black/80 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4"  strokeWidth={1.5} />
              Back to Company Profile
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
