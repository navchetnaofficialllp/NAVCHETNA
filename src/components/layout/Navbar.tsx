"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/career", label: "Career" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const white = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[10000] w-full">
      <div
        className="transition-all duration-200"
        style={{
          background: open
            ? "rgba(255,255,255,0.98)"
            : scrolled
              ? "rgba(255,255,255,0.96)"
              : white
                ? "transparent"
                : "rgba(255,255,255,0.96)",
          borderBottom: scrolled || open
            ? "1px solid rgba(10,10,10,0.12)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.04)" : "none",
        }}
      >
        {/* Desktop */}
        <nav className="hidden h-[64px] grid-cols-[1fr_auto_1fr] items-center px-7 lg:grid max-w-[1200px] mx-auto">
          <Link href="/" className="w-max transition-opacity hover:opacity-60">
            <span
              className="whitespace-nowrap uppercase transition-colors"
              style={{
                color: white ? "#ffffff" : "#0A0A0A",
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
            >
              NAVCHETNA{" "}
              <span
                style={{
                  color: white ? "rgba(255,255,255,0.50)" : "rgba(0,0,0,0.35)",
                  fontWeight: 600,
                }}
              >
                TECHNOLOGIES
              </span>
            </span>
          </Link>

          <div className="flex items-center justify-center gap-0.5">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 transition-all duration-200"
                  style={{
                    color: white
                      ? active
                        ? "#ffffff"
                        : "rgba(255,255,255,0.65)"
                      : active
                        ? "#0A0A0A"
                        : "rgba(0,0,0,0.45)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: active ? 500 : 400,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-2">
            <Link
              href="/contact"
              className="inline-flex h-[36px] items-center justify-center px-5 text-[13px] font-normal transition-all duration-200 active:scale-95"
              style={{
                background: white ? "rgba(255,255,255,0.10)" : "#0A0A0A",
                color: "#ffffff",
                border: white ? "1px solid rgba(255,255,255,0.20)" : "1px solid #0A0A0A",
                borderRadius: "4px",
                letterSpacing: "-0.01em",
              }}
            >
              Schedule meeting
            </Link>
          </div>
        </nav>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="flex h-[58px] items-center justify-between px-5">
            <Link href="/" onClick={() => setOpen(false)} className="transition-opacity hover:opacity-60">
              <span
                className="whitespace-nowrap uppercase"
                style={{
                  color: white ? "#ffffff" : "#0A0A0A",
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                NAVCHETNA TECHNOLOGIES
              </span>
            </Link>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              className="flex size-8 flex-col items-center justify-center gap-[5px]"
              style={{ background: white ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.04)", borderRadius: "4px" }}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className="h-[1.5px] w-4 transition-transform duration-300"
                style={{ 
                  background: white ? "#ffffff" : "#0A0A0A",
                  transform: open ? "translateY(3.25px) rotate(45deg)" : "none"
                }}
              />
              <span
                className="h-[1.5px] w-4 transition-transform duration-300"
                style={{ 
                  background: white ? "#ffffff" : "#0A0A0A",
                  transform: open ? "translateY(-3.25px) rotate(-45deg)" : "none"
                }}
              />
            </button>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-1 px-5 pb-8 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-[14px] font-normal text-black/80 transition-colors hover:bg-black/[0.04] hover:text-black"
                    style={{ borderRadius: "4px" }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex h-11 items-center justify-center bg-black text-[14px] font-normal text-white"
                  style={{ borderRadius: "4px" }}
                >
                  Schedule meeting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
