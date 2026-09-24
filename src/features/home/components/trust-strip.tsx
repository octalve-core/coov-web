import { Container } from "@/components/ui/container";
const items = [
  "Built for everyday payments",
  "Identity-first account setup",
  "Secure transaction flows",
  "Personal and business experiences",
];
export function TrustStrip() {
  return (
    <div className="border-y border-white/10 bg-[#1B1125]">
      <Container>
        <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {items.map((item) => (
            <div
              className="px-4 py-5 text-sm font-semibold text-white/75 sm:px-6"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
