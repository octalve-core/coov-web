import { readFileSync } from "node:fs";import { describe,expect,it } from "vitest";
const read=(p:string)=>readFileSync(p,"utf8");
describe("COOV design system",()=>{it("contains the exact Mayport-style container contract",()=>{expect(read("src/components/ui/container.tsx")).toContain("mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8")});it("defines every authoritative COOV color token",()=>{const css=read("src/app/globals.css");for(const hex of ["#F7F4EF","#C79B52","#7035E7","#5821B3","#160D20"])expect(css.toUpperCase()).toContain(hex)})});
