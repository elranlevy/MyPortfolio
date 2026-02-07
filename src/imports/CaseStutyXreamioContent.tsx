import imgScreenshot20260201At1548372 from "figma:asset/fb3912313a3db48cca0deeaabe76da38bd229246.png";
import imgScreenshot20260201At1548421 from "figma:asset/9b127abdf1ca80ed7736b79843dd72681dbe0ecb.png";
import imgScreenshot20260201At1548491 from "figma:asset/34ccd3f99a378bbd2b72352640f025671246b093.png";
import imgHealthStatus from "figma:asset/1310cf6034e7996a8a437beaf595a9e75ee70205.png";
import imgImage172 from "figma:asset/d39fb3cca29d3b2153e74727f2bd2167584b2b3c.png";
import imgXtremIo1 from "figma:asset/5e9fd7b34040b77efd1c255227d85dbe85ae94c9.png";
import imgImage175 from "figma:asset/8283c758f682797739df887f6aa3e29caa08732e.png";
import img64C833B3A7491C849F41Ba9423C606Fee8212DMv21 from "figma:asset/6f2fde16e80f686d70fc0945fcb61f664c378da3.png";
import imgBitmap from "figma:asset/180cc76a8505e3e53aa3b8fd86799e8eecaafaaa.png";
import imgBitmap1 from "figma:asset/f08631ad34a4d9a9dd963f04e17f3a6e1d2d3cfd.png";
import imgImage174 from "figma:asset/dc4843ec408a4532c53cdacb5ed2533eecd0dc2e.png";
import imgImage176 from "figma:asset/d4d58b02892ddfba3736780450879b582c47390e.png";
import imgImage177 from "figma:asset/84697da8fef42b33bbdcddc2442ef98a82019325.png";
import imgImage178 from "figma:asset/d7831a442bc44faf1090c9e711599d69abfabc41.png";
import { imgScreenshot20260201At1548371 } from "./svg-v7ixi";

function TextHeader() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[23px] items-start left-[348px] not-italic top-[2198px] w-[1083px] whitespace-pre-wrap" data-name="Text Header">
      <p className="leading-[normal] relative shrink-0 text-[#182730] text-[24px] w-full">Get to Know the User — Backup Bob</p>
      <p className="leading-[1.75] relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">To design an effective backup and recovery experience, I focused on understanding Bob’s mental state across different operational moments. Bob is a Backup Administrator responsible for keeping virtual machines protected, monitored, and recoverable under pressure. His emotional state shifts significantly depending on system stability and urgency.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="capitalize font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] text-center tracking-[1.6px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Maintenance Stage
      </p>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[135.366px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.375px_6.541px] mask-size-[122px_122px] ml-[-11.38px] mt-[-6.54px] relative row-1 w-[144.466px]" data-name="Screenshot 2026-02-01 at 15.48.37 1" style={{ maskImage: `url('${imgScreenshot20260201At1548371}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260201At1548372} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <MaskGroup />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full whitespace-pre-wrap" dir="auto">{`Calm & In Control`}</p>
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="-translate-x-1/2 col-1 font-['Poppins:Light',sans-serif] h-[105px] leading-[1.75] ml-[376px] mt-0 not-italic relative row-1 text-[#1e3543] text-[16px] text-center tracking-[0.64px] w-[752px] whitespace-pre-wrap">During routine maintenance, Bob feels confident and relaxed. He has time to plan, manage virtual machines, and define recovery strategies without pressure. Decisions are thoughtful and proactive, allowing him to optimize future recovery scenarios.</p>
    </div>
  );
}

function PersonaCard() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[40px] h-[583px] items-center left-[348px] overflow-clip pb-[48px] pt-[40px] top-[2389px] w-[1242px]" data-name="Persona card">
      <Frame4 />
      <Group />
      <p className="font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[16px] text-black text-center tracking-[0.64px]">
        <span className="capitalize font-['Poppins:Medium',sans-serif] leading-[1.75] tracking-[1.6px]">Mental state</span>
        <span className="leading-[1.75]">: Low stress, high control, forward-thinking.</span>
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="capitalize font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] text-center tracking-[1.6px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Overview Stage
      </p>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[137.925px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7.68px_9.669px] mask-size-[122px_122px] ml-[-7.68px] mt-[-9.67px] relative row-1 w-[137.072px]" data-name="Screenshot 2026-02-01 at 15.48.42 1" style={{ maskImage: `url('${imgScreenshot20260201At1548371}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260201At1548421} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <MaskGroup1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame6 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full whitespace-pre-wrap" dir="auto">{`Alert & Cautious`}</p>
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="-translate-x-1/2 col-1 font-['Poppins:Light',sans-serif] h-[105px] leading-[1.75] ml-[376px] mt-0 not-italic relative row-1 text-[#1e3543] text-[16px] text-center tracking-[0.64px] w-[752px] whitespace-pre-wrap">In day-to-day monitoring, Bob’s focus shifts to vigilance. Most of his time is spent ensuring systems are protected, identifying potential issues, and responding before they escalate. While not urgent, the responsibility keeps him mentally engaged and slightly tense.</p>
    </div>
  );
}

