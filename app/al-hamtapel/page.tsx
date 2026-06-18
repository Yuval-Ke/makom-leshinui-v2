import Image from "next/image";
import PageContainer from "@/components/PageContainer";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "על המטפל — מקום לשינוי",
};

export default function TherapistPage() {
  return (
    <div className="py-16 md:py-24">
      <PageContainer>
        <FadeIn>
          <SectionTitle as="h1">על המטפל</SectionTitle>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
            <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/Pictures/Therapist.jpg"
                  alt="יובל — מטפל בהיפנוזה"
                  width={208}
                  height={208}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 text-muted-fg leading-relaxed text-sm flex-1">
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
        </FadeIn>
      </PageContainer>
    </div>
  );
}
