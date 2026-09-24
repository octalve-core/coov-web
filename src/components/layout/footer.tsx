// import Image from "next/image";
// import Link from "next/link";
// import { Container } from "@/components/ui/container";
// const groups = [
//   {
//     title: "Explore",
//     links: [
//       ["Personal", "/personal"],
//       ["Business", "/business"],
//       ["Features", "/features"],
//       ["Savings", "/savings"],
//     ],
//   },
//   {
//     title: "Company",
//     links: [
//       ["About COOV", "/about"],
//       ["Security", "/security"],
//       ["Help", "/help"],
//       ["Download", "/download"],
//     ],
//   },
//   {
//     title: "Legal",
//     links: [
//       ["Privacy", "/legal/privacy"],
//       ["Terms", "/legal/terms"],
//       ["Cookies", "/legal/cookies"],
//     ],
//   },
// ] as const;
// export function Footer() {
//   return (
//     <footer className="border-t border-white/10 bg-[#110918] py-14">
//       <Container>
//         <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
//           <div>
//             <Image
//               src="/brand/logo/coov-logo-on-dark.png"
//               alt="COOV — Move Value."
//               width={210}
//               height={52}
//               className="h-auto w-[180px]"
//             />
//             <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
//               COOV is a financial technology product of COOV Technologies Ltd.
//               Built to make everyday money movement feel simpler.
//             </p>
//           </div>
//           <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
//             {groups.map((group) => (
//               <div key={group.title}>
//                 <h2 className="text-sm font-semibold text-white">
//                   {group.title}
//                 </h2>
//                 <div className="mt-4 space-y-3">
//                   {group.links.map(([label, href]) => (
//                     <Link
//                       className="block text-sm text-white/55 hover:text-white"
//                       href={href}
//                       key={href}
//                     >
//                       {label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/45">
//           © {new Date().getFullYear()} COOV Technologies Ltd. COOV — Move Value.
//         </div>
//       </Container>
//     </footer>
//   );
// }

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";

const groups = [
  {
    title: "Explore",
    links: [
      ["Personal", "/personal"],
      ["Business", "/business"],
      ["Features", "/features"],
      ["Savings", "/savings"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About COOV", "/about"],
      ["Security", "/security"],
      ["Help", "/help"],
      ["Download", "/download"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy", "/legal/privacy"],
      ["Terms", "/legal/terms"],
      ["Cookies", "/legal/cookies"],
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#110918]">
      <Container>
        {/* Main footer content */}
        <div className="py-20 sm:py-24 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_1.85fr] lg:gap-20 xl:gap-28">
            {/* Brand column */}
            <div className="max-w-md">
              <Image
                src="/brand/logo/coov-logo-on-dark.png"
                alt="COOV — Move Value."
                width={210}
                height={52}
                className="h-auto w-[180px] sm:w-[190px]"
              />

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/55 sm:text-[15px]">
                COOV is a financial technology product of COOV Technologies Ltd.
                Built to make everyday money movement feel simpler.
              </p>
            </div>

            {/* Navigation groups */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-14 sm:grid-cols-3 lg:gap-x-14 xl:gap-x-20">
              {groups.map((group) => (
                <div key={group.title}>
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C79B52]">
                    {group.title}
                  </h2>

                  <div className="mt-6 space-y-4">
                    {group.links.map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        className="block w-fit text-sm text-white/60 transition-colors duration-200 hover:text-white"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-white/10" />

        {/* Bottom legal row */}
        <div className="flex flex-col gap-4 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} COOV Technologies Ltd. COOV — Move Value.</p>

          <p className="shrink-0">
            Powered by{" "}
            <span className="font-medium text-white/65">Octalve</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
