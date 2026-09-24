import { cn } from "@/lib/cn";
export function Badge({children,className}:React.PropsWithChildren<{className?:string}>){return <span className={cn("inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",className)}>{children}</span>}
