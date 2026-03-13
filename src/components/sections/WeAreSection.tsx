import Image from "next/image";
import Container from "../layout/Container";

export default function WeAreSection() {
  return (
    <section className="overflow-hidden bg-primary py-14 text-white md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-white/60 uppercase">
            We are
          </p>
          <h2 className="mt-1 text-3xl font-bold text-white md:text-4xl">
            Invest4Kids
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/80">
            Get a glimpse into our office in Kiel and see how we support parents
            with expertise and passion.
          </p>
          <p className="mt-1.5 text-xs text-white/50">
            Our location: Fabrikstra&szlig;e 7, 24103 Kiel
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl">
          <Image
            src="/images/heroes/group-photo.webp"
            alt="The Invest4Kids team in Kiel"
            width={1140}
            height={500}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1200px) 100vw, 1140px"
          />
        </div>
      </Container>
    </section>
  );
}
