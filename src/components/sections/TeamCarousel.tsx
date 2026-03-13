"use client";

import Image from "next/image";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const teamMembers = [
  { name: "Marina", image: "/images/team/marina.webp" },
  { name: "Patrick", image: "/images/team/patrick.webp" },
  { name: "Sophie", image: "/images/team/sophie.webp" },
  { name: "Felix", image: "/images/team/felix.webp" },
  { name: "Oscar", image: "/images/team/oscar.webp" },
  { name: "Laila", image: "/images/team/laila.webp" },
  { name: "Bogdan", image: "/images/team/bogdan.webp" },
  { name: "Torben", image: "/images/team/torben.webp" },
  { name: "Alex", image: "/images/team/alex.webp" },
  { name: "Susanna", image: "/images/team/susanna.webp" },
  { name: "Tony", image: "/images/team/tony.webp" },
  { name: "Janosch", image: "/images/team/janosch.webp" },
  { name: "Till", image: "/images/team/till.webp" },
  { name: "Mallik", image: "/images/team/mallik.webp" },
  { name: "Glory", image: "/images/team/glory.webp" },
  { name: "Finn", image: "/images/team/finn.webp" },
  { name: "Sofia", image: "/images/team/sofia.webp" },
  { name: "Bastian", image: "/images/team/bastian.webp" },
];

export default function TeamCarousel() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHeading title="Your Invest4Kids team" />

        {/* Scrollable on mobile, wrapped grid on desktop */}
        <div className="overflow-x-auto pb-2 md:overflow-visible">
          <div className="flex gap-5 md:flex-wrap md:justify-center">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex w-[88px] flex-shrink-0 flex-col items-center text-center md:w-[100px]"
              >
                <div className="relative mb-2 h-[72px] w-[72px] overflow-hidden rounded-full bg-bg-light-blue md:h-[88px] md:w-[88px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="88px"
                  />
                </div>
                <span className="text-xs font-medium text-primary md:text-sm">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-2 text-center text-xs text-text-muted">
          Expert for children&apos;s investments
        </p>

        <div className="mt-8 text-center">
          <Button href="/team" variant="outline" className="text-sm">
            Learn more about the team
          </Button>
        </div>
      </Container>
    </section>
  );
}
