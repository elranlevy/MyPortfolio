import imgMacBookAir15Inch1 from "figma:asset/0094969b9f05785bf0e0a1d7a52f7a926d63c1e2.png";
import { motion } from "motion/react";

function Frame() {
  return (
    <div className="flex items-start justify-start relative shrink-0">
      <p className="uppercase font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#6b8aa3] text-[11px] tracking-[1.1px]" dir="auto">
        Monday.com
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-start justify-start size-full">
        <div className="flex items-start justify-start relative w-full">
          <p className="font-['Poppins:Thin',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#2d2d2d] text-[20px] md:text-[24px] lg:text-[26px] tracking-[-0.26px] max-w-[400px]" style={{ fontWeight: 100 }}>Israel's leading P2P payments app, designing a lean, data-driven money transfer experience for millions of users.</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0023a3] relative shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center">
        <div className="flex items-center justify-center px-[24px] py-[14px] relative">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Read case study</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex flex-col items-start relative shrink-0">
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <motion.div 
      className="flex flex-col gap-[24px] items-start relative shrink-0 w-full max-w-[420px] px-4 md:px-0"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Frame />
      <Frame1 />
      <Frame2 />
    </motion.div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[150px] items-center justify-center relative shrink-0 w-full px-6 md:px-12">
      <motion.div 
        className="h-[300px] md:h-[400px] lg:h-[562px] relative shrink-0 w-full md:w-[500px] lg:w-[647px] max-w-full order-2 lg:order-1" 
        data-name="MacBook Air (15 inch) 1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="MacBook Air showing Monday.com interface" className="absolute h-[116.1%] left-[-18.46%] max-w-none top-[-8.57%] w-[134.41%]" src={imgMacBookAir15Inch1} />
        </div>
      </motion.div>
      <div className="order-1 lg:order-2">
        <Frame3 />
      </div>
    </div>
  );
}

export default function FundguardHeroPage() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center justify-center relative h-full w-full" data-name="Monday hero page">
      <Frame4 />
    </div>
  );
}