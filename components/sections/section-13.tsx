import { ArrowDownIndicator } from "../ui/icons";

export function SectionThirteen() {
    return (
        <section id="pricing" className="flex flex-col justify-center items-center w-full pt-16 pb-20 px-5">
            <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-yellow-900 mb-4">Unlock the Benefits of Adinspiration Today</h2>

            <div className="relative mb-14">
                <p className="my-5 text-lg text-center leading-[32px] font-plus-jakarta-sans text-neutral-700">For context, your business saves up to <strong>430 to 470 hours a month</strong> in research.</p>
                <p className="mb-5 text-lg text-center leading-[32px] font-plus-jakarta-sans text-neutral-700">If your team charges $20+ an hour, that’s <strong>$8600+</strong> in saved  costs each month—just by letting us handle the heavy lifting.</p>
                <p className="text-lg text-center leading-[32px] font-plus-jakarta-sans text-neutral-700">If you’re serious about growing your eCommerce business, this is the investment that will pay off in<br/><strong>time saved and, most importantly, in sales generated!</strong></p>
                
                <ArrowDownIndicator className="hidden xl:block absolute bottom-0 -left-7" />
                <ArrowDownIndicator className="hidden xl:block absolute bottom-0 -right-7 scale-x-[-1]" />
            </div>

            {/* Table */}
        </section>
    )
}