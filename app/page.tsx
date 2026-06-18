import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FadeIn from "@/components/FadeIn";
import ContactBlock from "@/components/ContactBlock";

interface ConditionItem {
  title: string;
  content: string;
}

const conditions: ConditionItem[] = [
  {
    title: "טיפול בכאב",
    content:
      "כאב הוא תופעה פיזיולוגית שנועדה להתריע ולהזהיר את האדם כדי שישנה את התנהגותו בכדי שלא יחמיר את המצב. למשל – אדם ששבר את היד, ימנע מלהזיז אותה בשל הכאב ובכך ימנע נזק גדול יותר. נעשה שימוש בהיפנוזה לטיפול בכאב אקוטי וכרוני כגון כאבים אורתופדים — היפנוזה יעילה בטיפול בכאבים ממקור שרירי וגרמי שיכולים לגרום סבל רב למטופלים. מחקרים מראים שהיפנוזה יעילה לכאבי גב תחתון (Crasilneck 2011). למעשה, היפנוזה יעילה לכמעט כל תסמונות הכאב (Patterson & Jensen. 2003).",
  },
  {
    title: "פיברומיאלגיה",
    content:
      "פיברומיאלגיה היא מחלה כרונית המאופיינת בכאבים מוסקולוסקלטליים מפושטים, מלווים בעייפות, תלונות סומטיות מרובות, ומקושרת לדיכאון. הטיפול הוא מולטידיסיפלינרי וכולל טיפול תרופתי, פסיכולוגי, שיקומי ופיזיותרפיה. מחקרים מצאו שהיפנוזה שיפרה כאבי שרירים, תשישות, הפרעות שינה ותחושה כללית בחולי פיברומיאלגיה (Haanen et al., 1991).",
  },
  {
    title: "מיגרנות וכאבי ראש",
    content:
      "כאבי ראש שכיחים מאוד באוכלוסיה. חלק מהגורמים המעוררים כאבי ראש הם לחץ, מחסור בשינה, שינוי בהרגלי אכילה, חרדה ועוד. מחקרים הראו שטיפול בהיפנוזה ובשיטות נוספות גרמו להפחתה בתדירות ההתקפים, בעצמתם ובשימוש בתרופות (Friedman and Taub 1984).",
  },
  {
    title: "הפסקת עישון",
    content:
      "לעישון יש השלכות בריאותיות רבות וביניהן עליה לסיכון בסרטן ריאות, COPD ופגיעה באיכות החיים. לנסיון להפסיק לעשן ללא תמיכה ראויה סיכויי הצלחה מועטים. הטיפול בהיפנוזה, במקביל או ללא טיפול תרופתי, מעלה מוטיבציה, עוזר בטיפול בהתנגדויות ומעלה סיכויי הצלחה.",
  },
  {
    title: "הפרעות שינה",
    content:
      "הפרעות שינה כוללות נדודי שינה (אינסומניה), ביעותי לילה, סונמבוליזם והרטבת לילה (בילדים לרוב) ועוד. הפרעות השינה פוגעות בתפקוד הנורמלי וגורמות סבל רב. להיפנוזה ולשיטות הרגעות יש תועלת רבה בטיפול בהפרעות שינה מסוגים שונים (Becker. 2015), והטיפול משלב לימוד היגיינת שינה והיפנוזה עצמית.",
  },
  {
    title: "הפרעות עיכול",
    content:
      "היפנוזה מועילה למגוון הפרעות עיכול כגון IBS (תסמונת המעי הרגיז). התסמונת מתבטאת בתבנית אבנורמלית של שילשול, עצירות, או שילוב ביניהן. ההיפנוזה משפיעה על החלקים במוח שאחראים על תנועת המעי ועל תחושת הכאב. מחקרים הראו אפקטיביות רבה בטיפול בהיפנוזה בתסמונת המעי הרגיז (Whorwell 1987).",
  },
  {
    title: "הריון ולידה",
    content:
      "הריון ולידה הן אחת החוויות המרגשות והעוצמתיות ביותר, אך לעיתים נלוות גם חרדה ודאגה מפני הכאב הכרוך בלידה. כבר לפני מאה שנים השתמשו בהיפנוזה לשליטה בכאב בזמן לידה וגם כיום ניתן להפחית בעזרת היפנוזה את הצורך בתרופות לשיכוך כאב. מחקרים מראים כי שימוש בהיפנוזה מגביר את הביטחון העצמי והרוגע של היולדת, מעלה שיעור לידות ספונטניות ומצמצם שכיחות דיכאון לאחר לידה (Harmon, Hynan and Tyre, 1990).",
  },
  {
    title: "חרדה",
    content:
      "הפרעות חרדה הן מגוונות, שכיחות יחסית, ומפריעות לניהול חיים תקינים. דוגמאות להפרעות חרדה בהן ניתן לטפל בהיפנוזה: פחדים ממחטים וזריקות, חרדת טיסות, חרדה דנטלית ועוד. במהלך טיפול היפנוטי המטופל יכול לדמיין את הדבר ממנו הוא נמנע תוך כדי רגיעה עמוקה ותחושת שליטה, לשנות את מסגרת ההתייחסות, ללמוד טכניקות לוויסות החרדה ועוד.",
  },
  {
    title: "סרטן",
    content:
      "מחלת הסרטן והטיפול בה הופכים נפוצים יותר ויותר. היפנוזה יעילה ביותר בהתמודדות עם תופעות לוואי של כימותרפיה כגון גלי חום אצל נשים שחלו בסרטן שד, בחילות והקאות בילדים ועוד (Jacknow, Tschann & Boyce, 1994). בנוסף, הטיפול בהיפנוזה מועיל לטיפול בחרדה ובסטרס שמתלווים למחלה (Chen, Liu, Chen, 2017) ומחזק את יכולת ההתמודדות.",
  },
  {
    title: "היפנוזה בילדים",
    content:
      "ילדים מגיבים לטיפול היפנוטי אפילו טוב יותר ממבוגרים ועל כן קיימים טיפולים היפנוטיים לבעיות נפוצות — הרטבת לילה ראשונית (Enuresis), העלמת נגעים בעור – ורוקה ואקזמות, חרדה מפני מחטים וזריקות, סיוטי לילה ועוד.",
  },
];

