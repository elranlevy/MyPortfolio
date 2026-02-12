import { type ReactNode } from 'react';

/* ================================================================
   CaseStudyLayout - Shell for every case study page
   ================================================================
   Provides:
   - Full-viewport scroll container for hero + body sections
   - Fade-in animation on mount

   The global header in App.tsx overlays the content so the hero
   section extends to the very top of the viewport.
   ================================================================ */

interface CaseStudyLayoutProps {
  children: ReactNode;
}

export function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <div className="h-dvh relative overflow-hidden bg-surface-primary">
      {/* Scroll container - native smooth scrolling, no snap */}
      <div
        className="h-full overflow-y-auto animate-[fadeIn_0.8s_ease_0.5s_both]"
      >
        {children}
      </div>
    </div>
  );
}
