import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-275 px-4 md:px-6 xl:px-0 ${className}`}>
      {children}
    </div>
  );
}
