import Image from "next/image";
import Logo from "@/components/Logo";

export const metadata = {
  title: "על המטפל — מקום לשינוי",
};

export default function TherapistPage() {
  return (
    <>
      {/* Logo banner */}
      <div
        className="flex items-center justify-center py-10 md:py-14"
        style={{ backgroundColor: "#1B3A5C" }}
      >
        <Logo size={140} />
      </div>

      <div className="py-8 md:py-12 px-5 md:px-8 max-w-2xl mx-auto">
        <h1
          className="text-xl md:text-2xl font-bold mb-8 text-center"
          style={{ color: "#1B3A5C" }}
        >
          על המטפל
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <div
              className="overflow-hidden rounded-xl border border-border"
              style={{ width: "300px", height: "400px" }}
            >
              <Image
                src="/Pictures/Therapist.jpg"
                alt="יובל — מטפל בהיפנוזה"
                width={300}
                height={400}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="space-y-4 text-muted-fg leading-relaxed text-sm md:text-base flex-1">
            <p>
              שמי יובל, אני רופא (MD) ועובד בבית חולים רמב&quot;ם. במקביל לעבודתי כרופא, בשנים האחרונות אני מטפל ומחלץ נפגעי נפש בסיטואציות משבריות בחו&quot;ל.
            </p>
            <p>
              אני בעל רשיון לטיפול בהיפנוזה מטעם משרד הבריאות (מספר 39927). מאז שפגשתי את הכלי המדהים הזה, אני מטפל, מעמיק ומתמקצע.
            </p>
            <p>
              אני מאמין שלהיפנוזה יש פוטנציאל אדיר בטיפול במחלות כרוניות, כאבים ותחומים נוספים.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
