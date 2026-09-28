import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";

const faqs: { q: string; a: React.ReactNode[] }[] = [
  {
    q: "האם היפנוזה מתאימה לי?",
    a: [
      "כנראה שכן. מהנסיון שלי (וממחקרים רבים) רוב האנשים מסוגלים להתהפנט ונהנים מהטראנס ההיפנוטי. מחקרים מראים שככל שהאדם אינטיליגנטי יותר ובעל דמיון עשיר יותר כך הוא ניתן להיפנוט בקלות רבה יותר (למשל מחקר @@)",
      "היפנוזה מועילה למחלות ומצבים רבים בתחומים הרפואי והנפשי. אם יש התלבטות- תרימו טלפון ונדבר",
    ],
  },
  {
    q: "האם היפנוזה מסוכנת?",
    a: [
      <>
        לא. היפנוזה בטוחה מאוד כאשר היא מבוצעת על ידי איש מקצוע (מומלץ מאוד לבדוק את ההכשרה של המטפל ולוודא שהוכשר במקום מוכר ורציני. ניתן לבדוק את הרשיון שלי{" "}
        <a
          href="https://practitioners.health.gov.il/Hypnotists/901/search?name=%D7%A7%D7%99%D7%A1%D7%A8%D7%99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-foreground underline underline-offset-4 hover:no-underline"
        >
          כאן
        </a>
        )
      </>,
      "קיימים מצבים בהם הטיפול בהיפנוזה לא מומלץ, ובמקרים אלו אני נותן המלצה על שיטת טיפול או מטפל מתאימים יותר. כחלק מהטיפול אני מבקש להביא את סיכום החומר הרפואי הרלוונטי.",
      "ככל טיפול עומק, גם ששימוש בהיפנוזה על ידי מטפל לא מוסמך יכול להביא לתוצאות לא רצויות ועל כן החוק מחייב כל מטפל בהיפנוזה לעבור הכשרה ומבחן משרד הבריאות ולקבל תעודה.",
    ],
  },
  {
    q: "האם במהלך היפנוזה המטופל מאבד שליטה?",
    a: [
      "בהיפנוזה אתם בשליטה מלאה! למרות מה שרואים בסרטים, לא ניתן להפנט אדם כנגד רצונו או לגרום לו לעשות דברים שנוגדים את אמונותיו. המטופל קובע כמה יעמיק בטראנס ההיפנוטי לפי רצונו, יכולתו, והקשר שנוצר עם המטפל.",
      "במפגש הראשון אני מסביר על זה לעומק.",
    ],
  },
  {
    q: "כמה זמן אורך טיפול?",
    a: ["טיפול אורך 45 דק'"],
  },
  {
    q: "הייתי אצל רופאים וכלום לא עזר. למה לנסות היפנוזה?",
    a: [
      "היפנוזה היא חכמה עתיקה שנזנחה. באמצעות רתימת תת המודע ניתן להשפיע על הגוף לעשות דברים שנתפסים כפלא, כולל ריפוי.",
      "רוב התהליכים הטיפוליים מהירים יחסית (עד 10 פגישות) ולכן, מה יש לך להפסיד?",
    ],
  },
  {
    q: "מה ההבדל בין היפנוזה לדמיון מודרך או NLP?",
    a: [
      "הבדל גדול. בישראל מותר לטפל בהיפנוזה רק לפסיכולוגים, רופאים או רופאי שיניים שעברו קורס מיוחד, טיפול תחת הדרכה ומבחן של משרד הבריאות.",
    ],
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "שאלות נפוצות על טיפול בהיפנוזה | מקום לשינוי" },
      {
        name: "description",
        content:
          "האם היפנוזה מתאימה לי, האם היא מסוכנת, כמה זמן אורך טיפול ומה ההבדל בין היפנוזה ל-NLP — תשובות מהמרפאה.",
      },
      { property: "og:title", content: "שאלות נפוצות על טיפול בהיפנוזה | מקום לשינוי" },
      {
        property: "og:description",
        content: "תשובות לשאלות הנפוצות ביותר על טראנס היפנוטי, בטיחות, שליטה ומשך הטיפול.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <PageHeader kicker="מקום לשינוי" title="שאלות נפוצות" />

      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-6 text-right text-lg font-medium leading-snug text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground">
                    {item.a.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
