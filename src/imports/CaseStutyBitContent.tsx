import imgEllipse1 from 'figma:asset/059c1940a66a2b6f8d6dd7cf9c7710f94ac93ea2.png';
import imgEllipse2 from 'figma:asset/98ef6cb4627779c873bfb97a18fcba5a23821b40.png';
import imgEllipse3 from 'figma:asset/b72b007ab2ad06f7c7e5d125876be6687603c3b5.png';
import imgEllipse4 from 'figma:asset/0236ee368fab9196ebb4c0d8a230aa9c2a35194a.png';
import imgScreenshot20260117At1652451 from 'figma:asset/e64a0ae7bc9796ddca28213c8a05731694f94819.png';
import imgChatGptImageJan202026033030Pm3 from 'figma:asset/4c11345fee1a9d78c6af53accb32026ba3e3ac02.png';
import imgGeminiGeneratedImageWc9C1Ewc9C1Ewc9C1 from 'figma:asset/5feab8bac594302a8302fdd64fe6eece75d24b67.png';
import imgImage150 from 'figma:asset/d3b1e547b25342e7b5d88f0e05c1c68836ae8945.png';
import imgBitmap1 from 'figma:asset/c3824c9df36afda5547813207b149b8b1f2c0248.png';
import imgBitmap2 from 'figma:asset/0548238f64a99fe660038d78665a891c1c8a0417.png';
import imgBitmap3 from 'figma:asset/51a18d2e75a4fe5fd22aa2d222679fcd88d11c6a.png';
import imgBitmap4 from 'figma:asset/80fd31eb4604684192b81bec32bafaa092c0e83e.png';
import imgBitmap5 from 'figma:asset/f322bc6139a79b875d3c0752bda13b57284d98aa.png';
import imgImage174 from 'figma:asset/9aa95d8eb0fd0ce4be192c55fe7cabe0274d4291.png';
import imgImage173 from 'figma:asset/7be02b18252a40ad2435780687ae53709599c1e2.png';
import imgImage172 from 'figma:asset/9bfc7cf59ce8da8ea8af1a307dd1b205b59fe454.png';
import imgScreenShot20200904At203224 from 'figma:asset/b24a6933276b23eb0257405e8532b066b7ce6c41.png';
import imgBitLogo1 from 'figma:asset/e81ee1f6e773b46358e217a1f5e22e680551ec1b.png';

import imgImage192 from 'figma:asset/8392e06806bcf1377ff0e200b52a3c374ccd9fe0.png';

import {
  Section,
  SectionTitle,
  InfoBoxGrid,
  PersonaCardGrid,
  InsightBlock,
  CaseStudyImage,
  QuoteBanner,
  ImageWithQuote,
  CaseStudyHero,
  CaseStudyBody,
  SkillCardGrid,
  ImageGrid,
} from '@/app/components/case-study/CaseStudyPrimitives';

/* ── Bit Logo (image-based) ─────────────────────────────── */
function BitLogo() {
  return <img src={imgBitLogo1} alt="Bit" className="w-1/2 h-auto object-contain mx-auto" />;
}

/* ============================================================
   BIT CASE STUDY — Responsive Rewrite
   ============================================================ */
