import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import therapist from "@/assets/Therapist.jpg.asset.json";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "על המטפל — רופא ומטפל בהיפנוזה בבנימינה | מקום לשינוי" },
      {
        name: "description",
        content:
          "רופא (MD) בבית חולים רמב\"ם, בעל רשיון לטיפול בהיפנוזה מטעם משרד הבריאות. מרפאה להיפנוזה בבנימינה, לתושבי פרדס חנה והסביבה.",
      },
      { property: "og:title", content: "על המטפל — רופא ומטפל בהיפנוזה | מקום לשינוי" },
      {
        property: "og:description",
        content: "רופא ומטפל בהיפנוזה בעל רשיון משרד הבריאות, מרפאה בבנימינה.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader kicker="מקום לשינוי" title="על המטפל" />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid items-start gap-12 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
          <Reveal>
            <img
              src={therapist.url}
              alt="רופא ומטפל בהיפנוזה"
              className="w-full rounded-2xl border border-border object-cover"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              שמי יובל, אני רופא (MD) ועובד בבית חולים רמב&quot;ם. במקביל לעבודתי כרופא, בשנים האחרונות אני מטפל
              ומחלץ נפגעי נפש בסיטואציות משבריות בחו&quot;ל. אני בעל רשיון לטיפול בהיפנוזה מטעם משרד הבריאות (מספר
              39927) מאז שפגשתי את הכלי המדהים הזה, אני מטפל, מעמיק ומתמקצע. אני מאמין שלהיפנוזה יש פוטנציאל אדיר
              בטיפול במחלות כרוניות, כאבים ותחומים נוספים
            </p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
