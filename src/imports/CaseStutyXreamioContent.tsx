import imgScreenshot20260201At1548372 from 'figma:asset/fb3912313a3db48cca0deeaabe76da38bd229246.png';
import imgScreenshot20260201At1548421 from 'figma:asset/9b127abdf1ca80ed7736b79843dd72681dbe0ecb.png';
import imgScreenshot20260201At1548491 from 'figma:asset/34ccd3f99a378bbd2b72352640f025671246b093.png';
import imgHealthStatus from 'figma:asset/1310cf6034e7996a8a437beaf595a9e75ee70205.png';
import imgImage172 from 'figma:asset/d39fb3cca29d3b2153e74727f2bd2167584b2b3c.png';
import imgXtremIo1 from 'figma:asset/5e9fd7b34040b77efd1c255227d85dbe85ae94c9.png';
import imgImage175 from 'figma:asset/8283c758f682797739df887f6aa3e29caa08732e.png';

import imgBitmap from 'figma:asset/180cc76a8505e3e53aa3b8fd86799e8eecaafaaa.png';
import imgBitmap1 from 'figma:asset/f08631ad34a4d9a9dd963f04e17f3a6e1d2d3cfd.png';
import imgImage174 from 'figma:asset/dc4843ec408a4532c53cdacb5ed2533eecd0dc2e.png';
import imgImage176 from 'figma:asset/d4d58b02892ddfba3736780450879b582c47390e.png';
import imgImage177 from 'figma:asset/84697da8fef42b33bbdcddc2442ef98a82019325.png';
import imgImage178 from 'figma:asset/d7831a442bc44faf1090c9e711599d69abfabc41.png';

import {
  Section,
  SectionTitle,
  InfoBoxGrid,
  InsightBlock,
  CaseStudyImage,
  ImageWithQuote,
  CaseStudyHero,
  CaseStudyBody,
  SkillCardGrid,
} from '@/app/components/case-study/CaseStudyPrimitives';

/* ── XtreamIO Logo (image-based) ────────────────────────── */
function XtreamioLogo() {
  return <img src={imgXtremIo1} alt="XtreamIO" className="w-full h-auto object-contain" />;
}

/* ── Persona stage card (unique to XtreamIO) ────────────── */
function StageCard({
  stage,
  emotional,
  image,
  description,
  mentalState,
}: {
  stage: string;
  emotional: string;
  image: string;
  description: string;
  mentalState: string;
}) {
  return (
    <div className="bg-[#f5f5f5] flex flex-col items-center gap-6 md:gap-8 p-6 md:p-10 overflow-hidden">
      <div className="flex flex-col items-center gap-3 md:gap-4">
        <p className="uppercase font-bold text-[#467294] text-sm tracking-[1.6px]">
          {stage}
        </p>
        <p className="text-lg md:text-xl text-black text-center">{emotional}</p>
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden">
          <img src={image} alt={stage} loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
      </div>
      <p className="font-light text-sm md:text-base leading-7 text-[#1e3543] text-center max-w-lg tracking-[0.64px]">
        {description}
      </p>
      <p className="text-sm md:text-base text-black text-center tracking-[0.64px]">
        <span className="capitalize font-medium tracking-[1.6px]">Mental state</span>
        <span className="font-light">: {mentalState}</span>
      </p>
    </div>
  );
}

/* ============================================================
   XTREAMIO CASE STUDY — Responsive Rewrite
   ============================================================ */
