'use client';

import { useEffect, useState } from 'react';

interface LeadQualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadQualificationModal({ isOpen, onClose }: LeadQualificationModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#F5F1EA] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-2">Lead Qualification</h2>
              <p className="text-stone-500 font-light">See if your operations are ready for autonomous scaling.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-stone-200 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            <p className="text-stone-600 leading-relaxed">
              Our lead qualification tool is currently being calibrated for your specific industry. 
              In the meantime, you can access the beta version or book a direct audit.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://lead-qualifier-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-stone-900 text-[#F5F1EA] rounded-2xl font-medium hover:bg-stone-800 transition-all"
              >
                Launch Beta Tool
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <button 
                onClick={onClose}
                className="px-6 py-4 bg-white border border-stone-200 text-stone-900 rounded-2xl font-medium hover:border-stone-300 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}