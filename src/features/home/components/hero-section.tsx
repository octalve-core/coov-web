// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Container } from "@/components/ui/container";
// import { Heading } from "@/components/ui/heading";
// import { Text } from "@/components/ui/text";
// export function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#160D20] pb-16 pt-12 sm:pt-16 lg:min-h-[760px] lg:pb-20 lg:pt-24">
//       <div className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[#7035E7]/25 blur-3xl" />
//       <Container>
//         <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr]">
//           <div className="relative z-10">
//             <Badge className="border-[#C79B52]/40 text-[#C79B52]">
//               COOV — Move Value.
//             </Badge>
//             <Heading variant="display" className="mt-6 max-w-[760px]">
//               Money moves better with{" "}
//               <span className="text-[#8F5BFF]">COOV.</span>
//             </Heading>
//             <Text variant="large" className="mt-6 max-w-xl text-white/65">
//               Send money, pay bills, save, and manage everyday payments from one
//               simple app.
//             </Text>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <Button href="/download">Get COOV</Button>
//               <Button href="/features" variant="outline">
//                 Explore features
//               </Button>
//             </div>
//           </div>
//           <div className="relative min-h-[430px] overflow-hidden rounded-[36px] border border-white/10 lg:min-h-[570px]">
//             <Image
//               src="/images/home/hero-payment-scene.webp"
//               alt="Conceptual COOV payment experience"
//               fill
//               sizes="(min-width: 1024px) 54vw, 100vw"
//               priority
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#160D20] via-transparent to-transparent" />
//             <Image
//               src="/app/mockups/home-dashboard.webp"
//               alt="COOV app conceptual dashboard"
//               width={720}
//               height={1100}
//               className="absolute -bottom-32 right-3 w-[45%] rotate-[4deg] rounded-[32px] shadow-2xl sm:right-10"
//             />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#160D20] sm:min-h-[720px] lg:min-h-[760px]">
      {/* Background image slides */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/home/hero-payment-scene1.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="coov-hero-slide coov-hero-slide-1 object-cover object-center"
        />

        <Image
          src="/images/home/hero-payment-scene2.webp"
          alt=""
          fill
          sizes="100vw"
          className="coov-hero-slide coov-hero-slide-2 object-cover object-center"
        />

        <Image
          src="/images/home/hero-payment-scene3.webp"
          alt=""
          fill
          sizes="100vw"
          className="coov-hero-slide coov-hero-slide-3 object-cover object-center"
        />
      </div>

      {/* Global deep COOV overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[#160D20]/55"
      />

      {/* Stronger dark overlay where text sits */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 z-[2]
          bg-[linear-gradient(90deg,rgba(22,13,32,0.99)_0%,rgba(22,13,32,0.98)_30%,rgba(22,13,32,0.94)_48%,rgba(22,13,32,0.78)_64%,rgba(22,13,32,0.42)_82%,rgba(22,13,32,0.18)_100%)]
        "
      />

      {/* Bottom dark fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[3] h-[38%] bg-gradient-to-t from-[#160D20] via-[#160D20]/70 to-transparent"
      />

      {/* Hero content */}
      <Container className="relative z-10 flex min-h-[680px] items-center py-20 sm:min-h-[720px] sm:py-24 lg:min-h-[760px]">
        <div className="w-full max-w-[780px]">
          <Badge className="border-[#C79B52]/40 bg-[#160D20]/35 text-[#C79B52] backdrop-blur-sm">
            COOV — Move Value.
          </Badge>

          <Heading variant="display" className="mt-6 max-w-[760px] text-white">
            Money moves <br /> better with{" "}
            <span className="whitespace-nowrap text-[#8F5BFF]">
              <span className="sr-only">COOV.</span>

              <span
                aria-hidden="true"
                className="coov-animated-word inline-flex"
              >
                <span className="coov-letter coov-letter-1">C</span>
                <span className="coov-letter coov-letter-2">O</span>
                <span className="coov-letter coov-letter-3">O</span>
                <span className="coov-letter coov-letter-4">V.</span>
              </span>
            </span>
          </Heading>

          <Text variant="large" className="mt-6 max-w-xl text-white/65">
            Send money, pay bills, save, and manage everyday payments from one
            simple app.
          </Text>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/download">Get COOV</Button>

            <Button href="/features" variant="outline">
              Explore features
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-5">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
              Send
            </span>

            <span className="h-1 w-1 rounded-full bg-[#C79B52]" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
              Pay
            </span>

            <span className="h-1 w-1 rounded-full bg-[#C79B52]" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
              Save
            </span>

            <span className="h-1 w-1 rounded-full bg-[#C79B52]" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
              Move Value
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
