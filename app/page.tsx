import HeroSection from "@/components/HeroSection";
import ContactBlock from "@/components/ContactBlock";

interface ConditionItem {
  title: string;
  content: string;
}

const conditions: ConditionItem[] = [
  {
    title: "טיפול בכאב",
    content:
      "כאב הוא תופעה פיזיולוגית שנועדה להתריע ולהזהיר את האדם כדי שישנה את התנהגותו בכדי שלא יחמיר את המצב. למשל – אדם ששבר את היד, ימנע מלהזיז אותה בשל הכאב ובכך ימנע נזק גדול יותר. נעשה שימוש בהיפנוזה לטיפול בכאב אקוטי וכרוני. מחקרים מראים שהיפנוזה יעילה לכאבי גב תחתון (Crasilneck 2011) ולכמעט כל תסמונות הכאב (Patterson & Jensen. 2003).",
  },
  {
    title: "פיברומיאלגיה",
    content:
      "פיברומיאלגיה היא מחלה כרונית המאופיינת בכאבים מוסקולוסקלטליים מפושטים, מלווים בעייפות, תלונות סומטיות מרובות, ומקושרת לדיכאון. הטיפול הוא מולטידיסיפלינרי וכולל טיפול תרופתי, פסיכולוגי, שיקומי ופיזיותרפיה. מחקרים מצאו שהיפנוזה שיפרה כאבי שרירים, תשישות, הפרעות שינה ותחושה כללית בחולי פיברומיאלגיה (Haanen et al., 1991).",
  },
  {
    title: "מיגרנות וכאבי ראש",
    content:
      "כאבי ראש שכיחים מאוד באוכלוסיה. חלק מהגורמים המעוררים כאבי ראש הם לחץ, מחסור בשינה, שינוי בהרגלי אכילה, חרדה ועוד. מחקרים הראו שטיפול בהיפנוזה גרם להפחתה בתדירות ההתקפים, בעצמתם ובשימוש בתרופות (Friedman and Taub 1984).",
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
      "הריון ולידה הן אחת החוויות המרגשות והעוצמתיות ביותר, אך לעיתים נלוות גם חרדה ודאגה מפני הכאב הכרוך בלידה. מחקרים מראים כי שימוש בהיפנוזה מגביר את הביטחון העצמי והרוגע של היולדת, מעלה שיעור לידות ספונטניות ומצמצם שכיחות דיכאון לאחר לידה (Harmon, Hynan and Tyre, 1990).",
  },
  {
    title: "חרדה",
    content:
      "הפרעות חרדה הן מגוונות, שכיחות יחסית, ומפריעות לניהול חיים תקינים. דוגמאות להפרעות חרדה בהן ניתן לטפל בהיפנוזה: פחדים ממחטים וזריקות, חרדת טיסות, חרדה דנטלית ועוד. במהלך טיפול היפנוטי המטופל יכול לדמיין את הדבר ממנו הוא נמנע תוך כדי רגיעה עמוקה ותחושת שליטה, לשנות את מסגרת ההתייחסות, ללמוד טכניקות לוויסות החרדה ועוד.",
  },
  {
    title: "סרטן",
    content:
      "מחלת הסרטן והטיפול בה הופכים נפוצים יותר ויותר. היפנוזה יעילה ביותר בהתמודדות עם תופעות לוואי של כימותרפיה כגון גלי חום אצל נשים שחלו בסרטן שד, בחילות והקאות בילדים ועוד (Jacknow, Tschann & Boyce, 1994). הטיפול בהיפנוזה מועיל לטיפול בחרדה ובסטרס שמתלווים למחלה (Chen, Liu, Chen, 2017) ומחזק את יכולת ההתמודדות.",
  },
  {
    title: "היפנוזה בילדים",
    content:
      "ילדים מגיבים לטיפול היפנוטי אפילו טוב יותר ממבוגרים ועל כן קיימים טיפולים היפנוטיים לבעיות נפוצות — הרטבת לילה ראשונית (Enuresis), העלמת נגעים בעור – ורוקה ואקזמות, חרדה מפני מחטים וזריקות, סיוטי לילה ועוד.",
  },
];

