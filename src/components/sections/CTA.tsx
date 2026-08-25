import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-12 md:py-28">
      <div className="section-sep" />

      <div className="section-container">
        <ScrollReveal>
          <div
            className="relative flex flex-col items-center text-center"
            style={{
              background: "#FAFAFA",
              border: "1px solid rgba(10,10,10,0.12)",
              borderRadius: "2px",
              padding: "clamp(2.5rem, 8vw, 4rem) clamp(1.5rem, 5vw, 3rem)",
            }}
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2
                className="mb-4 text-balance"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.06,
                  letterSpacing: "-0.03em",
                  color: "#0A0A0A"
                }}
              >
                Ready to elevate your operations?
              </h2>
              <p
                className="mb-7 text-black/80"
                style={{ lineHeight: 1.62, fontSize: "0.92rem", maxWidth: "480px", margin: "0 auto 1.75rem" }}
              >
                Book a structured, zero-commitment consultation and see how careful product
                thinking and precision engineering can reshape your workflow.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn btn-primary"
                >
                  Schedule consultation
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