function PersonaCard1() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[40px] h-[583px] items-center left-[351px] overflow-clip pb-[48px] pt-[40px] top-[3020px] w-[1239px]" data-name="Persona card">
      <Frame5 />
      <Group1 />
      <p className="font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[16px] text-black text-center tracking-[0.64px]">
        <span className="capitalize font-['Poppins:Medium',sans-serif] leading-[1.75] tracking-[1.6px]">Mental state</span>
        <span className="leading-[1.75]">: Moderate stress, high awareness, reactive readiness.</span>
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="capitalize font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] text-center tracking-[1.6px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Crisis Stage
      </p>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[139.916px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[13.367px_7.11px] mask-size-[122px_122px] ml-[-13.37px] mt-[-7.11px] relative row-1 w-[145.888px]" data-name="Screenshot 2026-02-01 at 15.48.49 1" style={{ maskImage: `url('${imgScreenshot20260201At1548371}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260201At1548491} />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <MaskGroup2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame10 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full whitespace-pre-wrap" dir="auto">{`Urgent & Overloaded`}</p>
      <Frame11 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="-translate-x-1/2 col-1 font-['Poppins:Light',sans-serif] h-[105px] leading-[1.75] ml-[376px] mt-0 not-italic relative row-1 text-[#1e3543] text-[16px] text-center tracking-[0.64px] w-[752px] whitespace-pre-wrap">When a failure occurs, Bob’s stress peaks. Time is critical, and mistakes are costly. He needs immediate clarity, fast actions, and absolute confidence that the recovery process will work as planned. Any friction or uncertainty directly increases pressure.</p>
    </div>
  );
}

function PersonaCard2() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[40px] h-[583px] items-center left-[351px] overflow-clip pb-[48px] pt-[40px] top-[3651px] w-[1239px]" data-name="Persona card">
      <Frame8 />
      <Group2 />
      <p className="font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[16px] text-black text-center tracking-[0.64px]">
        <span className="capitalize font-['Poppins:Medium',sans-serif] leading-[1.75] tracking-[1.6px]">Mental state</span>
        <span className="leading-[1.75]">: High stress, urgency-driven, zero tolerance for friction.</span>
      </p>
    </div>
  );
}