const accentBg = [
  "#EDF2F8", "#F5EFE6", "#EDF5F0", "#F5F0ED", "#EDF2F8",
  "#F5EFE6", "#EDF5F0", "#F5F0ED", "#EDF2F8", "#F5EFE6",
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* מהי היפנוזה */}
      <section className="py-8 md:py-14 bg-white" aria-labelledby="what-is">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 id="what-is" className="text-xl md:text-2xl font-bold mb-6" style={{ color: "#1B3A5C" }}>
            מהי היפנוזה?
          </h2>
          <p className="text-sm md:text-base text-muted-fg leading-relaxed">
            היפנוזה היא תהליך בו מהפנט מציע למטופל להכנס למצב טראנס: מצב תודעה שונה נעים ויצירתי.
            במצב זה ניתן למצוא פתרונות למגוון בעיות כמו- כאבים כרוניים, אלרגיות, הפרעות שינה, חרדות,
            מיגרנות, מעי רגיז, כאבי מחזור, מחלות עור, פיברומיאלגיה, הפסקת עישון ועוד.
          </p>
        </div>
      </section>

      {/* על התהליך */}
      <section style={{ backgroundColor: "#F7F4EE" }} aria-labelledby="process">
        <div className="max-w-2xl mx-auto px-8 py-10 md:px-14 md:py-14">
          <h2 id="process" className="text-lg md:text-2xl font-bold mb-8 text-center" style={{ color: "#1B3A5C" }}>
            על התהליך הטיפולי
          </h2>
          <div className="space-y-6">
            {[
              { title: "מפגש היכרות", body: "בו מעמיקים בבעיה בשלה הגעתם לטיפול. מקבלים הסבר מעמיק ומתנסים התנסות קצרה." },
              { title: "פגישות טיפוליות – בהן קורה הקסם", body: "במהלך הפגישה שאורכת 45 דק׳ תכנסו לטראנס היפנוטי ותתקיים העבודה הטיפולית. בסוף המפגש, נעבד את החוויה." },
              { title: "היפנוזה עצמית", body: "במהלך התהליך תלמדו לבצע היפנוזה עצמית שתשרת אתכם בעתיד ותתבקשו לתרגל זאת בבית." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-bold mt-0.5"
                  style={{ backgroundColor: "#1B3A5C", color: "white", fontSize: "10px" }}
                >
                  {i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-semibold mb-1" style={{ color: "#1B3A5C" }}>{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-fg leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* מצבים header */}
      <section className="py-8 md:py-10 text-center px-6" style={{ backgroundColor: "#F7F4EE" }} aria-labelledby="conditions">
        <h2 id="conditions" className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#1B3A5C" }}>
          מצבים בהם ניתן לטפל בהיפנוזה
        </h2>
        <p className="text-xs md:text-sm text-muted-fg max-w-2xl mx-auto leading-relaxed">
          רשימת דוגמאות חלקית של מצבים רפואיים ונפשיים בהם ניתן לטפל בהצלחה באמצעות היפנוזה.
          בסוגריים – מצויינים מאמרים מדעיים עליהם הסתמכתי (ניתן לעיין בהם ברשת).
          למעמיקים מומלץ לקרוא את הספר &quot;היפנוזה- דרכה של הנפש ליצור את הגוף&quot;, מאת אודי בונשטיין,
          או לקרוא באתר האגודה הישראלית להיפנוזה.
        </p>
      </section>

      {/* Condition cards */}
      {conditions.map((condition, i) => (
        <div
          key={condition.title}
          className={`flex flex-col md:flex-row ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
        >
          <div
            className="w-full md:w-1/2 px-6 py-6 md:px-10 md:py-8"
            style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F7F4EE" }}
          >
            <h3 className="text-base md:text-lg font-bold mb-3" style={{ color: "#1B3A5C" }}>{condition.title}</h3>
            <p className="text-xs md:text-sm text-muted-fg leading-relaxed">{condition.content}</p>
          </div>
          <div className="hidden md:block md:w-1/2" style={{ backgroundColor: accentBg[i] }} />
        </div>
      ))}

      {/* צור קשר */}
      <section
        className="py-8 md:py-12"
        style={{ backgroundColor: "#1B3A5C" }}
        aria-labelledby="contact-home"
        id="contact"
      >
        <div className="max-w-2xl mx-auto px-6 md:px-8 text-center">
          <h2 id="contact-home" className="text-xl md:text-2xl font-bold text-white mb-8">
            צור קשר
          </h2>
          <ContactBlock dark />
        </div>
      </section>
    </>
  );
}
