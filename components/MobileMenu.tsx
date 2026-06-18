"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";

const navItems = [
  { href: "/", label: "על הטיפול" },
  { href: "/al-hamtapel", label: "על המטפל" },
  { href: "/shaalot", label: "שאלות ותשובות" },
  { href: "/tzor-kesher", label: "צרו קשר" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-fg/40 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="תפריט ניווט"
    >
      <div
        className="absolute top-0 right-0 h-full w-72 bg-bg border-l border-border flex flex-col pt-6 px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="self-start mb-10 p-1 -mr-1 text-muted-fg hover:text-fg transition-colors"
          aria-label="סגור תפריט"
        >
          <X size={22} />
        </button>
        <nav>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 text-lg font-medium text-fg hover:text-stone transition-colors border-b border-border"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
