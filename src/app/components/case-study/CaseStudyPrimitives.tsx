import { type ReactNode } from 'react';

/* ============================================================
   Case Study Primitives — Responsive building blocks

   Layout contract:
     Parent (CaseStudyLayout) provides a snap-y mandatory container.
     CaseStudyHero is one full-screen snap page.
     CaseStudyBody wraps the rest — it snaps to start, then
     scrolls normally like a document.
   ============================================================ */

// ── Scroll-down mouse indicator ──────────────────────────────
function ScrollMouse() {
  return (
    <div className="flex flex-col items-center gap-1 opacity-60">
      <svg
        width="28"
        height="42"
        viewBox="0 0 28 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Mouse body */}
        <rect
          x="1"
          y="1"
          width="26"
          height="40"
          rx="13"
          stroke="currentColor"
          strokeWidth="2"
        />
        {/* Scroll wheel dot — animated */}
        <circle cx="14" cy="12" r="3" fill="currentColor">
          <animate
            attributeName="cy"
            values="12;22;12"
            dur="1.8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
          />
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="1.8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
          />
        </circle>
      </svg>
    </div>
  );
}

// ── Case study hero (one snap page) ──────────────────────────
export function CaseStudyHero({
  logo,
  title,
  subtitle,
  heroImage,
  heroImageAlt = '',
  heroImageClassName,
}: {
  logo: ReactNode;
  title: string;
  subtitle?: string;
  heroImage: string;
  heroImageAlt?: string;
  heroImageClassName?: string;
}) {
  return (
    <section className="w-full min-h-full snap-start snap-always bg-white flex flex-col items-center justify-center px-6 md:px-8 gap-3 md:gap-4 lg:gap-5 py-8">
      {/* Logo */}
      <div className="w-40 md:w-52 lg:w-64">{logo}</div>

      {/* Title & subtitle */}
      <div className="text-center max-w-4xl flex flex-col gap-2">
        <h1 className="text-lg md:text-xl lg:text-2xl font-light text-black leading-normal">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl font-light text-black leading-normal">
            {subtitle}
          </p>
        )}
      </div>

      {/* Hero image — constrained to fit within the snap page */}
      <div className={heroImageClassName ?? "w-full max-w-3xl lg:max-w-4xl flex-1 min-h-0 flex items-center"}>
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="w-full h-auto object-contain rounded-2xl"
        />
      </div>

      {/* Scroll indicator */}
      <ScrollMouse />
    </section>
  );
}

// ── Body wrapper (snaps to start, then free-scrolls) ─────────
export function CaseStudyBody({ children }: { children: ReactNode }) {
  return (
    <div className="snap-start bg-white [&>*:first-child]:pt-4 [&>*:first-child]:md:pt-6">
      {children}
    </div>
  );
}

// ── Section wrapper ─────────────────────────────────────────
export function Section({
  children,
  className = '',
  bg = 'bg-white',
}: {
  children: ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <section
      className={`w-full py-12 md:py-16 lg:py-24 ${bg} ${className}`}
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16">
        {children}
      </div>
    </section>
  );
}

