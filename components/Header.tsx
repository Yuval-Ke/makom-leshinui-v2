"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "על הטיפול" },
  { href: "/al-hamtapel", label: "על המטפל" },
  { href: "/shaalot", label: "שאלות ותשובות" },
  { href: "/tzor-kesher", label: "צרו קשר" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40" style={{ backgroundColor: "#1B3A5C" }}>
      <div className="flex items-center justify-center h-12 px-4 md:h-14">
        <nav>
          <ul className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs md:text-sm font-medium transition-colors"
                    style={{
                      color: active ? "#ffffff" : "rgba(255,255,255,0.7)",
                      borderBottom: active ? "2px solid rgba(255,255,255,0.7)" : "2px solid transparent",
                      paddingBottom: "2px",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
