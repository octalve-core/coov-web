import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
export function AppShowcaseSection() {
  const apps = ["home-dashboard", "send-money", "bills", "savings", "business"];
  return (
    <Section className="overflow-hidden bg-[#F7F4EF] text-[#160D20]">
      <Container>
        <SectionHeading
          eyebrow="Inside COOV"
          title="A product that keeps the important things close."
          body="These conceptual previews show the visual direction while the production mobile experience is completed in its separate workstream."
        />
        <div className="mt-10 flex gap-4 overflow-hidden pb-6">
          {apps.map((name, i) => (
            <Image
              key={name}
              src={`/app/mockups/${name}.webp`}
              alt={`COOV conceptual app preview ${i + 1}`}
              width={720}
              height={1100}
              className="w-[220px] shrink-0 rounded-[28px] border border-[#160D20]/10 shadow-xl sm:w-[260px] lg:w-[300px]"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
