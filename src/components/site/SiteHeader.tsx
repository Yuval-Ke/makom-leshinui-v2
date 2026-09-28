import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/Logo.png.asset.json";

const links = [
  { to: "/treatment", label: "על הטיפול" },
  { to: "/about", label: "על המטפל" },
  { to: "/faq", label: "שאלות ותשובות" },
  { to: "/contact", label: "צרו קשר" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="מקום לשינוי – מרפאה להיפנוזה" className="h-11 w-11 rounded-full object-cover" />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-foreground">מקום לשינוי</span>
            <span className="text-[13px] text-muted-foreground">מרפאה להיפנוזה</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[15px] text-muted-foreground transition-colors hover:text-accent-foreground"
              activeProps={{ className: "text-[15px] text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="תפריט"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-[15px] text-foreground last:border-0"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
