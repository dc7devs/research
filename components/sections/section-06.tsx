import Image from "next/image";
import { Separator } from "../ui/separator";

export function SectionSix() {
    return (
      <section className="flex justify-center items-center w-full gap-7 lg:gap-[88px] px-5 pt-16 mb-20 xl:max-w-[1400px] xl:mx-auto">
        <div className="flex flex-col lg:w-[45%]">
          <h3 className="font-plus-jakarta-sans font-bold text-2xl lg:text-4xl text-black mb-4">Why is organic important?</h3>
          <p className="font-plus-jakarta-sans text-base lg:text-lg lg:leading-[32px] text-neutral-600 mb-6">It’s no longer about guessing what works—it’s about letting organic content guide your ad strategy.</p>

          <p className="font-semibold font-plus-jakarta-sans text-lg lg:text-xl lg:leading-[36px] text-neutral-800 mb-2">Here’s how it works:</p>

          <ul>
            <li className="flex gap-4">
              <div className="relative items-center">
                <div className="z-20 flex size-5 rounded-full bg-yellow-500 ring-4 ring-yellow-500/30 border border-yellow-100" />

                <Separator
                  orientation="vertical"
                  className="absolute left-1/2 top-0 -z-10 mx-auto flex w-0 border-l-2 border-dashed border-neutral-100 bg-transparent"
                />
              </div>

              <p className="font-plus-jakarta-sans text-lg lg:text-xl lg:leading-[36px] text-neutral-700">When you create content that <strong>resonates emotionally with your audience</strong>, it goes viral.</p>
            </li>

            <Separator
              orientation="horizontal"
              className="flex border-t-2 w-11/12 ml-10 my-3 border-dashed border-neutral-100 bg-transparent"
            />

            <li className="flex gap-4">
              <div className="relative items-center">
                <div className="z-20 flex size-5 rounded-full bg-neutral-400 ring-4 ring-neutral-400/30 border border-neutral-100" />

                <Separator
                  orientation="vertical"
                  className="absolute left-1/2 top-0 -z-10 mx-auto flex w-0 border-l-2 border-dashed border-neutral-100 bg-transparent"
                />
              </div>

              <p className="font-plus-jakarta-sans text-lg lg:text-xl lg:leading-[36px] text-neutral-700">You can take that viral success, <strong>tweak it</strong> and turn it into a performance ad that drives conversions.</p>
            </li>

            <Separator
              orientation="horizontal"
              className="flex border-t-2 w-11/12 ml-10 my-3 border-dashed border-neutral-100 bg-transparent"
            />

            <li className="flex gap-4">
              <div className="relative items-center">
                <div className="z-20 flex size-5 rounded-full bg-neutral-400 ring-4 ring-neutral-400/30 border border-neutral-100" />

                <Separator
                  orientation="vertical"
                  className="absolute left-1/2 top-0 -z-10 mx-auto flex w-0 border-l-2 border-dashed border-neutral-100 bg-transparent"
                />
              </div>

              <p className="font-plus-jakarta-sans text-lg lg:text-xl lg:leading-[36px] text-neutral-700">The algorithms are smarter than ever. When your content resonates organically, <strong>you have clear validation to invest in it with confidence.</strong></p>
            </li>
          </ul>
        </div>

        <div className="hidden gap-4 h-auto md:grid md:grid-cols-2 lg:w-[40%]">
          <Image
            className="rounded-[12px] object-cover md:size-auto lg:size-full row-span-2"
            src={"/images/why-is-organic-important-image-1.png"}
            width={295}
            height={579}
            alt="why is organic important image 1"
          />

          <div className="flex flex-col bg-yellow-900 p-4 gap-2 rounded-[16px] md:size-auto lg:size-full col-start-2">
            <p className="font-bold font-plus-jakarta-sans text-yellow-500 text-xl lg:text-[26px]">2.9 BILLONS views</p>
            <p className="text-neutral-100 text-base lg:text-xl lg:leading-[29px]">From Businesses, not influencers!</p>
          </div>

          <Image
            className="rounded-[12px] object-cover col-start-2 md:size-auto lg:size-full"
            src={"/images/why-is-organic-important-image-2.png"}
            width={270}
            height={439}
            alt="why is organic important image 2"
          />
        </div>
      </section>
    )
}