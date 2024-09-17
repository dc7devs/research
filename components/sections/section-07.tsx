import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ChartTikTokAccountSVG } from "../ui/svgs";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function SectionSeven() {
    return (
      <section className="flex flex-col justify-center items-center w-full pt-16 pb-20 px-5">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-yellow-900 md:w-[65%] mb-10">How We Save You Time with Organic Research</h2>

        <div className="flex flex-wrap items-stretch justify-center gap-6 mb-14 lg:flex-nowrap">
          <Card className="sm:w-[300px] lg:w-1/3 xl:w-[384px] bg-white shadow-[#535353]/7 shadow-xl lg:shadow-2xl border-none rounded-[16px]">
            <CardHeader className="pb-0 mb-8">
              <ChartTikTokAccountSVG className="w-full" />
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-[36px] font-plus-jakarta-sans text-neutral-700"><strong>We analyze 3,175+ TikTok accounts</strong> weekly from real businesses—no influencers here and <strong>Track viral videos</strong> to see what’s working for each brand.</p>
            </CardContent>
          </Card>

          <Card className="sm:w-[300px] lg:w-1/3 xl:w-[384px] bg-white shadow-[#535353]/7 shadow-xl lg:shadow-2xl border-none rounded-[16px]">
            <CardHeader className="pb-0 mb-8">
              <Image
                className="mx-auto"
                src={"/images/double-check.png"}
                width={259}
                height={259}
                alt="Double Check"
              />
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-[36px] font-plus-jakarta-sans text-neutral-700"><strong>Manually double-check</strong> everything to ensure the content is unique, <strong>with no duplicates</strong>, and offers fresh viral video concepts.</p>
            </CardContent>
          </Card>

          <Card className="sm:w-[300px] lg:w-1/3 xl:w-[384px] bg-white shadow-[#535353]/7 shadow-xl lg:shadow-2xl border-none rounded-[16px]">
            <CardHeader className="pb-0 mb-8">
              <Image
                className="mx-auto"
                src={"/images/library-page.png"}
                width={292}
                height={259}
                alt="Library Page"
              />
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-[36px] font-plus-jakarta-sans text-neutral-700"><strong>Deliver it all in a library</strong> you can access instantly. And you can recreate viral ideas or turning them into high-performing ads.</p>
            </CardContent>
          </Card>
        </div>

        <h3 className="font-plus-jakarta-sans font-bold text-2xl lg:text-4xl text-black mb-[35px] text-center">Take viral organic ideas and turn them into top-performing ads today</h3>

        <a
          href="#"
          className={cn(
            buttonVariants(),
            "z-30 h-10 md:h-14 w-max px-6 md:px-8 rounded-full font-plus-jakarta-sans font-semibold text-lg md:text-xl text-yellow-900"
          )}
        >
          Join Now
        </a>
      </section>
    )
}