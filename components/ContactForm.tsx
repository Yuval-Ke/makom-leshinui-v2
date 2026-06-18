"use client";

import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-muted border border-border p-8 text-center">
        <p className="font-semibold text-fg mb-1">תודה רבה!</p>
        <p className="text-muted-fg text-sm">הודעתך התקבלה. נחזור אליך בהקדם.</p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-fg placeholder-muted-fg focus:outline-none focus:ring-1 focus:ring-stone/50 focus:border-stone transition";

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-fg mb-1.5">שם</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="שם מלא" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-fg mb-1.5">טלפון</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="050-0000000" dir="ltr" className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-fg mb-1.5">אימייל</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" dir="ltr" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-fg mb-1.5">נושא</label>
        <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="במה נוכל לעזור?" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-fg mb-1.5">ההודעה שלך</label>
        <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="כתבו כאן את פנייתכם..." className={`${fieldClass} resize-none`} />
      </div>
      <button
        type="submit"
        className="px-6 py-2.5 bg-fg text-bg text-sm font-medium rounded-lg hover:bg-fg/90 transition-colors focus:outline-none focus:ring-2 focus:ring-fg/20"
      >
        שליחה
      </button>
    </form>
  );
}
