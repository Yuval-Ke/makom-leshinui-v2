import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "מקום לשינוי — מרפאה להיפנוזה",
  description:
    "טיפול בהיפנוזה למצבים רפואיים ונפשיים מגוונים. אתר המרפאה להיפנוזה מקום לשינוי.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} h-full`}>
      <body className="font-sans bg-bg text-fg antialiased min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
