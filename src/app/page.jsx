import { FileUpload } from "@/components/dashboard/FileUpload";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[850px] flex items-center bg-white overflow-hidden pt-12">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface border border-border">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase">Digital India Initiative</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.95] text-primary">
              Simplifying <span className="text-secondary text-stroke-primary">Governance</span> for Every Citizen.
            </h1>
            <p className="text-xl text-text-muted leading-relaxed max-w-lg">
              Upload any legal notice or government form. We translate complex bureaucracy into plain language and actionable steps.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-10 py-5 bg-secondary text-white rounded-md font-bold text-lg shadow-xl shadow-secondary/20 transition-all hover:-translate-y-1">
                Start Your Analysis
              </button>
              <button className="px-10 py-5 bg-white text-primary border-2 border-primary rounded-md font-bold text-lg hover:bg-surface transition-all">
                How it Works
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute -inset-20 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative z-10 w-[550px] h-[550px] flex items-center justify-center">
              {/* Primary 3D Image */}
              <img 
                src="/gov_3d_isometric_building_1775832310755.png" 
                alt="Government Civil Infrastructure" 
                className="w-[450px] h-[450px] object-contain relative z-20 animate-float"
              />
              
              {/* Floating Infrastructure/Civil Asset */}
              <div className="absolute top-0 -left-10 w-32 h-32 bg-white rounded-2xl shadow-2xl border border-secondary/20 p-4 flex items-center justify-center animate-float-delayed z-30">
                 <span className="material-symbols-outlined text-6xl text-primary opacity-20">architecture</span>
                 <div className="absolute inset-0 flex flex-col p-4 justify-between">
                    <div className="flex justify-between">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <div className="w-8 h-1 bg-primary/20 rounded"></div>
                    </div>
                    <div className="w-full h-1 bg-primary/10 rounded"></div>
                 </div>
              </div>

              {/* Floating Blueprint Asset */}
              <div className="absolute bottom-10 right-0 w-36 h-44 bg-white/90 backdrop-blur rounded-lg shadow-2xl border border-primary/20 p-5 rotate-12 animate-float z-30 overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                 <div className="space-y-3 mt-2">
                    <div className="w-full h-1 bg-primary/10 rounded"></div>
                    <div className="w-3/4 h-1 bg-primary/10 rounded"></div>
                    <div className="w-full h-1 bg-primary/10 rounded"></div>
                    <div className="grid grid-cols-2 gap-2 pt-4">
                       <div className="h-10 bg-secondary/10 rounded"></div>
                       <div className="h-10 bg-primary/10 rounded"></div>
                    </div>
                 </div>
              </div>
              
              {/* Document/Notice Overlay */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-24 h-32 bg-white rounded shadow-2xl border border-secondary/20 p-4 -rotate-6 animate-float-delayed z-40">
                 <div className="w-full h-0.5 bg-secondary/40 rounded mb-1"></div>
                 <div className="w-2/3 h-0.5 bg-secondary/20 rounded mb-1"></div>
                 <div className="mt-8 flex justify-center text-secondary">
                    <span className="material-symbols-outlined text-4xl">verified</span>
                 </div>
              </div>

              <div className="absolute -bottom-5 -left-10 w-40 h-24 bg-primary rounded-xl shadow-2xl border border-white/20 p-4 rotate-6 animate-float z-10">
                 <div className="flex items-center gap-2 mb-3">
                   <div className="w-6 h-6 rounded-full bg-secondary"></div>
                   <div className="w-12 h-1.5 bg-white/30 rounded"></div>
                 </div>
                 <div className="w-full h-0.5 bg-white/10 rounded mb-1"></div>
                 <div className="w-5/6 h-0.5 bg-white/10 rounded mb-1"></div>
              </div>

              {/* Base Ring */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-20 bg-primary/10 rounded-[100%] blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-8">
          <FileUpload />
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-16">
          <div className="p-10 bg-surface rounded-2xl navy-border-left gov-shadow space-y-6">
            <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-xl">
              <span className="material-symbols-outlined text-3xl">summarize</span>
            </div>
            <h3 className="text-2xl font-bold">Plain Language</h3>
            <p className="text-text-muted leading-relaxed">Complex administrative jargon is stripped away, focusing only on the specific actions you need to take.</p>
          </div>
          <div className="p-10 bg-surface rounded-2xl navy-border-left gov-shadow space-y-6">
            <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-xl">
              <span className="material-symbols-outlined text-3xl">account_tree</span>
            </div>
            <h3 className="text-2xl font-bold">Visual Flows</h3>
            <p className="text-text-muted leading-relaxed">See your administrative journey mapped out visually, from document submission to final approval.</p>
          </div>
          <div className="p-10 bg-surface rounded-2xl navy-border-left gov-shadow space-y-6">
            <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-xl">
              <span className="material-symbols-outlined text-3xl">record_voice_over</span>
            </div>
            <h3 className="text-2xl font-bold">Voice Guidance</h3>
            <p className="text-text-muted leading-relaxed">Accessibility integrated using AI-powered narration in your own regional language dialect.</p>
          </div>
        </div>
      </section>

      <section className="py-40 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1" fill="none" />
             <circle cx="50" cy="50" r="10" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">Empowering 1.4 Billion Indian Citizens</h2>
          <p className="text-2xl text-white/70 leading-relaxed font-light">CivilEase bridges the information gap, making public services more transparent and accessible through AI intelligence.</p>
          <button className="px-16 py-6 bg-secondary text-white rounded-md font-black text-2xl shadow-2xl transition-all hover:scale-105 active:scale-95">
             Analyze Your first Document
          </button>
        </div>
      </section>
    </>
  );
}
