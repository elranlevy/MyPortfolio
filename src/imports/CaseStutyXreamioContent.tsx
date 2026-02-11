import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Server,
  BarChart3,
  Gauge,
  LayoutDashboard,
  Eye,
  Workflow,
  Layers,
  Bell,
  Zap,
  Grid3X3,
  TrendingUp,
} from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgImage175 from 'figma:asset/8283c758f682797739df887f6aa3e29caa08732e.png';
import imgImage172 from 'figma:asset/d39fb3cca29d3b2153e74727f2bd2167584b2b3c.png';
import imgImage174 from 'figma:asset/dc4843ec408a4532c53cdacb5ed2533eecd0dc2e.png';
import imgImage176 from 'figma:asset/d4d58b02892ddfba3736780450879b582c47390e.png';
import imgClusterStatus from 'figma:asset/1310cf6034e7996a8a437beaf595a9e75ee70205.png';
import imgImage178 from 'figma:asset/d7831a442bc44faf1090c9e711599d69abfabc41.png';
import imgImage177 from 'figma:asset/84697da8fef42b33bbdcddc2442ef98a82019325.png';

/* ── Scroll-triggered animation ──────────────────────────────── */
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

/* ── Centered vertical line divider ──────────────────────────── */
function VerticalDivider() {
  return (
    <div className="flex justify-center py-8 md:py-10">
      <div className="w-px h-12 md:h-16" style={{ backgroundColor: 'var(--text-primary)' }} />
    </div>
  );
}

/* ── Bold centered section heading ───────────────────────────── */
function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-2xl md:text-3xl lg:text-[34px] font-semibold text-center mb-10 md:mb-14"
      style={{ color: 'var(--text-primary)' }}
    >
      {children}
    </h2>
  );
}

