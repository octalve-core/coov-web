import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
export function BillsSection() {
  return (
    <Section className="bg-[#7035E7]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Bills & payments"
            title="Everyday payments. One place."
            body="Handle airtime, data, electricity and TV subscriptions from the same COOV experience."
          />
          <div className="relative mx-auto w-full max-w-[540px] rounded-[36px] bg-[#160D20] p-6 shadow-2xl">
            <Image
              src="/app/mockups/bills.webp"
              alt="COOV bills conceptual screen"
              width={720}
              height={1100}
              className="mx-auto h-auto w-[55%] rounded-[30px]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