const panelBg = [
  "#EDF2F8", "#F5EFE6", "#EDF5F0", "#F5F0ED", "#EDF2F8",
  "#F5EFE6", "#EDF5F0", "#F5F0ED", "#EDF2F8", "#F5EFE6",
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* מהי היפנוזה */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="what-is">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <h2
              id="what-is"
              className="font-bold mb-6"
              style={{ color: "#1B3A5C", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
            >
              מהי היפנוזה?
            </h2>
            <p className="text-muted-fg leading-relaxed" style={{ fontSize: "clamp(0.85rem, 1.8vw, 1rem)" }}>
              היפנוזה היא תהליך בו מהפנט מציע למטופל להכנס למצב טראנס: מצב תודעה שונה נעים ויצירתי.
              במצב זה ניתן למצוא פתרונות למגוון בעיות כמו- כאבים כרוניים, אלרגיות, הפרעות שינה, חרדות,
              מיגרנות, מעי רגיז, כאבי מחזור, מחלות עור, פיברומיאלגיה הפסקת עישון ועוד.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* על התהליך */}
      <section className="overflow-hidden" style={{ backgroundColor: "#1B3A5C" }} aria-labelledby="process">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2" style={{ minHeight: "360px" }}>
            <Image
              src="/Pictures/Therapist.jpg"
              alt="על הטיפול"
              fill
              className="object-cover object-top"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center px-8 py-12 md:px-14 md:py-16">
            <FadeIn>
              <h2
                id="process"
                className="font-bold text-white mb-8"
                style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
              >
                על התהליך הטיפולי
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "מפגש היכרות",
                    body: "בו מעמיקים בבעיה בשלה הגעתם לטיפול. מקבלים הסבר מעמיק ומתנסים התנסות קצרה.",
                  },
                  {
                    title: "פגישות טיפוליות – בהן קורה הקסם",
                    body: "במהלך הפגישה שאורכת 45 דק׳ תכנסו לטראנס היפנוטי ותתקיים העבודה הטיפולית. בסוף המפגש, נעבד את החוויה.",
                  },
                  {
                    title: "היפנוזה עצמית",
                    body: "במהלך התהליך תלמדו לבצע היפנוזה עצמית שתשרת אתכם בעתיד ותתבקשו לתרגל זאת בבית.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-white/70 leading-relaxed" style={{ fontSize: "0.9em" }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* מצבים header */}
      <section className="py-12 md:py-16 bg-white text-center px-6" aria-labelledby="conditions">
        <FadeIn>
          <h2
            id="conditions"
            className="font-bold mb-4"
            style={{ color: "#1B3A5C", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
          >
            מצבים בהם ניתן לטפל בהיפנוזה
          </h2>
          <p className="text-muted-fg max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "clamp(0.8rem, 1.6vw, 0.95rem)" }}>
            רשימת דוגמאות חלקית של מצבים רפואיים ונפשיים בהם ניתן לטפל בהצלחה באמצעות היפנוזה.
            בסוגריים – מצויינים מאמרים מדעיים עליהם הסתמכתי (ניתן לעיין בהם ברשת).
            למעמיקים מומלץ לקרוא את הספר &quot;היפנוזה- דרכה של הנפש ליצור את הגוף&quot;, מאת אודי בונשטיין, או לקרוא באתר האגודה הישראלית להיפנוזה.
          </p>
        </FadeIn>
      </section>

      {/* Condition cards */}
      {conditions.map((condition, i) => {
        const isEven = i % 2 === 0;
        const bg = panelBg[i];
        return (
          <FadeIn key={condition.title}>
            <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div
                className="w-full md:w-1/2 flex items-center px-8 py-10 md:px-14 md:py-12"
                style={{ backgroundColor: "#1B3A5C" }}
              >
                <div>
                  <h3
                    className="font-bold text-white mb-4"
                    style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)" }}
                  >
                    {condition.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed" style={{ fontSize: "clamp(0.78rem, 1.5vw, 0.9rem)" }}>
                    {condition.content}
                  </p>
                </div>
              </div>
              <div
                className="w-full md:w-1/2"
                style={{ backgroundColor: bg, minHeight: "200px" }}
              />
            </div>
          </FadeIn>
        );
      })}

      {/* צור קשר */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#1B3A5C" }}
        aria-labelledby="contact-home"
        id="contact"
      >
        <div className="max-w-2xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <h2
              id="contact-home"
              className="font-bold text-white mb-8"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
            >
              צור קשר
            </h2>
            <ContactBlock dark />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
