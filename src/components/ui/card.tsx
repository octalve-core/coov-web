import { cn } from "@/lib/cn";
export function Card({children,className}:React.PropsWithChildren<{className?:string}>){return <div className={cn("overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045]",className)}>{children}</div>}
