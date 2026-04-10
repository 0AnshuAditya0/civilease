import Link from "next/link";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" />
      </svg>
    ),
    title: "Plain Language Summaries",
    desc: "Complex legalese converted to simple, actionable English or your regional language",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M6 9v3a1 1 0 0 0 1 1h4" />
        <path d="M18 9v3a1 1 0 0 1-1 1h-4" />
        <path d="M12 13v2" />
      </svg>
    ),
    title: "Visual Workflows",
    desc: "Step-by-step flowcharts showing exactly what to do, who to meet, what to bring",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
    title: "Voice Guidance",
    desc: "Hear the guidance read aloud — accessible to every citizen regardless of literacy",
  },
];

const steps = [
  {
    num: "01",
    title: "Upload your document",
    desc: "PDF or paste text directly — any government notice, form, or letter",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "AI analyzes and simplifies",
    desc: "Our AI reads, understands, and breaks it down into plain language instantly",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Get your action plan",
    desc: "Receive step-by-step guidance, required documents, and authority contacts in your language",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-indigo-600/8 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/6 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">

          {/* Left: text */}
          <div className="flex max-w-2xl flex-col gap-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              <span className="text-xs font-medium text-indigo-300 tracking-wide">AI-powered Document Intelligence</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Understand Any Government Document —{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                Instantly
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Upload any legal notice, government form, or administrative document and get plain-language guidance, step-by-step actions, and visual workflows in your language.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#upload"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/25"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                Upload Document
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-3.5 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
              >
                See How It Works
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: floating document card */}
          <div className="relative shrink-0">
            <div className="absolute -inset-8 rounded-3xl bg-indigo-600/15 blur-3xl" />
            <div className="absolute -inset-4 rounded-2xl bg-indigo-500/8 blur-xl" />
            <div className="glass-card relative w-64 rounded-2xl p-6 lg:w-72 shadow-2xl shadow-indigo-900/40 ring-1 ring-indigo-500/20">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-9 w-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Notice_2024.pdf</p>
                  <p className="text-[10px] text-slate-500">Income Tax Department</p>
                </div>
              </div>

              <div className="mb-4 space-y-1.5">
                <div className="h-2.5 w-full rounded-full bg-slate-700/60" />
                <div className="h-2.5 w-5/6 rounded-full bg-slate-700/60" />
                <div className="h-2.5 w-4/6 rounded-full bg-slate-700/60" />
              </div>

              <div className="h-px w-full bg-slate-700/50 mb-4" />

              <div className="flex items-center gap-2 mb-4">
                <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                </div>
                <span className="text-[11px] text-green-400 font-medium">Analyzed — Action required</span>
              </div>

              <div className="space-y-2 rounded-lg bg-indigo-600/10 border border-indigo-500/20 p-3">
                <p className="text-[10px] font-semibold text-indigo-300 uppercase tracking-wider">Summary</p>
                <div className="space-y-1">
                  <div className="h-2 w-full rounded bg-slate-600/40" />
                  <div className="h-2 w-3/4 rounded bg-slate-600/40" />
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 h-12 w-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact bar */}
      <section className="relative overflow-hidden border-y border-indigo-500/10 bg-gradient-to-r from-indigo-950/50 via-indigo-900/40 to-indigo-950/50 py-5 px-6">
        <p className="text-center text-sm font-medium text-slate-300 sm:text-base">
          <span className="text-white font-bold">500M+ Indians</span> interact with government documents they don&apos;t understand —{" "}
          <span className="font-semibold text-indigo-400">CivicEase changes that</span>
        </p>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">take action</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              From confusing government paperwork to clear, actionable guidance
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass-card flex flex-col gap-5 rounded-2xl p-8 hover:border-indigo-500/30 transition-colors duration-200"
              >
                <div className="h-12 w-12 rounded-xl bg-indigo-600/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-slate-800 px-6 py-24 bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              How it{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">works</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Three simple steps from confusion to clarity
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 relative">
            <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-indigo-500/30 via-indigo-500/50 to-indigo-500/30" />

            {steps.map((s) => (
              <div key={s.num} className="glass-card relative flex flex-col items-center gap-5 rounded-2xl p-8 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-600/40">
                  {s.num}
                </div>
                <div className="h-16 w-16 rounded-2xl bg-indigo-600/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mt-4">
                  {s.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload" className="border-t border-slate-800 px-6 py-24">
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Try it{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">now</span>
            </h2>
            <p className="text-slate-400 text-lg">Drop your document and get instant clarity</p>
          </div>

          <label className="glass-card group w-full cursor-pointer rounded-2xl border-2 border-dashed border-indigo-500/25 p-16 hover:border-indigo-500/50 hover:bg-indigo-600/5 transition-all duration-200 flex flex-col items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-indigo-600/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600/25 transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-slate-300 font-medium">
                Drag & drop your PDF here, or{" "}
                <span className="text-indigo-400 underline underline-offset-4">browse files</span>
              </p>
              <p className="mt-1 text-sm text-slate-500">Supports PDF, JPG, PNG up to 10MB</p>
            </div>
            <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
          </label>

          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <select className="glass-card flex-1 h-12 rounded-xl px-4 text-sm text-slate-400 bg-transparent border border-slate-700 hover:border-slate-600 focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer transition-colors">
              <option value="">Select output language...</option>
              <option>English</option>
              <option>Hindi — हिंदी</option>
              <option>Tamil — தமிழ்</option>
              <option>Telugu — తెలుగు</option>
              <option>Bengali — বাংলা</option>
              <option>Marathi — मराठी</option>
              <option>Gujarati — ગુજરાતી</option>
              <option>Kannada — ಕನ್ನಡ</option>
            </select>
            <button className="h-12 px-8 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors shadow-lg shadow-indigo-600/25">
              Analyze Document
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
