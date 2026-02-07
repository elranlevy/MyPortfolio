function TextHeader() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[23px] items-start left-0 not-italic top-0 w-[976.413px] whitespace-pre-wrap" data-name="Text Header">
      <p className="leading-[normal] relative shrink-0 text-[#182730] text-[24px] w-full">The challenge was to compress a complex financial transaction into a flow that feels obvious and safe.</p>
      <p className="leading-[1.75] relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">Sending money is a high-stress action:</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[120px] items-start left-0 px-[50px] py-[36px] top-[159px] w-[372.446px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Extreme simplicity to drive viral adoption</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[120px] items-start left-[845.55px] pb-[50px] pt-[36px] px-[50px] top-[159px] w-[372.446px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Low cognitive load for everyday use</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[120px] items-start left-[422.78px] pb-[50px] pt-[36px] px-[50px] top-[159px] w-[372.446px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Speed — transfers had to feel instant</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[159px]">
      <Frame />
      <Frame2 />
      <Frame1 />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <TextHeader />
      <Group />
    </div>
  );
}