import { readdirSync,readFileSync,statSync } from "node:fs";import { join } from "node:path";import { describe,expect,it } from "vitest";
function walk(dir:string):string[]{return readdirSync(dir).flatMap(name=>{const path=join(dir,name);return statSync(path).isDirectory()?walk(path):[path]})}
describe("image policy",()=>{it("does not hotlink production image sources",()=>{const files=walk("src").filter(file=>/\.(ts|tsx)$/.test(file));const offenders=files.filter(file=>/src\s*=\s*["'`]https?:\/\//.test(readFileSync(file,"utf8")));expect(offenders).toEqual([])})});
