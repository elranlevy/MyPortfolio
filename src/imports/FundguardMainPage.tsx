import imgMacStudio111 from "figma:asset/a95a1128c50a6dc320f7cbc03668b7a6954199ea.png";
import { motion } from "motion/react";

function Frame() {
  return (
    <div className="flex items-start justify-start relative shrink-0">
      <p
        className="uppercase font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#6b8aa3] text-[11px] tracking-[1.1px]"
        dir="auto"
      >
        FUNDGUARD
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-start justify-start size-full">
        <div className="flex items-start justify-start relative w-full">
          <p
            className="font-['Poppins:Thin',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#2d2d2d] text-[26px] tracking-[-0.26px] max-w-[400px]"
            style={{ fontWeight: 100 }}
          >
            Turning Operational Complexity into Clear, Actionable Systems.
            Designing scalable workflows for investment operations teams.
          </p>
        </div>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#0023a3] relative shrink-0 cursor-pointer hover:bg-[#001a7a] transition-colors"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center">
        <div className="flex items-center justify-center px-[24px] py-[14px] relative">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">
            Read case study
          </p>
        </div>
      </div>
    </button>
  );
}

function Frame2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex flex-col items-start relative shrink-0">
      <Button onClick={onClick} />
    </div>
  );
}

function Frame3({ onClick }: { onClick?: () => void }) {
  return (
    <motion.div
      className="flex flex-col gap-[24px] items-start relative shrink-0 max-w-[420px]"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Frame />
      <Frame1 />
      <Frame2 onClick={onClick} />
    </motion.div>
  );
}

function Frame4({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[150px] items-center justify-center relative shrink-0 w-full">
      <Frame3 onClick={onClick} />

      <motion.div
        className="h-[562px] relative shrink-0 w-[647px]"
        data-name="Mac Studio (cropped hero)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt="Mac Studio with Fundguard dashboard"
            className="absolute h-[116.1%] left-[-18.46%] max-w-none top-[-8.57%] w-[134.41%]"
            src={imgMacStudio111}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function FundguardMainPage({
  onReadCaseStudy,
}: {
  onReadCaseStudy?: () => void;
}) {
  return (
    <div
      className="bg-[#f5f5f5] content-stretch flex flex-col items-center justify-center relative h-full w-full"
      data-name="Fundguard hero page"
    >
      <Frame4 onClick={onReadCaseStudy} />
    </div>
  );
}
