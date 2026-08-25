import Link from "next/link";

const productLinks = [
  { href: "/products", label: "All Products" },
  { href: "https://www.osmium.co.in/", label: "Osmium AI", external: true },
  { href: "https://natraj.navchetna.tech/", label: "Natraj", external: true },
  { href: "https://aegis.navchetna.tech/", label: "Aegis Auth", external: true },
  { href: "https://kriya.navchetna.tech/", label: "Kriya", external: true },
  { href: "/products", label: "LM Lens" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/career", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Schedule a Meeting" },
];

const serviceLinks = [
  { href: "/services", label: "Product Development" },
  { href: "/services", label: "AI & Automation" },
  { href: "/services", label: "Design & Branding" },
  { href: "/services", label: "Strategy & Management" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/Navchetna Technology/", label: "LinkedIn" },
  { href: "https://www.instagram.com/Navchetna Technology.tech/", label: "Instagram" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer id="global-footer" className="relative overflow-hidden bg-white">
      {/* Clean hairline top border only — no gradient glows */}

      <div className="relative z-10 mx-auto max-w-[80rem] px-5 sm:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:grid-cols-5 md:py-20" style={{ borderTop: "1px solid rgba(10,10,10,0.12)" }}>
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2">
            <span className="text-black font-medium tracking-tight" style={{ fontFamily: "var(--font-waldenburg)", fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)" }}>Navchetna Technologies</span>
            <p className="mt-5 type-sm text-black/45 leading-relaxed max-w-[280px]">
              Based in India, For India,<br />
              By Students of India
            </p>

          </div>

          {/* Products */}
          <div>
            <p className="type-2xs font-medium uppercase tracking-wider text-black/35 mb-5" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", letterSpacing: "0.14em" }}>Products</p>
            <ul className="space-y-3.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="type-sm text-black/80 transition-colors hover:text-black font-medium">{l.label}</a>
                  ) : (
                    <Link href={l.href} className="type-sm text-black/80 transition-colors hover:text-black font-medium">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="type-2xs font-medium uppercase tracking-wider text-black/35 mb-5" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", letterSpacing: "0.14em" }}>Services</p>
            <ul className="space-y-3.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="type-sm text-black/80 transition-colors hover:text-black font-medium">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="type-2xs font-medium uppercase tracking-wider text-black/35 mb-5" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", letterSpacing: "0.14em" }}>Company</p>
            <ul className="space-y-3.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="type-sm text-black/80 transition-colors hover:text-black font-medium">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Badge row */}
        <div style={{ borderTop: "1px solid rgba(10,10,10,0.12)", padding: "1.5rem 0", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" as const }}>
          <img src="/nvidia-inception-program-badge-rgb-for-screen.svg" alt="NVIDIA Inception" style={{ height: "48px", width: "auto" }} />
          <img src="/DPIIT-header.png" alt="DPIIT Recognized" className="dpiit-logo" style={{ height: "48px", width: "auto" }} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 type-xs text-black/35 font-medium" style={{ borderTop: "1px solid rgba(10,10,10,0.12)" }}>
          <span>© 2026 NINELLMS SOLUTIONS LLP. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-6">
            {socialLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">{l.label}</a>
            ))}
            <span className="w-px h-3 bg-black/10"></span>
            {legalLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-black transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
