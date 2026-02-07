function TextHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[357px] not-italic top-[100px] w-[1090.16px]" data-name="Text Header">
      <p className="css-4hzbpn font-['Poppins:Light',sans-serif] leading-[normal] relative shrink-0 text-[#182730] text-[36px] w-full">How I Approached the Problem</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-[1.75] relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">
        <p className="css-4hzbpn mb-0">Understanding How Experts Think About Systems</p>
        <p className="css-4hzbpn">Instead of focusing on individual screens, I focused on mental models:</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[780px] px-[50px] py-[24px] top-[299px] w-[372px]">
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-[270px]">How they track execution across time</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[1202.55px] px-[50px] py-[24px] top-[299px] w-[372.446px]">
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-[270px]">{`How they investigate issues when something goes wrong `}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[357px] px-[50px] py-[24px] top-[430px] w-[372.446px]">
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-[270px]">How they decide what to act on first</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[357px] px-[50px] py-[24px] top-[299px] w-[372.446px]">
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-[270px]">How users reason about fund structures</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[357px] top-[100px]">
      <TextHeader />
      <Frame />
      <Frame2 />
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[215px] items-start left-[357px] pb-[50px] pt-[36px] px-[50px] top-[557px] w-[1218px]">
      <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1e3543] text-[0px] tracking-[0.32px] w-full">
        <p className="css-4hzbpn mb-0">
          <span className="leading-[1.5] text-[16px]">
            Key insight:
            <br aria-hidden="true" />
          </span>
          <span className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic text-[24px]">Experts don’t need more controls - they need better orientation.</span>
        </p>
        <p className="css-4hzbpn leading-[1.5] mb-0 text-[24px]">Once users understand where they are and what’s happening, action becomes obvious.</p>
        <p className="css-4hzbpn leading-[1.5] mb-0 text-[24px]">&nbsp;</p>
        <p className="css-4hzbpn leading-[1.5] text-[16px]">This insight became the backbone of the flow.</p>
      </div>
    </div>
  );
}

export default function HowIApprouch() {
  return (
    <div className="bg-white relative size-full" data-name="how i approuch">
      <Group />
      <Frame4 />
    </div>
  );
}