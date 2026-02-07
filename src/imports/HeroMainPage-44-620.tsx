function TextHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[351px] top-[137px] w-[970px] whitespace-pre-wrap" data-name="Text Header">
      <p className="font-['Poppins:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#182730] text-[24px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        Intent → Selection
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">The flow begins with transfer intent, then narrows focus to recipient selection, using progressive disclosure to maintain context and minimize cognitive load.</p>
    </div>
  );
}

export default function HeroMainPage() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="Hero main page">
      <TextHeader />
    </div>
  );
}