export default function HeroSection() {
  return (
    <section
      aria-label="כותרת ראשית"
      style={{
        backgroundImage: "url('/Pictures/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "480px",
      }}
    >
      <div
        className="flex flex-col items-center justify-center text-center px-6"
        style={{
          minHeight: "480px",
          backgroundColor: "rgba(27,58,92,0.58)",
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
          מקום לשינוי
        </h1>
        <p className="text-base md:text-xl text-white/85 font-medium mb-4">
          מרפאה להיפנוזה
        </p>
        <p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed">
          היפנוזה לטיפול בכאב, חרדה, הפרעות שינה ועוד
        </p>
      </div>
    </section>
  );
}
