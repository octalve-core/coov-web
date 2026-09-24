import { cn } from "@/lib/cn";
const styles={large:"text-lg leading-8 sm:text-xl",body:"text-base leading-7",small:"text-sm leading-6",caption:"text-xs font-semibold uppercase tracking-[0.18em]"} as const;
export function Text({variant="body",as="p",className,children}:React.PropsWithChildren<{variant?:keyof typeof styles;as?:"p"|"span"|"div";className?:string}>){const Tag=as;return <Tag className={cn(styles[variant],className)}>{children}</Tag>}