export default function CaseStutyXreamioContent() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <CaseStudyHero
        logo={<XtreamioLogo />}
        title="XTREAM — Designing Awareness in Systems That Never Stop"
        subtitle="When losing context means losing control"
        heroImage={imgImage175}
        heroImageAlt="XtreamIO dashboard"
        heroImageClassName="w-full max-w-3xl lg:max-w-4xl flex items-center [&>img]:max-h-[40vh]"
      />

      <CaseStudyBody>
      {/* ── 2. The Challenge ────────────────────────────── */}
      <Section>
        <SectionTitle title="The Challenge">
          <p>Operators needed to:</p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Understand connectivity instantly',
            'Inspect details without losing the big picture',
            'Monitor health, performance, and capacity together',
          ]}
        />

        <p className="mt-8 text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543]">
          Xtream operates in environments where:
        </p>

        <div className="mt-4">
          <InfoBoxGrid
            items={[
              'Systems are deeply interconnected',
              'Small changes cascade',
              'Losing orientation is dangerous',
            ]}
          />
        </div>

        <div className="mt-8">
          <InsightBlock label="">
            <p>
              The challenge was not showing data. It was keeping users grounded
              inside complexity.
            </p>
          </InsightBlock>
        </div>
      </Section>

      {/* ── 3. User Persona ─────────────────────────────── */}
      <Section>
        <SectionTitle title="Get to Know the User — Backup Bob">
          <p>
            To design an effective backup and recovery experience, I focused on
            understanding Bob&rsquo;s mental state across different operational
            moments. Bob is a Backup Administrator responsible for keeping
            virtual machines protected, monitored, and recoverable under
            pressure. His emotional state shifts significantly depending on
            system stability and urgency.
          </p>
        </SectionTitle>

        <div className="flex flex-col gap-6 md:gap-8">
          <StageCard
            stage="Maintenance Stage"
            emotional="Calm & In Control"
            image={imgScreenshot20260201At1548372}
            description="During routine maintenance, Bob feels confident and relaxed. He has time to plan, manage virtual machines, and define recovery strategies without pressure. Decisions are thoughtful and proactive, allowing him to optimize future recovery scenarios."
            mentalState="Low stress, high control, forward-thinking."
          />
          <StageCard
            stage="Overview Stage"
            emotional="Alert & Cautious"
            image={imgScreenshot20260201At1548421}
            description="In day-to-day monitoring, Bob's focus shifts to vigilance. Most of his time is spent ensuring systems are protected, identifying potential issues, and responding before they escalate. While not urgent, the responsibility keeps him mentally engaged and slightly tense."
            mentalState="Moderate stress, high awareness, reactive readiness."
          />
          <StageCard
            stage="Crisis Stage"
            emotional="Urgent & Overloaded"
            image={imgScreenshot20260201At1548491}
            description="When a failure occurs, Bob's stress peaks. Time is critical, and mistakes are costly. He needs immediate clarity, fast actions, and absolute confidence that the recovery process will work as planned. Any friction or uncertainty directly increases pressure."
            mentalState="High stress, urgency-driven, zero tolerance for friction."
          />
        </div>
      </Section>

      {/* ── 4. Ideation Insights ────────────────────────── */}
      <Section>
        <SectionTitle title="Ideation Insights">
          <p>
            After four days of intensive ideation, user interviews, and system
            analysis, we synthesized our findings into six key insights. These
            insights capture the core challenges, mental states, and unmet needs
            of backup administrators across routine operations and high-pressure
            moments. They became the foundation for our design decisions,
            helping us focus on reducing cognitive load, increasing clarity, and
            supporting fast, confident action when it matters most.
          </p>
        </SectionTitle>

        <SkillCardGrid
          cards={[
            { label: 'First Insight', title: 'Clear Overview — "Let me see only what I need when I need it"' },
            { label: 'Second Insight', title: 'Automation — "Ask for only for the minimum, automate the rest"' },
            { label: 'Third Insight', title: 'System Recover — "Watch my back"' },
            { label: 'Fourth Insight', title: 'Clear & Simple Direction — "Speak my language"' },
            { label: 'Fifth Insight', title: 'Guide & Control — "Show me the way, but let me decide"' },
            { label: 'Sixth Insight', title: 'Clear Overview — "Be optimistic"' },
          ]}
        />
      </Section>

      {/* ── 5. Setup Flow ───────────────────────────────── */}
      <Section>
        <SectionTitle title="From a Complex Setup to a Clear, Guided Flow">
          <p>
            The legacy protection flow required users to move through multiple
            disconnected steps, forcing them to make low-level technical
            decisions early in the process. This created a long, error-prone
            path with high cognitive load, especially for first-time or
            time-constrained users.
          </p>
        </SectionTitle>

        <CaseStudyImage src={imgBitmap} alt="Legacy protection flow" className="rounded-lg" />

        <p className="mt-8 text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543]">
          In the redesigned flow, the process is reduced to its core decisions.
          Users start by selecting the virtual machines, choose an existing
          policy, and complete the setup in a single, linear path. Advanced
          configuration is available when needed, without blocking progress.
        </p>

        <div className="mt-6">
          <CaseStudyImage src={imgBitmap1} alt="Redesigned protection flow" className="rounded-lg" />
        </div>

        <p className="mt-8 text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543]">
          This shift transforms the experience from a configuration-heavy
          wizard into a goal-oriented flow&mdash;reducing setup time,
          minimizing mistakes, and helping backup administrators complete
          protection tasks with confidence and speed.
        </p>
      </Section>

      {/* ── 6. Large Dashboard Image ────────────────────── */}
      <Section>
        <CaseStudyImage src={imgImage172} alt="Dashboard overview" className="rounded-lg" />
      </Section>

      {/* ── 7. Dashboard Overview ───────────────────────── */}
      <Section>
        <SectionTitle title="Dashboard Overview with Mega Tabs (Health / Performance / Capacity) — Information at the Right Level">
          <p>
            The dashboard is organized around three high-level mega tabs:
            Health, Performance, and Capacity. Each tab surfaces the most
            critical information for that domain, allowing administrators to
            quickly understand system status without digging through multiple
            screens.
          </p>
        </SectionTitle>

        <CaseStudyImage src={imgImage174} alt="Health mega tab" className="rounded-lg" />

        <p className="mt-8 text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543]">
          This structure reduces cognitive load by grouping related metrics into
          a single, focused view. Instead of scanning scattered data points,
          users can assess system health, performance trends, or capacity risks
          at a glance and then drill down only when needed.
        </p>

        <div className="mt-6">
          <CaseStudyImage src={imgImage175} alt="Performance mega tab" className="rounded-lg" />
        </div>

        <p className="mt-8 text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543]">
          By presenting high-level signals first and detailed insights second,
          the mega tabs support fast decision-making during routine monitoring
          and high-pressure situations alike&mdash;helping backup administrators
          stay in control and act with confidence.
        </p>

        <div className="mt-6">
          <CaseStudyImage src={imgImage176} alt="Capacity mega tab" className="rounded-lg" />
        </div>
      </Section>

      {/* ── 8. Cluster Connectivity ─────────────────────── */}
      <Section>
        <SectionTitle title="Cluster Connectivity — Clear Status at a Glance">
          <p>
            The cluster connectivity component provides an immediate, visual
            understanding of the relationship between the XMS and the cluster.
            By using consistent icons, colors, and connection lines,
            administrators can instantly identify the current state without
            interpreting logs or alerts.
          </p>
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Status descriptions */}
          <div className="flex flex-col gap-6">
            {[
              {
                title: 'Connected',
                desc: 'Both systems are communicating normally. The solid connection line and green indicators confirm that the cluster is healthy and fully operational.',
              },
              {
                title: 'Disconnected',
                desc: 'Communication between the XMS and the cluster is interrupted. The broken connection line and red indicator clearly signal an issue that requires attention.',
              },
              {
                title: 'Unknown',
                desc: "The system cannot determine the cluster's status. Neutral colors and a dashed connection indicate uncertainty, while contextual hints provide guidance without creating false alarms.",
              },
              {
                title: 'Initializing',
                desc: 'The cluster is in the process of establishing a connection. The active state is visually communicated without triggering unnecessary concern.',
              },
            ].map((item, i) => (
              <div key={i} className="pb-6 border-b border-[#d6d6d6] last:border-0">
                <h4 className="text-lg md:text-xl font-medium text-[#182730] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base leading-7 tracking-[0.32px] text-[#1e3543]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Health status image */}
          <div>
            <CaseStudyImage src={imgHealthStatus} alt="Cluster connectivity states" />
          </div>
        </div>

        <div className="mt-8">
          <InsightBlock label="">
            <p>
              This approach reduces ambiguity during monitoring and crisis
              moments, allowing backup administrators to quickly understand
              what&rsquo;s happening, why it matters, and when action is
              required.
            </p>
          </InsightBlock>
        </div>
      </Section>

      {/* ── 9. Master-Detail View ───────────────────────── */}
      <Section>
        <SectionTitle title="Master–Detail View - From Overview to Action">
          <p>
            The Data Protection overview provides a high-level snapshot of
            system health, compliance, and active sessions. Selecting an item in
            the topology instantly reveals detailed information in the side
            panel, allowing administrators to move from monitoring to
            investigation without leaving the page.
          </p>
        </SectionTitle>

        <p className="text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543] mb-6">
          This master&ndash;detail approach keeps the main context visible while
          surfacing relevant details on demand&mdash;reducing navigation,
          preserving orientation, and enabling faster, more confident
          decision-making.
        </p>

        <CaseStudyImage src={imgImage178} alt="Master-detail view" className="rounded-lg" />
      </Section>

      {/* ── 10. Impact ──────────────────────────────────── */}
      <Section>
        <SectionTitle title="Impact">
          <p>
            This is how fund operations should feel: clear, visible, and
            grounded.
          </p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Faster scanning',
            'Safer decision-making',
            'Reduced operational risk',
          ]}
        />
      </Section>

      {/* ── 11. Final Quote ─────────────────────────────── */}
      <ImageWithQuote
        src={imgImage177}
        alt="XtreamIO closing"
        preQuote={`"Great monitoring UX doesn't simplify systems. It makes them:`}
        quote='understandable under pressure"'
      />
      </CaseStudyBody>
    </>
  );
}
