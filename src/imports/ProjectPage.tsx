import svgPaths from "./svg-ukttz16hvf";
import imgMacStudio from "figma:asset/4decb3fa846a4088c678f19d989b02718036933a.png";
import imgZenBookDuo141 from "figma:asset/dd66d05e0dae586d4d5431f5436c0a8a33b30ab9.png";
import imgBitmap from "figma:asset/9fab66750dcacd39ffd2a78968b672a5643218ca.png";
import imgIphonex from "figma:asset/ceb045f58f61a599e40164b542d82be4ed0ba278.png";
import imgBitmap1 from "figma:asset/f282b80c97aa3ec0b43c0e74455f4f240dff23bc.png";
import imgBitmap2 from "figma:asset/1d27b7a9073dfc671d6e61519f9bce831047edb8.png";
import imgIPhone15Pro from "figma:asset/21d1360edf0132c07e6253991afe1a55ee6a2bf4.png";
import imgIPadMini from "figma:asset/8b112128be2070541f71d6d357666b3c210840ca.png";
import { img1200Am } from "./svg-hvyry";

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="capitalize css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f799a] text-[16px] tracking-[1.6px]" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        FUNDGUARD
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="css-4hzbpn font-['Poppins:ExtraLight',sans-serif] leading-[1.265] not-italic relative shrink-0 text-[#182730] text-[36px] tracking-[-0.72px] w-[488px]">Turning Operational Complexity into Clear, Actionable Systems. Designing scalable workflows for investment operations teams</p>
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

function FundguardMainPage() {
  return (
    <div className="absolute bg-white content-stretch flex h-[1080px] items-center justify-center left-0 overflow-clip px-[25px] py-[177px] top-0 w-[1920px]" data-name="Fundguard main page">
      <Frame3 />
      <div className="h-[788px] relative shrink-0 w-[1052px]" data-name="Mac Studio">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacStudio} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f799a] text-[16px] tracking-[1.6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Monday.com
      </p>
    </div>
  );
}

function Frame5() {
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

function Button1() {
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[217px]">
      <Button1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[508px]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full">
      <div className="h-[803px] relative shrink-0 w-[924px]" data-name="MacBook Air (15 inch) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.1%] left-[-18.46%] max-w-none top-[-8.57%] w-[134.41%]" src="0094969b9f05785bf0e0a1d7a52f7a926d63c1e2.png" />
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function BitMainProjectPage() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[1080px] items-start left-0 overflow-clip pb-[92px] pr-[121px] pt-[159px] top-[1080px] w-[1920px]" data-name="Bit Main project page">
      <Frame10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="capitalize css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f799a] text-[16px] tracking-[1.6px]" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        FUNDGUARD
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="css-4hzbpn font-['Poppins:ExtraLight',sans-serif] leading-[1.265] not-italic relative shrink-0 text-[#182730] text-[36px] tracking-[-0.72px] w-[488px]">Turning Operational Complexity into Clear, Actionable Systems. Designing scalable workflows for investment operations teams</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
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

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[217px]">
      <Button2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[508px]">
      <Frame8 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function FundguardMainPage1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[1080px] items-center justify-center left-0 overflow-clip px-[25px] py-[177px] top-[2160px] w-[1920px]" data-name="Fundguard main page">
      <Frame14 />
      <div className="h-[732px] relative shrink-0 w-[976px]" data-name="ZenBook Duo 14 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZenBookDuo141} />
      </div>
    </div>
  );
}

