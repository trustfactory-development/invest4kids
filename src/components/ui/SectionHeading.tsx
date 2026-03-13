export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto mb-12 max-w-2xl text-center ${className}`}>
      <h2 className="text-2xl font-semibold leading-tight md:text-[32px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-text-medium md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
