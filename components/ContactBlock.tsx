import { Phone, Mail, MessageCircle } from "lucide-react";

const PHONE = "052-6903605";
const EMAIL = "dr.yuval.kesary@gmail.com";
const WHATSAPP_NUM = "972526903605";

interface ContactBlockProps {
  dark?: boolean;
}

export default function ContactBlock({ dark }: ContactBlockProps) {
  const textClass = dark
    ? "flex items-center gap-3 text-white/70 hover:text-white transition-colors justify-center"
    : "flex items-center gap-3 text-muted-fg hover:text-fg transition-colors";
  const iconClass = dark ? "flex-shrink-0 text-white/50" : "flex-shrink-0 text-stone";

  return (
    <div className={`space-y-4 ${dark ? "flex flex-col items-center" : ""}`}>
      <a href={`tel:${PHONE.replace(/-/g, "")}`} className={textClass}>
        <Phone size={16} className={iconClass} />
        <span className="text-sm" dir="ltr">{PHONE}</span>
      </a>

      <a href={`mailto:${EMAIL}`} className={textClass}>
        <Mail size={16} className={iconClass} />
        <span className="text-sm" dir="ltr">{EMAIL}</span>
      </a>

      <a
        href={`https://wa.me/${WHATSAPP_NUM}`}
        target="_blank"
        rel="noopener noreferrer"
        className={textClass}
      >
        <MessageCircle size={16} className={iconClass} />
        <span className="text-sm">שליחת הודעה בוואטסאפ</span>
      </a>
    </div>
  );
}
