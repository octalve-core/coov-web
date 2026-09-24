import Link from "next/link";
import { cn } from "@/lib/cn";
export type ButtonVariant="primary"|"light"|"outline"|"ghost";
const styles:Record<ButtonVariant,string>={primary:"bg-[#7035E7] text-white hover:bg-[#5821B3]",light:"bg-[#F7F4EF] text-[#160D20] hover:bg-white",outline:"border border-current bg-transparent hover:bg-white/10",ghost:"bg-transparent hover:bg-white/10"};
type Props={href?:string;variant?:ButtonVariant;className?:string;children:React.ReactNode;ariaLabel?:string;disabled?:boolean};
export function Button({href,variant="primary",className,children,ariaLabel,disabled}:Props){const cls=cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-50",styles[variant],className);if(href&&!disabled)return <Link aria-label={ariaLabel} className={cls} href={href}>{children}</Link>;return <button aria-label={ariaLabel} className={cls} disabled={disabled}>{children}</button>}
