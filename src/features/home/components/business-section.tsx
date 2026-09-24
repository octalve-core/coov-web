import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
export function BusinessSection() {
  return (
    <Section className="relative overflow-hidden bg-[#0D0912]">
      <Container>
        <div className="relative min-h-[560px] overflow-hidden rounded-[38px] border border-white/10">
          <Image
            src="/images/home/merchant-scene.webp"
            alt="Conceptual merchant using COOV"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0912] via-[#0D0912]/85 to-transparent" />
          <div className="absolute inset-0 flex items-center p-7 sm:p-10 lg:p-16">
            <div>
              <SectionHeading
                eyebrow="COOV for Business"
                title="Get paid. Stay organised. Keep moving."
                body="A business experience for collecting payments, following activity, and keeping important money movement visible."
              />
              <div className="mt-7">
                <Button href="/business">Explore COOV for Business</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
