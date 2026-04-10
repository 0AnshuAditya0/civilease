/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DocumentUpload } from './components/DocumentUpload';
import { VisualJourney } from './components/VisualJourney';
import { ProcedureGuide } from './components/ProcedureGuide';
import { ChatAssistant } from './components/ChatAssistant';
import { processDocument, generateSceneData } from './services/gemini';
import { ExtractedData, SceneData } from './types';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { 
  Building2, 
  ChevronRight, 
  FileText, 
  HelpCircle, 
  Home, 
  Map as MapIcon, 
  Menu, 
  Search, 
  User,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

export default function App() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
  const [sceneData, setSceneData] = useState<SceneData | null>(null);
  const [view, setView] = useState<'upload' | 'result'>('upload');

  const handleUpload = async (file: File) => {
    setIsProcessing(true);
    try {
      // Convert file to base64
      const reader = new FileReader();
      const base64Promise = new Promise<string>((resolve) => {
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(',')[1]);
        };
      });
      reader.readAsDataURL(file);
      const base64 = await base64Promise;

      // Process with Gemini
      const data = await processDocument(base64, file.type);
      setExtractedData(data);

      // Generate 3D Scene
      const scene = await generateSceneData(data);
      setSceneData(scene);

      setView('result');
      toast.success('Document processed successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to process document. Please try a clearer image.');
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setView('upload');
    setExtractedData(null);
    setSceneData(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={reset}>
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tight text-slate-900 leading-none">SARKAR-SARAL</h1>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Simplifying Governance</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">How it works</a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Supported Languages</a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">About</a>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="hidden sm:flex rounded-full gap-2">
                <User className="w-4 h-4" />
                Sign In
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {view === 'upload' ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4"
                >
                  <Sparkles className="w-3 h-3" />
                  AI-Powered Guidance
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                  Government procedures, <span className="text-blue-600">simplified</span> for everyone.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Upload any government document and get a visual, step-by-step guide in your language. 
                  No jargon. No confusion. Just clarity.
                </p>
              </div>

              <DocumentUpload onUpload={handleUpload} isProcessing={isProcessing} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                {[
                  {
                    title: "Visual Journey",
                    desc: "See your procedure as a 3D path with clear milestones.",
                    icon: <MapIcon className="w-6 h-6 text-blue-600" />
                  },
                  {
                    title: "Plain Language",
                    desc: "We translate complex legal terms into simple, actionable steps.",
                    icon: <FileText className="w-6 h-6 text-blue-600" />
                  },
                  {
                    title: "AI Assistant",
                    desc: "Ask anything about your document and get instant answers.",
                    icon: <HelpCircle className="w-6 h-6 text-blue-600" />
                  }
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" onClick={reset} className="rounded-full">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900">
                      {extractedData?.document_identity.document_type}
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Issued by {extractedData?.document_identity.issuing_authority}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="rounded-full">Download Guide</Button>
                  <Button className="rounded-full bg-blue-600 hover:bg-blue-700">Share</Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <Tabs defaultValue="visual" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="visual">Visual Journey</TabsTrigger>
                      <TabsTrigger value="details">Detailed Guide</TabsTrigger>
                    </TabsList>
                    <TabsContent value="visual" className="mt-0">
                      {sceneData && <VisualJourney data={sceneData} />}
                    </TabsContent>
                    <TabsContent value="details" className="mt-0">
                      {extractedData && <ProcedureGuide data={extractedData} />}
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="lg:col-span-1">
                  {extractedData && <ChatAssistant context={extractedData} />}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
                <Building2 className="text-slate-500 w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900">SARKAR-SARAL</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-blue-600">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600">Terms of Service</a>
              <a href="#" className="hover:text-blue-600">Contact Us</a>
            </div>
            <p className="text-sm text-slate-400">© 2026 Sarkar-Saral. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Toaster position="top-center" />
    </div>
  );
}
