import imgEllipse1 from "figma:asset/b7802a0bf11c8b46d3ea2d3586fe3943076fc518.png";
import imgEllipse2 from "figma:asset/ae2c7b647201cba7a7745bc1eeff34cb23e84743.png";
import imgEllipse3 from "figma:asset/227625693e5589ca3b028a631d3eaea6edb59deb.png";
import imgEllipse4 from "figma:asset/0e827f01cddcfd6f1d83f80f9542c90261a32d68.png";

function TextHeader() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Light',sans-serif] gap-[23px] items-start left-[calc(50%-52.5px)] not-italic top-[58px] translate-x-[-50%] w-[1113px]" data-name="Text Header">
      <p className="css-4hzbpn leading-[normal] relative shrink-0 text-[#182730] text-[36px] w-full">Meet the users</p>
      <p className="css-4hzbpn leading-[1.75] relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">Understanding User Challenges in Fund Management Systems - Instead of heavy upfront research, I focused on recurring signals from users working with accounting fund systems.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="capitalize css-4hzbpn font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] text-center tracking-[1.6px] w-full" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        David Hope
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[122px]">
        <img alt="" className="block max-w-none size-full" height="122" src={imgEllipse1} width="122" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame />
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full">{` Finance Manager`}</p>
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="col-1 css-4hzbpn font-['Poppins:Light',sans-serif] leading-[1.75] ml-[169.5px] mt-0 not-italic relative row-1 text-[#1e3543] text-[16px] text-center tracking-[0.64px] translate-x-[-50%] w-[339px]">“I’m always worried that one wrong configuration will move funds incorrectly, and it’s hard to trace mistakes after they happen.”</p>
    </div>
  );
}

function PersonaCard() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[40px] h-[476px] items-center overflow-clip pb-[15px] pt-[40px] relative shrink-0 w-[585px]" data-name="Persona card">
      <Frame4 />
      <Group />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="capitalize css-4hzbpn font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] text-center tracking-[1.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nick melon
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[122px]">
        <img alt="" className="block max-w-none size-full" height="122" src={imgEllipse2} width="122" />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame3 />
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full" dir="auto">{`  Senior Accountant`}</p>
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="col-1 css-4hzbpn font-['Poppins:Light',sans-serif] leading-[1.75] ml-[169.5px] mt-0 not-italic relative row-1 text-[#1e3543] text-[16px] text-center tracking-[0.64px] translate-x-[-50%] w-[339px]">“The system technically works, but everyday actions take too many steps, especially when handling approvals and reallocations.”</p>
    </div>
  );
}

function PersonaCard1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[40px] h-[476px] items-center overflow-clip pb-[48px] pt-[40px] relative shrink-0 w-[593px]" data-name="Persona card">
      <Frame7 />
      <Group1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="capitalize css-4hzbpn font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] text-center tracking-[1.6px] w-[584px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mick moshes
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[122px]">
        <img alt="" className="block max-w-none size-full" height="122" src={imgEllipse3} width="122" />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame8 />
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[24px] text-black text-center w-[min-content]">{` Accountant`}</p>
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="col-1 css-4hzbpn font-['Poppins:Light',sans-serif] leading-[1.75] ml-[169.5px] mt-0 not-italic relative row-1 text-[#1e3543] text-[16px] text-center tracking-[0.64px] translate-x-[-50%] w-[339px]">“Updating fund data feels risky—there’s no clear validation, and I only find errors after reports are generated.”</p>
    </div>
  );
}

function PersonaCard2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[40px] h-[473px] items-center overflow-clip pb-[48px] pt-[40px] relative shrink-0 w-[585px]" data-name="Persona card">
      <Frame11 />
      <Group2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="capitalize css-4hzbpn font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] text-center tracking-[1.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jamie gale
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[122px]">
        <img alt="" className="block max-w-none size-full" height="122" src={imgEllipse4} width="122" />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame12 />
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full">Operations Lead</p>
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="col-1 css-4hzbpn font-['Poppins:Light',sans-serif] leading-[1.75] ml-[169.5px] mt-0 not-italic relative row-1 text-[#1e3543] text-[16px] text-center tracking-[0.64px] translate-x-[-50%] w-[339px]">“Managing multiple funds feels fragmented. I constantly jump between screens just to understand where the money actually is.”</p>
    </div>
  );
}

function PersonaCard3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[40px] h-[473px] items-center overflow-clip pb-[48px] pt-[40px] relative shrink-0 w-[593px]" data-name="Persona card">
      <Frame15 />
      <Group3 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[40px] h-[1165px] items-start left-[351px] top-[228px] w-[1218px]">
      <PersonaCard />
      <PersonaCard1 />
      <PersonaCard2 />
      <PersonaCard3 />
    </div>
  );
}

export default function HeroMainPage() {
  return (
    <div className="bg-white relative size-full" data-name="Hero main page">
      <TextHeader />
      <Frame16 />
    </div>
  );
}