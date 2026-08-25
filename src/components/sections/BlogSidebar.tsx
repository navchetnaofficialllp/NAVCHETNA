"use client";

import Link from "next/link";
import { BookOpenText, Building2, Rocket } from "lucide-react";

const categories = [
  { label: "All posts", icon: BookOpenText, href: "/blog" },
  { label: "Product insights", icon: Rocket, href: "/blog/product" },
  { label: "Company stories", icon: Building2, href: "/blog/company" },
];

const tags = ["AI", "Innovation", "Product", "EdTech", "Security", "Updates"];

interface BlogSidebarProps {
  activeHref: string;
}

export function BlogSidebar({ activeHref }: BlogSidebarProps) {
  return (
    <aside className="fixed left-0 top-24 z-10 hidden h-[calc(100vh-6rem)] w-64 shrink-0 flex-col border-r border-black/[0.06] bg-white lg:flex">
      <div className="space-y-10 py-8 pl-4 pr-6">
        <div>
          <p className="mb-4 px-3 text-[10px] font-medium uppercase tracking-widest text-black/50">Explore</p>
          <ul className="space-y-0.5">
            {categories.map((category) => {
              const active = category.href === activeHref;
              return (
                <li key={category.label}>
                  <Link href={category.href} className={`flex items-center gap-3 rounded-sm px-3 py-2 text-[13px] transition-colors ${active ? "bg-black/[0.04] font-normal text-black" : "text-black/55 hover:bg-black/[0.02] hover:text-black"}`}>
                    <category.icon className="size-4 shrink-0 opacity-60" />
                    {category.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="mb-4 px-3 text-[10px] font-medium uppercase tracking-widest text-black/50">Topics</p>
          <div className="flex flex-wrap gap-1.5 px-3">
            {tags.map((tag) => <span key={tag} className="rounded-sm border border-black/[0.07] px-2.5 py-1 text-[11px] font-normal text-black/80">{tag}</span>)}
          </div>
        </div>
      </div>
    </aside>
  );
}

export function BlogMobileBar({ activeHref }: BlogSidebarProps) {
  return (
    <div className="flex gap-2 overflow-x-auto border-b border-black/[0.06] px-5 py-3 scrollbar-hide lg:hidden">
      {categories.map((category) => {
        const active = category.href === activeHref;
        return (
          <Link key={category.label} href={category.href} className={`flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-[12px] transition-colors ${active ? "border-black/[0.08] bg-black/[0.04] font-normal text-black" : "border-transparent text-black/80 hover:bg-black/[0.02]"}`}>
            <category.icon className="size-3.5 opacity-60" />
            {category.label}
          </Link>
        );
      })}
    </div>
  );
}
