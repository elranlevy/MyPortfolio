import svgPaths from './svg-7oaa2l35hc';
import imgEllipse1 from 'figma:asset/b7802a0bf11c8b46d3ea2d3586fe3943076fc518.png';
import imgEllipse2 from 'figma:asset/ae2c7b647201cba7a7745bc1eeff34cb23e84743.png';
import imgEllipse3 from 'figma:asset/227625693e5589ca3b028a631d3eaea6edb59deb.png';
import imgEllipse4 from 'figma:asset/0e827f01cddcfd6f1d83f80f9542c90261a32d68.png';
import imgImage179 from 'figma:asset/56de3c04ff1acde9306e9cb5b7939da0f1ea754b.png';
import imgImage198 from 'figma:asset/7cdb49ba8edc2d8977bfc267cf5bbe296ad267fb.png';
import imgImage199 from 'figma:asset/c790cf6ca89caa6c2afef2660c34ad66513f7fd0.png';
import imgImage200 from 'figma:asset/b05467b93f7ef928be5bddec64a8f9870de1bf3e.png';
import imgImage201 from 'figma:asset/2efaac5ed441d5d3cc792401accb9d3922155796.png';
import imgImage182 from 'figma:asset/c1f1eb304459a487333f9594557b75777fa244f0.png';
import imgImage183 from 'figma:asset/04b481125acb45e9ca91bd8773c9890a8d07be5d.png';

import imgImage170 from 'figma:asset/d567446a53f020a289d383932546fdaa051adf81.png';
import imgImage197 from 'figma:asset/8364c08e74541f0396b1c596ea2aa17e095da5c4.png';

import {
  Section,
  SectionTitle,
  InfoBoxGrid,
  PersonaCardGrid,
  HypothesisBlock,
  InsightBlock,
  CaseStudyImage,
  QuoteBanner,
  ImageWithQuote,
  CaseStudyHero,
  CaseStudyBody,
} from '@/app/components/case-study/CaseStudyPrimitives';

/* ── Fundguard Logo (SVG) ───────────────────────────────── */
function FundguardLogo() {
  return (
    <svg
      className="w-full h-auto"
      fill="none"
      viewBox="0 0 330.999 32"
    >
      <path
        clipRule="evenodd"
        d={svgPaths.p3d9e8a00}
        fill="black"
        fillRule="evenodd"
      />
      <mask
        height="32"
        id="fg-mask0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
        width="25"
        x="32"
        y="0"
      >
        <path d={svgPaths.p3a9224b0} fill="white" />
      </mask>
      <g mask="url(#fg-mask0)">
        <path
          clipRule="evenodd"
          d={svgPaths.pcca6500}
          fill="black"
          fillRule="evenodd"
        />
      </g>
      <path
        clipRule="evenodd"
        d={svgPaths.p3a5d8f00}
        fill="black"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d={svgPaths.pa28e700}
        fill="black"
        fillRule="evenodd"
      />
      <mask
        height="32"
        id="fg-mask1"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
        width="29"
        x="151"
        y="0"
      >
        <path d={svgPaths.pde03600} fill="white" />
      </mask>
      <g mask="url(#fg-mask1)">
        <path
          clipRule="evenodd"
          d={svgPaths.p3f195280}
          fill="#14AF9C"
          fillRule="evenodd"
        />
      </g>
      <mask
        height="32"
        id="fg-mask2"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
        width="25"
        x="192"
        y="0"
      >
        <path d={svgPaths.p25c18900} fill="white" />
      </mask>
      <g mask="url(#fg-mask2)">
        <path
          clipRule="evenodd"
          d={svgPaths.p396c5400}
          fill="#14AF9C"
          fillRule="evenodd"
        />
      </g>
      <path
        clipRule="evenodd"
        d={svgPaths.p39e3bf80}
        fill="#14AF9C"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d={svgPaths.pa812780}
        fill="#14AF9C"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d={svgPaths.p3f5a6e80}
        fill="#14AF9C"
        fillRule="evenodd"
      />
    </svg>
  );
}

/* ============================================================
   FUNDGUARD CASE STUDY — Responsive Rewrite
   ============================================================ */
