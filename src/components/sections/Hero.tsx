"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] md:h-screen md:min-h-[600px] flex flex-col justify-center overflow-hidden">
      {/* Mobile background image */}
      <Image
        src="/assets/hero backgroun mobile.png"
        alt=""
        fill
        priority
        quality={92}
        className="md:hidden object-cover object-center"
        sizes="(max-width: 768px) 100vw, 0vw"
      />
      
      {/* Desktop background image */}
      <Image
        src="/assets/hero background.png"
        alt=""
        fill
        priority
        quality={92}
        className="hidden md:block object-cover object-center"
        sizes="(max-width: 768px) 0vw, 100vw"
      />

      {/* Single dark overlay — no multi-layer gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 sm:px-8 flex flex-col items-center text-center">
        <h1
          style={{
            fontSize: "clamp(2rem, 10vw, 3.75rem)",
            lineHeight: "0.95",
            letterSpacing: "-0.04em",
            fontFamily: "var(--font-waldenburg)",
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          Technology with Awareness,
          <br />
          <span style={{ color: "rgba(255,255,255,0.60)" }}>
            Built for everywhere.
          </span>
        </h1>

        <p
          className="mt-8 max-w-md text-pretty"
          style={{
            fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
            lineHeight: "1.62",
            color: "rgba(255,255,255,0.55)",
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            letterSpacing: "0",
          }}
        >
          From education to enterprise — we empower growth through{" "}
          <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
            technology, creativity,
          </span>{" "}
          and conscious innovation.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap transition-all duration-200 active:scale-95 hover:bg-white/90"
            style={{
              height: "42px",
              padding: "0 24px",
              fontSize: "13px",
              fontWeight: 500,
              background: "#ffffff",
              color: "#0A0A0A",
              letterSpacing: "-0.01em",
              borderRadius: "2px",
            }}
          >
            Schedule meeting
            <ArrowRight weight="bold" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 active:scale-95 hover:bg-white/15"
            style={{
              height: "42px",
              padding: "0 24px",
              fontSize: "13px",
              fontWeight: 500,
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.80)",
              border: "1px solid rgba(255,255,255,0.18)",
              letterSpacing: "-0.01em",
              borderRadius: "2px",
            }}
          >
            Explore products
          </Link>
        </div>
      </div>

    </section>
  );
}
