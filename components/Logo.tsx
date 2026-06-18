import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 80, className = "" }: LogoProps) {
  return (
    <Image
      src="/Pictures/Logo.png"
      alt="מקום לשינוי — מרפאה להיפנוזה"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
