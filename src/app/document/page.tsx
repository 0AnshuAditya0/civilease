import Link from "next/link";

const summaryPoints = [
  "You have received an income tax notice under Section 143(1) for Assessment Year 2023–24.",
  "The department has identified a mismatch of ₹45,200 between your filed return and Form 26AS.",
  "You are required to respond within 30 days from the date of this notice.",
  "No penalty has been imposed yet — this is a preliminary inquiry notice.",
];

const steps = [
  {
    num: 1,
    title: "Don't panic — this is a routine notice",
    detail: "Section 143(1) notices are auto-generated. No officer visited your data.",
    done: false,
  },
  {
    num: 2,
    title: "Login to the Income Tax portal",
    detail: "Go to incometax.gov.in → e-Filing → My Account → e-Proceedings",
    done: false,
  },
  {
    num: 3,
    title: "Review the mismatch details",
    detail: "Check which income source is flagged. Usually salary, bank interest, or dividends.",
    done: false,
  },
  {
    num: 4,
    title: "Submit your response online",
    detail: "If income is correct, choose 'Agree' or 'Disagree with explanation' and file your reply.",
    done: false,
  },
];

const docsRequired = [
  { icon: "📋", label: "Form 26AS — download from your bank or IT portal" },
  { icon: "📄", label: "Original ITR-V acknowledgment copy" },
  { icon: "🏦", label: "Bank statements for the assessment year" },
];

export default function DocumentResult() {
  return (
    <div className="flex flex-col gap-10 px-6 py-10">

      {/* Breadcrumb */}
      <nav className="mx-auto w-full max-w-7xl flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/" className="hover:text-slate-300 transition-colors">Documents</Link>
        <span>/</span>
        <span className="text-slate-300 font-medium truncate max-w-[200px]">Notice_2024.pdf</span>
      </nav>

      {/* Main grid */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-5">

        {/* Left column — 60% */}
        <div className="flex flex-col gap-6 lg:col-span-3">

          {/* Document type badge + title */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 mb-3">
              <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-medium text-amber-300">Action Required within 30 days</span>
            </div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">Income Tax Notice — Section 143(1)</h1>
            <p className="mt-1 text-sm text-slate-500">Income Tax Department · Assessment Year 2023–24 · Uploaded just now</p>
          </div>

          {/* Summary card */}
          <div className="glass-card rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-8 w-8 rounded-lg bg-indigo-600/20 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
                </svg>
              </div>
              <h2 className="text-base font-semibold text-white">Plain Language Summary</h2>
            </div>
            <ul className="space-y-3">
              {summaryPoints.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-indigo-600/20 flex items-center justify-center text-xs text-indigo-400 font-semibold">{i + 1}</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps list */}
          <div className="glass-card rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-indigo-600/20 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <h2 className="text-base font-semibold text-white">Your Action Steps</h2>
            </div>
            <div className="flex flex-col gap-5">
              {steps.map((s) => (
                <div key={s.num} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 shrink-0 rounded-full border-2 border-indigo-500/40 bg-indigo-600/10 flex items-center justify-center text-xs font-bold text-indigo-400">
                      {s.num}
                    </div>
                    {s.num < steps.length && (
                      <div className="mt-2 h-full min-h-6 w-px bg-indigo-500/15" />
                    )}
                  </div>
                  <div className="flex-1 pb-5">
                    <p className="text-sm font-semibold text-white mb-1">{s.title}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents required */}
          <div className="glass-card rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-indigo-600/20 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                  <path d="M14 2v6h6" />
                </svg>
              </div>
              <h2 className="text-base font-semibold text-white">Documents You Will Need</h2>
            </div>
            <div className="flex flex-col gap-3">
              {docsRequired.map((d, i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl bg-slate-800/50 border border-slate-700/50 p-3.5">
                  <span className="text-xl">{d.icon}</span>
                  <p className="text-sm text-slate-300">{d.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — 40% */}
        <div className="flex flex-col gap-6 lg:col-span-2">

          {/* Authority card */}
          <div className="glass-card rounded-2xl p-7">
            <h2 className="text-base font-semibold text-white mb-5">Issuing Authority</h2>
            <div className="flex items-start gap-4 mb-5">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-xl">
                🏛️
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Income Tax Department</p>
                <p className="text-xs text-slate-500 mt-0.5">Ministry of Finance, Govt. of India</p>
                <div className="mt-2 flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  <span className="text-xs text-green-400 font-medium">Official Government Body</span>
                </div>
              </div>
            </div>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Helpline</span>
                <span className="text-slate-300 font-medium">1800-103-0025</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Portal</span>
                <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">incometax.gov.in</a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Deadline</span>
                <span className="text-amber-400 font-semibold">30 days from notice</span>
              </div>
            </div>
            <Link
              href="#"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              Visit Official Portal
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
            </Link>
          </div>

          {/* Process flowchart */}
          <div className="glass-card rounded-2xl p-7">
            <h2 className="text-base font-semibold text-white mb-6">Process Flowchart</h2>
            <div className="flex flex-col items-center gap-0">
              {[
                { label: "Receive Notice", color: "bg-slate-700", text: "text-slate-300" },
                { label: "Review on Portal", color: "bg-indigo-900/50 border border-indigo-500/30", text: "text-indigo-300" },
                { label: "Check Mismatch", color: "bg-indigo-900/50 border border-indigo-500/30", text: "text-indigo-300" },
                { label: "File Response", color: "bg-indigo-900/50 border border-indigo-500/30", text: "text-indigo-300" },
                { label: "Closure / Refund", color: "bg-green-900/40 border border-green-500/30", text: "text-green-300" },
              ].map((node, i, arr) => (
                <div key={i} className="flex flex-col items-center w-full">
                  <div className={`w-full rounded-xl ${node.color} px-4 py-3 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-slate-600/60 flex items-center justify-center text-[10px] font-bold text-slate-300 shrink-0">
                        {i + 1}
                      </div>
                      <span className={`text-sm font-medium ${node.text}`}>{node.label}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 rotate-90 shrink-0">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    )}
                    {i === arr.length - 1 && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="h-4 w-px bg-slate-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Voice button */}
      <div className="mx-auto w-full max-w-7xl">
        <div className="glass-card flex items-center justify-between gap-6 rounded-2xl px-8 py-5">
          <div>
            <p className="text-sm font-semibold text-white">🔈 Voice Guidance Available</p>
            <p className="text-xs text-slate-400 mt-0.5">Hear this summary read aloud in your language</p>
          </div>
          <div className="flex items-center gap-3">
            <select className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500 cursor-pointer">
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
            </select>
            <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/25">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
              Read Aloud
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
