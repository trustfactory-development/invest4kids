import Container from "../layout/Container";

const pressLogos = [
  "Handelsblatt",
  "Focus",
  "BILD",
  "FAZ",
  "Capital",
  "n-tv",
  "WirtschaftsWoche",
];

export default function KnownFrom() {
  return (
    <section className="border-t border-border/60 bg-white py-10 md:py-14">
      <Container>
        <p className="mb-6 text-center text-xs font-semibold tracking-widest text-text-muted/60 uppercase">
          Known from
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {pressLogos.map((name) => (
            <span
              key={name}
              className="select-none text-base font-bold text-border/80 transition-colors hover:text-text-muted md:text-lg"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
