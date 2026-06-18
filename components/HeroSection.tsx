import Logo from "./Logo";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-6 py-14 md:py-20"
      style={{ backgroundColor: "#1B3A5C" }}
      aria-label="כותרת ראשית"
    >
      <Logo size={160} />
    </section>
  );
}
