import type { MetadataRoute } from "next";import { siteConfig } from "@/config/site";
export const publicRoutes=["/","/personal","/business","/features","/savings","/bills-and-payments","/security","/about","/help","/download","/legal/privacy","/legal/terms","/legal/cookies"] as const;
export default function sitemap():MetadataRoute.Sitemap{return publicRoutes.map(path=>({url:new URL(path,siteConfig.baseUrl).toString(),changeFrequency:path==="/"?"weekly":"monthly",priority:path==="/"?1:0.7}))}
