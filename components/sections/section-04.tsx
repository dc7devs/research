import Image from "next/image";

export function SectionFour() {
    return (
      <section className="flex flex-col justify-center items-center w-full px-5 mt-20 pt-16 pb-20 md:pb-24">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] mb-9 md:leading-[60px] font-bold text-yellow-900 md:w-[65%]">90% of Ad Creatives Fail—Could That Be Happening To You?</h2>

        <div className="md:w-[75%]">
          <p className="text-base md:text-2xl md:leading-[42px] mb-5 font-plus-jakarta-sans text-neutral-700 text-center">If you’re in the eCommerce industry, you know the grind all too well:</p>
          
          <p className="text-base md:text-2xl md:leading-[42px] font-plus-jakarta-sans text-neutral-700 text-center">Ad testing is the <strong>most critical part of succeeding with Meta ads right now</strong>.</p>
          <p className="text-base md:text-2xl md:leading-[42px] mb-5 font-plus-jakarta-sans text-neutral-700 text-center">The only way to know what works for your brand, product, and budget is through testing.</p>
          
          <p className="text-base md:text-2xl md:leading-[42px] font-plus-jakarta-sans text-neutral-700 text-center">So you spend countless hours on Meta ad library, digging through endless ads with the hope to craft <strong>“The Winning Ad”</strong> and then ... <strong>nothing</strong>, the ad doesn’t perform!</p>
        </div>

        <Image
          className="md:size-64"
          src={"/images/arrow-drible-down.svg"}
          width={160.42}
          height={153.13}
          alt="arrow drible down" 
        />

        <h3 className="font-plus-jakarta-sans font-bold text-center text-2xl md:text-4xl mb-9 text-neutral-700">Sound familiar? </h3>

        <div className="md:w-[70%]">
          <p className="text-base md:text-2xl md:leading-[42px] mb-5 font-plus-jakarta-sans text-neutral-700 text-center">It’s not just annoying—<strong>it’s costing you money</strong>. Your budget is being eaten up by ads that don’t deliver, leaving you with disappointing results and a lot of wasted time</p>
          
          <p className="text-base md:text-2xl md:leading-[42px] font-plus-jakarta-sans text-neutral-700 text-center">And let’s be real—<strong>testing dozens of creatives isn’t cheap</strong>, and <strong>creative fatigue?</strong> Ads quickly lose their effectiveness, leading to declining performance.</p>
        </div>
      </section>
    )
}