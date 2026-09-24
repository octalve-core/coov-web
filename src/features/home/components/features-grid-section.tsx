import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeatureCard } from "@/components/shared/feature-card";
export function FeaturesGridSection() {
  return (
    <Section className="bg-[#160D20]">
      <Container>
        <SectionHeading
          eyebrow="Explore COOV"
          title="Everyday money, brought together."
          body="A connected set of tools for moving, receiving, paying, saving, and managing value."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <FeatureCard
            title="Send & receive money"
            body="Move money between people or to bank accounts through a clear, guided flow."
            className="bg-[linear-gradient(135deg,#7035E7,#321562)] lg:col-span-7"
          >
            <Image
              src="/app/mockups/send-money.webp"
              alt="COOV send money interface"
              width={720}
              height={1100}
              className="absolute -bottom-40 right-4 w-[43%] rotate-3 rounded-[28px] shadow-2xl"
            />
          </FeatureCard>
          <FeatureCard
            title="Pay bills"
            body="Keep airtime, data, electricity and TV payments close."
            className="bg-[#5821B3] lg:col-span-5"
          >
            <Image
              src="/app/mockups/bills.webp"
              alt="COOV bills interface"
              width={720}
              height={1100}
              className="absolute -bottom-48 right-0 w-[50%] rotate-6 rounded-[28px]"
            />
          </FeatureCard>
          <FeatureCard
            title="Save with purpose"
            body="Create room for goals, plans, and what comes next."
            className="bg-[#F7F4EF] text-[#160D20] lg:col-span-4"
          >
            <Image
              src="/app/mockups/savings.webp"
              alt="COOV savings interface"
              width={720}
              height={1100}
              className="absolute -bottom-52 right-2 w-[52%] -rotate-3 rounded-[28px]"
            />
          </FeatureCard>
          <FeatureCard
            title="Virtual account"
            body="Receive money through a simple account experience designed around clarity."
            className="bg-[#24142F] lg:col-span-3"
          >
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[.2em] text-white/45">
                Account details
              </p>
              <p className="mt-4 text-2xl font-semibold">•••• •••• ••</p>
              <p className="mt-2 text-sm text-white/45">
                Illustrative interface
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="COOV for Business"
            body="Collect payments, see activity, and keep business money organised."
            className="bg-[#251A20] lg:col-span-5"
          >
            <Image
              src="/images/home/merchant-scene.webp"
              alt="Conceptual COOV business payment scene"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160D20] to-transparent" />
          </FeatureCard>
        </div>
      </Container>
    </Section>
  );
}
