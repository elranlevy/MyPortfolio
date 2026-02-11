import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgHeroDashboard from 'figma:asset/d567446a53f020a289d383932546fdaa051adf81.png';
import imgDesignFlow1 from 'figma:asset/7cdb49ba8edc2d8977bfc267cf5bbe296ad267fb.png';
import imgDesignFlow2 from 'figma:asset/c790cf6ca89caa6c2afef2660c34ad66513f7fd0.png';
import imgDesignFlow3 from 'figma:asset/b05467b93f7ef928be5bddec64a8f9870de1bf3e.png';
import imgDesignFlow4 from 'figma:asset/2efaac5ed441d5d3cc792401accb9d3922155796.png';
import imgCanvasAnnotated from '@/assets/fg-canvas-annotated.png';
import imgClosing from 'figma:asset/04b481125acb45e9ca91bd8773c9890a8d07be5d.png';

/* ── Scroll-triggered animation wrapper ──────────────────────── */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/* ================================================================
   FUNDGUARD CASE STUDY — Redesigned to match natalielabel.com
   ================================================================
   Clean editorial layout with:
   - Flowing sections with generous whitespace
   - Full-width accent bands for key moments
   - Prominent metric displays
   - Serif accents for emphasis
   ================================================================ */
export default function CaseStutyFundguardContent() {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO / TITLE
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p
              className="text-xs uppercase tracking-[0.3em] mb-6"
              style={{ color: 'var(--text-tertiary)' }}
            >
              FundGuard
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-[1.12] mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Scaling trust in AI-driven investment accounting
            </h1>
          </Reveal>

          {/* Metadata bar */}
          <Reveal delay={0.25}>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 pt-8"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Role
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  Senior Product Designer
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Team
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  PM · 6 Engineers · Data Science · Enterprise Operations
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Scope
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  Core reconciliation &amp; exception workflows
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Impact
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  +30% automation adoption · 25% faster resolution
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-8">
          <img
            src={imgHeroDashboard}
            alt="FundGuard reconciliation dashboard"
            className="w-full h-auto rounded-xl"
            loading="eager"
            decoding="async"
          />
        </div>
      </Reveal>

      {/* ═══════════════════════════════════════════════════════
          THE PROBLEM
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2
              className="text-2xl md:text-3xl font-extralight mb-8"
              style={{ color: 'var(--text-primary)' }}
            >
              The Problem
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="text-lg md:text-xl font-light leading-relaxed mb-8"
              style={{ color: 'var(--text-primary)' }}
            >
              Enterprise users relied on manual reconciliation despite built-in automation.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm md:text-base font-light mb-5" style={{ color: 'var(--text-secondary)' }}>
              Adoption was low because:
            </p>

            <div className="flex flex-col gap-3.5 mb-8 pl-1">
              {[
                'AI outputs lacked transparency',
                'Data density created cognitive overload',
                'Workflows were fragmented',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                    style={{ backgroundColor: 'var(--text-tertiary)' }}
                  />
                  <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="text-sm md:text-base font-light italic"
              style={{ color: 'var(--text-secondary)' }}
            >
              This reduced platform stickiness and limited module expansion.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MY OWNERSHIP
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-24 px-6 md:px-12 lg:px-16"
        style={{ backgroundColor: 'var(--surface-secondary)' }}
      >
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2
              className="text-2xl md:text-3xl font-extralight mb-10"
              style={{ color: 'var(--text-primary)' }}
            >
              My Ownership
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 pl-1">
              {[
                'Led end-to-end UX strategy for reconciliation workflows',
                'Facilitated discovery with enterprise operations teams',
                'Partnered with Data Science to surface explainable AI signals',
                'Defined reusable workflow patterns across modules',
                'Mentored 2 designers',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                    style={{ backgroundColor: 'var(--text-tertiary)' }}
                  />
                  <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          KEY INSIGHT — Full-width dramatic accent band
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-36 px-6 md:px-12"
        style={{ backgroundColor: 'var(--color-gray-900)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Key Insight
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-extralight leading-tight text-white mb-3">
              The issue wasn't functionality.
            </p>
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-extralight leading-tight text-white italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              It was trust.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-sm md:text-base font-light max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Users manually verified automated results even when accuracy was high.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          THE APPROACH
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2
              className="text-2xl md:text-3xl font-extralight mb-12"
              style={{ color: 'var(--text-primary)' }}
            >
              The Approach
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { num: '01', text: 'Replace dashboard-heavy UI with guided workflows' },
              { num: '02', text: 'Prioritize anomalies by financial impact' },
              { num: '03', text: 'Add explainable AI signals' },
              { num: '04', text: 'Standardize enterprise interaction patterns' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="p-6 md:p-8 rounded-xl h-full"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <p
                    className="text-2xl md:text-3xl font-extralight mb-3"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {step.num}
                  </p>
                  <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          THE SOLUTION
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-24 px-6 md:px-12 lg:px-16"
        style={{ backgroundColor: 'var(--surface-secondary)' }}
      >
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2
              className="text-2xl md:text-3xl font-extralight mb-14"
              style={{ color: 'var(--text-primary)' }}
            >
              The Solution
            </h2>
          </Reveal>

          <div className="flex flex-col gap-12 md:gap-16">
            {/* Solution 1 */}
            <Reveal>
              <div
                className="pb-12 md:pb-16"
                style={{ borderBottom: '1px solid var(--border-subtle)' }}
              >
                <p
                  className="text-lg md:text-xl font-light italic mb-3"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                >
                  Guided Reconciliation Flow
                </p>
                <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Structured progression with visible status and checkpoints.
                </p>
              </div>
            </Reveal>

            {/* Solution 2 */}
            <Reveal>
              <div
                className="pb-12 md:pb-16"
                style={{ borderBottom: '1px solid var(--border-subtle)' }}
              >
                <p
                  className="text-lg md:text-xl font-light italic mb-3"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                >
                  Intelligent Exception Handling
                </p>
                <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Risk-based prioritization + contextual resolution tools.
                </p>
              </div>
            </Reveal>

            {/* Solution 3 */}
            <Reveal>
              <div>
                <p
                  className="text-lg md:text-xl font-light italic mb-3"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                >
                  Explainable AI
                </p>
                <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Confidence indicators + traceable reasoning + audit trail.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          DESIGN VISUALS
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <img
              src={imgCanvasAnnotated}
              alt="Canvas-based hierarchy view"
              className="w-full h-auto rounded-xl mb-6"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={0.08}>
              <img
                src={imgDesignFlow1}
                alt="Reconciliation workflow"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
            <Reveal delay={0.16}>
              <img
                src={imgDesignFlow2}
                alt="Exception handling"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
          <Reveal className="mt-5">
            <img
              src={imgDesignFlow3}
              alt="AI confidence indicators"
              className="w-full h-auto rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="mt-5">
            <img
              src={imgDesignFlow4}
              alt="Enterprise interaction patterns"
              className="w-full h-auto rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          RESULTS — Full-width accent band with big metrics
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-36 px-6 md:px-12 lg:px-16"
        style={{ backgroundColor: 'var(--color-gray-900)' }}
      >
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Results
            </p>
            <h2 className="text-2xl md:text-3xl font-extralight text-white mb-16">
              Measurable impact across the platform
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16">
            <Reveal delay={0.08}>
              <div>
                <p className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-2">
                  +30%
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  increase in automation adoption
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div>
                <p className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-2">
                  25%
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  faster exception resolution
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div>
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-2"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  &darr;
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Reduction in reconciliation-related support tickets
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div>
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-2"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  &uarr;
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Increased enterprise expansion into advanced modules
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLOSING IMAGE
          ═══════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden">
        <img
          src={imgClosing}
          alt="FundGuard — enterprise UX at scale"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto mr-4 md:mr-12 lg:mr-20 max-w-[40%] md:max-w-sm lg:max-w-md">
            <p className="text-[10px] leading-3 md:text-base md:leading-7 mb-1 md:mb-2 text-white font-light tracking-wide">
              &ldquo;Enterprise UX succeeds when users stop fighting the interface
            </p>
            <p className="text-xs leading-4 md:text-3xl md:leading-snug lg:text-[48px] lg:leading-snug text-white font-light tracking-wide">
              and start reasoning about the system&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          NEXT / PREV CASE STUDY NAVIGATION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div />
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>
              Next Case Study
            </p>
            <p className="text-base md:text-lg font-light flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              monday.com
              <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
