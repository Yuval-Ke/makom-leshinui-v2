import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import therapist from "@/assets/Therapist.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "על המטפל — ד\"ר יובל קיסרי | מקום לשינוי" },
      {
        name: "description",
        content:
          "ד\"ר יובל קיסרי, רופא (MD) בבית חולים רמב\"ם, בעל רשיון לטיפול בהיפנוזה מטעם משרד הבריאות (39927).",
      },
      { property: "og:title", content: "על המטפל — ד\"ר יובל קיסרי | מקום לשינוי" },
      {
        property: "og:description",
        content: "רופא ומטפל בהיפנוזה בעל רשיון משרד הבריאות, מרפאה בבנימינה.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
              alt="ד״ר יובל קיסרי"
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