export default function CaseStutyFundguardContent() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <CaseStudyHero
        logo={<FundguardLogo />}
        title="Turning Operational Complexity into Control"
        subtitle="When experts need systems they can trust"
        heroImage={imgImage170}
        heroImageAlt="Fundguard dashboard"
      />

      <CaseStudyBody>
      {/* ── 2. The Challenge ────────────────────────────── */}
      <Section>
        <SectionTitle title="The Challenge">
          <p>Users managed:</p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Deep parent-child fund structures',
            'Time-based workflows',
            'Errors that propagate silently',
          ]}
        />

        <div className="mt-8 md:mt-12">
          <p className="text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543] mb-4">
            the problem
          </p>
          <InsightBlock label="">
            <p>
              The problem wasn&rsquo;t functionality. It was orientation and
              confidence.
            </p>
          </InsightBlock>
        </div>
      </Section>

      {/* ── 3. Hierarchy Canvas ─────────────────────────── */}
      <Section>
        <SectionTitle title="Hierarchy canvas">
          <p>
            This is how fund operations should feel: clear, visible, and
            grounded.
          </p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Fund operations are living systems.',
            'Tables hide that reality.',
            'This design exposes it.',
          ]}
        />
      </Section>

      {/* ── 4. Personas ─────────────────────────────────── */}
      <Section>
        <PersonaCardGrid
          personas={[
            {
              name: 'David Hope',
              role: 'Finance Manager',
              image: imgEllipse1,
              quote:
                "I'm always worried that one wrong configuration will move funds incorrectly, and it's hard to trace mistakes after they happen.",
            },
            {
              name: 'Nick melon',
              role: 'Senior Accountant',
              image: imgEllipse2,
              quote:
                "The system technically works, but everyday actions take too many steps, especially when handling approvals and reallocations.",
            },
            {
              name: 'Mick moshes',
              role: 'Accountant',
              image: imgEllipse3,
              quote:
                "Updating fund data feels risky\u2014there's no clear validation, and I only find errors after reports are generated.",
            },
            {
              name: 'Jamie gale',
              role: 'Operations Lead',
              image: imgEllipse4,
              quote:
                "Managing multiple funds feels fragmented. I constantly jump between screens just to understand where the money actually is.",
            },
          ]}
        />
      </Section>

      {/* ── 5. Approach ─────────────────────────────────── */}
      <Section>
        <SectionTitle title="How I Approached the Problem">
          <p>I focused on how experts actually think:</p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'How they reason about structure?',
            'How they trace issues?',
            'How they decide where to act?',
          ]}
        />

        <div className="mt-8">
          <InsightBlock label="Insight:">
            <p>
              Experts don&rsquo;t need more power. They need clarity they can
              rely on.
            </p>
          </InsightBlock>
        </div>

      </Section>

      {/* Fund operations image — 30% wider */}
      <div className="max-w-[1331px] mx-auto px-6 md:px-8 lg:px-12">
        <CaseStudyImage
          src={imgImage182}
          alt="Fund operations overview"
          className="rounded-lg"
        />
      </div>

      {/* ── 6. Hypothesis-Driven Design ─────────────────── */}
      <Section>
        <SectionTitle title="Hypothesis-Driven Design Process">
          <p>
            I started by forming hypotheses based on usability challenges in the
            current configuration experience and user review. I understand that
            users struggle to understand fund relationships when they are
            presented as rows and form fields, that confidence is low when system
            state is fragmented across tabs, and that sequential configuration
            slows down multi-fund workflows.
          </p>
        </SectionTitle>

        <div className="flex flex-col gap-6 md:gap-8">
          <HypothesisBlock
            number={1}
            title="Users struggle to understand fund relationships when configuration is row-based"
            whyLabel="Why it works:"
            bullets={[
              'Motivates moving from table relationship editing to visual node + connection hierarchy view',
            ]}
          >
            <p className="font-medium mb-2">Problem with current UI</p>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base leading-6 text-[#1e3543]">
              <li>
                Connections are split into &ldquo;Accepting Feeding From&rdquo;
                and &ldquo;Feeding To&rdquo;
              </li>
              <li>Relationships exist across multiple rows</li>
              <li>Users must mentally build the structure</li>
            </ul>
            <p className="mt-4 font-medium mb-2">Optional solution:</p>
            <p>
              If we visualize fund relationships as a connected hierarchy
              instead of separated rows, users will understand system structure
              faster and make fewer configuration mistakes.
            </p>
          </HypothesisBlock>

          <HypothesisBlock
            number={2}
            title="Users lack confidence because they can't validate the full system state in one place"
            whyLabel="Why it works:"
            bullets={[
              'Drives need for at-a-glance system map supports status + allocation displayed directly on nodes/edges',
            ]}
          >
            <p className="font-medium mb-2">Problem with current UI</p>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base leading-6 text-[#1e3543]">
              <li>
                Status, percentage, class, and direction are spread across
                inputs
              </li>
              <li>No single &ldquo;source of truth view&rdquo;</li>
              <li>Hard to verify downstream impact of a change</li>
            </ul>
            <p className="mt-4 font-medium mb-2">Optional solution:</p>
            <p>
              If users can see all funds, states, and allocations in one visual
              system view, they will configure connections with higher confidence
              and fewer validation errors.
            </p>
          </HypothesisBlock>
        </div>
      </Section>

      {/* ── 7. Making System Logic Visible ──────────────── */}
      <Section>
        <SectionTitle title="Making System Logic Visible Through Design">
          <p>
            Based on these hypotheses, we explored solutions that shift the
            experience from form-based configuration to system-level
            understanding. This led to designing a visual hierarchy that exposes
            relationships, status, and allocations in context, enabling users to
            reason about the system, not just configure it.
          </p>
          <p className="mt-4">
            The final solution validates the initial hypotheses by improving
            clarity, reducing cognitive load, and enabling faster, more confident
            configuration workflows.
          </p>
        </SectionTitle>
      </Section>

      {/* ── 8. Legacy View Block ────────────────────────── */}
      <Section bg="bg-[#f5f5f5]">
        <InsightBlock label="Fund Hierarchy (Legacy View)">
          <p className="text-lg md:text-xl font-medium mb-4">
            Why the current structure falls short
          </p>
          <p>
            The existing fund hierarchy is created using a table-based
            structure. While this approach works for listing data, it introduces
            significant limitations when modeling complex parent-child fund
            relationships.
          </p>
        </InsightBlock>
      </Section>

      {/* ── 9. Design Principle ─────────────────────────── */}
      <Section>
        <SectionTitle title="Design Principle">
          <p>Expose structure before interaction.</p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Relationships are spatial, not abstract',
            'Drag-and-drop mirrors mental models',
            'Identity, type, and status are visible immediately',
          ]}
        />

        <div className="mt-8">
          <InsightBlock label="Insight:">
            <p>The goal wasn&rsquo;t speed. It was confidence.</p>
          </InsightBlock>
        </div>

        <div className="mt-8">
          <InsightBlock label="Hierarchy View (Canvas-Based)">
            <p className="text-lg md:text-xl font-medium mb-4">
              A visual, intuitive way to build fund hierarchies
            </p>
            <p>
              This new hierarchy view replaces the legacy table-based structure
              with a canvas-driven, drag-and-drop experience. Funds are
              represented as nodes, and their relationships are shown visually,
              making complex structures easy to understand and manage.
            </p>
          </InsightBlock>
        </div>

      </Section>

      {/* Canvas-based hierarchy image — extra wide */}
      <div className="max-w-[2016px] mx-auto px-6 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-24">
        <CaseStudyImage
          src={imgImage197}
          alt="Canvas-based hierarchy view"
          className="rounded-lg"
        />
      </div>

      {/* ── 10. Design Flow (wider images) */}
      <section className="w-full py-12 md:py-16 lg:py-24 bg-white">
        {/* Title stays at standard width */}
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16">
          <SectionTitle title="Design flow">
            <p>Expose structure before interaction.</p>
          </SectionTitle>
        </div>
        {/* Images use a wider container (~1680px) */}
        <div className="max-w-[1680px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col gap-4 md:gap-6">
            <CaseStudyImage src={imgImage198} alt="Design flow step 1" />
            <CaseStudyImage src={imgImage199} alt="Design flow step 2" />
            <CaseStudyImage src={imgImage179} alt="Design flow step 3" />
            <CaseStudyImage src={imgImage200} alt="Design flow step 4" />
            <CaseStudyImage src={imgImage201} alt="Design flow step 5" />
          </div>
        </div>
      </section>

      {/* ── 11. Outcome ─────────────────────────────────── */}
      <Section bg="bg-[#f5f5f5]">
        <InsightBlock label="Outcome">
          <p>
            The canvas-based hierarchy turns fund configuration from a manual,
            form-heavy task into a clear, interactive, and confidence-driven
            workflow&mdash;allowing users to reason about structure the same way
            they think about it.
          </p>
        </InsightBlock>
      </Section>

      {/* ── 12. (moved to section 5) ──────────────────── */}

      {/* ── 13. Final Quote ─────────────────────────────── */}
      <ImageWithQuote
        src={imgImage183}
        alt="Fundguard closing"
        preQuote={`"Enterprise UX succeeds when users stop fighting the interface`}
        quote='and start reasoning about the system"'
      />
      </CaseStudyBody>
    </>
  );
}
