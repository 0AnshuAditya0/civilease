"use client";

import { BookOpen, FileText, HelpCircle, Download, ExternalLink, Play } from "lucide-react";

export default function ResourcesPage() {
  const categories = [
    { title: "User Manuals", icon: <BookOpen className="w-5 h-5"/>, count: 12 },
    { title: "Legal Templates", icon: <FileText className="w-5 h-5"/>, count: 45 },
    { title: "Govt. Directives", icon: <ExternalLink className="w-5 h-5"/>, count: 120 },
    { title: "Video Guides", icon: <Play className="w-5 h-5"/>, count: 8 }
  ];

  return (
    <div className="min-h-screen bg-surface pt-32 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20">
            <h1 className="text-6xl md:text-7xl font-black text-primary tracking-tighter uppercase mb-6 leading-none">
                Resource <br/> Center.
            </h1>
            <p className="text-xl text-text-muted font-medium">Documentation and help for every citizen action.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            {categories.map((c, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl gov-border gov-shadow flex flex-col items-center text-center group cursor-pointer hover:bg-primary transition-all">
                    <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                        <div className="text-secondary group-hover:text-white">{c.icon}</div>
                    </div>
                    <h3 className="font-black text-primary uppercase text-sm mb-2 group-hover:text-white transition-colors">{c.title}</h3>
                    <span className="text-[10px] font-bold text-text-muted group-hover:text-white/50">{c.count} DOCUMENTS</span>
                </div>
            ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-[2] space-y-4">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-8">Popular Tutorials</h2>
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl gov-shadow border border-border/50 flex items-center justify-between group">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 bg-surface rounded flex items-center justify-center font-black text-primary">0{i+1}</div>
                            <div>
                                <h4 className="font-black text-primary uppercase text-xs">How to interpret a Property Tax Notice</h4>
                                <span className="text-[9px] font-bold text-text-muted italic">Updated 3 days ago</span>
                            </div>
                        </div>
                        <button className="p-3 rounded-full hover:bg-surface text-secondary transition-all">
                            <Download className="w-5 h-5" />
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex-1">
                <div className="p-10 bg-secondary rounded-3xl text-white shadow-xl relative overflow-hidden h-full">
                    <div className="absolute -top-10 -right-10 opacity-10">
                        <HelpCircle className="w-48 h-48" />
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Need Instant Support?</h2>
                    <p className="text-primary font-bold leading-relaxed mb-10 text-sm">
                        Our knowledge base is expansive, but if you can&apos;t find what you need, our AI assistant is ready to parse your query in real-time.
                    </p>
                    <button className="w-full bg-primary text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl">Contact Helpdesk</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
