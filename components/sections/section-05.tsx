import { cn } from "@/lib/utils";
import Image from "next/image";
import { buttonVariants } from "../ui/button";

export function SectionFive() {
    return (
      <section className="flex flex-col justify-center items-center w-full px-5 py-16 md:mt-80 bg-[#FAFAFA]">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] text-yellow-900 md:w-[65%]">
          <span>Meet Adinspiration.com</span>
          <br />
          <strong>Your Shortcut To Winning Ads And Viral Videos</strong>
        </h2>

        <div className="z-30 w-max px-3.5 md:px-4 md:py-1 rounded-full bg-yellow-100 border border-yellow-300 mt-4">
          <span className="text-base md:text-[17px] font-medium font-plus-jakarta-sans text-yellow-700">We are not just a tool — we are a research service</span>
        </div>

        <div className="mt-9 md:mt-16 md:mb-20">
          <p className="text-base md:text-lg font-plus-jakarta-sans text-neutral-600 text-center"><strong>Our secret?</strong> We combine the two most powerful elements for eCommerce brands right now:</p>

          <div className="flex flex-col gap-8 md:ap-10 mt-8 items-center">
            <h3 className="font-plus-jakarta-sans font-bold text-center text-2xl md:text-4xl text-black">Organic Viral Videos + Winning Meta Ads </h3>

            <a
              href="#"
              className={cn(
                buttonVariants(),
                "z-30 h-10 md:h-14 w-max px-6 md:px-8 rounded-full font-plus-jakarta-sans font-semibold text-lg md:text-xl text-yellow-900"
              )}
            >
              Join Now
            </a>
          </div>

          <div className="grid grid-cols-2 xl:flex gap-2.5 xl:gap-7 size-full mt-10 xl:m-0 xl:items-baseline">
            <Image
              className="rounded-[12px] max-[1270px]:size-full order-3 xl:order-none"
              src={"/images/organic-viral-videos-winning-meta-ads-image-1.png"}
              width={262}
              height={458}
              alt="organic viral videos winning meta ads image 1"
            />

            <Image
              className="rounded-[12px] max-[1279px]:size-full order-1 xl:order-none"
              src={"/images/organic-viral-videos-winning-meta-ads-image-2.png"}
              width={260}
              height={360}
              alt="organic viral videos winning meta ads image 2"
            />

            <Image
              className="rounded-[12px] max-[1279px]:size-full order-2 xl:order-none"
              src={"/images/organic-viral-videos-winning-meta-ads-image-3.png"}
              width={260}
              height={360}
              alt="organic viral videos winning meta ads image 3"
            />
          
            <Image
              className="rounded-[12px] max-[1279px]:size-full order-4 xl:order-none"
              src={"/images/organic-viral-videos-winning-meta-ads-image-4.png"}
              width={262}
              height={458}
              alt="organic viral videos winning meta ads image 4"
            />
          </div>
        </div>
      </section>
    )
}