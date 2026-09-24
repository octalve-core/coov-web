import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AppDownloadCta } from "@/components/shared/app-download-cta";
export function DownloadSection() {
  return (
    <Section className="bg-[#160D20]">
      <Container>
        <AppDownloadCta />
      </Container>
    </Section>
  );
}
