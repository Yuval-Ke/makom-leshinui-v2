import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SiteLayout } from "@/components/site/SiteLayout";
import hero from "@/assets/background.jpg.asset.json";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "היפנוזה בבנימינה ופרדס חנה | מקום לשינוי — מרפאה להיפנוזה רפואית" },
      {
        name: "description",
        content:
          "מרפאה להיפנוזה בבנימינה, לתושבי פרדס חנה והסביבה. טיפול בהיפנוזה על ידי רופא (MD) בעל רשיון משרד הבריאות: כאב כרוני, הפרעות שינה, חרדה, הפסקת עישון ועוד.",
      },
      { property: "og:title", content: "היפנוזה בבנימינה ופרדס חנה | מקום לשינוי" },
      {
        property: "og:description",
        content: "טיפול בהיפנוזה על ידי רופא בעל רשיון משרד הבריאות: כאב, שינה, חרדה, עישון והפרעות עיכול.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: SITE_URL + hero.url },
      { name: "twitter:image", content: SITE_URL + hero.url },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "מקום לשינוי",
          description: "מרפאה להיפנוזה על ידי רופא בעל רשיון משרד הבריאות.",
          url: `${SITE_URL}/`,
          image: SITE_URL + hero.url,
          telephone: "+972-52-6903605",
          address: { "@type": "PostalAddress", addressLocality: "בנימינה", addressCountry: "IL" },
          areaServed: [
            { "@type": "City", name: "בנימינה" },
            { "@type": "City", name: "פרדס חנה" },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Index,
});

const highlights = [
  { title: "על הטיפול", text: "התהליך הטיפולי והמצבים הרפואיים בהם ניתן לטפל בהיפנוזה.", to: "/treatment" as const },
  { title: "על המטפל", text: "רופא (MD) בעל רשיון לטיפול בהיפנוזה מטעם משרד הבריאות.", to: "/about" as const },
  { title: "שאלות ותשובות", text: "האם היפנוזה מתאימה לי, האם היא בטוחה, וכמה זמן אורך טיפול.", to: "/faq" as const },
];


function Index() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img src={hero.url} alt="מבוך אבנים על צוק מול הים" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-40">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent-foreground">
              מרפאה להיפנוזה
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-6xl">
              מקום לשינוי
            </h1>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                צרו קשר
                <ArrowLeft size={16} />
              </Link>
              <Link
                to="/treatment"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-[15px] font-medium text-foreground transition-colors hover:bg-secondary"
              >
                על הטיפול
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 80} className="h-full">
              <Link to={h.to} className="group flex h-full flex-col bg-card p-8 transition-colors hover:bg-secondary/50">
                <h2 className="text-lg font-medium text-foreground">{h.title}</h2>

                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{h.text}</p>
                <ArrowLeft
                  size={16}
                  className="mt-6 text-muted-foreground transition-transform group-hover:-translate-x-1"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 md:grid-cols-[240px_1fr]">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent-foreground">מהי היפנוזה?</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                היפנוזה היא תהליך בו מהפנט מציע למטופל להכנס למצב טראנס: מצב תודעה שונה נעים ויצירתי. במצב זה ניתן
                למצוא פתרונות למגוון בעיות כמו- כאבים כרוניים, אלרגיות, הפרעות שינה, חרדות, מיגרנות, מעי רגיז, כאבי
                מחזור, מחלות עור, פיברומיאלגיה הפסקת עישון ועוד.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
