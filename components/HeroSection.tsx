import Logo from "./Logo";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-6 py-14 md:py-20"
      style={{ backgroundColor: "#F7F4EE" }}
      aria-label="כותרת ראשית"
    >
      <Logo size={320} />
    </section>
  );
}
