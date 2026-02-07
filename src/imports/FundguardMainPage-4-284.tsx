import imgMacStudio111 from "figma:asset/ec37f17e1ec2e6232c9caa4ab4af434e828863fe.png";

function Fundguard() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-start justify-start size-full">
        <div className="content-stretch flex items-start justify-start p-[10px] relative w-full">
          <p className="css-ew64yg font-['Poppins:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#5b8a9f] text-[16px]">FUNDGUARD</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="css-4hzbpn font-['Poppins:ExtraLight',sans-serif] leading-[1.265] not-italic relative shrink-0 text-[#182730] text-[20px] md:text-[24px] lg:text-[28px] tracking-[-0.72px] max-w-[488px]">Turning Operational Complexity into Clear, Actionable Systems. Designing scalable workflows for investment operations teams</p>
        </div>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#0023a3] h-[57px] relative shrink-0 w-full cursor-pointer hover:bg-[#001a80] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[24px] relative size-full">
          <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Read case study</p>
        </div>
      </div>
    </div>
  );
}

function Frame2({ onButtonClick }: { onButtonClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-full max-w-[217px]">
      <Button onClick={onButtonClick} />
    </div>
  );
}

function Frame3({ onButtonClick }: { onButtonClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full max-w-[508px] px-4 md:px-0">
      <Fundguard />
      <Frame1 />
      <Frame2 onButtonClick={onButtonClick} />
    </div>
  );
}

export default function FundguardMainPage({ onReadCaseStudy }: { onReadCaseStudy?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-6 md:px-12 lg:px-[25px] py-12 md:py-24 lg:py-[177px] relative size-full" data-name="Fundguard main page">
      <Frame3 onButtonClick={onReadCaseStudy} />
      <div className="h-[400px] md:h-[500px] lg:h-[762px] relative shrink-0 w-full md:w-[600px] lg:w-[1016px] max-w-full" data-name="Mac Studio11 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacStudio111} />
      </div>
    </div>
  );
}