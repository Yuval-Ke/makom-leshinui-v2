interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`max-w-2xl mx-auto px-6 md:px-8 w-full ${className}`}>
      {children}
    </div>
  );
}
