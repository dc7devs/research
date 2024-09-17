import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function SectionThree() {
    return (
      <section className="flex flex-col justify-center items-center w-full gap-10 px-5 mt-10">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] font-bold text-yellow-900 md:w-[65%]">What’s Inside</h2>

        <Image
          src={"/images/image-video.png"}
          height={600}
          width={1200}
          alt="image video"
        />

        {/* Player Video */}

        <a
          className={cn(
            buttonVariants(),
            "h-10 md:h-14 w-max px-6 md:px-8 rounded-full font-plus-jakarta-sans font-semibold text-lg md:text-xl text-yellow-900 flex items-center space-x-2 cursor-pointer"
          )}
        >
          <span className="hidden md:inline">Discover your next winning ad idea now</span>
          <span className="md:hidden">Find Your Next Winning Ad Idea</span>
        </a>
      </section>
    )
}