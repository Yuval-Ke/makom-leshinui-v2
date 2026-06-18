import {
  Zap, Activity, Brain, Bone, Wind, Moon, Leaf,
  Heart, AlertCircle, Shield, Star,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import PageContainer from "@/components/PageContainer";
import SectionTitle from "@/components/SectionTitle";
import AccordionGroup, { AccordionItem } from "@/components/AccordionGroup";
import ContactBlock from "@/components/ContactBlock";
import FadeIn from "@/components/FadeIn";

const conditions: AccordionItem[] = [
  {
    title: "טיפול בכאב",
    icon: <Zap size={16} />,
    content: <p>טיפול בכאב – כאב הוא תופעה פיזיולוגית שנועדה להתריע ולהזהיר את האדם כדי שישנה את התנהגותו בכדי שלא יחמיר את המצב. למשל – אדם ששבר את היד, ימנע מלהזיז אותה בשל הכאב ובכך ימנע נזק גדול יותר.<br /><br />נעשה שימוש בהיפנוזה לטיפול בכאב אקוטי וכרוני. דוגמאות לשימוש בהיפנוזה בטיפול בכאב:</p>,
  },
  {
    title: "פיברומיאלגיה",
    icon: <Activity size={16} />,
    content: <p>פיברומיאלגיה היא מחלה כרונית המאופייינת בכאבים מוסקולוסקלטליים מפושטים, מלווים בעייפות, תלונות סומטיות מרובות, ומקושרת לדיכאון. הטיפול הוא מולטידיסיפלינרי וכולל טיפול תרופתי, פסיכולוגי, שיקומי ופיזיותרפיה. מחקרים מצאו שהיפנוזה שיפרה כאבי שרירים, תשישות, הפרעות שינה ותחושה כללית בחולי פיברומיאלגיה (Haanen et al., 1991)</p>,
  },
  {
    title: "מיגרנות וכאבי ראש",
    icon: <Brain size={16} />,
    content: <p>כאבי ראש שכיחים מאוד באוכלוסיה. חלק מהגורמים המעוררים כאבי ראש הם לחץ, מחסור בשינה, שינוי בהרגלי אכילה, חרדה ועוד. מחקרים הראו שטיפול בהיפנוזה גרם להפחתה בתדירות ההתקפים, בעצמתם ובשימוש בתרופות (Friedman and Taub 1984)</p>,
  },
  {
    title: "כאבים אורתופדים",
    icon: <Bone size={16} />,
    content: <p>היפנוזה יעילה בטיפול בכאבים ממקור שרירי וגרמי שיכולים לגרום סבל רב למטופלים. מחקרים מראים שהיפנוזה יעילה לכאבי גב תחתון (Crasilneck 2011). למעשה, היפנוזה יעילה לכמעט כל תסמונות הכאב (Patterson &amp; Jensen. 2003)</p>,
  },
  {
    title: "הפסקת עישון",
    icon: <Wind size={16} />,
    content: <p>לעישון יש השלכות בריאותיות רבות וביניהן עליה לסיכון בסרטן ריאות, COPD ופגיעה באיכות החיים. לנסיון להפסיק לעשן ללא תמיכה ראויה סיכויי הצלחה מועטים. הטיפול בהיפנוזה מעלה מוטיבציה, עוזר בטיפול בהתנגדויות ומעלה סיכויי הצלחה.</p>,
  },
  {
    title: "הפרעות שינה",
    icon: <Moon size={16} />,
    content: <p>הפרעות שינה כוללות נדודי שינה (אינסומניה), ביעותי לילה, סונמבוליזם והרטבת לילה (בילדים לרוב) ועוד. להיפנוזה ולשיטות הרגעות יש תועלת רבה בטיפול בהפרעות שינה מסוגים שונים (Becker. 2015), והטיפול משלב לימוד היגיינת שינה והיפנוזה עצמית.</p>,
  },
  {
    title: "הפרעות עיכול",
    icon: <Leaf size={16} />,
    content: <p>היפנוזה מועילה למגוון הפרעות עיכול כגון IBS (תסמונת המעי הרגיז). ההיפנוזה משפיעה על החלקים במוח שאחראים על תנועת המעי ועל תחושת הכאב. מחקרים הראו אפקטיביות רבה בטיפול בהיפנוזה בתסמונת המעי הרגיז (Whorwell 1987).</p>,
  },
  {
    title: "הריון ולידה",
    icon: <Heart size={16} />,
    content: <p>הריון ולידה הן אחת החוויות המרגשות והעוצמתיות ביותר. כבר לפני מאה שנים השתמשו בהיפנוזה לשליטה בכאב בזמן לידה. מחקרים מראים כי שימוש בהיפנוזה מגביר את הביטחון העצמי והרוגע של היולדת, מעלה שיעור לידות ספונטניות ומצמצם שכיחות דיכאון לאחר לידה (Harmon, Hynan and Tyre, 1990)</p>,
  },
  {
    title: "חרדה",
    icon: <AlertCircle size={16} />,
    content: <p>הפרעות חרדה הן מגוונות, שכיחות יחסית, ומפריעות לניהול חיים תקינים. דוגמאות להפרעות חרדה בהן ניתן לטפל בהיפנוזה: פחדים ממחטים וזריקות, חרדת טיסות, חרדה דנטלית ועוד. במהלך טיפול היפנוטי המטופל יכול לדמיין את הדבר ממנו הוא נמנע תוך כדי רגיעה עמוקה ותחושת שליטה.</p>,
  },
  {
    title: "סרטן",
    icon: <Shield size={16} />,
    content: <p>היפנוזה יעילה ביותר בהתמודדות עם תופעות לוואי של כימותרפיה כגון גלי חום אצל נשים שחלו בסרטן שד, בחילות והקאות בילדים ועוד. (Jacknow, Tschann&amp;Boyce, 1994)<br /><br />בנוסף, הטיפול בהיפנוזה מועיל לטיפול בחרדה ובסטרס שמתלווים למחלה (Chen,Liu,Chen, 2017) ומחזק את יכולת ההתמודדות.</p>,
  },
  {
    title: "היפנוזה בילדים",
    icon: <Star size={16} />,
    content: <p>ילדים מגיבים לטיפול היפנוטי אפילו טוב יותר ממבוגרים. קיימים טיפולים היפנוטיים לבעיות נפוצות – הרטבת לילה ראשונית (Enuresis), העלמת נגעים בעור – ורוקה ואקזמות, חרדה מפני מחטים וזריקות, סיוטי לילה ועוד.</p>,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* מהי היפנוזה */}
      <section className="py-16 md:py-20" aria-labelledby="what-is">
        <PageContainer>
          <FadeIn>
            <SectionTitle id="what-is">מהי היפנוזה?</SectionTitle>
            <p className="text-muted-fg leading-relaxed text-sm md:text-base">
              היפנוזה היא תהליך בו מהפנט מציע למטופל להכנס למצב טראנס: מצב תודעה שונה נעים ויצירתי. במצב זה ניתן למצוא פתרונות למגוון בעיות כמו- כאבים כרוניים, אלרגיות, הפרעות שינה, חרדות, מיגרנות, מעי רגיז, כאבי מחזור, מחלות עור, פיברומיאלגיה הפסקת עישון ועוד.
            </p>
          </FadeIn>
        </PageContainer>
      </section>

      <div className="border-t border-border" />

      {/* על התהליך */}
      <section className="py-16 md:py-20" aria-labelledby="process">
        <PageContainer>
          <FadeIn>
            <SectionTitle id="process">על התהליך הטיפולי</SectionTitle>
          </FadeIn>
          <div className="space-y-10">
            {[
              {
                title: "מפגש היכרות",
                body: "בו מעמיקים בבעיה בשלה הגעתם לטיפול. מקבלים הסבר מעמיק ומתנסים התנסות קצרה.",
              },
              {
                title: "פגישות טיפוליות — בהן קורה הקסם",
                body: "במהלך הפגישה שאורכת 45 דק׳ תכנסו לטראנס היפנוטי ותתקיים העבודה הטיפולית. בסוף המפגש, נעבד את החוויה.",
              },
              {
                title: "היפנוזה עצמית",
                body: "במהלך התהליך תלמדו לבצע היפנוזה עצמית שתשרת אתכם בעתיד ותתבקשו לתרגל זאת בבית.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-stone-light text-stone text-xs font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-fg mb-1.5">{item.title}</h3>
                    <p className="text-muted-fg text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </PageContainer>
      </section>

      <div className="border-t border-border" />

      {/* מצבים */}
      <section className="py-16 md:py-20" aria-labelledby="conditions">
        <PageContainer>
          <FadeIn>
            <SectionTitle id="conditions">מצבים בהם ניתן לטפל בהיפנוזה</SectionTitle>
            <p className="text-muted-fg text-sm leading-relaxed mb-8">
              רשימת דוגמאות חלקית של מצבים רפואיים ונפשיים בהם ניתן לטפל בהצלחה באמצעות היפנוזה. בסוגריים – מצויינים מאמרים מדעיים עליהם הסתמכתי (ניתן לעיין בהם ברשת). למעמיקים מומלץ לקרוא את הספר &quot;היפנוזה- דרכה של הנפש ליצור את הגוף&quot;, מאת אודי בונשטיין, או לקרוא באתר האגודה הישראלית להיפנוזה.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <AccordionGroup items={conditions} />
          </FadeIn>
        </PageContainer>
      </section>

      <div className="border-t border-border" />

      {/* צור קשר */}
      <section className="py-16 md:py-20" aria-labelledby="contact-home" id="contact">
        <PageContainer>
          <FadeIn>
            <SectionTitle id="contact-home">צור קשר</SectionTitle>
            <ContactBlock />
          </FadeIn>
        </PageContainer>
      </section>
    </>
  );
}
