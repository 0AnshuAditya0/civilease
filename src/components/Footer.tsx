import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900/50 mt-auto">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <path d="M14 2v6h6" />
              </svg>
            </div>
            <span className="text-base font-bold text-white">CivicEase</span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Making government documents understandable for every Indian citizen.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Product</p>
          {["Features", "How It Works", "Upload Document", "Languages"].map((l) => (
            <Link key={l} href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              {l}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Legal</p>
          {["Privacy Policy", "Terms of Service", "Contact Us", "About"].map((l) => (
            <Link key={l} href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              {l}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="text-xs text-slate-600">© 2024 CivicEase. Built for 500M+ citizens.</p>
          <div className="flex gap-3">
            {["tw", "gh", "li"].map((s) => (
              <Link key={s} href="#" className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-500 hover:bg-slate-700 hover:text-white transition-colors">
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