// ── Section title + optional body ────────────────────────────
export function SectionTitle({
  title,
  children,
  className = '',
}: {
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 md:gap-6 mb-8 md:mb-12 ${className}`}>
      <h2 className="text-2xl md:text-3xl lg:text-[36px] font-light text-[#182730] leading-normal">
        {title}
      </h2>
      {children && (
        <div className="text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543]">
          {children}
        </div>
      )}
    </div>
  );
}

// ── Info-box grid ────────────────────────────────────────────
export function InfoBoxGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-[#f5f5f5] px-4 py-3 md:px-8 md:py-4 flex items-center"
        >
          <p className="text-sm md:text-base leading-6 tracking-[0.32px] text-[#1e3543]">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

// ── Persona card ─────────────────────────────────────────────
interface Persona {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export function PersonaCardGrid({ personas }: { personas: Persona[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
      {personas.map((p, i) => (
        <div
          key={i}
          className="bg-[#f5f5f5] flex flex-col items-center gap-6 md:gap-8 p-6 md:p-10 overflow-hidden"
        >
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <p className="uppercase font-bold text-[#467294] text-sm tracking-[1.6px]">
              {p.name}
            </p>
            <p className="text-lg md:text-xl text-black text-center">
              {p.role}
            </p>
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              decoding="async"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
            />
          </div>
          <p className="font-light text-sm md:text-base leading-7 text-[#1e3543] text-center max-w-xs tracking-[0.64px]">
            &ldquo;{p.quote}&rdquo;
          </p>
        </div>
      ))}
    </div>
  );
}

// ── Hypothesis block ─────────────────────────────────────────
interface HypothesisProps {
  number: number;
  title: string;
  children: ReactNode;
  bullets?: string[];
  whyLabel?: string;
}

export function HypothesisBlock({
  number,
  title,
  children,
  bullets,
  whyLabel = 'Why it works:',
}: HypothesisProps) {
  return (
    <div className="bg-[#f5f5f5] p-6 md:p-10 lg:p-12 flex flex-col gap-3 md:gap-4">
      <p className="text-sm md:text-base text-[#1e3543]">Hypothesis {number}</p>
      <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-[#1e3543] leading-snug">
        {title}
      </h3>
      <div className="text-sm md:text-base leading-7 text-[#1e3543] tracking-[0.32px]">
        {children}
      </div>
      {bullets && bullets.length > 0 && (
        <>
          <p className="font-bold text-sm md:text-base text-[#1e3543]">
            {whyLabel}
          </p>
          <ul className="list-disc pl-5 space-y-1">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="text-sm md:text-base leading-6 text-[#1e3543]"
              >
                {b}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

// ── Insight / callout box ────────────────────────────────────
export function InsightBlock({
  label = 'Key insight:',
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-[#f5f5f5] p-6 md:p-10 lg:p-12">
      {label && (
        <p className="text-sm md:text-base text-[#1e3543] mb-2">{label}</p>
      )}
      <div className="text-sm md:text-base leading-7 text-[#1e3543] tracking-[0.32px]">
        {children}
      </div>
    </div>
  );
}

// ── Responsive image ─────────────────────────────────────────
export function CaseStudyImage({
  src,
  alt = '',
  className = '',
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`w-full h-auto object-cover ${className}`}
    />
  );
}

// ── Full-bleed image (extends beyond content max-width) ──────
export function FullBleedImage({
  src,
  alt = '',
  className = '',
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
    </div>
  );
}

// ── Quote banner ─────────────────────────────────────────────
export function QuoteBanner({
  children,
  bg = 'bg-[#f5f5f5]',
  className,
}: {
  children: ReactNode;
  bg?: string;
  className?: string;
}) {
  return (
    <section className={`w-full py-14 md:py-20 lg:py-28 ${bg}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16">
        <p className={className ?? "text-lg md:text-2xl lg:text-[36px] font-extralight text-center leading-relaxed tracking-[-0.72px] text-black"}>
          {children}
        </p>
      </div>
    </section>
  );
}

// ── Image with overlaid quote ────────────────────────────────
export function ImageWithQuote({
  src,
  alt = '',
  preQuote,
  quote,
}: {
  src: string;
  alt?: string;
  preQuote?: string;
  quote: string;
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 flex items-center">
        <div className="ml-auto mr-1 md:mr-12 lg:mr-20 max-w-[38%] md:max-w-sm lg:max-w-md">
          {preQuote && (
            <p className="text-[10px] leading-3 md:text-base md:leading-7 text-[#1e3543] mb-1 md:mb-2 tracking-[0.64px]">
              {preQuote}
            </p>
          )}
          <p className="text-xs leading-4 md:text-3xl md:leading-snug lg:text-[48px] font-light text-[#1e3543] tracking-[0.48px]">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Skill / demo card grid ───────────────────────────────────
interface SkillCard {
  label: string;
  title: string;
}

export function SkillCardGrid({ cards }: { cards: SkillCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {cards.map((c, i) => (
        <div
          key={i}
          className="bg-[#f5f5f5] p-5 md:p-6 flex flex-col gap-2"
        >
          <p className="text-xs md:text-sm uppercase tracking-wider font-bold text-[#467294]">
            {c.label}
          </p>
          <p className="text-sm md:text-base text-[#1e3543] leading-6">
            {c.title}
          </p>
        </div>
      ))}
    </div>
  );
}

// ── Image grid (responsive columns) ──────────────────────────
export function ImageGrid({
  images,
  columns = 2,
  alt = '',
}: {
  images: string[];
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  alt?: string;
}) {
  const colClass =
    columns === 1
      ? 'grid-cols-1'
      : columns === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : columns === 3
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : columns === 4
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            : columns === 5
              ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
              : columns === 6
                ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
                : 'grid-cols-3 sm:grid-cols-4 lg:grid-cols-7';

  return (
    <div className={`grid ${colClass} gap-3 md:gap-4`}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${alt} ${i + 1}`}
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover rounded-lg"
        />
      ))}
    </div>
  );
}
