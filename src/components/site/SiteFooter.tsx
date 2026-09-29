import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-foreground">מקום לשינוי</p>
          <p className="mt-1 text-sm text-muted-foreground">מרפאה להיפנוזה</p>
        </div>
        <div className="flex flex-col gap-3 text-[15px]">
          <a
            href="tel:0526903605"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent-foreground"
          >
            <Phone size={16} />
            <span dir="ltr">052-6903605</span>
          </a>
          <a
            href="mailto:dr.yuval.kesary@gmail.com"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent-foreground"
          >
            <Mail size={16} />
            <span dir="ltr">dr.yuval.kesary@gmail.com</span>
          </a>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={16} />
            בנימינה · פרדס חנה
          </span>
        </div>
      </div>
    </footer>
  );
}
