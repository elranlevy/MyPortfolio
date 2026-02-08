import svgPaths from './svg-6er71w85ab';
import imgEllipse1 from 'figma:asset/cb6c26a26eb13e90ea5ecf24823f3c986006a5f1.png';
import imgEllipse2 from 'figma:asset/3b45a734486c2ad109272a29a0304264a8841680.png';
import imgEllipse3 from 'figma:asset/c057367220688f95b8d2e907199fe1e71309cf14.png';
import imgEllipse4 from 'figma:asset/82c97c6e06591eb530f740c7bf70ff2dded31977.png';
import imgImage195 from 'figma:asset/135037eee94c070be011542ce34df21d09e0887c.png';
import imgImage196 from 'figma:asset/d2bbf953c2e0dff1f47983ab05675e22222adadc.png';
import imgStep4 from 'figma:asset/e528a6e576ff61dfdedceda779b402b8cad6f7a3.png';
import imgImage190 from 'figma:asset/5f1af89856aef65d1b868e8219fddf2446fec50b.png';
import imgImage189 from 'figma:asset/e2ace24a2f436bfdff66fee0efc67986b23bea69.png';
import imgImage193 from 'figma:asset/daf1651f8cbfbc84a76190121c487237936e8e2c.png';
import imgBoardWithCactusAndPhone15313006711 from 'figma:asset/1283a766b980685a64313cdeb5ba880f6d1b751a.png';


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
  ImageGrid,
} from '@/app/components/case-study/CaseStudyPrimitives';

/* ── Monday.com Logo (SVG) ──────────────────────────────── */
function MondayLogo() {
  return (
    <svg
      className="w-full h-auto"
      fill="none"
      viewBox="0 0 335.374 69.7297"
    >
      <path d={svgPaths.p3fb55a00} fill="#FB275D" />
      <path d={svgPaths.p2c590700} fill="#FFCC00" />
      <path d={svgPaths.pfa68400} fill="#00CA72" />
      <path
        clipRule="evenodd"
        d={svgPaths.p26892b00}
        fill="black"
        fillRule="evenodd"
      />
    </svg>
  );
}

/* ============================================================
   MONDAY.COM CASE STUDY — Responsive Rewrite
   ============================================================ */
