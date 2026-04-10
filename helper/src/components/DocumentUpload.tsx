import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface DocumentUploadProps {
  onUpload: (file: File) => Promise<void>;
  isProcessing: boolean;
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({ onUpload, isProcessing }) => {
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setError(null);
      try {
        await onUpload(acceptedFiles[0]);
      } catch (err) {
        setError('Failed to process document. Please try again.');
      }
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'application/pdf': ['.pdf']
    },
    multiple: false,
    disabled: isProcessing
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={cn(
          "relative group cursor-pointer transition-all duration-300",
          "border-2 border-dashed rounded-2xl p-12 text-center",
          isDragActive ? "border-blue-500 bg-blue-50/50" : "border-slate-300 hover:border-blue-400 hover:bg-slate-50",
          isProcessing && "opacity-50 cursor-not-allowed pointer-events-none"
        )}
      >
        <input {...getInputProps()} />
        
        <AnimatePresence mode="wait">
          {isProcessing ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">Sarkar-Saral is reading...</h3>
              <p className="mt-2 text-slate-500">Extracting details and simplifying the procedure for you.</p>
              
              <div className="mt-8 w-full max-w-xs bg-slate-100 rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="bg-blue-500 h-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 15, ease: "linear" }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Upload className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Upload Government Document</h3>
              <p className="text-slate-500 max-w-sm mx-auto">
                Snap a photo or upload a PDF of your notice, bill, or form.
                We'll turn it into a simple guide.
              </p>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>12+ Languages</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100"
          >
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{error}</span>
          </motion.div>
        )}
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Tax Notices", icon: "💰" },
          { title: "Land Records", icon: "🗺️" },
          { title: "License Forms", icon: "🪪" }
        ].map((item, i) => (
          <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl flex items-center gap-3 shadow-sm">
            <span className="text-2xl">{item.icon}</span>
            <span className="font-medium text-slate-700">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
