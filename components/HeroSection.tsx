import Image from "next/image";
import Logo from "./Logo";

export default function HeroSection() {
  return (
    <section className="relative border-b border-border overflow-hidden" aria-label="כותרת ראשית">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Pictures/background.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Soft white overlay so text stays readable */}
        <div className="absolute inset-0 bg-white/75" />
      </div>

      <div className="py-20 md:py-28 max-w-2xl mx-auto px-6 md:px-8 text-center">
        <div className="flex justify-center mb-8">
          <Logo size={110} />
        </div>
        <p className="text-base md:text-lg text-muted-fg leading-relaxed max-w-sm mx-auto">
          גישה מקצועית ומבוססת מחקר לטיפול בהיפנוזה
        </p>
      </div>
    </section>
  );
}
