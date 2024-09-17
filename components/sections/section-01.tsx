'use client';
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionOne() {
    return (
        <section className="flex flex-col pt-32 md:pt-44 items-center h-auto w-full bg-paper-pattern bg-paper-pattern-size relative">
        <div className="z-30 w-max px-3.5 md:px-4 md:py-1 rounded-full bg-yellow-100 border border-yellow-300">
          <span className="text-base md:text-[17px] font-medium font-plus-jakarta-sans text-yellow-700">Sick of spending hours digging for ad ideas?</span>
        </div>

        <h1 className="z-30 font-[740] text-3xl leading-snug md:text-5xl mt-4 mb-5 md:mb-6 md:w-[80%] lg:w-[65%] md:leading-[64px] text-center xl:max-w-[1400px] px-5 md:px-0">We’ve Done  The Research... Get The <span className="inline bg-[#FFD400]">Organic Viral Videos + Winning Meta Ads</span> From Top Brands With ZERO WORK!</h1>

        <p className="z-30 font-plus-jakarta-sans font-normal text-neutral-800 text-base md:text-lg  lg:text-xl lg:leading-9 md:w-[75%] lg:w-1/2 text-center mb-6 md:mb-10 xl:max-w-[1400px] px-5 md:px-0">We analyze over 3175 fast-growing eCommerce brands every week, handpicking their best organic viral videos and top-performing Meta ads to save you time, money, and frustration.</p>
        
        <a
          href="#"
          className={cn(
            buttonVariants(),
            "z-30 h-10 md:h-14 w-max px-6 md:px-8 rounded-full font-plus-jakarta-sans font-semibold text-lg md:text-xl text-yellow-900 flex items-center space-x-2 cursor-pointer",
          )}
        >
          <span>Join Now</span>
          <ArrowRight className="size-[18px]" />
        </a>

        <div className="hidden md:block absolute bottom-0 z-20 right-0 w-96 h-[400px] 2xl:w-1/3 2xl:h-3/5 bg-gradient-to-br from-[#FFFDF6] to-[#FFFDF6]" />
        <div className="hidden md:block absolute bottom-0 z-20 left-0 w-96 h-[400px] 2xl:w-1/3 2xl:h-3/5 bg-gradient-to-br from-[#FFFDF6] to-[#FFFDF6]" />

        <div className={cn(
          "z-30 overflow-clip mt-11",
        )}>
          <Carousel
            orientation="horizontal"
            className="w-full bg-gradient-to-br from-[#FFFDF6] to-[#FFFDF6]"
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              })
            ]}
          >
            <CarouselContent className="-ml-3">
              {slideImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-4 basis-3/6 sm:basis-auto overflow-hidden">
                    <div>
                      <Image
                        className="rounded-3xl"
                        src={image}
                        height={350}
                        width={260}
                        alt="slide image"
                      />
                    </div>
                  </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    )
}

const slideImages = [
    '/images/slide/slide-01.png',
    '/images/slide/slide-02.png',
    '/images/slide/slide-03.png',
    '/images/slide/slide-04.png',
    '/images/slide/slide-05.png',
    '/images/slide/slide-06.png',
    '/images/slide/slide-07.png',
    '/images/slide/slide-08.png',
    '/images/slide/slide-09.png',
    '/images/slide/slide-10.png'
  ];