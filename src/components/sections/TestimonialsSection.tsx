import Image from "next/image";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Invest4Kids was always there to offer me advice and support.",
    name: "Laura",
    role: "Mother of a son",
    image: "/images/testimonials/laura.webp",
  },
  {
    quote:
      "A well-thought-out way to invest wisely in funds and ETFs for children.",
    name: "Oliver",
    role: "Father of two children",
    image: "/images/testimonials/oliver.webp",
  },
  {
    quote:
      "From the outset, the consultation felt professional and positive.",
    name: "Yvonne",
    role: "Mother of 2 children",
    image: "/images/testimonials/yvonne.webp",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-bg-cream/50 py-16 md:py-24">
      <Container>
        <SectionHeading
          title="How other parents experienced our consultations"
          subtitle="Every family has its own unique situation, and we take this into account in our counseling."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border/40 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-5 flex-1">
                <svg
                  className="mb-2 h-7 w-7 text-primary-light/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[15px] leading-relaxed text-text-dark">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-border/40 pt-4">
                <div className="relative h-11 w-11 overflow-hidden rounded-full bg-bg-light-blue">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stars */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-4 w-4 text-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-text-muted">
            <span className="font-medium text-text-dark">4.9 stars</span> with
            over 1,000 genuine reviews on Trustpilot and Google
          </p>
        </div>

        <p className="mt-3 text-center text-sm font-medium text-primary">
          understandable, honest, individual
        </p>
      </Container>
    </section>
  );
}
