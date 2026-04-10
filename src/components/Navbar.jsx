"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-[3px] w-full z-[100] bg-white border-b border-border">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            {[...Array(24)].map((_, i) => {
              const x2 = 12 + 10 * Math.cos((i * 15 * Math.PI) / 180);
              const y2 = 12 + 10 * Math.sin((i * 15 * Math.PI) / 180);
              return (
                <line
                  key={i}
                  x1="12"
                  y1="12"
                  x2={x2.toFixed(3)}
                  y2={y2.toFixed(3)}
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>
          <div className="text-2xl font-extrabold tracking-tight text-primary font-headline">
            <Link href="/">CivicEase</Link>
          </div>
        </div>
        
        <div className="hidden md:flex gap-10 items-center">
          <Link className="text-primary font-bold hover:text-secondary border-b-2 border-secondary pb-1 font-headline text-sm uppercase tracking-widest transition-all" href="/">Platform</Link>
          <Link className="text-text-muted hover:text-primary transition-colors font-headline text-sm uppercase tracking-widest" href="/solutions">Solutions</Link>
          <Link className="text-text-muted hover:text-primary transition-colors font-headline text-sm uppercase tracking-widest" href="/governance">Governance</Link>
          <Link className="text-text-muted hover:text-primary transition-colors font-headline text-sm uppercase tracking-widest" href="/resources">Resources</Link>
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <button className="px-5 py-2 text-text-muted hover:text-primary transition-all font-headline font-bold text-sm">Sign In</button>
          <button className="px-8 py-3 bg-secondary text-white rounded-md font-headline font-bold text-sm hover:bg-secondary/90 transition-colors shadow-md">Get Started</button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden p-1 text-primary"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 rounded bg-current transition-all duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 rounded bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 rounded bg-current transition-all duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden bg-white">
          <div className="flex flex-col gap-4 px-8 py-6">
            <Link className="text-text-muted hover:text-primary transition-colors font-headline text-sm uppercase tracking-widest" href="#">Platform</Link>
            <Link className="text-text-muted hover:text-primary transition-colors font-headline text-sm uppercase tracking-widest" href="#">Solutions</Link>
            <Link className="text-text-muted hover:text-primary transition-colors font-headline text-sm uppercase tracking-widest" href="#">Governance</Link>
            <Link className="text-text-muted hover:text-primary transition-colors font-headline text-sm uppercase tracking-widest" href="#">Resources</Link>
            <div className="mt-4 flex flex-col gap-3">
              <button className="w-full px-5 py-2 text-text-muted hover:text-primary transition-all font-headline font-bold text-sm text-left">Sign In</button>
              <button className="w-full px-8 py-3 bg-secondary text-white rounded-md font-headline font-bold text-sm hover:bg-secondary/90 transition-colors shadow-md">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
