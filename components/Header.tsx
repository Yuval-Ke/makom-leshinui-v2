"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "/", label: "על הטיפול" },
  { href: "/al-hamtapel", label: "על המטפל" },
  { href: "/shaalot", label: "שאלות ותשובות" },
  { href: "/tzor-kesher", label: "צרו קשר" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur-sm border-b border-border">
      {/* Mobile */}
      <div className="md:hidden flex items-center h-14 px-4 relative">
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 -ml-2 text-muted-fg hover:text-fg transition-colors"
          aria-label="פתח תפריט"
          aria-expanded={menuOpen}
        >
          <Menu size={22} />
        </button>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" aria-label="עמוד הבית">
            <Logo size={56} />
          </Link>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between max-w-3xl mx-auto px-8 h-16">
        <nav>
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-fg hover:text-fg transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/" aria-label="עמוד הבית">
          <Logo size={60} />
        </Link>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