/* ── Icon row (3 icons in a line) ────────────────────────────── */
function IconRow({
  icons,
}: {
  icons: { icon: ReactNode; label?: string }[];
}) {
  return (
    <div className="flex items-center justify-center gap-10 md:gap-16 mb-8 md:mb-10">
      {icons.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
          {item.label && (
            <p className="text-[10px] uppercase tracking-wider text-center" style={{ color: 'var(--text-tertiary)' }}>
              {item.label}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── KPI / Impact callout card ───────────────────────────────── */
function KpiCard({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-xl mx-auto">
      <div
        className="relative overflow-hidden rounded-2xl px-8 py-10 md:px-12 md:py-12 text-center"
        style={{ backgroundColor: '#e8eeff' }}
      >
        {/* Decorative background icon */}
        <div className="absolute -left-4 -top-4 opacity-[0.08]">
          <TrendingUp className="w-32 h-32" strokeWidth={1.2} style={{ color: 'var(--brand)' }} />
        </div>
        <p
          className="text-[11px] uppercase tracking-[0.25em] mb-4 relative"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {label}
        </p>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

/* ================================================================
   XTREAMIO CASE STUDY
   ================================================================
   Redesigned to match natalielabel.com editorial style:
   - Vertical line dividers between sections
   - Bold centered section headings
   - Icon rows illustrating concepts
   - KPI callout cards
   - Dark accent bands for key moments
   ================================================================ */
export default function CaseStutyXreamioContent() {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO / TITLE
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p
              className="text-xs uppercase tracking-[0.3em] mb-6"
              style={{ color: 'var(--text-tertiary)' }}
            >
              XtremIO
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Designing enterprise storage management systems
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="text-base md:text-lg font-light italic max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}
            >
              When losing context means losing control
            </p>
          </Reveal>

          {/* Metadata bar */}
          <Reveal delay={0.25}>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 pt-8 text-left"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Role
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  Product Designer
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Team
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  PM · Engineering · Enterprise Stakeholders
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Scope
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  Storage monitoring · System management · Admin workflows
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-4">
          <img
            src={imgImage175}
            alt="XtremIO storage management dashboard"
            className="w-full h-auto rounded-xl"
            loading="eager"
            decoding="async"
          />
        </div>
      </Reveal>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE PROBLEM — with icons
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <IconRow
              icons={[
                { icon: <Server className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Infrastructure' },
                { icon: <BarChart3 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Dense Data' },
                { icon: <Gauge className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Expert Users' },
              ]}
            />
          </Reveal>

          <Reveal>
            <SectionHeading>The Problem</SectionHeading>
          </Reveal>

          <Reveal delay={0.1}>
            <h3
              className="text-lg md:text-xl font-semibold text-center mb-6 max-w-2xl mx-auto leading-snug"
              style={{ color: 'var(--text-primary)' }}
            >
              XtremIO operated in a highly technical enterprise environment
            </h3>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm md:text-base font-light text-center mb-6 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Challenges:
            </p>

            <div className="flex flex-col gap-3.5 max-w-lg mx-auto">
              {[
                'Complex infrastructure logic',
                'Dense data and monitoring dashboards',
                'Expert users with low tolerance for inefficiency',
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
              className="text-sm md:text-base font-light italic text-center mt-8 max-w-xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              The interface needed to simplify without oversimplifying.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          MY OWNERSHIP
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <IconRow
              icons={[
                { icon: <LayoutDashboard className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Dashboards' },
                { icon: <Eye className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Visual Patterns' },
                { icon: <Workflow className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Admin Flows' },
              ]}
            />
          </Reveal>

          <Reveal>
            <SectionHeading>My Ownership</SectionHeading>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 max-w-xl mx-auto">
              {[
                'Designed monitoring dashboards and admin workflows',
                'Translated infrastructure metrics into clear visual patterns',
                'Reduced friction in system management tasks',
                'Collaborated directly with engineering-heavy stakeholders',
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

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          KEY INSIGHT — Dramatic full-width accent band
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
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-3">
              Technical users value clarity and control
            </p>
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              &mdash; not decoration.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-sm md:text-base font-light max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Efficiency and information hierarchy drive adoption.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE APPROACH — numbered cards with icons
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionHeading>The Approach</SectionHeading>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                num: '01',
                text: 'Simplify data hierarchy in dashboards',
                icon: <Layers className="w-7 h-7" strokeWidth={1.4} />,
              },
              {
                num: '02',
                text: 'Improve visibility of system status and alerts',
                icon: <Bell className="w-7 h-7" strokeWidth={1.4} />,
              },
              {
                num: '03',
                text: 'Reduce steps in frequent admin actions',
                icon: <Zap className="w-7 h-7" strokeWidth={1.4} />,
              },
              {
                num: '04',
                text: 'Standardize interaction logic across tools',
                icon: <Grid3X3 className="w-7 h-7" strokeWidth={1.4} />,
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="p-6 md:p-8 rounded-xl h-full"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <p
                      className="text-2xl md:text-3xl font-semibold"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      {step.num}
                    </p>
                    <div style={{ color: 'var(--text-tertiary)' }}>{step.icon}</div>
                  </div>
                  <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DESIGN VISUALS — Dashboard & System Views
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <img
              src={imgImage172}
              alt="XtremIO dashboard overview"
              className="w-full h-auto rounded-xl mb-5"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={0.08}>
              <img
                src={imgImage174}
                alt="Health monitoring tab"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
            <Reveal delay={0.16}>
              <img
                src={imgImage176}
                alt="Capacity monitoring tab"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
          <Reveal className="mt-5">
            <img
              src={imgClusterStatus}
              alt="Cluster connectivity status"
              className="w-full h-auto rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="mt-5">
            <img
              src={imgImage178}
              alt="Master-detail view"
              className="w-full h-auto rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          RESULTS — Full-width dark accent band
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-36 px-6 md:px-12 lg:px-16"
        style={{ backgroundColor: 'var(--color-gray-900)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Results
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-16">
              Measurable impact on enterprise operations
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 text-center">
            <Reveal delay={0.08}>
              <div>
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  &uarr;
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Improved task efficiency for system administrators
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div>
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  &darr;
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Reduced friction in monitoring workflows
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="sm:col-span-2">
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  &#x2713;
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  More consistent enterprise UI patterns
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
          src={imgImage177}
          alt="XtremIO — enterprise monitoring at scale"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto mr-4 md:mr-12 lg:mr-20 max-w-[40%] md:max-w-sm lg:max-w-md">
            <p className="text-[10px] leading-3 md:text-base md:leading-7 mb-1 md:mb-2 text-white font-light tracking-wide">
              &ldquo;Great monitoring UX doesn&rsquo;t simplify systems. It makes them:
            </p>
            <p className="text-xs leading-4 md:text-3xl md:leading-snug lg:text-[48px] lg:leading-snug text-white font-light tracking-wide">
              understandable under pressure&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          NEXT CASE STUDY NAVIGATION
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="text-left">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>
              Previous Case Study
            </p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <ArrowRight className="w-4 h-4 rotate-180" />
              Bluevine
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>
              Next Case Study
            </p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              FundGuard
              <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
