import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "צרו קשר — מרפאה להיפנוזה | מקום לשינוי" },
      {
        name: "description",
        content: "לתיאום טיפול בהיפנוזה או להתייעצות: טלפון 052-6903605, דוא\"ל dr.yuval.kesary@gmail.com.",
      },
      { property: "og:title", content: "צרו קשר — מרפאה להיפנוזה | מקום לשינוי" },
      { property: "og:description", content: "פרטי יצירת קשר עם המרפאה להיפנוזה." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const items = [
  { icon: Phone, label: "טלפון", value: "052-6903605", href: "tel:0526903605", ltr: true },
  {
    icon: Mail,
    label: "דוא\"ל",
    value: "dr.yuval.kesary@gmail.com",
    href: "mailto:dr.yuval.kesary@gmail.com",
    ltr: true,
  },
  { icon: MapPin, label: "מיקום", value: "בנימינה", href: undefined, ltr: false },
];

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader kicker="מקום לשינוי" title="צרו קשר" />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:p-8 transition-colors hover:border-accent-foreground/40">
                <Icon size={20} className="text-accent-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p
                    className="mt-1 break-words text-base font-medium text-foreground"
                    dir={item.ltr ? "ltr" : undefined}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            );
            return (
              <Reveal key={item.label} delay={i * 80} className="h-full">
                {item.href ? (
                  <a href={item.href} className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
