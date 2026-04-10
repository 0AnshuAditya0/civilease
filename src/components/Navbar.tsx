"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-xl border-b border-skeleton/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="h-8 w-32 animate-pulse rounded-lg bg-skeleton" />

        <div className="hidden items-center gap-6 md:flex">
          <div className="h-4 w-16 animate-pulse rounded-md bg-skeleton" />
          <div className="h-4 w-16 animate-pulse rounded-md bg-skeleton" />
          <div className="h-4 w-16 animate-pulse rounded-md bg-skeleton" />
          <div className="h-8 w-20 animate-pulse rounded-full bg-skeleton-light" />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 rounded bg-skeleton-light transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-skeleton-light transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-skeleton-light transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-64 border-t border-skeleton/20" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-5">
          <div className="h-4 w-24 animate-pulse rounded-md bg-skeleton" />
          <div className="h-4 w-20 animate-pulse rounded-md bg-skeleton" />
          <div className="h-4 w-28 animate-pulse rounded-md bg-skeleton" />
          <div className="h-8 w-24 animate-pulse rounded-full bg-skeleton-light" />
        </div>
      </div>
    </nav>
  );
}
