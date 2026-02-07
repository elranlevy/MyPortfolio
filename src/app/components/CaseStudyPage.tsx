import FundguardStudyCaseText from '@/imports/FundguardStudyCaseText';
import svgPaths from '@/imports/svg-j8f6sq94zo';

function ArrowLeft() {
  return (
    <div className="size-[18px]" data-name="arrow-left-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="arrow-left-01">
          <path d={svgPaths.p3ddd8a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function CaseStudyPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-white min-h-screen w-full relative overflow-y-auto">
      {/* Clickable back button overlay */}
      <button 
        onClick={onBack}
        className="fixed top-[50px] left-[15.5px] z-50 flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer"
      >
        <ArrowLeft />
        <span className="font-['Instrument_Sans:Regular',sans-serif] text-[14px] text-black leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Back
        </span>
      </button>
      
      {/* Case study content */}
      <FundguardStudyCaseText />
    </div>
  );
}
