export default function Frame() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start pb-[50px] pt-[36px] px-[50px] relative size-full">
      <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1e3543] text-[0px] tracking-[0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[1.5] text-[16px]">
            Key insight:
            <br aria-hidden="true" />
          </span>
          <span className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic text-[24px]">Lean design wasn’t a style choice - it was a usability strategy.</span>
        </p>
        <p className="leading-[1.5] mb-0 text-[24px]">&nbsp;</p>
        <p className="leading-[1.5] text-[16px]">This insight became the backbone of the flow.</p>
      </div>
    </div>
  );
}