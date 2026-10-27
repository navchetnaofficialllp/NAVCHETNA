import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Calendar, Award, Microscope, Shield, Rocket, Briefcase, Handshake, Flag, Coffee } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const articles = [
  {
    id: "recognition",
    badge: "Featured",
    date: "Dec 22, 2025",
    title: "Navchetna Technologies: Now a Government Recognized Startup",
    body: "Navchetna Technologies is officially a DPIIT Recognized Startup under the Startup India Initiative. This recognition validates our journey from five friends in Jodhpur to national innovators building enterprise-grade technology.",
    callout: { label: "NineLLMs Solution", text: "Our proprietary NineLLMs ecosystem powers everything from Osmium AI's adaptive learning to Natraj's creative engines, establishing us as leaders in AI-driven innovation." },
    readTime: "5 min read",
    tags: ["DPIIT", "Government", "Recognition"],
  },
  {
    id: "research",
    badge: "Research",
    date: "Aug 15, 2025",
    title: "Osmium AI Outperforms All Global LLMs in Educational Content Benchmarks",
    body: "We are proud to announce that Osmium AI, Navchetna's flagship AI platform, has officially outperformed every existing large language model worldwide in the domain of educational content generation. This milestone, achieved on August 15, 2025, marks a historic step in our mission to revolutionize personalized learning and empower students globally.",
    callout: { label: "Benchmark Documentation", text: "The full benchmark methodology, evaluation criteria, and results are available in our official documentation." },
    readTime: "8 min read",
    tags: ["AI", "Research", "EdTech"],
  },
  {
    id: "independence",
    badge: "Engineering",
    date: "Jan 10, 2025",
    title: "Fully Independent: Zero Dependencies, 100% In-House",
    body: "Navchetna is now fully independent with our own complete technology stack. We built Aegis Auth with 10+ layers of security, NSL for financial integrity, and LM Lens for data extraction. All proprietary, all Made in India.",
    callout: { label: "Zero Black Boxes", text: "From authentication to billing to data processing, we own every layer. No third party dependencies, no shortcuts. Just pure in-house engineering." },
    readTime: "6 min read",
    tags: ["Engineering", "Independence", "Infrastructure"],
  },
  {
    id: "product",
    badge: "Product Launch",
    date: "Jan 15, 2025",
    title: "Aegis Auth: 10+ Layers of Security, Live Now",
    body: "We built our own fortress with Aegis Auth, featuring over 10 layers of security to ensure absolute data sovereignty. This is not just a concept — it is live and ready for developers right now with packages available for JavaScript, Python, Rust, Flutter, and more.",
    callout: { label: "Enterprise Grade Security", text: "Aegis Auth delivers sub-millisecond validation without compromising security, setting a new standard for authentication systems." },
    readTime: "5 min read",
    tags: ["Security", "Auth", "Developers"],
  },
  {
    id: "registered",
    badge: "Company",
    date: "Aug 6, 2025",
    title: "Navchetna Officially Registered as NINELLMS Solutions LLP",
    body: "We are proud to announce that Navchetna is now officially registered as NINELLMS Solutions LLP. What began as a vision is now a legally recognized company committed to transforming education through technology. This marks the start of our formal journey as an organization built on innovation, collaboration, and impact.",
    callout: { label: "Official Foundation", text: "Registration establishes Navchetna as a structured entity, empowering us to scale our mission, attract talent, and partner with leading institutions globally." },
    readTime: "4 min read",
    tags: ["Milestone", "Company", "Legal"],
  },
  {
    id: "milestone",
    badge: "Milestone",
    date: "Sep 15, 2024",
    title: "First Prototype of Osmium AI Completed",
    body: "Just days after its inception, Navchetna achieved a major milestone with the creation of the first prototype of Osmium AI, our AI-driven EdTech platform. This early version validated our vision and proved that innovation, persistence, and teamwork could turn ideas into reality.",
    callout: { label: "Key Milestone", text: "The prototype demonstrated adaptive mock test generation, the foundation of Osmium AI's future success as a revolutionary learning platform." },
    readTime: "4 min read",
    tags: ["Osmium AI", "Milestone", "EdTech"],
  },
  {
    id: "foundation",
    badge: "Foundation",
    date: "Sep 6, 2024",
    title: "The Birth of Navchetna",
    body: "On this day, Navchetna was born out of a shared vision to reshape the future of education through innovation and technology. Although unofficial at the time, the journey began with a small team of dreamers determined to create solutions that empower learners everywhere. This day marks the true beginning of our story.",
    callout: { label: "Founding Spark", text: "Navchetna emerged from late-night discussions and bold ideas, setting the foundation for Osmium AI, our first product that would later define our mission." },
    readTime: "5 min read",
    tags: ["Founding", "Story", "Team"],
  },
];

