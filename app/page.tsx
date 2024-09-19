import Image from "next/image";

import { HeroSection } from "@/components/sections";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import {
  AdFatigue,
  Calculator,
  ChartTikTokAccountSVG,
  Choese,
  FastGrowingChart,
  Frustation,
  MetaAdLibrary,
  QualityOverQuantity
} from "@/components/ui/svgs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

import { ArrowDownIndicator, Ratings, TickCircle } from "@/components/ui/icons";
import { VideoPlayerTestimonies } from "@/components/video-player-testimonies";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PriceTable } from "@/components/price-table";
import { FAQs } from "@/components/FAQs";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { badgeVariants } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="flex flex-col justify-center items-center w-full gap-10 py-10">
        <h2 className="font-plus-jakarta-sans text-[25px] font-bold text-yellow-900 px-10 md:px-0 text-center">Trusted by some of the best ecommerce Brands And Agencies</h2>

        <div className="flex items-center justify-center flex-wrap gap-10 md:gap-14 px-10 md:px-0">
          <Image
            src={"/images/brands/H&M.svg"}
            width={67.33}
            height={44.89}
            alt="M&M brand"
          />
          <Image
            src={"/images/brands/bbdo-logo.svg"}
            width={82.18}
            height={25.17}
            alt="bbdo brand"
          />
          <Image
            src={"/images/brands/procter-gamble.svg"}
            width={91}
            height={78}
            alt="procter gamble brand"
          />
          <Image
            src={"/images/brands/havas.svg"}
            width={118.65}
            height={25.06}
            alt="havas brand"
          />
          <Image
            src={"/images/brands/jwt-logo.svg"}
            width={75.77}
            height={31.32}
            alt="jwt brand"
          />
          <Image
            src={"/images/brands/one-10-media.svg"}
            width={174.04}
            height={35.91}
            alt="one 10 media brand"
          />
          <Image
            src={"/images/brands/good-marketer.svg"}
            width={95.06}
            height={35.91}
            alt="good marketer brand"
          />
        </div>
      </section>

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

      <section className="flex flex-col justify-center items-center w-full px-5 mt-20 pt-16 pb-20 md:pb-24">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] mb-9 md:leading-[60px] font-bold text-yellow-900 md:w-[65%]">90% of Ad Creatives Fail—Could That Be Happening To You?</h2>

        <div className="flex flex-wrap items-stretch justify-center gap-4 lg:gap-6 xl:max-w-[1400px]">
          <Card className="w-full sm:w-[400px] md:w-5/12 shadow-none rounded-[16px] border-neutral-100">
            <CardHeader className="pb-0 lg:h-[300px] mb-5 lg:mb-8">
              <Choese className="size-full" />
            </CardHeader>

            <CardContent>
              <CardTitle className="text-lg lg:text-[22px] lg:leading-[38px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold text-center mb-2">Ad testing is the most critical part of succeeding with Meta ads right now</CardTitle>
              <p className="text-lg lg:text-[22px] lg:leading-[38px] text-neutral-700 font-plus-jakarta-sans font-normal text-center">The only way to know what works for your brand, product, and budget is through testing.</p>
            </CardContent>
          </Card>

          <Card className="w-full sm:w-[400px] md:w-5/12 shadow-none rounded-[16px] border-neutral-100">
            <CardHeader className="pb-0 lg:h-[300px] mb-5 lg:mb-8">
              <Frustation className="size-full" />
            </CardHeader>

            <CardContent>
              <CardTitle className="text-lg lg:text-[22px] lg:leading-[38px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold text-center mb-2">So you spend countless hours on Meta ad library</CardTitle>
              <p className="text-lg lg:text-[22px] lg:leading-[38px] text-neutral-700 font-plus-jakarta-sans font-normal text-center">Digging through endless ads with the hope to craft “The Winning Ad” and then ... <strong>nothing</strong>, the ad doesn’t perform!</p>
            </CardContent>
          </Card>

          <Card className="w-full sm:w-[400px] md:w-5/12 shadow-none rounded-[16px] border-neutral-100">
            <CardHeader className="pb-0 lg:h-[300px] mb-5 lg:mb-8">
              <Calculator className="size-full" />
            </CardHeader>

            <CardContent>
              <CardTitle className="text-lg lg:text-[22px] lg:leading-[38px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold text-center mb-2">It’s not just annoying—it’s costing you money</CardTitle>
              <p className="text-lg lg:text-[22px] lg:leading-[38px] text-neutral-700 font-plus-jakarta-sans font-normal text-center">Your budget is being eaten up by ads that don’t deliver, leaving you with disappointing results and a lot of wasted time</p>
            </CardContent>
          </Card>

          <Card className="w-full sm:w-[400px] md:w-5/12 shadow-none rounded-[16px] border-neutral-100">
            <CardHeader className="pb-0 lg:h-[300px] mb-5 lg:mb-8">
              <AdFatigue className="size-full" />
            </CardHeader>

            <CardContent>
              <CardTitle className="text-lg lg:text-[22px] lg:leading-[38px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold text-center mb-2">And let’s be real—Ads quickly lose their effectiveness, leading to declining performance</CardTitle>
              <p className="text-lg lg:text-[22px] lg:leading-[38px] text-neutral-700 font-plus-jakarta-sans font-normal text-center">Testing dozens of creatives isn’t cheap,</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full px-5 py-16 bg-[#FAFAFA]">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] text-yellow-900 md:w-[65%]">
          <span>Meet Adinspiration.com</span>
          <br />
          <strong>Your Shortcut To Winning Ads And Viral Videos</strong>
        </h2>

        <div className="z-30 w-max px-3.5 md:px-4 md:py-1 rounded-full bg-yellow-100/50 border border-yellow-300 mt-4">
          <span className="text-base md:text-[17px] font-medium font-plus-jakarta-sans text-yellow-700">We are not just a tool — we are a research service</span>
        </div>

        <div className="mt-9 md:mt-16 md:mb-20">
          <p className="text-base md:text-lg font-plus-jakarta-sans text-neutral-600 text-center"><strong>Our secret?</strong> We combine the two most powerful elements for eCommerce brands right now:</p>

          <div className="flex flex-col gap-8 md:ap-10 mt-8 items-center">
            <h3 className="font-plus-jakarta-sans font-bold text-center text-2xl md:text-4xl text-black">Organic Viral Videos + Winning Meta Ads</h3>

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
              className="object-cover rounded-[12px] max-[1270px]:size-full order-3 xl:order-none"
              src={"/images/organic-viral-videos-winning-meta-ads-image-1.png"}
              width={262}
              height={458}
              alt="organic viral videos winning meta ads image 1"
            />

            <Image
              className="object-cover rounded-[12px] max-[1279px]:size-full order-1 xl:order-none"
              src={"/images/organic-viral-videos-winning-meta-ads-image-2.png"}
              width={260}
              height={360}
              alt="organic viral videos winning meta ads image 2"
            />

            <Image
              className="object-cover rounded-[12px] max-[1279px]:size-full order-2 xl:order-none"
              src={"/images/organic-viral-videos-winning-meta-ads-image-3.png"}
              width={260}
              height={360}
              alt="organic viral videos winning meta ads image 3"
            />
          
            <Image
              className="object-cover rounded-[12px] max-[1279px]:size-full order-4 xl:order-none"
              src={"/images/organic-viral-videos-winning-meta-ads-image-4.png"}
              width={262}
              height={458}
              alt="organic viral videos winning meta ads image 4"
            />
          </div>
        </div>
      </section>

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

              <div className="flex flex-col">
                <p className="font-plus-jakarta-sans text-lg lg:text-xl lg:leading-[36px] text-neutral-700">When you create content that <strong>resonates emotionally with your audience</strong>, it goes viral.</p>

                <Separator
                  orientation="horizontal"
                  className="flex border-t-2 w-full my-3 border-dashed border-neutral-100 bg-transparent"
                />
              </div>
            </li>


            <li className="flex gap-4">
              <div className="relative items-center">
                <div className="z-20 flex size-5 rounded-full bg-neutral-400 ring-4 ring-neutral-400/30 border border-neutral-100" />

                <Separator
                  orientation="vertical"
                  className="absolute left-1/2 top-0 -z-10 mx-auto flex w-0 border-l-2 border-dashed border-neutral-100 bg-transparent"
                />
              </div>

              <div className="flex flex-col">
                <p className="font-plus-jakarta-sans text-lg lg:text-xl lg:leading-[36px] text-neutral-700">You can take that viral success, <strong>tweak it</strong> and turn it into a performance ad that drives conversions.</p>

                <Separator
                  orientation="horizontal"
                  className="flex border-t-2 w-full my-3 border-dashed border-neutral-100 bg-transparent"
                />
              </div>
            </li>

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

      <section className="flex flex-col justify-center items-center w-full px-5 pt-16 pb-[72px] bg-[#FAFAFA]">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-yellow-900 md:w-[65%] mb-6">The Ad Creative is KING in Meta Ads...</h2>
        
        <p className="pb-3 font-plus-jakarta-sans leanding-[36px] text-xl text-neutral-800">… you know that already!</p>
        <p className="pb-3 font-plus-jakarta-sans leanding-[36px] text-xl text-neutral-800 font-bold">It is now the most critical element for success and provides the best ROI that you can control!</p>
        <p className="font-plus-jakarta-sans leanding-[36px] text-xl text-neutral-800">Other strategies are taking the backseat.</p>

        <Image
          className="mt-10 max-[768px]:size-full z-20"
          src="/images/high-performing-certified.png"
          width={442.21}
          height={513.12}
          alt="High Performing Certified"
        />
      </section>

      <section className="flex flex-col justify-center items-center w-full px-5 pt-16 pb-[80px] bg-[#FAFAFA]">  
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-yellow-900 md:w-[65%] mb-10">How do we handpick Winning Meta Ads?</h2>

        <div className="flex flex-wrap items-stretch justify-center gap-6 mb-14 lg:flex-nowrap">
          <Card className="sm:w-[300px] lg:w-1/3 xl:w-[384px] bg-white shadow-[#535353]/7 shadow-xl lg:shadow-2xl border-none rounded-[16px]">
            <CardHeader className="pb-0 mb-8">
              <FastGrowingChart className="w-full" />
            </CardHeader>

            <CardContent>
              <ul>
                <li className="flex gap-2">
                  <TickCircle className="size-4 shrink align-top mt-2.5" />
                  <p className="w-full text-lg leading-[36px] font-plus-jakarta-sans text-neutral-700">Is it a <strong>fast-growing eCommerce brand?</strong></p>
                </li>
                <li className="flex gap-2">
                  <TickCircle className="size-4 shrink align-top mt-2.5" />
                  <p className="w-full text-lg leading-[36px] font-plus-jakarta-sans text-neutral-700">Does it generate at least <strong>$1 million in annual revenue?</strong></p>
                </li>
                <li className="flex gap-2">
                  <TickCircle className="size-4 shrink align-top mt-2.5" />
                  <p className="w-full text-lg leading-[36px] font-plus-jakarta-sans text-neutral-700">What’s its <strong>traffic volume?</strong></p>
                </li>
              </ul>
              <p className="text-lg leading-[36px] font-plus-jakarta-sans text-neutral-700 mt-9">Only brands that meet our stringent criteria make it into our selection pool, which currently features over <strong>3175+ brands.</strong></p>
            </CardContent>
          </Card>

          <Card className="sm:w-[300px] lg:w-1/3 xl:w-[384px] bg-white shadow-[#535353]/7 shadow-xl lg:shadow-2xl border-none rounded-[16px]">
            <CardHeader className="pb-0 mb-8">
              <MetaAdLibrary className="w-full" />
            </CardHeader>

            <CardContent>
              <CardTitle className="text-xl px-0 leading-[36px] font-plus-jakarta-sans text-neutral-700 font-bold">
                We dive deep into the creative itself:
              </CardTitle>
              <br />

              <ul>
                <li className="flex gap-2">
                  <TickCircle className="size-4 shrink align-top mt-2.5" />
                  <p className="w-full text-lg leading-[36px] font-plus-jakarta-sans text-neutral-700">How long has it been active vs ad account testing behavior?</p>
                </li>
                <li className="flex gap-2">
                  <TickCircle className="size-4 shrink align-top mt-2.5" />
                  <p className="w-full text-lg leading-[36px] font-plus-jakarta-sans text-neutral-700">How strong is the <strong>hook</strong> to capture attention?</p>
                </li>
                <li className="flex gap-2">
                  <TickCircle className="size-4 shrink align-top mt-2.5" />
                  <p className="w-full text-lg leading-[36px] font-plus-jakarta-sans text-neutral-700">What’s the <strong>concept</strong>, <strong>style</strong>, <strong>visual appeal</strong>, and <strong>copy</strong>?</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="sm:w-[300px] lg:w-1/3 xl:w-[384px] bg-white shadow-[#535353]/7 shadow-xl lg:shadow-2xl border-none rounded-[16px]">
            <CardHeader className="pb-0 mb-8">
              <QualityOverQuantity className="w-full" />
            </CardHeader>

            <CardContent>
              <CardTitle className="text-xl leading-[36px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold text-center">
                Finally:
              </CardTitle>
              <br />

              <p className="w-full text-lg leading-[36px] font-plus-jakarta-sans text-neutral-700 text-center">Out of the <strong>100,000 ads</strong> we review monthly, only about <strong>0.5% </strong> pass our rigorous standards to be featured in Adinspiration library. </p>
              <br />
              <p className="w-full text-lg leading-[36px] font-plus-jakarta-sans text-neutral-700 text-center">It’s all about <strong>quality over quantity</strong> here. That’s why we are a research service!</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full py-10 px-5">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-yellow-900 md:w-[65%] mb-10">
          <span>We Focus on 4 Industries…</span>
          <br />
          <span>and We are the BEST at them</span>
        </h2>

        <div className="flex flex-wrap gap-6 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className="rounded-[16px]"
              src={"/images/clothing.png"}
              alt="clothing"
              width={282}
              height={160}
            />

            <p className="font-plus-jakarta-sans leading-[36px] text-2xl text-neutral-800">Clothing</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className="rounded-[16px]"
              src={"/images/skingcare-cosmetics.png"}
              alt="clothing"
              width={282}
              height={160}
            />

            <p className="font-plus-jakarta-sans leading-[36px] text-2xl text-neutral-800">Skincare/Cosmetics</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className="rounded-[16px]"
              src={"/images/jewelry.png"}
              alt="clothing"
              width={282}
              height={160}
            />
              <p className="font-plus-jakarta-sans leading-[36px] text-2xl text-neutral-800">Jewelry</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className="rounded-[16px]"
              src={"/images/supplements.png"}
              alt="clothing"
              width={282}
              height={160}
            />
              <p className="font-plus-jakarta-sans leading-[36px] text-2xl text-neutral-800">Supplements</p>
          </div>
        </div>
      </section>

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
            {members.map(({ path, width, height }, index) => (
                <Image
                  key={index}
                  className="object-contain"
                  src={path}
                  width={width}
                  height={height}
                  alt="member message"
                  quality={100}
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

      <section className="flex flex-col justify-center items-center w-full pt-16 pb-20 px-5">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-yellow-900 md:w-[65%] mb-12">Unlock the Benefits of Adinspiration Today</h2>

        <div className="flex flex-wrap justify-center xl:grid xl:grid-cols-7 gap-5 md:gap-3 xl:gap-6 h-auto xl:w-[80%] xl:max-w-[1400px]">
            <Card className="size-full h-auto md:w-80 lg:w-[400px] xl:size-full xl:col-span-4 shadow-none border-neutral-100 bg-neutral-50 rounded-[10px]">
                <CardHeader className="pb-0 relative">
                    <Image
                        className="size-full xl:w-full object-contain h-[233.32px]"
                        src="/images/wasting-time.svg"
                        width={436}
                        height={233.32}
                        alt="Stop Wasting Time And Money"
                    />

                    <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-b from-transparent to-[#F7F8F9]" />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl leading-[36px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold mb-2">Stop Wasting Time And Money</CardTitle>
                    <p className="font-plus-jakarta-sans leading-[26px] text-base text-neutral-700">Tired of scouring Ad libraries, Social media, and competitors just to find a decent ad idea? We’ve got you covered with a ready-to-go library of winning ads and viral videos. —We’ve done the Research for You!</p>
                </CardContent>
            </Card>

            <Card className="size-full h-auto md:w-80 lg:w-[400px] xl:size-full xl:col-span-3 shadow-none border-neutral-100 bg-neutral-50 rounded-[10px]">
                <CardHeader className="pb-0 relative">
                    <Image
                        className="size-full xl:w-full object-contain object-bottom h-[233.32px]"
                        src="/images/maximize-your-budget.svg"
                        width={400}
                        height={233.32}
                        alt="Maximize Your Budget, Minimize the Guesswork"
                    />

                    <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-b from-transparent to-[#F7F8F9]" />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl leading-[36px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold mb-2">Maximize Your Budget, Minimize the Guesswork</CardTitle>
                    <p className="font-plus-jakarta-sans leading-[26px] text-base text-neutral-700">Struggling to stretch your ad budget without burning cash on failures? Our top-performing ad ideas will make every dollar count. Say goodbye to wasted spend and test proven ad concepts.</p>
                </CardContent>
            </Card>

            <Card className="size-full h-auto md:w-80 lg:w-[400px] xl:size-full xl:col-span-3 shadow-none border-neutral-100 bg-neutral-50 rounded-[10px]">
                <CardHeader className="pb-0 relative">
                    <Image
                        className="size-full xl:w-full object-contain h-[233.32px]"
                        src="/images/fresh-ideas.svg"
                        width={262.4}
                        height={215.59}
                        alt="Fresh Ideas When Your Ads Hit a Wall"
                    />

                    <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-b from-transparent to-[#F7F8F9]" />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl leading-[36px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold mb-2">Fresh Ideas When Your Ads Hit a Wall</CardTitle>
                    <p className="font-plus-jakarta-sans leading-[26px] text-base text-neutral-700">Feeling stuck with ads that just aren’t performing like they used to? Keep your campaigns fresh and effective with our constantly updated library of high-performing creative ideas.</p>
                </CardContent>
            </Card>

            <Card className="size-full h-auto md:w-80 lg:w-[400px] xl:size-full xl:col-span-4 shadow-none border-neutral-100 bg-neutral-50 rounded-[10px]">
                <CardHeader className="pb-0 relative">
                    <Image
                        className="size-full xl:w-full object-contain h-[233.32px]"
                        src="/images/stay-ahead.svg"
                        width={422}
                        height={233.32}
                        alt="Stay Ahead Without Breaking A Sweat!"
                    />

                    <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-b from-transparent to-[#F7F8F9]" />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl leading-[36px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold mb-2">Stay Ahead Without Breaking A Sweat!</CardTitle>
                    <p className="font-plus-jakarta-sans leading-[26px] text-base text-neutral-700">Struggling to keep up with the fast-changing trends in Ecommerce? We keep you in the loop with the latest successful strategies, so you’re always a step ahead of the competition, without the stress.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      <section id="pricing" className="flex flex-col justify-center items-center w-full pt-16 pb-20 px-5">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-yellow-900 mb-4">How much does this cost?</h2>

        <div className="relative mb-14">
            <p className="my-5 text-lg text-center leading-[32px] font-plus-jakarta-sans text-neutral-700">For context, your business saves up to <strong>430 to 470 hours a month</strong> in research.</p>
            <p className="mb-5 text-lg text-center leading-[32px] font-plus-jakarta-sans text-neutral-700">If your team charges $20+ an hour, that’s <strong>$8600+</strong> in saved  costs each month—just by letting us handle the heavy lifting.</p>
            <p className="text-lg text-center leading-[32px] font-plus-jakarta-sans text-neutral-700">If you’re serious about growing your eCommerce business, this is the investment that will pay off in<br/><strong>time saved and, most importantly, in sales generated!</strong></p>
            
            <ArrowDownIndicator className="hidden xl:block absolute bottom-0 -left-7" />
            <ArrowDownIndicator className="hidden xl:block absolute bottom-0 -right-7 scale-x-[-1]" />
        </div>

        <div className="w-full lg:w-[80%] xl:max-w-[1400px]">
          <PriceTable className="hidden md:block size-full" />

          <div className="md:hidden flex flex-col gap-8">
            <Card className="shadow-none rounded-[16px] border-neutral-100">
              <CardHeader className="text-white">
                <div className="flex flex-col">
                    <p className="mb-2 font-plus-jakarta-sans text-xl leading-6 text-dark font-bold">Quartely</p>
                    <p className="font-plus-jakarta-sans mb-2">
                        <span className="text-4xl leading-[44px] font-bold text-yellow-900">$97</span>
                        <span className="text-xl text-neutral-500 font-normal">/month</span>
                    </p>
                    <small className="text-base font-plus-jakarta-sans font-medium text-neutral-600">Billed quarterly $291</small>
                </div>

                <a
                    href="#"
                    className={cn(
                        buttonVariants(),
                        "z-30 h-10 md:h-14 w-full py-[15.5px] max-[1024px]:mt-3 lg:mt-6 rounded-[40px] font-plus-jakarta-sans font-semibold text-lg md:text-xl text-yellow-900"
                    )}
                >
                    Join Now
                </a>
              </CardHeader>
              <CardContent>
                <ul>
                  <li className="flex gap-2">
                    <TickCircle className="size-4 shrink align-top mt-2.5" />
                    <p className="w-full text-lg font-medium leading-[36px] font-plus-jakarta-sans text-neutral-700">Winning Ecommerce Meta Ads Library</p>
                  </li>
                  <li className="flex gap-2">
                    <TickCircle className="size-4 shrink align-top mt-2.5" />
                    <p className="w-full text-lg font-medium leading-[36px] font-plus-jakarta-sans text-neutral-700">Viral Organic Ecommerce Videos Library</p>
                  </li>
                  <li className="flex gap-2">
                    <TickCircle className="size-4 shrink align-top mt-2.5" />
                    <p className="w-full text-lg font-medium leading-[36px] font-plus-jakarta-sans text-neutral-700">Industry-Specific Insights</p>
                  </li>
                  <li className="flex gap-2">
                    <TickCircle className="size-4 shrink align-top mt-2.5" />
                    <p className="w-full text-lg font-medium leading-[36px] font-plus-jakarta-sans text-neutral-700">Cancel Anytime</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-none rounded-[16px] border-neutral-100">
              <CardHeader className="text-white">
                <div className="flex flex-col">
                    <p className="mb-2 font-plus-jakarta-sans text-xl leading-6 text-dark font-bold">Yearly</p>
                    <p className="font-plus-jakarta-sans mb-2">
                        <span className="text-4xl leading-[44px] font-bold text-yellow-900">$68</span>
                        <span className="text-xl text-neutral-500 font-normal">/month</span>
                        <span className={cn(
                            badgeVariants(),
                            "px-2 py-1 text-sm font-bold texat-yellow-800 rounded-[14px] ml-2.5 my-auto text-yellow-800 bg-yellow-500 hover:bg-yellow-500 border-[.7px] border-yellow-300"
                        )}>30% off</span>
                    </p>
                    <small className="text-base font-plus-jakarta-sans font-medium text-neutral-600">Billed yearly $816</small>
                </div>

                <a
                    href="#"
                    className={cn(
                        buttonVariants(),
                        "z-30 h-10 md:h-14 w-full py-[15.5px] max-[1024px]:mt-3 lg:mt-6 rounded-[40px] font-plus-jakarta-sans font-semibold text-lg md:text-xl text-yellow-900"
                    )}
                >
                    Join Now
                </a>
              </CardHeader>
              <CardContent>
                <ul>
                  <li className="flex gap-2">
                    <TickCircle className="size-4 shrink align-top mt-2.5" />
                    <p className="w-full text-lg font-medium leading-[36px] font-plus-jakarta-sans text-neutral-700">Everything from the previous plan</p>
                  </li>
                  <li className="flex gap-2">
                    <TickCircle className="size-4 shrink align-top mt-2.5" />
                    <p className="w-full text-lg font-medium leading-[36px] font-plus-jakarta-sans text-neutral-700">Cancel Anytime</p>
                  </li>
                  
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex mt-16 flex-col items-center w-full">
          <p className="font-plus-jakarta-sans font-bold text-base leading-9 text-neutral-800 text-center">Not sure yet? Let’s have a call and see how Adinspiration can help you!</p>

          <Image
            className="mt-4 size-14"
            src="/images/book-a-call.png"
            width={284}
            height={284}
            alt="Book a Call"
          />

          <a
            className={cn(
              buttonVariants(),
              "h-10 md:h-14 w-max mt-6 px-6 md:px-8 rounded-full font-plus-jakarta-sans font-semibold text-lg md:text-xl text-yellow-900 cursor-pointer"
            )}
          >
            Book a call
          </a>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full py-[80px] lg:py-[106px] bg-neutral-900 px-5">
          <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-white md:w-[70%] mb-4 xl:max-w-[1400px]">Our 100% Satisfaction Guarantee & Money-Back Promise</h2>

          <p className="font-plus-jakarta-sans text-lg lg:text-xl lg:leading-[36px] text-neutral-100 lg:font-medium md:w-[76%] text-center xl:max-w-[1400px]">Unlock a new Winning Ad within 30 Days GUARANTEED, or You Get Your Money Back! We want the investment in Adinspiration to be an absolute no-brainer for you</p>
          <br />
          <p className="font-plus-jakarta-sans text-lg lg:text-xl lg:leading-[36px] text-neutral-100 lg:font-medium md:w-[76%] text-center xl:max-w-[1400px]">We’ve got a 30-Day Money Back Guarantee, where if you've used the platform, create new ads based on our  recommendation and you are still not getting results after 30 days of testings, you can get a full, 100% refund.</p>
      </section>

      <section className="flex flex-col justify-center items-center gap-10 px-5 py-16 md:justify-normal lg:max-w-[1086px] lg:gap-14 lg:py-20 mx-auto">
          <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-yellow-900 md:w-[65%]">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto w-full lg:w-[800px] xl:w-[1086px]">
            <FAQs items={faqsItems} />
          </div>

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
      </section>

      <section className="flex lg:flex-col justify-center items-center size-full pb-20 px-5">
        <Separator
          orientation="horizontal"
          className="hidden lg:flex border-t-2 w-[80%] mb-9 border-neutral-100 bg-transparent xl:max-w-[1400px]"
        />

        <div className="flex flex-col lg:flex-row ml-11 lg:m-0 lg:w-[80%] h-full gap-8 xl:max-w-[1400px]">
          <div className="relative size-full">
            <div className="absolute -left-11 top-1.5 lg:left-0 lg:-top-[50px] z-20 flex size-6 lg:size-7 rounded-full bg-yellow-500 ring-4 ring-yellow-500/30 border border-yellow-100" />
            <p className="font-plus-jakarta-sans text-xl leading-9 font-bold">We’re Picky:</p>
            <p className="font-plus-jakarta-sans font-normal text-xl leading-9 text-neutral-700">Only the top 0.5% of ads make it into our library.</p>
          </div>

          <div className="relative size-full">
            <div className="absolute -left-11 top-1.5 lg:left-0 lg:-top-[50px] z-20 flex size-6 lg:size-7 rounded-full bg-yellow-500 ring-4 ring-yellow-500/30 border border-yellow-100" />
            <p className="font-plus-jakarta-sans text-xl leading-9 font-bold">eCommerce Experts:</p>
            <p className="font-plus-jakarta-sans font-normal text-xl leading-9 text-neutral-700">We focus on eCommerce brands exclusively, delivering tailored insights.</p>
          </div>

          <div className="relative size-full">
            <div className="absolute -left-11 top-1.5 lg:left-0 lg:-top-[50px] z-20 flex size-6 lg:size-7 rounded-full bg-yellow-500 ring-4 ring-yellow-500/30 border border-yellow-100" />
            <p className="font-plus-jakarta-sans text-xl leading-9 font-bold">Viral Organic Videos Included:</p>
            <p className="font-plus-jakarta-sans font-normal text-xl leading-9 text-neutral-700">Keep your ads fresh with viral organic content, not just Meta ads.</p>
          </div>
        </div>
      </section>
    </>
  );
}

const videos = [
  '/videos/video-1.mp4',
  '/videos/video-2.mp4',
  '/videos/video-3.mp4',
  '/videos/video-4.mp4',
  '/videos/video-5.mp4',
  '/videos/video-6.mp4',
  '/videos/video-7.mp4',
  '/videos/video-8.mp4'
];

const members = [
  {
    path: '/images/members/1.png',
    width: 688,
    height: 78
  },
  {
    path: '/images/members/2.png',
    width: 336,
    height: 59
  },
  {
    path: '/images/members/3.png',
    width: 404,
    height: 81
  },
  {
    path: '/images/members/4.png',
    width: 411,
    height: 59
  },
  {
    path: '/images/members/5.png',
    width: 259,
    height: 70
  },
  {
    path: '/images/members/6.png',
    width: 322,
    height: 60
  },
  {
    path: '/images/members/7.png',
    width: 202,
    height: 71
  },
  {
    path: '/images/members/8.png',
    width: 521,
    height: 73
  },
  {
    path: '/images/members/9.png',
    width: 411,
    height: 59
  },
  {
    path: '/images/members/10.png',
    width: 336,
    height: 43
  },
  {
    path: '/images/members/11.png',
    width: 181,
    height: 68.25
  },
  {
    path: '/images/members/12.png',
    width: 202,
    height: 73
  },
  {
    path: '/images/members/13.png',
    width: 281,
    height: 43
  },
  {
    path: '/images/members/14.png',
    width: 353,
    height: 69
  },
  {
    path: '/images/members/15.png',
    width: 672,
    height: 60
  },
  {
    path: '/images/members/16.png',
    width: 410,
    height: 59
  },
  {
    path: '/images/members/17.png',
    width: 178,
    height: 69
  }
]

const faqsItems = [
  {
    question: 'Can you explain your research process?',
    answer: (
      <>
        <p>At Adinspiration.com, our research process is built to identify the most impactful Meta ads in the eCommerce space, providing you with the most effective strategies for your brand.</p>
        <br />

        <h3 className="font-bold">1. Brand Evaluation</h3>
        <p>We begin by thoroughly analyzing the brand behind each ad. Key factors include:</p>
        <ul role="list" className="my-3 list-inside list-disc">
          <li className="leading-relaxed">Is it a fast-growing eCommerce brand?</li>
          <li className="leading-relaxed">Does it generate at least $1 million in annual revenue?</li>
          <li className="leading-relaxed">What’s its traffic volume, and how advanced is its ad testing process?</li>
        </ul>

        <p>Only brands that meet these rigorous standards are added to our selection pool. We continuously monitor their performance to understand the driving factors behind their success.</p>
        <br />

        <h3 className="font-bold">2. Creative Evaluation</h3>
        <p>Once a brand passes the initial review, we dive deep into the performance of its ad creatives. Our analysis focuses on:</p>
        <ul role="list" className="my-3 list-inside list-disc">
          <li className="leading-relaxed">How long the ad has been active versus its testing duration</li>
          <li className="leading-relaxed">The strength of the hook in capturing attention</li>
          <li className="leading-relaxed">The overall concept, style, visual appeal, and copy</li>
        </ul>

        <p>Out of the 100,000 ads we review monthly, only about 0.5% meet our strict criteria, ensuring you gain access to only the highest-performing ads.</p>
        <br />

        <h3 className="font-bold">3. Analyzing Organic Content</h3>
        <p>We also research viral organic content, especially from platforms like TikTok, where trends often emerge. By studying these organic trends, we help you integrate proven hooks, creative ideas, and popular concepts into your ad strategies, keeping your campaigns fresh and in line with current consumer interests.</p>
      </>
    )
  },
  {
    question: 'Why don’t you offer a monthly plan?',
    answer: (
      <>
        <p>Based on our past experience, members who choose quarterly or annual plans consistently see better results. These plans give you enough time to dive deep into our research, implement strategies, and test your viral videos and high-performing ads. With a monthly plan, the results often feel rushed and incomplete, which is why we focus on longer-term options.</p>
        <br />
        <p>By opting for our quarterly plan, you’ll have the time needed to maximize the value of our research and achieve more meaningful outcomes.</p>
      </>
    )
  },
  {
    question: 'Do you analyze only brands from the United States?', 
    answer: "While most of the brands we analyze are from the United States, we do include brands from all over the world. We focus on the U.S. market because it’s one of the most competitive in terms of Meta ads and viral content, meaning U.S. brands are often the first to test new ideas. If you’re based in another country, you can take these insights and apply them in your own market, giving you the advantage of being one of the first to implement these proven strategies in your territory."
  },
  {
    question: 'Are all your viral videos and ads in English?',
    answer: "Yes, all of the viral videos and ads in our library are in English."
  },
  {
    question: 'How often do you update the viral and ad library?',
    answer: "We update the library daily to ensure you have access to the latest trends, top-performing ads, and viral content. This constant refresh helps you stay ahead in a fast-paced and competitive market."
  },
  {
    question: 'What platforms do you include in your organic analysis?',
    answer: 'We focus on TikTok for our organic analysis because it’s where most viral trends begin. By analyzing TikTok, we’re able to spot trends early—often before they make their way to other platforms—giving you the advantage of being among the first to implement these strategies in your campaigns.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: (
      <>
        <p>We don’t offer a free trial because we are not a tool—we are a research service. All the insights and resources you find on our platform are the result of extensive research. Due to the nature of this work, we do not provide free trials.</p>
        <br />
        <p>However, we do offer a quarterly plan, which gives you enough time to explore, create, and test your viral videos and high-performing ads. This plan allows you to experience the full value of our research without a long-term commitment, ensuring you have enough time to see meaningful results.</p>
      </>
    )
  },
  {
    question: 'Do you offer refunds?',
    answer: "Absolutely! We offer a 30-Day Money Back Guarantee because we want you to feel confident in your investment with Adinspiration. All we ask is that you test a few ads using the ideas from our library and send us proof of those tests. If you’re still not seeing results after 30 days, we’ll happily give you a full refund. We’re here to help you succeed, and we stand by our recommendations!"
  },
  {
    question: 'Can I cancel anytime?',
    answer: "Yes, you can cancel anytime! We want to keep things simple and flexible, just cancel whenever it feels right for you, no strings attached."
  },
  {
    question: 'I have another question. How can I contact you?', 
    answer: (
      <>
        <p>Feel free to reach out to us at <a href="mailto:hello@adinspiration.com">hello@adinspiration.com</a> —we’re happy to help with any other questions!</p>
      </>
    )
  }
]