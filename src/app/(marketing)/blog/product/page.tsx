import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Calendar, ArrowUpRight, ArrowLeft } from "lucide-react";

/* Map badge label → chip color class */
function badgeChip(badge: string) {
  return "chip";
}

// Images sourced directly from the /blog/product/[slug] article banner images
const articles = [
  {
    id: "osmiumllm", badge: "Flagship Launch", date: "Aug 15, 2025", status: "Launched",
    image: "/assets/osmium (1).png",
    title: "OsmiumLLM: A Global Benchmark in Education-Focused AI",
    desc: "Osmium has emerged as the world's smartest educational LLM, surpassing even GPT-5. With 96B parameters trained exclusively for education, it sets a new global benchmark, scoring 98 in High School Academics and 97 in Reasoning.",
    callout: { label: "Global #1 in Education AI", text: "Outperformed GPT-5, Claude 4 (Opus), Gemini 2.5 Pro, DeepSeek R1, and Llama 4 across all five educational benchmarks." },
    readTime: "10 min read",
    tags: ["LLM", "AI", "Education", "Benchmark"],
  },
  {
    id: "osmium", badge: "Flagship Launch", date: "Jan 15, 2025", status: "Launched",
    image: "/assets/OSMIUM LAUNCH.png",
    title: "Osmium Launch: Redefining How We Learn",
    desc: "We've always believed that technology shouldn't just present information—it should guide you through it. Today, we're incredibly proud to launch Osmium. It's an AI-native learning platform that actually mentors you, predicts where you might struggle, and adapts to your pace.",
    callout: { label: "Historic Achievement", text: "Outperformed leading global LLMs in benchmarked educational content generation (August 15, 2025)." },
    readTime: "12 min read",
    tags: ["AI", "EdTech", "Education"],
  },
  {
    id: "natraj", badge: "Feature Update", date: "Jan 10, 2025", status: "Launched",
    image: "/assets/nataraj_mockup.png",
    title: "Natraj: AR + AI Anatomy Learning Platform",
    desc: "Revolutionizing anatomy education with real-time AR body scans, interactive 3D models, and an AI tutor that transforms traditional medical learning into an engaging, accessible, and clinically accurate experience.",
    metrics: [
      { label: "Knowledge retention", value: "+40%" }, { label: "Practical understanding", value: "+55%" },
      { label: "Engagement increase", value: "+60%" }, { label: "Target", value: "Mobile-first" },
    ],
    readTime: "10 min read",
    tags: ["AR", "AI", "EdTech"],
  },
  {
    id: "vedsegment", badge: "Product Launch", date: "Apr 15, 2025", status: "Launched",
    image: "/assets/vedsegment-new.png",
    title: "One on One: Where Teaching Meets Intelligence",
    desc: "A video tutoring platform built for the way real learning happens, one conversation at a time. One on One brings together live video, an AI whiteboard, quiz generation, code compilation, and more, all powered by OsmiumLLM.",
    readTime: "8 min read",
    tags: ["EdTech", "Video", "AI", "Tutoring"],
  },
  {
    id: "aegis", badge: "Security", date: "Jan 15, 2026", status: "Launched",
    image: "/assets/aegis1.png",
    title: "Aegis Auth v3.0: The New Standard for Digital Identity",
    desc: "In an era of fragmented user bases and escalating security threats, Aegis Auth v3.0 emerges as the definitive solution for enterprise identity. Built on a memory-safe Rust architecture and engineered for FIPS 140-2 compliance.",
    callout: { label: "Benchmark Breakthrough", text: "Less than 5ms Token Validation Latency in production, a new global standard for high-velocity authentication." },
    metrics: [
      { label: "Token Latency", value: "<5ms" }, { label: "Architecture", value: "Rust" },
      { label: "Uptime SLA", value: "99.99%" }, { label: "Compliance", value: "FIPS 140-2" },
    ],
    readTime: "12 min read",
    tags: ["Security", "Auth", "Rust"],
  },
  {
    id: "nsl", badge: "Product Launch", date: "Jan 20, 2025", status: "Launched",
    image: "/assets/nsl.png",
    title: "NSL: The Silent Engine of Financial Truth",
    desc: "Smart Billing, Automated Invoicing, Zero Manual Effort. NSL is an intelligent billing and ledger management system that tracks usage and billing data silently throughout the month, acting as a centralized brain for all user transactions.",
    metrics: [
      { label: "Billing", value: "Automated" }, { label: "Intervention", value: "Zero manual" },
      { label: "Accuracy", value: "Guaranteed" }, { label: "Scale", value: "10 to 10,000" },
    ],
    readTime: "8 min read",
    tags: ["Billing", "Finance", "ERP"],
  },
  {
    id: "lmlens", badge: "Product Launch", date: "Jan 15, 2025", status: "Launched",
    image: "/assets/lmlens.png",
    title: "LM Lens: Transforming Chaos into Clean Data",
    desc: "Stop typing data manually. LM Lens automatically converts unstructured documents into clean, actionable data using advanced OCR, Computer Vision, and LLM intelligence, adapting dynamically to any document format without rigid templates.",
    readTime: "10 min read",
    tags: ["OCR", "AI", "Data"],
  },
  {
    id: "vajra", badge: "Infrastructure", date: "Mar 1, 2025", status: "Launched",
    image: "/assets/osmium (1).png",
    title: "Vajra: The AWS Lambda for AI",
    desc: "A sovereign serverless GPU cloud designed to solve the industry's utilization crisis. Sub-500ms cold starts for 70B+ LLMs with a Frozen Core and Hot Adapter architecture, supporting 50 to 100 concurrent tenants on a single A100 GPU.",
    metrics: [
      { label: "Cold Start", value: "<500ms" }, { label: "Cost Reduction", value: "100x" },
      { label: "Concurrency", value: "50-100" }, { label: "GPU Target", value: "A100" },
    ],
    readTime: "12 min read",
    tags: ["GPU", "Cloud", "Infrastructure"],
  },
  {
    id: "kriya", badge: "Coming Soon", date: "Q3 2025", status: "Coming Soon",
    image: "/assets/kriya1.png",
    title: "Kriya: The Future of AI-Integrated ERP & Project Management",
    desc: "A platform where you describe what you want in plain English, and it actually builds it: code, websites, APIs, marketing campaigns. It automates the entire process from idea to deployment with careful guardrails and human oversight.",
    readTime: "12 min read",
    tags: ["AI", "Builder", "Automation"],
  },
  {
    id: "crm", badge: "Coming Soon", date: "Q4 2025", status: "Coming Soon",
    image: "/assets/osmium-mockup.png",
    title: "Vyom: Intelligent Customer Relationship Management",
    desc: "Advanced Customer Relationship Management tailored for seamless interactions and data-driven insights, combining AI-powered analytics with intuitive workflows.",
    readTime: "8 min read",
    tags: ["CRM", "Enterprise", "AI"],
  },
  {
    id: "agentic-sde", badge: "Coming Soon", date: "Q4 2025", status: "Coming Soon",
    image: "/assets/vedsegment-new.png",
    title: "Vega: Autonomous Software Engineering",
    desc: "Next-generation software engineering platform driven by agentic AI capabilities. Collaborates with development teams to write, review, test, and deploy code autonomously.",
    readTime: "10 min read",
    tags: ["AI", "SDE", "Engineering"],
  },
  {
    id: "unified-storage", badge: "Coming Soon", date: "2026", status: "Coming Soon",
    image: "/assets/nsl.png",
    title: "Yugm: Synced Storage with Version Control",
    desc: "A unified synced storage platform with inbuilt version control for seamless asset management across teams, projects, and infrastructure.",
    readTime: "8 min read",
    tags: ["Storage", "Infrastructure", "DevOps"],
  },
];

