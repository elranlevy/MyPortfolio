export default function Frame() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start pb-[50px] pt-[36px] px-[50px] relative size-full">
      <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1e3543] text-[0px] tracking-[0.32px] w-full">
        <p className="css-4hzbpn mb-0">
          <span className="leading-[1.5] text-[16px]">
            Fund Hierarchy (Legacy View)
            <br aria-hidden="true" />
          </span>
          <span className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic text-[24px]">Why the current structure falls short</span>
        </p>
        <p className="css-4hzbpn leading-[1.5] mb-0 text-[24px]">&nbsp;</p>
        <p className="css-4hzbpn leading-[1.5] text-[16px]">The existing fund hierarchy is created using a table-based structure. While this approach works for listing data, it introduces significant limitations when modeling complex parent-child fund relationships.</p>
      </div>
    </div>
  );
}