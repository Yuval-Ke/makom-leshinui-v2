import Logo from "@/components/Logo";
import ContactForm from "@/components/ContactForm";
import ContactBlock from "@/components/ContactBlock";
import MapEmbed from "@/components/MapEmbed";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "צרו קשר — מקום לשינוי",
};

export default function ContactPage() {
  return (
    <>
      <div
        className="flex items-center justify-center py-10 md:py-14"
        style={{ backgroundColor: "#1B3A5C" }}
      >
        <Logo size={140} />
      </div>

      <div className="py-8 md:py-12 px-5 md:px-8 max-w-2xl mx-auto space-y-12">
        <h1
          className="text-xl md:text-2xl font-bold text-center"
          style={{ color: "#1B3A5C" }}
        >
          צרו קשר
        </h1>

        <ContactForm />

        <div className="border-t border-border pt-8">
          <p className="text-sm font-medium mb-4" style={{ color: "#1B3A5C" }}>פרטי התקשרות</p>
          <ContactBlock />
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={15} className="text-stone flex-shrink-0" />
            <p className="text-sm font-medium">דרך הנדיב, פרדס חנה</p>
          </div>
          <MapEmbed />
        </div>
      </div>
    </>
  );
}
