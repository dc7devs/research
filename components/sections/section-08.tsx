import { HighPerformingCertifiedSVG } from "../ui/svgs";

export function SectionEight() {
    return (
      <section className="flex flex-col justify-center items-center w-full px-5 pt-16 pb-[72px] bg-[#FAFAFA]">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-yellow-900 md:w-[65%] mb-6">The Ad Creative is KING in Meta Ads...</h2>
        
        <p className="pb-3 font-plus-jakarta-sans leanding-[36px] text-xl text-neutral-800">… you know that already!</p>
        <p className="pb-3 font-plus-jakarta-sans leanding-[36px] text-xl text-neutral-800 font-bold">It is now the most critical element of success and the best ROI that you can control!</p>
        <p className="font-plus-jakarta-sans leanding-[36px] text-xl text-neutral-800">Other strategies are taking the backseat.</p>

        <HighPerformingCertifiedSVG className="mt-10 max-[768px]:size-full z-20" />
      </section>
    )
}