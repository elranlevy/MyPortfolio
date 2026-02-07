import svgPaths from "./svg-vdyr9dw6xu";
import imgBitmap from "figma:asset/d64d9e6af51f72d9f1297db95e44b0dda9243473.png";
import imgBitmap1 from "figma:asset/c3824c9df36afda5547813207b149b8b1f2c0248.png";
import imgBitmap2 from "figma:asset/0548238f64a99fe660038d78665a891c1c8a0417.png";
import imgBitmap3 from "figma:asset/51a18d2e75a4fe5fd22aa2d222679fcd88d11c6a.png";
import imgBitmap4 from "figma:asset/80fd31eb4604684192b81bec32bafaa092c0e83e.png";
import imgBitmap5 from "figma:asset/f322bc6139a79b875d3c0752bda13b57284d98aa.png";

function IconsError() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-112.5px)] size-[40px] top-[558px]" data-name="Icons / Error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icons / Error">
          <path d={svgPaths.pa542700} fill="var(--fill-0, white)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[440px] left-[1247px] overflow-clip rounded-[16px] top-[121px] w-[207px]" data-name="Group">
      <div className="absolute inset-0 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.3)]" data-name="Bitmap">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap} />
        </div>
      </div>
      <div className="absolute bg-[#9d3638] inset-[80.06%_76.44%_14.1%_11.48%]" data-name="Rectangle" />
      <IconsError />
    </div>
  );
}

export default function HeroMainPage() {
  return (
    <div className="bg-white relative size-full" data-name="Hero main page">
      <div className="absolute h-[440px] left-[204px] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.3)] top-[121px] w-[208px]" data-name="Bitmap">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap1} />
        </div>
      </div>
      <div className="absolute h-[440px] left-[465px] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.3)] top-[121px] w-[208px]" data-name="Bitmap">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap2} />
        </div>
      </div>
      <Group />
      <div className="absolute h-[440px] left-[986px] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.3)] top-[121px] w-[208px]" data-name="Bitmap">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap3} />
        </div>
      </div>
      <div className="absolute h-[440px] left-[1507px] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.3)] top-[121px] w-[208px]" data-name="Bitmap">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap4} />
        </div>
      </div>
      <div className="absolute h-[440px] left-[725px] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.3)] top-[121px] w-[209px]" data-name="Bitmap">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap5} />
        </div>
      </div>
    </div>
  );
}