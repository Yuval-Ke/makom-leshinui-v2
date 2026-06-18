interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
}

export default function SectionTitle({
  children,
  className = "",
  as: Tag = "h2",
  id,
}: SectionTitleProps) {
  return (
    <Tag
      id={id}
      className={`text-2xl md:text-3xl font-bold tracking-tight text-fg mb-6 ${className}`}
    >
      {children}
    </Tag>
  );
}
