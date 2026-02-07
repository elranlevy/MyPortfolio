import imgPhoto202601171343011 from "figma:asset/b3b8e05334419d62db96917a5fffa3ff2c99440e.png";

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[10px] py-[10px] relative w-full">
          <p className="css-4hzbpn font-['Poppins:ExtraLight',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#182730] text-[36px] tracking-[-0.72px] w-[643px]" dir="auto">
            Hi, I’m Elran, a Senior Product Designer. I specialize in simplifying complex domains without dumbing them down. Leveraging AI to accelerate my workflow, I prioritize real user behavior over assumptions and lean systems over decoration. I design for clarity, impact, and ROI - in that order.
          </p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0023a3] h-[57px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[24px] relative size-full">
          <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">{`Contact me `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative rounded-[16px] shrink-0 w-[217px]">
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[714px]">
      <p className="css-4hzbpn font-['Poppins:Light',sans-serif] leading-[84.3499984741211%] min-w-full not-italic relative shrink-0 text-[#182730] text-[48px] tracking-[-0.96px] w-[min-content]" dir="auto">
        12+ Years. Zero Fluff.
      </p>
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[160px] pt-[378px] px-[253px] relative shrink-0 w-[989px]">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-[1118px] items-center justify-end px-[150px] relative shrink-0 w-[931px]">
      <div className="aspect-[566/924] relative shrink-0 w-full" data-name="PHOTO-2026-01-17-13-43-01 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[91.99%] left-[0.03%] max-w-none top-[8.04%] w-[100.12%]" src={imgPhoto202601171343011} />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 top-0 w-[1920px]">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 text-[24px]">
      <p className="css-ew64yg relative shrink-0" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        main
      </p>
      <p className="css-ew64yg relative shrink-0" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>{`about `}</p>
      <p className="css-ew64yg relative shrink-0" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        contact
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[10px] items-center justify-center leading-[normal] p-[10px] right-0 text-black top-[40px] w-[1920px]">
      <p className="css-4hzbpn relative shrink-0 text-[32px] w-[1335px]" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        elran levy portfolio
      </p>
      <Frame7 />
    </div>
  );
}

export default function AboutMePage() {
  return (
    <div className="bg-white relative size-full" data-name="About me page">
      <Frame6 />
      <Frame />
    </div>
  );
}