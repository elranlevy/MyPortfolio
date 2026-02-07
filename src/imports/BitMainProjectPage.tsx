import imgMacBookAir15Inch1 from "figma:asset/0094969b9f05785bf0e0a1d7a52f7a926d63c1e2.png";

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f799a] text-[16px] tracking-[1.6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Monday.com
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="css-4hzbpn font-['Poppins:ExtraLight',sans-serif] leading-[84.3499984741211%] not-italic relative shrink-0 text-[#182730] text-[36px] tracking-[-0.72px] w-[488px]">{`Israel's leading P2P payments app - designing a lean, data-driven money transfer experience for millions of users.`}</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0023a3] h-[57px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[24px] relative size-full">
          <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Read case study</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[217px]">
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[508px]">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full">
      <div className="h-[803px] relative shrink-0 w-[924px]" data-name="MacBook Air (15 inch) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.1%] left-[-18.46%] max-w-none top-[-8.57%] w-[134.41%]" src={imgMacBookAir15Inch1} />
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

export default function BitMainProjectPage() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start pb-[92px] pr-[121px] pt-[159px] relative size-full" data-name="Bit Main project page">
      <Frame4 />
    </div>
  );
}