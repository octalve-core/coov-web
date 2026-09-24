import Link from "next/link";
import { navigation } from "@/config/navigation";

export function Navigation() {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
      {navigation.map((item) => {
        if (item.kind === "link") {
          return (
            <Link
              key={item.label}
              className="text-sm font-medium text-white/80 transition hover:text-white"
              href={item.href}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <div className="group relative" key={item.label}>
            <button
              className="min-h-11 text-sm font-medium text-white/80 transition hover:text-white"
              type="button"
            >
              {item.label} <span aria-hidden>⌄</span>
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 min-w-52 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#211529] p-2 opacity-0 shadow-2xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {item.children.map((child) => (
                <Link
                  className="block rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/10 hover:text-white"
                  href={child.href}
                  key={child.label}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
