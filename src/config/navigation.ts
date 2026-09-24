import type { NavigationItem } from "@/types/navigation";

export const navigation: readonly NavigationItem[] = [
  { kind: "link", label: "Personal", href: "/personal" },
  { kind: "link", label: "Business", href: "/business" },
  {
    kind: "group",
    label: "Features",
    children: [
      { kind: "link", label: "All features", href: "/features" },
      { kind: "link", label: "Savings", href: "/savings" },
      { kind: "link", label: "Bills & Payments", href: "/bills-and-payments" },
      { kind: "link", label: "Security", href: "/security" },
    ],
  },
  {
    kind: "group",
    label: "Company",
    children: [{ kind: "link", label: "About COOV", href: "/about" }],
  },
  { kind: "link", label: "Help", href: "/help" },
];
