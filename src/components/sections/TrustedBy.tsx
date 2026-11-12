import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const logos = [
  { src: "/assets/aws.svg",      alt: "AWS",      w: 130, h: 42 },
  { src: "/assets/homeguru.svg", alt: "Homeguru", w: 140, h: 32 },
  // istart — 500x122 aspect ratio
  { src: "/istart.png",          alt: "iStart",   w: 164, h: 40 },
  // dpiit — 1969x655 aspect ratio
  { src: "/DPIIT-header.png",    alt: "DPIIT",    w: 120, h: 40 },
  // rasen — 137x41 aspect ratio
  { src: "/rasen-logo-removebg-preview.png", alt: "Rasen", w: 80, h: 24 },
];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-14 md:py-16" style={{ backgroundColor: "#ffffff" }}>
      <div className="section-sep" />

      <div className="section-container">
        <ScrollReveal>
          <p className="text-center mb-10" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.16em", color: "#8b8b8b" }}>
            Trusted by teams building with intent
          </p>
        </ScrollReveal>
      </div>

      <div className="section-container">
        {/* Marquee — edge fade */}
        <div
          className="relative flex overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="ticker-track flex w-max items-center"
            style={{ animationDuration: "28s" }}
          >
            {[1, 2, 3, 4, 5, 6].map((set) => (
              <div
                key={set}
                className="flex shrink-0 flex-nowrap items-center gap-10 pr-10 md:gap-14 md:pr-14"
              >
                {logos.map((logo) => (
                  <div
                    key={`${set}-${logo.alt}`}
                    className="relative opacity-30 hover:opacity-60 transition-opacity duration-300 grayscale flex-shrink-0"
                    style={{ width: logo.w, height: logo.h }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes={`${logo.w}px`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
