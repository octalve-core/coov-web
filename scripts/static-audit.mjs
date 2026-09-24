import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";
const errors=[];
const requiredAssets=["public/brand/logo/coov-icon.png","public/brand/logo/coov-logo-on-dark.png","public/brand/logo/coov-logo-on-light.png","docs/design-references/coov-color-reference.png","public/social/og-default.png"];
for(const asset of requiredAssets){if(!existsSync(asset)||statSync(asset).size===0)errors.push(`Missing/empty asset: ${asset}`)}
const container=readFileSync("src/components/ui/container.tsx","utf8");if(!container.includes("mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8"))errors.push("Container contract drifted");
const css=readFileSync("src/app/globals.css","utf8").toUpperCase();for(const color of ["#F7F4EF","#C79B52","#7035E7","#5821B3","#160D20"])if(!css.includes(color))errors.push(`Missing COOV color ${color}`);
function walk(dir){return readdirSync(dir).flatMap(name=>{const path=join(dir,name);return statSync(path).isDirectory()?walk(path):[path]})}
const source=walk("src").filter(f=>[".ts",".tsx"].includes(extname(f))).map(f=>readFileSync(f,"utf8")).join("\n");
if(/src\s*=\s*["'`]https?:\/\//.test(source))errors.push("Remote image source found");
for(const pattern of [/CBN\s+licensed/i,/NDIC\s+insured/i,/\b100k\+?\s+users\b/i,/\b5[- ]star\b/i,/guaranteed\s+returns?/i])if(pattern.test(source))errors.push(`Unverified fintech claim: ${pattern}`);
for(const file of walk("public"))if(statSync(file).size===0)errors.push(`Empty public asset: ${file}`);
if(errors.length){console.error(errors.join("\n"));process.exit(1)}console.log("COOV static audit passed.");
