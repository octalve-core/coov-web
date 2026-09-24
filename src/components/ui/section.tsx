import { cn } from "@/lib/cn";
type SectionProps = React.PropsWithChildren<{ className?: string; id?: string; as?: "section" | "div" }>;
export function Section({ className, children, id, as = "section" }: SectionProps) { const Tag = as; return <Tag id={id} className={cn("py-16 md:py-20 lg:py-24", className)}>{children}</Tag>; }
