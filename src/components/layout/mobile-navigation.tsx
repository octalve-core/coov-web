"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { navigation } from "@/config/navigation";
import type { NavigationLink } from "@/types/navigation";

const mobileLinks: readonly NavigationLink[] = navigation.flatMap((item) =>
  item.kind === "link" ? [item] : item.children,
);

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={id}
        className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 bg-white/5"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span aria-hidden className="text-xl">
          {open ? "×" : "☰"}
        </span>
      </button>

      {open && (
        <div
          id={id}
          className="absolute inset-x-5 top-[76px] z-50 rounded-3xl border border-white/10 bg-[#211529] p-4 shadow-2xl"
        >
          <nav aria-label="Mobile primary">
            {mobileLinks.map((item) => (
              <Link
                onClick={() => setOpen(false)}
                key={item.label}
                className="block rounded-xl px-4 py-3 text-base text-white/85 hover:bg-white/10"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            onClick={() => setOpen(false)}
            className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-[#7035E7] font-semibold"
            href="/download"
          >
            Get COOV
          </Link>
        </div>
      )}
    </div>
  );
}
