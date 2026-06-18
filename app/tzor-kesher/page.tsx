import PageContainer from "@/components/PageContainer";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import ContactBlock from "@/components/ContactBlock";
import MapEmbed from "@/components/MapEmbed";
import FadeIn from "@/components/FadeIn";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "צרו קשר — מקום לשינוי",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <PageContainer>
        <FadeIn>
          <SectionTitle as="h1">צרו קשר</SectionTitle>
        </FadeIn>

        <div className="space-y-14">
          <FadeIn delay={80}>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={160}>
            <div className="pt-2 border-t border-border">
              <p className="text-sm font-medium text-fg mb-4 mt-6">פרטי התקשרות</p>
              <ContactBlock />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="border-t border-border pt-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={15} className="text-stone flex-shrink-0" />
                <p className="text-sm font-medium text-fg">דרך הנדיב, פרדס חנה</p>
              </div>
              <MapEmbed />
            </div>
          </FadeIn>
        </div>
      </PageContainer>
    </div>
  );
}
