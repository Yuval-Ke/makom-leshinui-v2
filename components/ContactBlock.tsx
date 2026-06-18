import { Phone, Mail, MessageCircle } from "lucide-react";

const PHONE = "052-6903605";
const EMAIL = "dr.yuval.kesary@gmail.com";
const WHATSAPP_NUM = "972526903605";

export default function ContactBlock() {
  return (
    <div className="space-y-4">
      <a
        href={`tel:${PHONE.replace(/-/g, "")}`}
        className="flex items-center gap-3 text-muted-fg hover:text-fg transition-colors group"
      >
        <Phone size={16} className="flex-shrink-0 text-stone" />
        <span className="text-sm" dir="ltr">{PHONE}</span>
      </a>

      <a
        href={`mailto:${EMAIL}`}
        className="flex items-center gap-3 text-muted-fg hover:text-fg transition-colors group"
      >
        <Mail size={16} className="flex-shrink-0 text-stone" />
        <span className="text-sm" dir="ltr">{EMAIL}</span>
      </a>

      <a
        href={`https://wa.me/${WHATSAPP_NUM}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-muted-fg hover:text-fg transition-colors group"
      >
        <MessageCircle size={16} className="flex-shrink-0 text-stone" />
        <span className="text-sm">שליחת הודעה בוואטסאפ</span>
      </a>
    </div>
  );
}
