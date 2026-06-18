import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "70vh" }} aria-label="כותרת ראשית">
      <Image
        src="/Pictures/background.jpg"
        alt="רקע"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(27,58,92,0.58)" }} />
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "70vh" }}
      >
        <h1
          className="text-white font-bold leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          מקום לשינוי
        </h1>
        <p
          className="text-white/85 font-medium mb-4"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}
        >
          מרפאה להיפנוזה
        </p>
        <p
          className="text-white/70 max-w-lg leading-relaxed"
          style={{ fontSize: "clamp(0.85rem, 1.8vw, 1rem)" }}
        >
          היפנוזה לטיפול בכאב, חרדה, הפרעות שינה ועוד
        </p>
      </div>
    </section>
  );
}
