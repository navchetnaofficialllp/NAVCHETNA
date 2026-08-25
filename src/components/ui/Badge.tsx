import type { ReactNode } from "react";

export function Badge({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-2.5 py-1 type-2xs font-medium uppercase"
      style={{
        borderRadius: "2px",
        border: "1px solid rgba(10,10,10,0.12)",
        background: "rgba(0,0,0,0.03)",
        letterSpacing: "0.1em",
        color: "rgba(0,0,0,0.50)",
        fontSize: "10px",
      }}
    >
      {icon}
      {children}
    </span>
  );
}