function GroupCopy() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[541.151px] inline-grid items-[start] justify-items-[start] ml-[447.81px] mt-[268.85px] relative row-1 w-[450.894px]" data-name="Group Copy 2">
      <div className="col-1 flex h-[497.699px] items-center justify-center ml-[13.43px] mt-[14.27px] relative row-1 w-[409.961px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <div className="h-[452.078px] relative shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] w-[212.375px]" data-name="Bitmap">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[133.085px] items-center justify-center ml-[13.43px] mt-[440.7px] relative row-1 w-[199.451px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <div className="bg-white h-[31.059px] w-[212.375px]" data-name="Rectangle" />
        </div>
      </div>
      <div className="col-1 flex h-[141.809px] items-center justify-center ml-[13.43px] mt-[14.27px] relative row-1 w-[204.488px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <div className="bg-[#122750] h-[41.132px] w-[212.375px]" data-name="Rectangle" />
        </div>
      </div>
      <div className="col-1 flex h-[541.151px] items-center justify-center ml-0 mt-0 relative row-1 w-[450.894px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <div className="h-[486.407px] relative w-[239.821px]" data-name="Iphonex">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIphonex} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[541.151px] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1 w-[450.894px]">
      <div className="col-1 flex h-[502.383px] items-center justify-center ml-[13.43px] mt-[12.59px] relative row-1 w-[412.666px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <div className="h-[457.487px] relative shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] w-[212.375px]" data-name="Bitmap">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap1} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[141.809px] items-center justify-center ml-[13.43px] mt-[12.59px] relative row-1 w-[204.488px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <div className="bg-[#122750] h-[41.132px] w-[212.375px]" data-name="Rectangle" />
        </div>
      </div>
      <div className="col-1 flex h-[541.151px] items-center justify-center ml-0 mt-0 relative row-1 w-[450.894px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <div className="h-[486.407px] relative w-[239.821px]" data-name="Iphonex">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIphonex} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[8.394px] overflow-clip relative w-[26.022px]">
      <p className="absolute css-4hzbpn font-['Helvetica_Neue:Medium',sans-serif] leading-[normal] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[15.303px_2.598px] mask-size-[26.733px_20.281px] not-italic right-0 text-[11.5px] text-white top-[calc(50%-7.2px)] tracking-[0.052px]" style={{ maskImage: `url('${img1200Am}')` }}>
        12:00 AM
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[6.044px] relative w-[16.449px]" data-name="Group">
      <div className="absolute inset-[-4.14%_0_-4.14%_-1.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6995 6.54387">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p177e2a00} fillRule="evenodd" id="Stroke 17" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            <path clipRule="evenodd" d={svgPaths.p15d4ab00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 19" />
            <path clipRule="evenodd" d={svgPaths.p18cd1300} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 21" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[99.437px] inline-grid items-[start] justify-items-[start] ml-[30.22px] mt-[19.31px] relative row-1 w-[163.836px]">
      <div className="col-1 flex h-[10.013px] items-center justify-center ml-[153.61px] mt-[0.84px] relative row-1 w-[10.627px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <div className="h-[6.715px] relative w-[8.394px]" data-name="Fill 1">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.39426 6.7154">
              <path clipRule="evenodd" d={svgPaths.p2f48b380} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[20.281px] items-center justify-center ml-0 mt-0 relative row-1 w-[26.733px]" style={{ "--transform-inner-width": "62", "--transform-inner-height": "36" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <Group4 />
        </div>
      </div>
      <div className="col-1 flex h-[13.459px] items-center justify-center ml-[167.89px] mt-[1.34px] relative row-1 w-[17.268px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[541.151px] inline-grid items-[start] justify-items-[start] ml-[304.49px] mt-0 relative row-1 w-[450.894px]">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[541.151px] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1 w-[450.894px]">
      <div className="col-1 flex h-[512.088px] items-center justify-center ml-[9.23px] mt-[15.11px] relative row-1 w-[423.6px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <div className="h-[463.363px] relative w-[221.608px]" data-name="Bitmap">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap2} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[541.151px] items-center justify-center ml-0 mt-0 relative row-1 w-[450.894px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <div className="h-[486.407px] relative w-[239.821px]" data-name="Iphonex Copy 4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIphonex} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[541.151px] inline-grid items-[start] justify-items-[start] ml-0 mt-[10.31px] relative row-1 w-[450.894px]">
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <GroupCopy />
      <Group3 />
      <Group6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f799a] text-[16px] tracking-[1.6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bluevine - smart banking for small business
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="css-4hzbpn font-['Poppins:ExtraLight',sans-serif] leading-[84.3499984741211%] not-italic relative shrink-0 text-[#182730] text-[36px] tracking-[-0.72px] w-[488px]">Bluevine is a mobile banking app designed to help small businesses manage their finances quickly and confidently.</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
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

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[217px]">
      <Button3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[508px]">
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[103px] items-center justify-end relative shrink-0 w-[1675px]">
      <Group7 />
      <Frame18 />
    </div>
  );
}

function BluevineMainPage() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[1080px] items-start left-0 overflow-clip px-[65px] py-[132px] top-[3240px] w-[1920px]" data-name="Bluevine main page">
      <Frame11 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f799a] text-[16px] tracking-[1.6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        bit - app
      </p>
    </div>
  );
}

function Frame20() {
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

function Button4() {
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

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[217px]">
      <Button4 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[508px]">
      <Frame19 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[142px] items-center relative shrink-0 w-[1628px]">
      <Frame22 />
      <div className="h-[766px] relative shrink-0 w-[978px]" data-name="iPhone 15 Pro">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIPhone15Pro} />
      </div>
    </div>
  );
}

function BitMainProjectPage1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1080px] items-start left-[7px] overflow-clip px-[121px] py-[175px] top-[4320px] w-[1920px]" data-name="Bit Main project page">
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f799a] text-[16px] tracking-[1.6px]" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>{`XtreamIO - Disaster Recovery `}</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="css-4hzbpn font-['Poppins:ExtraLight',sans-serif] leading-[1.265] not-italic relative shrink-0 text-[#182730] text-[36px] tracking-[-0.72px] w-[488px]">Bluevine is a mobile banking app designed to help small businesses manage their finances quickly and confidently.</p>
        </div>
      </div>
    </div>
  );
}

function Button5() {
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

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[217px]">
      <Button5 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[508px]">
      <Frame24 />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="h-[866px] relative shrink-0 w-[1155px]" data-name="iPad Mini">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIPadMini} />
      </div>
      <Frame27 />
    </div>
  );
}

function ExteamIoMainProjectPage() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col items-start left-0 overflow-clip px-[128px] py-[125px] top-[5400px] w-[1920px]" data-name="Exteam IO main project page">
      <Frame9 />
    </div>
  );
}

export default function ProjectPage() {
  return (
    <div className="bg-white relative size-full" data-name="project page">
      <FundguardMainPage />
      <BitMainProjectPage />
      <FundguardMainPage1 />
      <BluevineMainPage />
      <BitMainProjectPage1 />
      <ExteamIoMainProjectPage />
    </div>
  );
}