export default function CaseStutyBitContent() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <CaseStudyHero
        logo={<BitLogo />}
        title="Making Money Transfer Feel Effortless"
        subtitle="When speed and trust are non-negotiable"
        heroImage={imgScreenShot20200904At203224}
        heroImageAlt="Bit app screens"
        heroImageClassName="w-full max-w-[1720px] flex items-center"
      />

      <CaseStudyBody>
      {/* ── 2. The Challenge ────────────────────────────── */}
      <Section>
        <SectionTitle title="The Challenge" className="!mb-5 md:!mb-7">
          <p>Sending money is a high-stress action:</p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Users fear mistakes',
            'Flows are legally and technically complex',
            'One wrong step = loss of trust',
          ]}
        />

        <p className="mt-8 text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543]">
          At the same time, Bit needed:
        </p>

        <div className="mt-4">
          <InfoBoxGrid
            items={[
              'Extreme simplicity to drive viral adoption',
              'Speed — transfers had to feel instant',
              'Low cognitive load for everyday use',
            ]}
          />
        </div>

        <p className="mt-10 md:mt-14 text-lg md:text-xl font-normal text-[#182730]">
          The challenge was to compress a complex financial transaction into a
          flow that feels obvious and safe.
        </p>

        <p className="mt-4 text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543]">
          Sending money is a high-stress action:
        </p>

        <div className="mt-4">
          <InfoBoxGrid
            items={[
              'Extreme simplicity to drive viral adoption',
              'Speed — transfers had to feel instant',
              'Low cognitive load for everyday use',
            ]}
          />
        </div>
      </Section>

      {/* ── 3. Personas ─────────────────────────────────── */}
      <Section>
        <SectionTitle title="Reducing Friction Through Micro-Decisions" className="!mb-6 md:!mb-8">
          <p>Reading User Pain Points (Fast &amp; Continuously)</p>
          <p className="mt-2">
            Instead of over-researching upfront, I focused on rapid signal
            reading:
          </p>
        </SectionTitle>

        <PersonaCardGrid
          personas={[
            {
              name: 'Dani Danon',
              role: '',
              image: imgEllipse1,
              quote:
                'I was always worried about making a mistake and sending money to the wrong place',
            },
            {
              name: 'Amit Sharon',
              role: '',
              image: imgEllipse2,
              quote:
                'Between passwords, codes, and approvals, the process was confusing.',
            },
            {
              name: 'Shany refael',
              role: '',
              image: imgEllipse3,
              quote:
                "Transferring money wasn't convenient, so I usually avoided it unless I really had to",
            },
            {
              name: 'Micky din',
              role: '',
              image: imgEllipse4,
              quote:
                'I had to log in every time, and it felt like too many steps just to move money.',
            },
          ]}
        />
      </Section>

      {/* ── 4. Approach ─────────────────────────────────── */}
      <Section>
        <SectionTitle title="How I Approached the Problem?" className="!mb-6 md:!mb-8">
          <p>Reading User Pain Points (Fast &amp; Continuously)</p>
          <p className="mt-2">
            Instead of over-researching upfront, I focused on rapid signal
            reading:
          </p>
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 auto-rows-fr">
          {[
            'Where they abandon',
            'Where users hesitate',
            'Where they make errors',
            'Which steps trigger questions or support tickets',
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#f5f5f5] px-6 py-5 md:px-10 md:py-6 flex items-center"
            >
              <p className="text-sm md:text-base leading-6 tracking-[0.32px] text-[#1e3543]">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <InsightBlock label="Key insight:">
            <p className="text-lg md:text-xl font-medium mb-4">
              Users don&rsquo;t think in &ldquo;financial steps&rdquo; - they
              think in people &rarr; amount &rarr; confirmation.
            </p>
            <p>This insight became the backbone of the flow.</p>
          </InsightBlock>
        </div>
      </Section>

      {/* ── 5. Making a Complex Flow Feel Simple ────────── */}
      <Section bg="bg-[#f5f5f5]">
        <SectionTitle title="Making a Complex Flow Feel Simple">
          <p>Design Principle</p>
          <p>&ldquo;One decision per screen.&rdquo;</p>
          <p className="mt-2">
            I intentionally stripped each step down to a single mental action:
          </p>
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Steps column */}
          <div className="flex flex-col gap-6">
            {[
              {
                step: '1. Who am I paying?',
                desc: 'Choose the person you want to send money to. Double-check the name to avoid mistakes.',
              },
              {
                step: '2. How much am I sending?',
                desc: "Enter the amount you want to transfer. You'll see the total before it's sent.",
              },
              {
                step: '3. Why (optional, social context)?',
                desc: 'Add a short note to explain the payment. It helps keep things clear and personal.',
              },
              {
                step: '4. Confirm with full clarity',
                desc: 'Review the details one last time. When everything looks right, send with confidence.',
              },
            ].map((item, i) => (
              <div key={i} className="pb-6 border-b border-[#d6d6d6] last:border-0">
                <h4 className="text-lg md:text-xl font-medium text-[#182730] mb-2">
                  {item.step}
                </h4>
                <p className="text-sm md:text-base leading-7 tracking-[0.32px] text-[#1e3543]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Sketch image */}
          <div className="bg-[#d1d1d6] rounded-2xl overflow-hidden">
            <img
              src={imgScreenshot20260117At1652451}
              alt="Flow sketch"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-8 text-sm md:text-base leading-7 tracking-[0.64px] text-[#1e3543]">
          <p>
            Each screen removes noise and answers only the question users have
            at that moment.
          </p>
          <p className="mt-2">
            Lean design wasn&rsquo;t a style choice &mdash; it was a usability
            strategy.
          </p>
        </div>
      </Section>

      {/* ── 6. Iteration Process ────────────────────────── */}
      <Section>
        <InsightBlock label="Key insight:">
          <p className="text-lg md:text-xl font-medium mb-4">
            Lean design wasn&rsquo;t a style choice - it was a usability
            strategy.
          </p>
          <p>
            Speed mattered more than polish &mdash; decisions were made quickly,
            but never blindly.
          </p>
          <p>This insight became the backbone of the flow.</p>
        </InsightBlock>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-[#f0c] mb-2">
              1.Sketch, Test (Guerrilla Style)
            </p>
            <img
              src={imgChatGptImageJan202026033030Pm3}
              alt="Sketch phase"
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl border border-black"
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-[#f0c] mb-2">
              2.Gather insights, Fix issues
            </p>
            <img
              src={imgGeminiGeneratedImageWc9C1Ewc9C1Ewc9C1}
              alt="Insights phase"
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl border border-black"
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-[#f0c] mb-2">3.Release version</p>
            <img
              src={imgImage150}
              alt="Release phase"
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl border border-black"
            />
          </div>
        </div>
      </Section>

      {/* ── 7. Error States ─────────────────────────────── */}
      <Section>
        <InsightBlock label="Key insight:">
          <p className="text-lg md:text-xl font-medium mb-4">
            Lean design wasn&rsquo;t a style choice - it was a usability
            strategy.
          </p>
          <p>This insight became the backbone of the flow.</p>
        </InsightBlock>
      </Section>

      {/* Phone mockups — full width row */}
      <div className="max-w-[1720px] mx-auto px-6 md:px-8 lg:px-12 pb-12 md:pb-16">
        <ImageGrid
          images={[
            imgBitmap1,
            imgBitmap2,
            imgBitmap3,
            imgBitmap4,
            imgBitmap5,
          ]}
          columns={5}
          alt="Error state mockup"
        />
      </div>

      {/* ── 8. Intent → Selection ───────────────────────── */}
      <Section bg="bg-[#f5f5f5]">
        <SectionTitle title="Intent → Selection">
          <p>
            The flow begins with transfer intent, then narrows focus to
            recipient selection, using progressive disclosure to maintain
            context and minimize cognitive load.
          </p>
        </SectionTitle>
      </Section>

      <div className="max-w-[1331px] mx-auto px-6 md:px-8 lg:px-12 bg-[#f5f5f5] pb-12 md:pb-16">
        <CaseStudyImage src={imgImage172} alt="Intent to selection flow" />
      </div>

      {/* ── 9. App Screenshots ──────────────────────────── */}
      <div className="max-w-[1331px] mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <CaseStudyImage src={imgImage173} alt="Bit app flow overview" />
      </div>

      <div className="max-w-[1331px] mx-auto px-6 md:px-8 lg:px-12 bg-[#f5f5f5] py-12 md:py-16">
        <CaseStudyImage src={imgImage174} alt="Bit app detailed screens" />
      </div>

      {/* ── 10. Seamless Motion ─────────────────────────── */}
      <Section>
        <SectionTitle title="Seamless Motion">
          <p>
            The interaction begins with a subtle cue, guides the user through
            responsive animated transitions, and ends with clear feedback,
            creating a smooth, intuitive flow from start to finish.
          </p>
        </SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-[#d9d9d9] border border-black rounded-[21px] aspect-[223/493]"
            />
          ))}
        </div>
      </Section>

      {/* ── 11. What This Case Demonstrates ─────────────── */}
      <Section>
        <SectionTitle title="What This Case Demonstrates About Me" />

        <SkillCardGrid
          cards={[
            { label: 'First', title: 'I learn fast from real user behavior' },
            { label: 'Second', title: 'I aggressively reduce friction' },
            { label: 'Third', title: 'I design lean systems, not decorative screens' },
            {
              label: 'Fourth',
              title: 'I simplify complex domains without dumbing them down',
            },
            {
              label: 'Fifth',
              title: 'I test alternatives and move forward decisively',
            },
            { label: 'Sixth', title: 'I make quick, confident decisions' },
          ]}
        />
      </Section>

      {/* ── 12. Outcome Quote ───────────────────────────── */}
      <QuoteBanner>
        BIT became the #1 tier-2 peer-to-peer payment app with 2 million users
        by focusing on simplicity. While competitors added complexity, I
        delivered a fast, intuitive transfer experience that drove adoption and
        everyday usage at scale.
      </QuoteBanner>

      {/* ── 13. Final Quote ─────────────────────────────── */}
      <ImageWithQuote
        src={imgImage192}
        alt="Bit closing"
        preQuote={`Great product design isn't about adding features — it's about removing everything users don't need. This project reinforced my belief that:`}
        quote='"The best financial UX feels invisible"'
      />
      </CaseStudyBody>
    </>
  );
}
