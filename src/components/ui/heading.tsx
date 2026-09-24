import { cn } from "@/lib/cn";
const styles = { display:"text-5xl font-semibold leading-[0.93] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]", h1:"text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl", h2:"text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl", h3:"text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl", h4:"text-xl font-semibold leading-tight sm:text-2xl" } as const;
type Props = React.PropsWithChildren<{variant?: keyof typeof styles; as?: "h1"|"h2"|"h3"|"h4"|"p"; className?: string}>;
export function Heading({variant="h2",as,className,children}:Props){const Tag=as??(variant==="display"?"h1":variant);return <Tag className={cn(styles[variant],className)}>{children}</Tag>}
