"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Upload", href: "/#upload" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
              <path d="M14 2v6h6" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">CivicEase</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
              {l.label}
            </Link>
          ))}
          <button className="rounded-full border border-slate-700 px-4 py-1.5 text-sm text-slate-300 hover:border-indigo-500 hover:text-white transition-colors duration-200">
            🌐 English
          </button>
          <Link href="/#upload" className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors duration-200">
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden p-1"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 rounded bg-slate-400 transition-all duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 rounded bg-slate-400 transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 rounded bg-slate-400 transition-all duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="py-2 text-slate-400 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <button className="rounded-full border border-slate-700 px-4 py-1.5 text-sm text-slate-300 text-left">
                🌐 English
              </button>
              <Link href="/#upload" className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white text-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
