"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Accordion({ title, children, icon }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 py-4 text-right hover:text-stone transition-colors cursor-pointer group"
      >
        {icon && (
          <span className="text-stone flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="flex-1 text-base font-medium text-fg text-right group-hover:text-stone transition-colors">
          {title}
        </span>
        <ChevronLeft
          size={16}
          className={`flex-shrink-0 text-muted-fg transition-transform duration-300 ${isOpen ? "-rotate-90" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="pb-5 text-muted-fg leading-relaxed text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
