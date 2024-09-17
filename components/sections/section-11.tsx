'use client';
import Image from "next/image";
import { Ratings } from "../ui/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { VideoPlayerTestimonies } from "../video-player-testimonies";

export function SectionEleven() {
    return (
      <section className="flex flex-col justify-center items-center w-full pt-10 pb-20 px-5 mx-auto">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-yellow-900 md:w-[65%] mb-6">Don't take our word for it...</h2>

        <Ratings className="mb-14" />

        <div className="w-full lg:w-[80%] xl:max-w-[1400px]">
          <h3 className="font-plus-jakarta-sans font-bold text-2xl md:text-[30px] text-dark mb-5 md:mb-8">From our members</h3>

          <Carousel
            orientation="horizontal"
            className="w-full"
            opts={{ slidesToScroll: 'auto' }} 
          >
            <div className="absolute right-0 -top-10 hidden space-x-1 md:flex md:items-center md:space-x-2">
              <CarouselPrevious className="static size-10" variant={'default'} />
              <CarouselNext className="static size-10" variant={'default'} />
            </div>

            <CarouselContent>
              {videos.map((videoPath, index) => (
                <CarouselItem
                  key={index}
                  className="basis-10/12 pl-5 sm:basis-3/4 md:basis-3/5 lg:basis-5/12 xl:basis-1/4 2xl:basis-auto"
                >
                  <VideoPlayerTestimonies path={videoPath} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="w-full lg:w-[80%] xl:max-w-[1400px] mt-10 mb-10 md:mb-14">
          <h3 className="font-plus-jakarta-sans font-bold text-2xl md:text-[30px] text-dark mb-10 md:mb-14">From the ads of our members</h3>

          <div className="flex flex-wrap gap-x-5 gap-y-4 items-center lg:justify-center">
            {members.map((message, index) => (
                <Image
                  key={index}
                  className="size-max"
                  src={message}
                  width={1200}
                  height={600}
                  alt="membe message"
                />
            ))}
          </div>
        </div>

        <h3 className="font-plus-jakarta-sans font-bold text-2xl lg:text-[32px] lg:leading-[36px] text-neutral-800 mb-6">Stay ahead of your competitors</h3>

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

const videos = [
  '/testimonials/video-1.mp4',
  '/testimonials/video-2.mp4',
  '/testimonials/video-3.mp4',
  '/testimonials/video-4.mp4',
  '/testimonials/video-5.mp4',
  '/testimonials/video-6.mp4',
  '/testimonials/video-7.mp4',
  '/testimonials/video-8.mp4'
];

const members = [
  '/images/members/1.png',
  '/images/members/2.png',
  '/images/members/3.png',
  '/images/members/4.png',
  '/images/members/5.png',
  '/images/members/6.png',
  '/images/members/7.png',
  '/images/members/8.png',
  '/images/members/9.png',
  '/images/members/10.png',
  '/images/members/11.png',
  '/images/members/12.png',
  '/images/members/13.png',
  '/images/members/14.png',
  '/images/members/15.png',
  '/images/members/16.png',
  '/images/members/17.png'
]