function badgeChip(badge: string) {
  return "chip";
}

export default function CompanyBlogPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-[48rem] mx-auto px-6 sm:px-10 pb-28">

        {/* Breadcrumbs */}
        <nav
          className="flex items-center gap-2 pt-8 pb-10"
          style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(0,0,0,0.35)" }}
        >
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          /
          Company Updates
        </nav>

        {/* Page Header */}
        <ScrollReveal>
          <div className="mb-14 pb-10" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.85rem, 3.5vw, 2.5rem)",
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                color: "#0A0A0A",
                marginBottom: "12px",
              }}
            >
              Company Updates
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "rgba(0,0,0,0.45)",
                maxWidth: "46ch",
              }}
            >
              Milestones, partnerships, and the story behind building Navchetna from scratch.
            </p>
          </div>
        </ScrollReveal>

        {/* Article Feed */}
        <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
          {articles.map((a) => (
            <ScrollReveal key={a.id}>
              <article id={a.id} className="py-12">

                {/* Meta row */}
                <div className="flex items-center gap-3 mb-6">
                  <span className={badgeChip(a.badge)}>{a.badge}</span>
                  <span
                    className="flex items-center gap-1.5"
                    style={{ fontFamily: "var(--font-body)", fontSize: "12.5px", color: "rgba(0,0,0,0.35)" }}
                  >
                    <Calendar className="size-3.5"  strokeWidth={1.5} />
                    {a.date}
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    letterSpacing: "-0.022em",
                    color: "#0A0A0A",
                    marginBottom: "20px",
                  }}
                >
                  {a.title}
                </h2>

                {/* Body */}
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: "rgba(0,0,0,0.72)",
                  }}
                >
                  <p style={{ marginBottom: "16px" }}>{a.body}</p>

                  {/* Callout */}
                  <div
                    style={{
                      border: "1px solid rgba(0,0,0,0.07)",
                      borderRadius: "4px",
                      padding: "18px 20px",
                      marginTop: "4px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "10.5px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "rgba(0,0,0,0.32)",
                        marginBottom: "8px",
                      }}
                    >
                      {a.callout.label}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.65)", lineHeight: 1.7 }}>
                      {a.callout.text}
                    </p>
                  </div>
                </div>

                {/* Footer tags */}
                <div
                  className="flex flex-wrap items-center gap-3 mt-8 pt-7"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <span
                    style={{ fontFamily: "var(--font-body)", fontSize: "12.5px", color: "rgba(0,0,0,0.30)", flex: 1 }}
                  >
                    {a.readTime}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {a.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          border: "1px solid rgba(0,0,0,0.07)",
                          borderRadius: "5px",
                          padding: "3px 10px",
                          fontFamily: "var(--font-body)",
                          fontSize: "11px",
                          fontWeight: 500,
                          color: "rgba(0,0,0,0.40)",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 hover:text-black transition-colors"
            style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: "rgba(0,0,0,0.40)" }}
          >
            <ArrowLeft className="size-3.5"  strokeWidth={1.5} /> Back to Blog
          </Link>
        </div>

      </div>
    </div>
  );
}
