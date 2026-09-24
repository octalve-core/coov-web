import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
export function SavingsSection() {
  return (
    <Section className="bg-[#160D20]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 relative overflow-hidden rounded-[34px] border border-[#C79B52]/25 bg-[#201526] p-8 lg:order-1">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#C79B52]/15 blur-3xl" />
            <Image
              src="/app/mockups/savings.webp"
              alt="COOV savings conceptual screen"
              width={720}
              height={1100}
              className="relative mx-auto w-[58%] rounded-[30px]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Savings"
              title="Put money aside for what matters."
              body="Create room for goals and plans with a savings experience built around clarity and consistency."
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