function TextHeader1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[23px] items-start left-[348px] not-italic top-[155px] w-[1083px]" data-name="Text Header">
      <p className="leading-[normal] relative shrink-0 text-[#182730] text-[24px] w-full">Ideation Insights</p>
      <p className="leading-[1.75] relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">After four days of intensive ideation, user interviews, and system analysis, we synthesized our findings into six key insights. These insights capture the core challenges, mental states, and unmet needs of backup administrators across routine operations and high-pressure moments. They became the foundation for our design decisions, helping us focus on reducing cognitive load, increasing clarity, and supporting fast, confident action when it matters most.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[34px] items-start left-[348px] p-[50px] top-[388px] w-[611px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] tracking-[1.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`First Insight `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#182730] text-[24px] w-full">{`Clear Overview `}</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full">“Let me see only what I need when I need it”</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[34px] items-start left-[348px] p-[50px] top-[649px] w-[611px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] tracking-[1.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Third Insight `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#182730] text-[24px] w-full">{`System Recover `}</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full">“Watch my back”</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[34px] items-start left-[348px] p-[50px] top-[910px] w-[611px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] tracking-[1.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Fifth Insight `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#182730] text-[24px] w-full">{`Guide & Control`}</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full">“Show me the way, but let me decide”</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[34px] items-start left-[982px] p-[50px] top-[388px] w-[611px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] tracking-[1.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Second Insight `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#182730] text-[24px] w-full">Automation</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full">“Ask for only for the minimum, automate the rest”</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[34px] items-start left-[982px] p-[50px] top-[649px] w-[611px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] tracking-[1.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Fourth Insight `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#182730] text-[24px] w-full">{`Clear & Simple Direction`}</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full">
        <span className="leading-[1.5]">“</span>
        <span className="leading-[1.5]">Speak my language</span>
        <span className="leading-[1.5]">”</span>
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[34px] items-start left-[982px] p-[50px] top-[910px] w-[611px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467294] text-[16px] tracking-[1.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Sixth Insight `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#182730] text-[24px] w-full">{`Clear Overview `}</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full">“Be optimistic”</p>
    </div>
  );
}

function PorjectPage() {
  return (
    <div className="absolute bg-white h-[1208px] left-0 overflow-clip top-[4261px] w-[1921px] whitespace-pre-wrap" data-name="Porject Page">
      <TextHeader1 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function TextHeader2() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[23px] items-start left-[351px] not-italic top-[7675px] w-[1083px] whitespace-pre-wrap" data-name="Text Header">
      <p className="leading-[0] relative shrink-0 text-[#182730] text-[24px] w-full">
        <span className="leading-[normal]">{`Dashboard Overview with `}</span>
        <span className="leading-[normal]">Mega Tabs (Health / Performance / Capacity)</span>
        <span className="leading-[normal]">— Information at the Right Level</span>
      </p>
      <p className="leading-[1.75] relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">The dashboard is organized around three high-level mega tabs: Health, Performance, and Capacity. Each tab surfaces the most critical information for that domain, allowing administrators to quickly understand system status without digging through multiple screens.</p>
    </div>
  );
}

function TextHeader3() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[23px] items-start left-[351px] not-italic top-[12343px] w-[1083px] whitespace-pre-wrap" data-name="Text Header">
      <p className="leading-[normal] relative shrink-0 text-[#182730] text-[24px] w-full">Master–Detail View - From Overview to Action</p>
      <p className="leading-[1.75] relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">The Data Protection overview provides a high-level snapshot of system health, compliance, and active sessions. Selecting an item in the topology instantly reveals detailed information in the side panel, allowing administrators to move from monitoring to investigation without leaving the page.</p>
    </div>
  );
}

function TextHeader4() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[23px] items-start left-[351px] not-italic top-[10797px] w-[1083px] whitespace-pre-wrap" data-name="Text Header">
      <p className="leading-[normal] relative shrink-0 text-[#182730] text-[24px] w-full">Cluster Connectivity — Clear Status at a Glance</p>
      <p className="leading-[1.75] relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">The cluster connectivity component provides an immediate, visual understanding of the relationship between the XMS and the cluster. By using consistent icons, colors, and connection lines, administrators can instantly identify the current state without interpreting logs or alerts.</p>
    </div>
  );
}

function TextHeader5() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[23px] items-start left-[351px] not-italic top-[5560px] w-[1083px] whitespace-pre-wrap" data-name="Text Header">
      <p className="leading-[normal] relative shrink-0 text-[#182730] text-[24px] w-full">From a Complex Setup to a Clear, Guided Flow</p>
      <p className="leading-[1.75] relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">The legacy protection flow required users to move through multiple disconnected steps, forcing them to make low-level technical decisions early in the process. This created a long, error-prone path with high cognitive load, especially for first-time or time-constrained users.</p>
    </div>
  );
}

function StepText() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[351px] top-[11128px] w-[388px]" data-name="Step text">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#182730] text-[24px] w-[min-content] whitespace-pre-wrap">Connected</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.75] min-w-full not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-[min-content] whitespace-pre-wrap">Both systems are communicating normally. The solid connection line and green indicators confirm that the cluster is healthy and fully operational.</p>
      <div className="h-0 relative shrink-0 w-[344px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
            <line id="Line 2" stroke="var(--stroke-0, #D6D6D6)" x2="344" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StepText1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[351px] top-[11600px] w-[412px]" data-name="Step text">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#182730] text-[24px] w-[min-content] whitespace-pre-wrap">Unknown</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.75] min-w-full not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-[min-content] whitespace-pre-wrap">The system cannot determine the cluster’s status. Neutral colors and a dashed connection indicate uncertainty, while contextual hints provide guidance without creating false alarms.</p>
      <div className="h-0 relative shrink-0 w-[344px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
            <line id="Line 2" stroke="var(--stroke-0, #D6D6D6)" x2="344" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StepText2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[351px] top-[11366px] w-[373px]" data-name="Step text">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#182730] text-[24px] w-[min-content] whitespace-pre-wrap">Disconnected</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.75] min-w-full not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-[min-content] whitespace-pre-wrap">Communication between the XMS and the cluster is interrupted. The broken connection line and red indicator clearly signal an issue that requires attention.</p>
      <div className="h-0 relative shrink-0 w-[344px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
            <line id="Line 2" stroke="var(--stroke-0, #D6D6D6)" x2="344" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StepText3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[351px] top-[11838px] w-[373px]" data-name="Step text">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#182730] text-[24px] w-[min-content] whitespace-pre-wrap">Initializing</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.75] min-w-full not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-[min-content] whitespace-pre-wrap">The cluster is in the process of establishing a connection. The active state is visually communicated without triggering unnecessary concern.</p>
      <div className="h-0 relative shrink-0 w-[344px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
            <line id="Line 2" stroke="var(--stroke-0, #D6D6D6)" x2="344" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[351px] top-[10976px]">
      <div className="absolute h-[1222px] left-[667px] top-[10976px] w-[1011px]" data-name="Health_Status">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHealthStatus} />
        </div>
      </div>
      <StepText />
      <StepText1 />
      <StepText2 />
      <StepText3 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f5f5f5] content-stretch flex flex-col h-[119px] items-start left-1/2 pb-[50px] pt-[36px] px-[50px] top-[12114px] w-[1218px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">This approach reduces ambiguity during monitoring and crisis moments, allowing backup administrators to quickly understand what’s happening, why it matters, and when action is required.</p>
    </div>
  );
}

function TextHeader6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-center justify-center left-[351px] not-italic top-[13427px] w-[1242px] whitespace-pre-wrap" data-name="Text Header">
      <p className="font-['Poppins:Light',sans-serif] leading-[normal] relative shrink-0 text-[#182730] text-[36px] w-full">Impact</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.75] relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">This is how fund operations should feel: clear, visible, and grounded.</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[351px] px-[50px] py-[24px] top-[13568px] w-[398px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Faster scanning</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[773px] px-[50px] py-[24px] top-[13568px] w-[398px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Safer decision-making</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[1195px] px-[50px] py-[24px] top-[13568px] w-[398px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Reduced operational risk</p>
    </div>
  );
}

function TextHeader7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[348px] not-italic top-[1509px] w-[1090.16px] whitespace-pre-wrap" data-name="Text Header">
      <p className="font-['Poppins:Light',sans-serif] leading-[normal] relative shrink-0 text-[#182730] text-[36px] w-full">The Challenge</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.75] relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full">Operators needed to:</p>
    </div>
  );
}

function TextHeader8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[348px] top-[1807px] w-[1090.16px]" data-name="Text Header">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.64px] w-full whitespace-pre-wrap">Xtream operates in environments where:</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[348px] px-[50px] py-[24px] top-[1662px] w-[398px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Understand connectivity instantly</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[348px] px-[50px] py-[24px] top-[1991px] w-[1242px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">The challenge was not showing data. It was keeping users grounded inside complexity.</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[348px] px-[50px] py-[24px] top-[1865px] w-[398px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Systems are deeply interconnected</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[770px] px-[50px] py-[24px] top-[1662px] w-[398px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Inspect details without losing the big picture</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[770px] px-[50px] py-[24px] top-[1865px] w-[398px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Small changes cascade</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[1192px] px-[50px] py-[24px] top-[1662px] w-[398px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">Monitor health, performance, and capacity together</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[96px] items-center justify-center left-[1192px] px-[50px] py-[24px] top-[1865px] w-[398px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1e3543] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">{` Losing orientation is dangerous`}</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute bg-white h-[716px] left-0 overflow-clip top-[6876px] w-[1921px]">
      <div className="absolute h-[705px] left-[391px] top-[5px] w-[1305px]" data-name="image 172">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage172} />
      </div>
    </div>
  );
}

function CasestudyXtreamIoHeroPage() {
  return (
    <div className="absolute bg-white h-[1080px] left-0 overflow-clip top-0 w-[1920px]" data-name="Casestudy / XtreamIO / hero page">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[normal] left-1/2 not-italic text-[24px] text-black text-center top-[319px] w-[1390px] whitespace-pre-wrap">
        <p className="mb-0">XTREAM — Designing Awareness in Systems That Never Stop</p>
        <p>When losing context means losing control</p>
      </div>
      <div className="-translate-x-1/2 absolute h-[153px] left-[calc(50%-0.5px)] top-[123px] w-[255px]" data-name="XtremIO 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgXtremIo1} />
      </div>
      <div className="absolute h-[859px] left-[372px] top-[427px] w-[1175px]" data-name="image 175">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage175} />
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%+42px)] size-[84px] top-[960px]" data-name="64c833_b3a7491c849f41ba9423c606fee8212d_mv2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img64C833B3A7491C849F41Ba9423C606Fee8212DMv21} />
      </div>
    </div>
  );
}

export default function CaseStutyXreamioContent() {
  return (
    <div className="bg-white relative size-full" data-name="Case stuty / Xreamio / content">
      <TextHeader />
      <PersonaCard />
      <PersonaCard1 />
      <PersonaCard2 />
      <PorjectPage />
      <TextHeader2 />
      <TextHeader3 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[1.75] left-[351px] not-italic text-[#1e3543] text-[16px] top-[13261px] tracking-[0.64px] w-[1083px] whitespace-pre-wrap">This master–detail approach keeps the main context visible while surfacing relevant details on demand—reducing navigation, preserving orientation, and enabling faster, more confident decision-making.</p>
      <TextHeader4 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[1.75] left-[351px] not-italic text-[#1e3543] text-[16px] top-[8812px] tracking-[0.64px] w-[1083px] whitespace-pre-wrap">This structure reduces cognitive load by grouping related metrics into a single, focused view. Instead of scanning scattered data points, users can assess system health, performance trends, or capacity risks at a glance and then drill down only when needed.</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[1.75] left-[351px] not-italic text-[#1e3543] text-[16px] top-[9806px] tracking-[0.64px] w-[1083px] whitespace-pre-wrap">By presenting high-level signals first and detailed insights second, the mega tabs support fast decision-making during routine monitoring and high-pressure situations alike — helping backup administrators stay in control and act with confidence.</p>
      <TextHeader5 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[1.75] left-[351px] not-italic text-[#1e3543] text-[16px] top-[6220px] tracking-[0.64px] w-[1083px] whitespace-pre-wrap">In the redesigned flow, the process is reduced to its core decisions. Users start by selecting the virtual machines, choose an existing policy, and complete the setup in a single, linear path. Advanced configuration is available when needed, without blocking progress.</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[1.75] left-[351px] not-italic text-[#1e3543] text-[16px] top-[6726px] tracking-[0.64px] w-[1083px] whitespace-pre-wrap">This shift transforms the experience from a configuration-heavy wizard into a goal-oriented flow — reducing setup time, minimizing mistakes, and helping backup administrators complete protection tasks with confidence and speed.</p>
      <div className="absolute h-[337px] left-[351px] top-[5769px] w-[1094px]" data-name="Bitmap">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap} />
        </div>
      </div>
      <div className="absolute h-[209px] left-[351px] top-[6423px] w-[1059px]" data-name="Bitmap">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap1} />
        </div>
      </div>
      <Group3 />
      <Frame22 />
      <TextHeader6 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <TextHeader7 />
      <TextHeader8 />
      <Frame23 />
      <Frame28 />
      <Frame25 />
      <Frame24 />
      <Frame26 />
      <Frame21 />
      <Frame27 />
      <Frame29 />
      <div className="absolute h-[792px] left-[351px] top-[7905px] w-[1083px]" data-name="image 174">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage174} />
      </div>
      <div className="absolute h-[792px] left-[351px] top-[8947px] w-[1083px]" data-name="image 175">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage175} />
      </div>
      <div className="absolute h-[739px] left-[351px] top-[9957px] w-[1083px]" data-name="image 176">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage176} />
      </div>
      <div className="absolute h-[654px] left-0 top-[13842px] w-[1920px]" data-name="image 177">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage177} />
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[1.35] left-[1254px] not-italic text-[48px] text-white top-[14122px] tracking-[0.48px] w-[490px] whitespace-pre-wrap">understandable under pressure”</p>
      <div className="absolute font-['Poppins:Regular',sans-serif] h-[58px] leading-[0] left-[1254px] not-italic text-[16px] text-white top-[14048px] tracking-[0.64px] w-[679px] whitespace-pre-wrap">
        <p className="leading-[1.75] mb-0">{`“Great monitoring UX doesn’t simplify systems. `}</p>
        <p className="mb-0">
          <span className="font-['Poppins:Regular',sans-serif] leading-[1.75] not-italic">It makes them</span>
          <span className="leading-[1.75]">:</span>
          <span className="font-['Poppins:Regular',sans-serif] leading-[1.75] not-italic">&nbsp;</span>
        </p>
        <p className="leading-[1.75]">&nbsp;</p>
      </div>
      <div className="absolute h-[583px] left-[351px] top-[12582px] w-[1083px]" data-name="image 178">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage178} />
      </div>
      <CasestudyXtreamIoHeroPage />
    </div>
  );
}