function TextHeader() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[23px] items-start left-[351px] not-italic top-[137px] w-[970px] whitespace-pre-wrap" data-name="Text Header">
      <p className="leading-[normal] relative shrink-0 text-[#182730] text-[24px] w-full">How I Approached the Problem?</p>
      <div className="leading-[1.75] relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">
        <p className="mb-0">{`Reading User Pain Points (Fast & Continuously)`}</p>
        <p>Instead of over-researching upfront, I focused on rapid signal reading:</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[120px] items-start left-[351px] px-[50px] py-[36px] top-[282px] w-[370px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Where users hesitate</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[120px] items-start left-[351px] pb-[50px] pt-[36px] px-[50px] top-[434px] w-[370px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Where they make errors</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[180px] items-start left-[351px] pb-[50px] pt-[36px] px-[50px] top-[663px] w-[1218px]">
      <div className="font-['Poppins:Regular','Noto_Sans:Medium',sans-serif] leading-[0] relative shrink-0 text-[#1e3543] text-[0px] tracking-[0.32px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="mb-0">
          <span className="leading-[1.5] text-[16px]">
            Key insight:
            <br aria-hidden="true" />
          </span>
          <span className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[1.5] text-[24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
            Users don’t think in “financial steps” - they think in people → amount → confirmation.
          </span>
        </p>
        <p className="leading-[1.5] mb-0 text-[24px]">&nbsp;</p>
        <p className="leading-[1.5] text-[16px]">This insight became the backbone of the flow.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[120px] items-start left-[761px] pb-[50px] pt-[36px] px-[50px] top-[433px] w-[370px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Which steps trigger questions or support tickets</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[120px] items-start left-[761px] pb-[50px] pt-[36px] px-[50px] top-[281px] w-[370px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Where they abandon</p>
    </div>
  );
}

export default function HeroMainPage() {
  return (
    <div className="bg-white relative size-full" data-name="Hero main page">
      <TextHeader />
      <Frame />
      <Frame2 />
      <Frame4 />
      <Frame3 />
      <Frame1 />
    </div>
  );
}