export default function CaseStutyMondayConent() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <CaseStudyHero
        logo={<MondayLogo />}
        title="Designing Confidence at the Moment of Commitment"
        subtitle="When users are ready — but afraid to choose wrong"
        heroImage={imgBoardWithCactusAndPhone15313006711}
        heroImageAlt="monday.com board with phone"
      />

      <CaseStudyBody>
      {/* ── 2. The Challenge ────────────────────────────── */}
      <Section>
        <SectionTitle title="The Challenge" className="!mb-4 md:!mb-6">
          <p className="mb-1">
            The end of a free trial is not a neutral state — it&rsquo;s a moment
            of commitment under uncertainty.
          </p>
          <p>What we saw:</p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Strong engagement during the trial',
            'Sharp drop-off at plan selection',
            'Repeated hesitation between Standard and Pro',
            'Users leaving instead of choosing "wrong"',
          ]}
        />

        <div className="mt-10 md:mt-14 flex flex-col gap-1 text-sm md:text-base leading-6 tracking-[0.64px] text-[#1e3543]">
          <p>This wasn&rsquo;t about pricing sensitivity or feature gaps.</p>
          <p>
            It was about <span className="font-medium">decision confidence</span>.
          </p>
          <p>They were asking:</p>
    </div>

        <div className="mt-4">
          <InfoBoxGrid
            items={[
              'Which plan fits how we actually work?',
              'What if we outgrow this next month?',
              'Am I locking us into the wrong choice?',
            ]}
          />
      </div>

        <p className="mt-12 md:mt-16 text-base md:text-lg lg:text-xl font-normal text-[#182730]">
          The challenge was to design a moment that helps users commit without
          regret.
        </p>
      </Section>

      {/* ── 3. Personas ─────────────────────────────────── */}
      <Section>
        <SectionTitle title="Choosing the Right Plan Shouldn't Feel Risky">
          <p>
            After the trial ends, users struggle to understand which tier fits
            their real needs. Each plan supports different workflows, but unclear
            comparisons and hidden limitations make upgrading feel uncertain and
            stressful.
          </p>
        </SectionTitle>

        <PersonaCardGrid
          personas={[
            {
              name: 'David Hope',
              role: 'Team Lead',
              image: imgEllipse1,
              quote:
                "Once the trial ended, it wasn't clear which plan actually fit my team's needs. Every tier sounded similar, but the limitations only appeared too late.",
            },
            {
              name: 'Amit Sharon',
              role: 'Operations Manager',
              image: imgEllipse2,
              quote:
                'Each plan supports a different workflow, but comparing them felt overwhelming. I was afraid of choosing the wrong tier and blocking my team.',
            },
            {
              name: 'Mick moshes',
              role: 'Startup Founder',
              image: imgEllipse3,
              quote:
                "Upgrading felt risky. I needed clarity on what I'd gain immediately versus what I'd outgrow in a few months.",
            },
            {
              name: 'Gabriel dd',
              role: 'Project Manager',
              image: imgEllipse4,
              quote:
                "I didn't mind paying, but I needed confidence. It was hard to understand which features were essential for my day-to-day work.",
            },
          ]}
        />
      </Section>

      {/* ── 4. Approach ─────────────────────────────────── */}
      <Section>
        <SectionTitle title="How I Approached the Problem" className="!mb-4 md:!mb-6">
          <p>
            Designing for Decision Anxiety, Not Conversion Metrics. Rather than
            optimizing for click-through or upsell pressure, I focused on:
          </p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Where users paused',
            'Where they hovered without acting',
            'Where they exited the flow entirely',
          ]}
        />

        <div className="mt-12 md:mt-16">
          <InsightBlock label="Key insight:">
            <p className="text-lg md:text-xl lg:text-2xl font-medium mb-4">
              Abandonment wasn&rsquo;t rejection — it was avoidance.
            </p>
            <p>
              When the perceived cost of a wrong decision felt higher than the
              value of continuing, users chose to leave.
            </p>
            <p className="mt-2">So the problem to solve became:</p>
            <p>
              How do we help users feel safe choosing, even with incomplete
              information?
            </p>
          </InsightBlock>
    </div>
      </Section>

      {/* ── 5. Making Choice Feel Safe ──────────────────── */}
      <Section>
        <SectionTitle title="Making Choice Feel Safe" className="!mb-4 md:!mb-6">
          <p>
            Design Principle: &ldquo;Lower the risk of choosing — not the
            price.&rdquo;
          </p>
          <p>
            Instead of persuasion or incentives, the strategy focused on:
          </p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Clarity over urgency',
            'Context over feature volume',
            'Reversibility over pressure',
          ]}
        />

        <p className="mt-8 text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543]">
          This meant working entirely within existing constraints:
        </p>

        <div className="mt-4">
          <InfoBoxGrid
            items={[
              'No new plans',
              'No pricing changes',
              'No promotional mechanics',
            ]}
          />
    </div>

        <p className="mt-6 text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543]">
          Only clearer decision support.
        </p>
      </Section>

      {/* ── 6. Design Process ───────────────────────────── */}
      <Section>
        <SectionTitle title="Design Process">
          <p>
            Users struggled to choose the right plan after the trial ended. Plan
            names alone (&ldquo;Standard&rdquo;, &ldquo;Pro&rdquo;) didn&rsquo;t
            map clearly to real usage, creating uncertainty, hesitation, and
            downgrade regret.
          </p>
          <p className="mt-2">
            This solution reframes plan selection around actual behavior, not
            abstract feature lists.
          </p>
        </SectionTitle>

        <div className="flex flex-col gap-6 md:gap-8">
          <HypothesisBlock
            number={1}
            title="If users see a plan recommendation based on their own activity, they will feel more confident selecting a plan."
            bullets={[
              'Anchors the decision in personal data',
              'Reduces anxiety at a high-stakes conversion moment',
              'Shifts the product from seller → advisor',
            ]}
          >
            <p>
              Instead of forcing users to self-diagnose their needs, the
              experience analyzes trial usage and surfaces a clear recommendation
              (&ldquo;Based on your activity during the trial&rdquo;). This
              reduces cognitive load and replaces guesswork with reassurance.
            </p>
            <p className="mt-2">
              The &ldquo;Recommended for you&rdquo; label acts as a trust
              signal, guiding users without removing choice.
            </p>
          </HypothesisBlock>

          <HypothesisBlock
            number={2}
            title="If users can visually compare how their usage maps to each plan, they are more likely to understand the value difference."
            bullets={[
              'Makes plan limitations visible before purchase',
              'Prevents accidental under-selection',
              'Turns feature gating into a transparent system, not a surprise',
            ]}
          >
            <p>
              The usage breakdown (&ldquo;Board views&rdquo;, &ldquo;Advanced
              views&rdquo;, &ldquo;Dashboards &amp; workload&rdquo;) translates
              abstract plans into concrete behaviors. Color-coded progress bars
              and plan badges (&ldquo;Standard&rdquo;, &ldquo;Partial&rdquo;,
              &ldquo;Pro&rdquo;) help users instantly see alignment gaps.
            </p>
          </HypothesisBlock>

          <HypothesisBlock
            number={3}
            title="If the recommended plan highlights benefits — not just features — users will perceive higher value and convert faster."
            bullets={[
              'Reframes pricing as value reinforcement',
              'Leverages sunk usage and momentum',
              'Aligns product language with user goals, not internal taxonomy',
            ]}
          >
            <p>
              The Pro plan doesn&rsquo;t just list what&rsquo;s included; it
              explains why it matters (&ldquo;team visibility&rdquo;,
              &ldquo;capacity planning&rdquo;). This connects features to
              outcomes users already experienced during the trial, reinforcing
              that upgrading is a continuation — not a risk.
            </p>
          </HypothesisBlock>
      </div>
      </Section>

      {/* ── 7. Outcome ──────────────────────────────────── */}
      <Section>
        <SectionTitle title="Outcome">
          <p>
            This solution turns plan selection into a guided, data-driven
            decision. By grounding recommendations in real usage, visualizing
            fit, and emphasizing outcomes, users can confidently choose the right
            plan — while the product increases conversion and reduces churn from
            misaligned upgrades.
          </p>
        </SectionTitle>
      </Section>

      {/* ── 8. A/B Test ─────────────────────────────────── */}
      <Section>
        <SectionTitle title="A/B Test: Pro Recommendation Experience">
          <p>
            I&rsquo;ve tested two upgrade experiences — a generic recommendation
            vs. a usage-based personalized recommendation — to measure impact on
            Pro conversion. Results showed the usage-driven experience increased
            trust and led to higher upgrade rates.
          </p>
        </SectionTitle>

        {/* Variant descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-normal mb-2">Variant A</h3>
            <p className="text-sm md:text-base leading-6 text-black">
          Pattern: Recommendation + Feature explanation + Why banner
              <br />
              Mental model: &ldquo;Trust us — Pro is better for you.&rdquo;
        </p>
      </div>
          <div>
            <h3 className="text-lg md:text-xl font-normal mb-2">Variant B</h3>
            <p className="text-sm md:text-base leading-6 text-black">
          Pattern: Recommendation + Usage proof + Recommendation
              <br />
              Mental model: &ldquo;Here&rsquo;s evidence — Pro fits how you
              work.&rdquo;
        </p>
      </div>
        </div>

        {/* Variant images */}
        <div className="mt-6 md:mt-8">
          <ImageGrid images={[imgImage190, imgImage189]} columns={2} alt="A/B test variant" />
    </div>

        {/* Results section */}
        <div className="mt-12 md:mt-16">
          <SectionTitle title="Usage-Driven Recommendations Increased Pro Conversions by 35%">
            <p>
              We tested two upgrade experiences — a generic recommendation vs. a
              usage-based personalized recommendation — to measure impact on Pro
              conversion. The usage-driven experience increased conversion from
              4.0% to 5.4%, delivering a 35% relative uplift and higher user
              trust in the upgrade recommendation.
            </p>
          </SectionTitle>
      </div>

        {/* Step 4 / final visual */}
        <div className="mt-8 bg-[#66697b] rounded-xl p-4 md:p-8">
          <CaseStudyImage
            src={imgStep4}
            alt="A/B test result step 4"
            className="rounded-lg"
          />
    </div>
      </Section>

      {/* ── 9. Visual Guidance ──────────────────────────── */}
      <section className="w-full py-12 md:py-16 lg:py-24 bg-[#f5f5f5]"
        style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' }}
      >
        {/* Title at standard width */}
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16">
          <SectionTitle title="Helping Users Choose the Right Plan with Visual Guidance">
            <p>
              During the trial end flow, we saw that many users reached the
              pricing screen but struggled to confidently choose a tier. While the
              table showed features and limits, it required high cognitive effort
              to understand the real differences and how each plan fit their
              team&rsquo;s needs. This created hesitation and slowed
              decision-making at a critical conversion moment.
            </p>
          </SectionTitle>
        </div>

        {/* Image at 40% wider container */}
        <div className="max-w-[1720px] mx-auto px-6 md:px-8 lg:px-12">
          <CaseStudyImage
            src={imgImage195}
            alt="Plan selection interface"
            className="rounded-lg"
          />
        </div>

        {/* Explanatory text */}
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16 mt-8 md:mt-12">
          <div className="text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543]">
            <p>
              To reduce friction, we introduced short explainer videos directly in
              the decision flow. The videos visually walk through how each tier
              supports different team sizes, workflows, and scale scenarios. By
              turning abstract feature lists into real usage stories, users can
              quickly understand which plan fits them best, feel more confident in
              their choice, and move forward faster.
            </p>
          </div>
        </div>

        {/* Plan comparison image — wider, cropped 20% from edges */}
        <div className="max-w-[1720px] mx-auto px-6 md:px-8 lg:px-12 mt-8">
          <div className="overflow-hidden rounded-lg">
            <img
              src={imgImage196}
              alt="Plan comparison flow"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover scale-[1.25]"
            />
          </div>
        </div>

        {/* Why Standard / Why Pro boxes — under plan comparison image */}
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-[#d0d0d1] rounded-2xl aspect-[5/2] flex items-center justify-center p-6">
              <p className="text-base md:text-lg lg:text-xl text-black">
                Why Standard
              </p>
            </div>
            <div className="bg-[#d0d0d1] rounded-2xl aspect-[5/2] flex items-center justify-center p-6">
              <p className="text-base md:text-lg lg:text-xl text-black">
                Why pro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Outcome Quote ───────────────────────────── */}
      <QuoteBanner bg="bg-[#f5f5f5] !pb-6 md:!pb-10" className="text-sm md:text-xl lg:text-[29px] font-extralight text-center leading-relaxed tracking-[-0.72px] text-black">
        The improved experience led to a significant increase in product
        adoption and engagement, driving a 170% growth in usage. By reducing
        friction, increasing clarity, and giving users faster financial
        control, the product shifted from a functional tool to a daily
        business essential.
      </QuoteBanner>

      {/* ── 11. Final Quote ─────────────────────────────── */}
      <ImageWithQuote
        src={imgImage193}
        alt="Monday.com closing"
        preQuote={`"Good monetization UX doesn't push users to pay.`}
        quote='It removes the fear of saying yes״'
      />
      </CaseStudyBody>
    </>
  );
}