type Article = typeof articles[number];

export default function ProductBlogPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-[52rem] mx-auto px-6 sm:px-10 pb-28">

        {/* Breadcrumbs */}
        <nav
          className="flex items-center gap-2 pt-8 pb-10"
          style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(0,0,0,0.35)" }}
        >
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          /
          Product Insights
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
              Product Insights
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
              Stay updated with the latest product releases, feature announcements, and technical insights from our development team.
            </p>
          </div>
        </ScrollReveal>

        {/* Article Feed */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {articles.map((a: Article) => (
            <ScrollReveal key={a.id}>
              <article
                id={a.id}
                style={{ paddingTop: "48px", paddingBottom: "48px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
              >
                {/* Banner image */}
                <Link href={`/blog/product/${a.id}`} className="group block mb-7">
                  <div
                    className="relative w-full overflow-hidden"
                    style={{
                      aspectRatio: "16/9",
                      borderRadius: "4px",
                      border: "1px solid rgba(0,0,0,0.07)",
                      background: "rgba(0,0,0,0.02)",
                    }}
                  >
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 832px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      quality={75}
                    />
                  </div>
                </Link>

                {/* Meta row */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={badgeChip(a.badge)}>{a.badge}</span>
                  {a.status === "Coming Soon" && (
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "10px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        background: "rgba(245,158,11,0.08)",
                        color: "rgba(180,100,0,0.85)",
                        border: "1px solid rgba(245,158,11,0.25)",
                        borderRadius: "9999px",
                        padding: "3px 8px",
                      }}
                    >
                      Upcoming
                    </span>
                  )}
                  <span
                    className="flex items-center gap-1.5"
                    style={{ fontFamily: "var(--font-body)", fontSize: "12.5px", color: "rgba(0,0,0,0.35)" }}
                  >
                    <Calendar className="size-3.5"  strokeWidth={1.5} />
                    {a.date}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/blog/product/${a.id}`} className="group block mb-4">
                  <h2
                    className="group-hover:text-black/65 transition-colors"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      letterSpacing: "-0.022em",
                      color: "#0A0A0A",
                    }}
                  >
                    {a.title}
                  </h2>
                </Link>

                {/* Body */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: "rgba(0,0,0,0.60)",
                    marginBottom: "16px",
                  }}
                >
                  {a.desc}
                </p>

                {/* Callout — if present */}
                {"callout" in a && a.callout && (
                  <div
                    style={{
                      border: "1px solid rgba(0,0,0,0.07)",
                      borderRadius: "4px",
                      padding: "16px 18px",
                      marginBottom: "16px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "10px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "rgba(0,0,0,0.30)",
                        marginBottom: "6px",
                      }}
                    >
                      {a.callout.label}
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(0,0,0,0.60)", lineHeight: 1.7 }}>
                      {a.callout.text}
                    </p>
                  </div>
                )}

                {/* Metrics grid — if present */}
                {"metrics" in a && a.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                    {a.metrics.map((m: { label: string; value: string }) => (
                      <div
                        key={m.label}
                        style={{
                          border: "1px solid rgba(0,0,0,0.07)",
                          borderRadius: "4px",
                          padding: "12px 10px",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "#0A0A0A",
                            marginBottom: "3px",
                          }}
                        >
                          {m.value}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "10px",
                            color: "rgba(0,0,0,0.38)",
                            textTransform: "uppercase",
                            letterSpacing: "0.07em",
                          }}
                        >
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div
                  className="flex flex-wrap items-center gap-3 mt-6 pt-6"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <span
                    style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(0,0,0,0.30)", flex: 1 }}
                  >
                    {a.readTime}
                  </span>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <div className="flex flex-wrap gap-1.5 mr-3">
                      {a.tags.map((tag: string) => (
                        <span
                          key={tag}
                          style={{
                            border: "1px solid rgba(0,0,0,0.07)",
                            borderRadius: "4px",
                            padding: "3px 9px",
                            fontFamily: "var(--font-body)",
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "rgba(0,0,0,0.38)",
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/product/${a.id}`}
                      className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "12.5px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.55)",
                      }}
                    >
                      Read full article
                      <ArrowUpRight className="size-3.5"  strokeWidth={1.5} />
                    </Link>
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
