import imgBitmap from 'figma:asset/a4be114147f6fd6c6455d266fd9b80c8afe693a4.png';
import imgBitmap1 from 'figma:asset/ffa1a5945b95011b3f4a8840570203f3fbf2acb3.png';
import imgBitmap2 from 'figma:asset/9ed12be0c4bb45f992c11599f4f8bb32d73523a3.png';
import imgBitmap3 from 'figma:asset/ad620da54ddb3fa5a47ffb5cceaf2dae47a0be01.png';
import imgBitmap4 from 'figma:asset/739d8a12afcbc41e1e273481bc5b782282e63b73.png';
import imgBitmap5 from 'figma:asset/747d18e53caad6bcdf6c5eeed528761c7753b04f.png';
import imgBitmap6 from 'figma:asset/010c325d22eec32697687ce69235adc212bf5e42.png';
import imgBitmap7 from 'figma:asset/1ab35b5843f375c9202c13d553a912301f959202.png';
import imgEllipse1 from 'figma:asset/5254803d34a51976245e2b84d9283e029b36c24c.png';
import imgEllipse2 from 'figma:asset/a87c9aa4157997dffc170370616f530336f97a54.png';
import imgEllipse3 from 'figma:asset/4292fb3d55864022a9a3a72ca1ef1db7b243d785.png';
import imgEllipse4 from 'figma:asset/9af0a825a5c12954a3902d20c023537b5a1462fa.png';
import imgImage194 from 'figma:asset/3fa38104c924f2cbe993eee7323661a3891a0092.png';
import imgChatGptImageFeb52026063301Pm1 from 'figma:asset/88da6de6a1b666a471ee6930a733125a1b7e710e.png';

import imgBitmap8 from 'figma:asset/a37a41cda8ef0c22ecb82a85fdcba7051dbf554a.png';
import imgBitmap9 from 'figma:asset/2805b683f16274606e9e32d658122138e42b2aee.png';
import imgBitmap10 from 'figma:asset/b52e381d1b22234a4c307574ab00c59247e781a6.png';
import imgBitmap11 from 'figma:asset/83e160d336cf76eea4aa1619a24dc7300a3a6c28.png';
import imgBitmap12 from 'figma:asset/53c05c1be4462113e764aa95fb7e33fcb398f036.png';
import imgBitmap13 from 'figma:asset/d959283b2c50d7097e3cd5768578fbf8db2e9c9a.png';
import imgBitmap14 from 'figma:asset/10de026a1d74bca1f10e8361c239adfb96149d5c.png';
import imgBitmap15 from 'figma:asset/0f1e3edf99b5e603e7f703697ff0be16c8a54f99.png';
import imgBitmap16 from 'figma:asset/5b9c9a4703745bbc2e0d08a2aabdd1350adcf0db.png';
import imgBitmap17 from 'figma:asset/90cf02f5ed4d1aa6db3603c7ceeda8b714cf8e54.png';
import imgBitmap18 from 'figma:asset/16d08698084d1f89eaa9380a2b77ecfc126e406f.png';
import imgBitmap19 from 'figma:asset/61927fc5c0ba765d0b0f702a42c55017c556c82b.png';
import imgImage187 from 'figma:asset/f3148055a59a7b55f2acac8549dd0c0e7c37cac9.png';
import imgImage184 from 'figma:asset/07a42507cb22cafb6d39b51c9254b4d2088abbb3.png';
import imgImage185 from 'figma:asset/0951004d47003d3e5824dd6b6ee4a2a692f1c14f.png';
import imgImage186 from 'figma:asset/37c8c497c64b1de3f237409d508123bfd7436060.png';
import imgImage188 from 'figma:asset/04f3980e2187e4fb278f0a8265c12d38813fc065.png';

import {
  Section,
  SectionTitle,
  PersonaCardGrid,
  InsightBlock,
  CaseStudyImage,
  QuoteBanner,
  ImageWithQuote,
  CaseStudyHero,
  CaseStudyBody,
  ImageGrid,
} from '@/app/components/case-study/CaseStudyPrimitives';

/* ── Bluevine Logo (text placeholder - original used CSS mask) ── */
function BluevineLogo() {
  return (
    <p className="text-3xl md:text-4xl font-bold text-[#377ef9] tracking-tight w-full text-center">
      bluevine
    </p>
  );
}

/* ============================================================
   BLUEVINE CASE STUDY — Responsive Rewrite
   ============================================================ */
