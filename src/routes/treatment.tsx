import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import painImg from "@/assets/pain.jpg.asset.json";
import fibroImg from "@/assets/fibromyalgia.jpg.asset.json";
import headacheImg from "@/assets/headache.jpg.asset.json";
import smokingImg from "@/assets/smoking.jpg.asset.json";
import sleepImg from "@/assets/sleep.jpg.asset.json";
import giImg from "@/assets/gi.jpg.asset.json";
import pregnancyImg from "@/assets/pregnancy.jpg.asset.json";
import anxietyImg from "@/assets/anxiety.jpg.asset.json";
import cancerImg from "@/assets/cancer.jpg.asset.json";
import childrenImg from "@/assets/children.jpg.asset.json";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/treatment")({
  head: () => ({
    meta: [
      { title: "טיפול בהיפנוזה — מצבים ותהליך | מקום לשינוי, בנימינה" },
      {
        name: "description",
        content:
          "מהי היפנוזה, איך נראה התהליך הטיפולי, ומצבים רפואיים ונפשיים בהם ניתן לטפל בהיפנוזה — כאב, שינה, עיכול, חרדה ועוד. היפנוזה רפואית בבנימינה ופרדס חנה.",
      },
      { property: "og:title", content: "על הטיפול בהיפנוזה — מצבים ותהליך | מקום לשינוי" },
      {
        property: "og:description",
        content: "התהליך הטיפולי במרפאה ורשימת מצבים בהם ניתן לטפל בהיפנוזה, עם הפניות למחקרים.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/treatment` },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: SITE_URL + painImg.url },
      { name: "twitter:image", content: SITE_URL + painImg.url },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatment` }],
  }),
  component: TreatmentPage,
});

type Condition = {
  title: string;
  image?: string;
  alt?: string;
  paragraphs: ReactNode[];
  sub?: { title: string; text: ReactNode; image?: string; alt?: string }[];
  footnote?: ReactNode;
};

const conditions: Condition[] = [
  {
    title: "טיפול בכאב",
    paragraphs: [
      "כאב הוא תופעה פיזיולוגית שנועדה להתריע ולהזהיר את האדם כדי שישנה את התנהגותו בכדי שלא יחמיר את המצב. למשל – אדם ששבר את היד, ימנע מלהזיז אותה בשל הכאב ובכך ימנע נזק גדול יותר.",
      "נעשה שימוש בהיפנוזה לטיפול בכאב אקוטי וכרוני. דוגמאות לשימוש בהיפנוזה בטיפול בכאב:",
    ],
    sub: [
      {
        title: "פיברומיאלגיה",
        image: fibroImg.url,
        alt: "אישה אוחזת בעורפה הכואב",
        text: (
          <>
            פיברומיאלגיה היא מחלה כרונית המאופייינת בכאבים מוסקולוסקלטליים מפושטים, מלווים בעייפות, תלונות סומטיות מרובות, ומקושרת לדיכאון. הטיפול הוא מולטידיסיפלינרי וכולל טיפול תרופתי, פסיכולוגי, שיקומי ופיזיותרפיה. <a
              href="https://europepmc.org/article/MED/2023202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-foreground underline underline-offset-2 hover:opacity-70"
            >
              מחקרים מצאו
            </a>{" "}
            שהיפנוזה שיפרה כאבי שרירים, תשישות, הפרעות שינה ותחושה כללית בחולי פיברומיאלגיה
          </>
        ),
      },
      {
        title: "מיגרנות וכאבי ראש",
        image: headacheImg.url,
        alt: "אישה אוחזת בראשה מכאב",
        text: (
          <>
            כאבי ראש שכיחים מאוד באוכלוסיה. חלק מהגורמים המעוררים כאבי ראש הם לחץ, מחסור בשינה, שינוי בהרגלי אכילה, חרדה ועוד.{" "}
            <a
              href="https://www.tandfonline.com/doi/abs/10.1080/00029157.1984.10404162"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-foreground underline underline-offset-2 hover:opacity-70"
            >
              מחקרים הראו
            </a>{" "}
            שטיפול בהיפנוזה ובשיטות נוספות גרמו להפחתה בתדירות ההתקפים , בעצמתם ובשימוש בתרופות
          </>
        ),
      },
      {
        title: "כאבים אורתופדים",
        image: painImg.url,
        alt: "גבר אוחז בגבו התחתון",
        text: (
          <>
            היפנוזה יעילה בטיפול כאבים ממקור שרירי וגרמי שיכולים לגרום סבל רב למטופלים.{" "}
            <a
              href="https://www.tandfonline.com/doi/10.1080/00029157.1979.10403201?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-foreground underline underline-offset-2 hover:opacity-70"
            >
              מחקרים מראים
            </a>{" "}
            שהיפנוזה יעילה לכאבי גב תחתון
          </>
        ),
      },
    ],
    footnote: (
      <>
        למעשה, היפנוזה{" "}
        <a
          href="https://www.bondingandbirth.org/uploads/5/4/1/5/5415260/hypnosis_and_clinical_pain.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-foreground underline underline-offset-2 hover:opacity-70"
        >
          יעילה
        </a>{" "}
        לכמעט כל תסמונות הכאב
      </>
    ),
  },
  {
    title: "הפסקת עישון",
    image: smokingImg.url,
    alt: "סיגריה במאפרה",
    paragraphs: [
      "לעישון יש השלכות בריאותיות רבות וביניהן עליה לסיכון בסרטן ריאות , COPD ופגיעה באיכות החיים. לנסיון להפסיק לעשן ללא תמיכה ראויה סיכויי הצלחה מועטים. הטיפול בהיפנוזה, במקביל או ללא טיפול תרופתי, מעלה מוטיבציה, עוזר בטיפול בהתנגדויות ומעלה סיכויי הצלחה.",
    ],
  },
  {
    title: "הפרעות שינה",
    image: sleepImg.url,
    alt: "אישה במיטה מציצה מעל השמיכה",
    paragraphs: [
      <>
        הפרעות שינה כוללות נדודי שינה (אינסומניה), ביעותי לילה, סונמבוליזם והרטבת לילה (בילדים לרוב) ועוד. הפרעות השינה פוגעות בתפקוד הנורמלי וגורמות סבל רב. להיפנוזה ולשיטות הרגעות יש{" "}
        <a
          href="https://www.sleep.theclinics.com/article/S1556-407X(14)00120-9/abstract"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-foreground underline underline-offset-2 hover:opacity-70"
        >
          תועלת רבה
        </a>{" "}
        בטיפול בהפרעות שינה מסוגים שונים, והטיפול משלב לימוד היגיינת שינה והיפנוזה עצמית.
      </>,
    ],
  },
  {
    title: "הפרעות עיכול",
    image: giImg.url,
    alt: "אישה אוחזת בבטנה",
    paragraphs: [
      <>
        היפנוזה מועילה למגוון הפרעות עיכול כגון IBS (תסמונת המעי הרגיז). התסמונת מתבטאת בתבנית אבנורמלית של שילשול, עצירות, או שילוב ביניהן. ההיפנוזה משפיעה על החלקים במוח שאחראים על תנועת המעי ועל תחושת הכאב.{" "}
        <a
          href="https://onlinelibrary.wiley.com/doi/10.1111/j.1365-2036.2006.03028.x"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-foreground underline underline-offset-2 hover:opacity-70"
        >
          מחקרים הראו
        </a>{" "}
        אפקטיביות רבה בטיפול בהיפנוזה בתסמונת המעי הרגיז.
      </>,
    ],
  },
  {
    title: "הריון ולידה",
    image: pregnancyImg.url,
    alt: "אישה בהריון בשדה בשעת שקיעה",
    paragraphs: [
      <>
        הריון ולידה הן אחת החוויות המרגשות והעוצמתיות ביותר, אך לעיתים נלוות גם חרדה ודאגה מפני הכאב הכרוך בלידה. כבר לפני מאה שנים השתמשו בהיפנוזה לשליטה בכאב בזמן לידה וגם כיום ניתן להפחית בעזרת היפנוזה את הצורך בתרופות לשיכוך כאב .{" "}
        <a
          href="https://psycnet.apa.org/record/1991-05480-001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-foreground underline underline-offset-2 hover:opacity-70"
        >
          מחקרים מראים
        </a>{" "}
        כי שימוש בהיפנוזה גם מגביר את הביטחון העצמי והרוגע של היולדת , מעלה שיעור לידות ספונטניות ומצמצם שכיחות דיכאון לאחר לידה
      </>,
    ],
  },
  {
    title: "חרדה",
    image: anxietyImg.url,
    alt: "אישה יושבת במצוקה מוקפת בידיים",
    paragraphs: [
      "הפרעות חרדה הן מגוונות, שכיחות יחסית, ומפריעות לניהול חיים תקינים. דוגמאות להפרעות חרדה בהן ניתן לטפל בהיפנוזה הן פחדים ממחטים וזריקות, חרדת טיסות, חרדה דנטלית ועוד. במהלך טיפול היפנוטי המטופל יכול לדמיין את הדבר ממנו הוא נמנע תוך כדי רגיעה עמוקה ותחושת שליטה, לשנות את מסגרת ההתייחסות, ללמוד טכניקות לוויסות החרדה ועוד.",
    ],
  },
  {
    title: "סרטן",
    image: cancerImg.url,
    alt: "יד של מטופל מחוברת לעירוי",
    paragraphs: [
      <>
        מחלת הסרטן והטיפול בה הופכים נפוצים יותר ויותר. בעוד שיעילות הטיפול בסרטן עולה עם הזמן, המטופלים עדיין מתמודדים עם תופעות הלוואי של הטיפולים. היפנוזה יעילה ביותר בהתמודדות עם תופעות לוואי של כימותרפיה כגון גלי חום אצל נשים שחלו בסרטן שד ,{" "}
        <a
          href="https://psycnet.apa.org/doi/10.1097/00004703-199408000-00007"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-foreground underline underline-offset-2 hover:opacity-70"
        >
          בחילות והקאות בילדים
        </a>{" "}
        ועוד. בנוסף, הטיפול בהיפנוזה{" "}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/28267893/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-foreground underline underline-offset-2 hover:opacity-70"
        >
          מועיל לטיפול בחרדה ובסטרס
        </a>{" "}
        שמתלווים למחלה ומחזק את יכולת ההתמודדות. קיימות אף תיאוריות הגורסות כי היפנוזה מחזקת את המערכת החיסונית אצל חולי סרטן.
      </>,
    ],
  },
  {
    title: "היפנוזה בילדים",
    image: childrenImg.url,
    alt: "ילדה מחייכת מרוחה בצבעים",
    paragraphs: [
      "ילדים מגיבים לטיפול היפנוטי אפילו טוב יותר ממבוגרים ועל כן קיימים טיפולים היפנוטיים לבעיות נפוצות - הרטבת לילה ראשונית-(Enuresis), העלמת נגעים בעור – ורוקה ואקזמות, חרדה מפני מחטים וזריקות, סיוטי לילה ועוד.",
    ],
  },
];

const process = [
  {
    title: "מפגש היכרות",
    text: "בו מעמיקים בבעיה בשלה הגעתם לטיפול. מקבלים הסבר מעמיק ומתנסים התנסות קצרה.",
  },
  {
    title: "פגישות טיפוליות",
    text: "בהן קורה הקסם. במהלך הפגישה שאורכת 45 דק' תכנסו לטראנס היפנוטי ותתקיים העבודה הטיפולית. בסוף המפגש, נעבד את החוויה.",
  },
  {
    title: "היפנוזה עצמית",
    text: "במהלך התהליך תלמדו לבצע היפנוזה עצמית שתשרת אתכם בעתיד ותתבקשו לתרגל זאת בבית.",
  },
];

function TreatmentPage() {
  return (
    <SiteLayout>
      <PageHeader kicker="מקום לשינוי" title="על הטיפול" />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent-foreground">רקע</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">מהי היפנוזה?</h2>
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

      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent-foreground">תהליך</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">על התהליך הטיפולי</h2>
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {process.map((step, i) => (
                <Reveal key={step.title} delay={i * 80}>
                  <div className="flex flex-col gap-2 bg-card p-8 sm:flex-row sm:gap-8">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                      <p className="mt-2 text-[17px] leading-relaxed text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent-foreground">מצבים</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            מצבים בהם ניתן לטפל בהיפנוזה
          </h2>
          <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-muted-foreground">
            רשימת דוגמאות חלקית של מצבים רפואיים ונפשיים בהם ניתן לטפל בהצלחה באמצעות היפנוזה. בסוגריים – מצויינים
            מאמרים מדעיים עליהם הסתמכתי (ניתן לעיין בהם ברשת). למעמיקים מומלץ לקרוא את הספר &quot;היפנוזה- דרכה של
            הנפש ליצור את הגוף&quot;, מאת אודי בונשטיין , או לקרוא ב<a href="https://www.hypno.co.il/" target="_blank" rel="noopener noreferrer" className="text-accent-foreground underline underline-offset-2 hover:opacity-70">אתר האגודה הישראלית להיפנוזה</a>
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-24">
          {conditions.map((c, idx) => (
            <article key={c.title} className="border-t border-border pt-10 sm:pt-14">
              <div
                className={`grid items-start gap-8 md:grid-cols-2 md:gap-14 ${
                  idx % 2 === 1 && c.image ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {c.image && (
                  <Reveal>
                    <img
                      src={c.image}
                      alt={c.alt}
                      loading="lazy"
                      className="aspect-3/2 w-full rounded-2xl border border-border bg-secondary/30 object-contain"
                    />
                  </Reveal>
                )}
                <Reveal delay={80}>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">{c.title}</h3>
                  <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-muted-foreground">
                    {c.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </Reveal>
              </div>

              {c.sub && (
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                  {c.sub.map((s, i) => (
                    <Reveal key={s.title} delay={i * 80} className="h-full">
                      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                        {s.image && (
                          <img src={s.image} alt={s.alt ?? s.title} loading="lazy" className="aspect-3/2 w-full bg-secondary/30 object-contain" />
                        )}
                        <div className="flex flex-1 flex-col p-7">
                          <h4 className="text-lg font-medium text-foreground">{s.title}</h4>
                          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}

              {c.footnote && (
                <Reveal>
                  <p className="mt-8 border-r-2 border-accent-foreground/50 pr-5 text-[17px] leading-relaxed text-foreground">
                    {c.footnote}
                  </p>
                </Reveal>
              )}
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
