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
  { href: "https://www.linkedin.com/company/navchetna/posts/?viewAsMember=true", label: "LinkedIn" },
  { href: "https://www.instagram.com/navchetna.tech/", label: "Instagram" },
];

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18">
    <circle cx="16" cy="16" r="16" fill="#999" />
    <path fill="#FFF" d="M24.294 22.942v-6.137c0-3.288-1.755-4.818-4.096-4.818-1.889 0-2.735 1.039-3.206 1.768v-1.517h-3.558c.047 1.005 0 10.704 0 10.704h3.558v-5.978c0-.319.023-.639.117-.867.257-.639.842-1.301 1.825-1.301 1.288 0 1.803.981 1.803 2.42v5.727l3.557-.001zM9.685 10.777c1.24 0 2.013-.823 2.013-1.85-.023-1.05-.773-1.849-1.99-1.849s-2.012.799-2.012 1.849c0 1.028.772 1.85 1.967 1.85h.022zm1.779 12.165V12.238H7.907v10.704h3.557z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
    <rect width="48" height="48" fill="#999" rx="24" />
    <path fill="#fff" d="M19.0014 24C19.0014 21.2387 21.2393 18.9996 24.0006 18.9996C26.7619 18.9996 29.001 21.2387 29.001 24C29.001 26.7613 26.7619 29.0004 24.0006 29.0004C21.2393 29.0004 19.0014 26.7613 19.0014 24ZM16.2983 24C16.2983 28.254 19.7466 31.7023 24.0006 31.7023C28.2546 31.7023 31.7029 28.254 31.7029 24C31.7029 19.746 28.2546 16.2977 24.0006 16.2977C19.7466 16.2977 16.2983 19.746 16.2983 24ZM30.2078 15.9923C30.2077 16.3483 30.3131 16.6963 30.5108 16.9924C30.7085 17.2885 30.9895 17.5193 31.3183 17.6557C31.6472 17.7921 32.0091 17.8279 32.3583 17.7586C32.7075 17.6892 33.0283 17.5179 33.2801 17.2663C33.532 17.0147 33.7035 16.694 33.7731 16.3449C33.8427 15.9957 33.8072 15.6338 33.6711 15.3048C33.535 14.9759 33.3044 14.6947 33.0085 14.4968C32.7125 14.2989 32.3646 14.1931 32.0086 14.193H32.0078C31.5306 14.1932 31.073 14.3828 30.7355 14.7202C30.398 15.0576 30.2082 15.5151 30.2078 15.9923ZM17.9406 36.2096C16.4782 36.143 15.6833 35.8994 15.155 35.6936C14.4547 35.421 13.955 35.0963 13.4297 34.5716C12.9043 34.047 12.5791 33.5478 12.3077 32.8475C12.1018 32.3195 11.8582 31.5244 11.7917 30.0619C11.719 28.4808 11.7044 28.0058 11.7044 24.0001C11.7044 19.9944 11.7202 19.5208 11.7917 17.9383C11.8583 16.4759 12.1037 15.6823 12.3077 15.1528C12.5803 14.4524 12.905 13.9528 13.4297 13.4274C13.9543 12.902 14.4535 12.5768 15.155 12.3054C15.683 12.0995 16.4782 11.8559 17.9406 11.7894C19.5217 11.7167 19.9967 11.7022 24.0006 11.7022C28.0045 11.7022 28.48 11.7179 30.0624 11.7894C31.5248 11.856 32.3184 12.1014 32.848 12.3054C33.5483 12.5768 34.048 12.9028 34.5733 13.4274C35.0987 13.952 35.4227 14.4524 35.6953 15.1528C35.9012 15.6808 36.1448 16.4759 36.2113 17.9383C36.284 19.5208 36.2986 19.9944 36.2986 24.0001C36.2986 28.0058 36.284 28.4795 36.2113 30.0619C36.1447 31.5244 35.8999 32.3192 35.6953 32.8475C35.4227 33.5478 35.098 34.0475 34.5733 34.5716C34.0487 35.0958 33.5483 35.421 32.848 35.6936C32.32 35.8996 31.5248 36.1432 30.0624 36.2096C28.4813 36.2824 28.0063 36.2969 24.0006 36.2969C19.9949 36.2969 19.5212 36.2824 17.9406 36.2096ZM17.8164 9.09084C16.2196 9.16356 15.1284 9.41676 14.1755 9.78756C13.1886 10.1705 12.3532 10.6842 11.5183 11.5177C10.6835 12.3512 10.1711 13.188 9.78816 14.1749C9.41736 15.1284 9.16416 16.219 9.09144 17.8158C9.01752 19.4152 9.0006 19.9265 9.0006 24C9.0006 28.0735 9.01752 28.5848 9.09144 30.1842C9.16416 31.7812 9.41736 32.8716 9.78816 33.8251C10.1711 34.8114 10.6836 35.6491 11.5183 36.4823C12.353 37.3154 13.1886 37.8284 14.1755 38.2124C15.1302 38.5832 16.2196 38.8364 17.8164 38.9092C19.4166 38.9819 19.9271 39 24.0006 39C28.0741 39 28.5854 38.9831 30.1848 38.9092C31.7818 38.8364 32.8722 38.5832 33.8257 38.2124C34.812 37.8284 35.648 37.3158 36.4829 36.4823C37.3177 35.6488 37.829 34.8114 38.213 33.8251C38.5838 32.8716 38.8382 31.781 38.9098 30.1842C38.9825 28.5836 38.9994 28.0735 38.9994 24C38.9994 19.9265 38.9825 19.4152 38.9098 17.8158C38.837 16.2188 38.5838 15.1278 38.213 14.1749C37.829 13.1886 37.3164 12.3526 36.4829 11.5177C35.6494 10.6829 34.812 10.1705 33.8269 9.78756C32.8722 9.41676 31.7816 9.16236 30.186 9.09084C28.5866 9.01812 28.0753 9 24.0018 9C19.9283 9 19.4166 9.01692 17.8164 9.09084Z" />
  </svg>
);

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
            <span className="text-black font-normal tracking-tight" style={{ fontFamily: "var(--font-waldenburg)", fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)" }}>Navchetna Technologies</span>
            <p className="mt-5 type-sm text-black/45 leading-relaxed max-w-[280px]">
              Based in India, For India,<br />
              By Students of India
            </p>

          </div>

          {/* Products */}
          <div>
            <p className="type-2xs font-normal uppercase tracking-wider text-black/35 mb-5" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", letterSpacing: "0.14em" }}>Products</p>
            <ul className="space-y-3.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="type-sm text-black/80 transition-colors hover:text-black font-normal">{l.label}</a>
                  ) : (
                    <Link href={l.href} className="type-sm text-black/80 transition-colors hover:text-black font-normal">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="type-2xs font-normal uppercase tracking-wider text-black/35 mb-5" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", letterSpacing: "0.14em" }}>Services</p>
            <ul className="space-y-3.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="type-sm text-black/80 transition-colors hover:text-black font-normal">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="type-2xs font-normal uppercase tracking-wider text-black/35 mb-5" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", letterSpacing: "0.14em" }}>Company</p>
            <ul className="space-y-3.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="type-sm text-black/80 transition-colors hover:text-black font-normal">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Badge row — visually balanced heights per logo */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-7" style={{ borderTop: "1px solid rgba(10,10,10,0.12)", padding: "1.25rem 0" }}>
          <img src="/assets/aws startup.png"                            alt="AWS Startups"    style={{ height: "32px", width: "auto", maxHeight: "32px", objectFit: "contain", flexShrink: 0 }} />
          <img src="/assets/Oracle-Logo-1.png"                          alt="Oracle"          style={{ height: "32px", width: "auto", maxHeight: "32px", objectFit: "contain", flexShrink: 0 }} />
          <img src="/nvidia-inception-program-badge-rgb-for-screen.svg" alt="NVIDIA Inception" style={{ height: "32px", width: "auto", maxHeight: "32px", objectFit: "contain", flexShrink: 0 }} />
          <img src="/DPIIT-header.png"                                   alt="DPIIT"           style={{ height: "auto", width: "96px",  maxWidth: "96px",  objectFit: "contain", flexShrink: 0 }} />
          <img src="/istart.png"                                         alt="iStart"          style={{ height: "auto", width: "96px",  maxWidth: "96px",  objectFit: "contain", flexShrink: 0 }} />
          <img src="/rasen-logo-removebg-preview.png"                    alt="Rasen"           style={{ height: "18px", width: "auto", maxHeight: "18px", objectFit: "contain", flexShrink: 0 }} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 type-xs text-black/35 font-normal" style={{ borderTop: "1px solid rgba(10,10,10,0.12)" }}>
          <span>© 2026 NINELLMS SOLUTIONS LLP. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-6">
            <a href={socialLinks[0].href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
              <LinkedInIcon /><span>LinkedIn</span>
            </a>
            <a href={socialLinks[1].href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
              <InstagramIcon /><span>Instagram</span>
            </a>
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