export default function CaseStutyBluevineConent() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <CaseStudyHero
        logo={<BluevineLogo />}
        title="Redesigning lending and banking for Bluevine means turning complex, high-risk financial moments into fast, clear, and confidence-driven decisions for businesses."
        heroImage={imgChatGptImageFeb52026063301Pm1}
        heroImageAlt="Bluevine banking experience"
        heroImageClassName="w-full max-w-3xl lg:max-w-4xl flex items-center [&>img]:max-h-[40vh]"
      />

      <CaseStudyBody>
      {/* ── 2. The Challenge ────────────────────────────── */}
      <Section>
        <SectionTitle title="The Challenge">
          <p>
            Designing a new lending and banking experience for Bluevine is about
            removing complexity from financially sensitive moments and replacing
            it with clarity, speed, and confidence. The goal is to transform
            traditionally heavy processes into simple, guided decisions that
            businesses can trust instantly&mdash;so managing money feels
            controlled, predictable, and effortlessly actionable.
          </p>
        </SectionTitle>
      </Section>

      {/* ── 3. Understanding Pain Points ────────────────── */}
      <Section>
        <SectionTitle title="Understanding the Real Financial Pain Behind Small Business Decisions">
          <p>
            Before designing solutions, I needed to deeply understand where
            business owners feel unsupported, stressed, or forced to make risky
            financial decisions. By uncovering these pain points, I could focus
            the experience on reducing uncertainty, increasing control, and
            building real financial confidence.
          </p>
        </SectionTitle>

        <PersonaCardGrid
          personas={[
            {
              name: 'Daniel Brooks',
              role: 'Co-Owner, Local Food Distribution Company',
              image: imgEllipse4,
              quote:
                'When inventory costs changed, I had nowhere to turn for fast financial help. Traditional banks were too slow for real business decisions.',
            },
            {
              name: 'Emily Carter',
              role: 'Founder, Boutique Marketing Studio',
              image: imgEllipse2,
              quote:
                'I had revenue coming in, but no guidance on how to manage it. I needed a bank that understood business timing - not just balances.',
            },
            {
              name: 'Olivia Bennett',
              role: 'Owner, Online Home Decor Store',
              image: imgEllipse3,
              quote:
                "I wasn't looking for loans all the time - I wanted confidence. Tools, insights, and support that help me plan, not just react.",
            },
            {
              name: 'Jason Miller',
              role: 'Owner, Neighborhood Auto Repair',
              image: imgEllipse1,
              quote:
                "Running payroll, paying suppliers, and managing cash flow felt like guessing. Without real banking support, every month felt like I was one mistake away from falling behind.",
            },
          ]}
        />
      </Section>

      {/* ── 4. Key Insights ─────────────────────────────── */}
      <Section>
        <SectionTitle title="Turning User Pain Into Product Direction" />

        <div className="flex flex-col gap-4 md:gap-6">
          <InsightBlock label="Key insight 1:">
            <p className="text-base md:text-lg font-medium mb-2">
              Speed equals survival
            </p>
            <p>
              When cash flow decisions take days, businesses already lose
              opportunities or fall behind on obligations.
            </p>
          </InsightBlock>

          <InsightBlock label="Key insight 2:">
            <p className="text-base md:text-lg font-medium mb-2">
              Uncertainty is more stressful than cost
            </p>
            <p>
              Not knowing if or when funds will be available creates more
              anxiety than interest rates or fees.
            </p>
          </InsightBlock>

          <InsightBlock label="Key insight 3:">
            <p className="text-base md:text-lg font-medium mb-2">
              Business context is missing in traditional banking
            </p>
            <p>
              Small businesses need tools that understand revenue cycles,
              seasonality, and supplier timing.
            </p>
          </InsightBlock>

          <InsightBlock label="Key insight 4:">
            <p className="text-base md:text-lg font-medium mb-2">
              Decision confidence is a product feature
            </p>
            <p>
              Clear status, predictable outcomes, and transparent requirements
              matter as much as approval itself.
            </p>
          </InsightBlock>

          <InsightBlock label="Key insight 5:">
            <p className="text-base md:text-lg font-medium mb-2">
              Owners don&rsquo;t want &ldquo;more banking,&rdquo; they want
              control
            </p>
            <p>
              The goal isn&rsquo;t more features &mdash; it&rsquo;s fewer
              unknowns and faster, safer actions.
            </p>
          </InsightBlock>
        </div>
      </Section>

      {/* ── 5. Onboarding (moved up) ─────────────────────── */}
      <Section>
        <SectionTitle title="Fast, Frictionless Onboarding">
          <p>
            Getting started should feel as simple as running your business. The
            onboarding process is designed to minimize steps, reduce manual
            input, and guide users clearly from signup to account
            readiness&mdash;so they can open an account in minutes, not days.
          </p>
        </SectionTitle>

        <div className="flex flex-col gap-4 md:gap-6">
          <CaseStudyImage src={imgImage184} alt="Onboarding step 1" className="rounded-lg" />
          <CaseStudyImage src={imgImage185} alt="Onboarding step 2" className="rounded-lg" />
          <CaseStudyImage src={imgImage186} alt="Onboarding step 3" className="rounded-lg" />
          <CaseStudyImage src={imgImage187} alt="Onboarding step 4" className="rounded-lg" />
          <CaseStudyImage src={imgImage188} alt="Onboarding step 5" className="rounded-lg" />
        </div>
      </Section>

      {/* ── 6. Dashboard ────────────────────────────────── */}
      <Section>
        <SectionTitle title="From Setup to Full Financial Control">
          <p>
            Once onboarding is complete, the dashboard becomes the
            business&rsquo;s financial command center. Every critical action
            &mdash; cash visibility, payments, transfers, credit access, and
            reporting &mdash; is designed to be immediate, clear, and
            actionable. Instead of searching for information or waiting on
            support, business owners can monitor performance, move money, and
            make confident decisions in real time.
          </p>
        </SectionTitle>

        {/* Desktop + mobile pairs — mobile overlaps bottom-right */}
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="relative">
            <CaseStudyImage src={imgBitmap} alt="Dashboard overview" className="rounded-2xl shadow-md" />
            <div className="hidden lg:block absolute -bottom-6 -right-4 w-[200px] xl:w-[240px] drop-shadow-xl">
              <CaseStudyImage src={imgBitmap1} alt="Dashboard mobile" className="rounded-2xl shadow-md" />
            </div>
            <div className="lg:hidden mt-4 w-full max-w-[200px] mx-auto">
              <CaseStudyImage src={imgBitmap1} alt="Dashboard mobile" className="rounded-2xl shadow-md" />
            </div>
          </div>

          <div className="relative">
            <CaseStudyImage src={imgBitmap2} alt="Payments view" className="rounded-2xl shadow-md" />
            <div className="hidden lg:block absolute -bottom-6 -right-4 w-[200px] xl:w-[240px] drop-shadow-xl">
              <CaseStudyImage src={imgBitmap3} alt="Payments mobile" className="rounded-2xl shadow-md" />
            </div>
            <div className="lg:hidden mt-4 w-full max-w-[200px] mx-auto">
              <CaseStudyImage src={imgBitmap3} alt="Payments mobile" className="rounded-2xl shadow-md" />
            </div>
          </div>

          <div className="relative">
            <CaseStudyImage src={imgBitmap4} alt="Transfers view" className="rounded-2xl shadow-md" />
            <div className="hidden lg:block absolute -bottom-6 -right-4 w-[200px] xl:w-[240px] drop-shadow-xl">
              <CaseStudyImage src={imgBitmap5} alt="Transfers mobile" className="rounded-2xl shadow-md" />
            </div>
            <div className="lg:hidden mt-4 w-full max-w-[200px] mx-auto">
              <CaseStudyImage src={imgBitmap5} alt="Transfers mobile" className="rounded-2xl shadow-md" />
            </div>
          </div>

          <div className="relative">
            <CaseStudyImage src={imgBitmap6} alt="Credit view" className="rounded-2xl shadow-md" />
            <div className="hidden lg:block absolute -bottom-6 -right-4 w-[200px] xl:w-[240px] drop-shadow-xl">
              <CaseStudyImage src={imgBitmap7} alt="Credit mobile" className="rounded-2xl shadow-md" />
            </div>
            <div className="lg:hidden mt-4 w-full max-w-[200px] mx-auto">
              <CaseStudyImage src={imgBitmap7} alt="Credit mobile" className="rounded-2xl shadow-md" />
            </div>
          </div>
        </div>
      </Section>

      {/* ── (Onboarding moved to after Key Insights) ──── */}

      {/* ── 8. Mobile App ───────────────────────────────── */}
      <Section>
        <SectionTitle title="Extending Full Control Into a Native Experience">
          <p>
            I designed a native mobile app to give business owners full
            financial control from anywhere. The experience allows users to
            monitor cash flow, send payments, access credit, and respond to
            financial changes in real time &mdash; turning banking from a place
            you go into a tool that moves with your business.
          </p>
        </SectionTitle>

        <ImageGrid
          images={[
            imgBitmap8,
            imgBitmap19,
            imgBitmap18,
            imgBitmap14,
            imgBitmap12,
            imgBitmap11,
            imgBitmap10,
            imgBitmap9,
            imgBitmap15,
            imgBitmap13,
            imgBitmap16,
            imgBitmap17,
          ]}
          columns={4}
          alt="Mobile app screen"
        />
      </Section>

      {/* ── 9. Outcome Quote ────────────────────────────── */}
      <QuoteBanner>
        The improved experience led to a significant increase in product
        adoption and engagement, driving a 170% growth in usage. By reducing
        friction, increasing clarity, and giving users faster financial control,
        the product shifted from a functional tool to a daily business
        essential.
      </QuoteBanner>

      {/* ── Final Quote ──────────────────────────────────── */}
      <ImageWithQuote
        src={imgImage194}
        alt="Bluevine insight"
        preQuote={`"When users clearly understand what will happen next, It makes them:`}
        quote='they move faster, make better decisions, and rely on the product more often"'
      />
      </CaseStudyBody>
    </>
  );
}
