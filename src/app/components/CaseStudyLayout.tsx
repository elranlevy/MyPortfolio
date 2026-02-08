import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface CaseStudyLayoutProps {
  onNavigateHome: () => void;
  children: ReactNode;
}

export function CaseStudyLayout({ onNavigateHome, children }: CaseStudyLayoutProps) {
  return (
    <div className="h-dvh flex flex-col overflow-hidden bg-white">
      {/* Header — fixed height, never scrolls */}
      <motion.header
        className="shrink-0 flex items-center px-4 md:px-6 lg:px-8 py-4 md:py-6 font-light bg-white border-b border-gray-100 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity text-black text-sm md:text-base"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </motion.header>

      {/* Snap-scroll container — plain div (NOT motion.div) for scroll perf */}
      <div
        className="flex-1 h-0 overflow-y-auto snap-y snap-mandatory animate-[fadeIn_0.8s_ease_0.5s_both]"
      >
        {children}
      </div>
    </div>
  );
}
