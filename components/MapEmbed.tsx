export default function MapEmbed() {
  return (
    <div className="rounded-xl overflow-hidden border border-border w-full aspect-[16/9] md:aspect-[2/1]">
      <iframe
        title="מיקום המרפאה — דרך הנדיב, פרדס חנה"
        src="https://maps.google.com/maps?q=דרך+הנדיב,+פרדס+חנה+כרכור&output=embed&hl=he&z=15"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
