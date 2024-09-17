import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FreshIdeas, MaximizeYourBudget, StayAhead, WastingTime } from "../ui/svgs";

export function SectionTwelve() {
    return (
      <section className="flex flex-col justify-center items-center w-full pt-16 pb-20 px-5">
        <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-yellow-900 md:w-[65%] mb-12">Unlock the Benefits of Adinspiration Today</h2>

        <div className="flex flex-wrap justify-center xl:grid xl:grid-cols-7 gap-5 md:gap-3 xl:gap-6 h-auto xl:w-[80%]">
            <Card className="size-full h-auto md:w-80 lg:w-[400px] xl:size-full xl:col-span-4 shadow-none border-neutral-100 bg-neutral-50 rounded-[10px]">
                <CardHeader className="pb-0 relative">
                    <WastingTime className="size-full xl:w-full xl:h-[212px]" />

                    <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-b from-transparent to-[#F7F8F9]" />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl leading-[36px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold mb-2">Stop Wasting Time And Money</CardTitle>
                    <p className="font-plus-jakarta-sans leading-[26px] text-base text-neutral-700">Tired of scouring Ad libraries, Social media, and competitors just to find a decent ad idea? We’ve got you covered with a ready-to-go library of winning ads and viral videos. —We’ve done the Research for You!</p>
                </CardContent>
            </Card>

            <Card className="size-full h-auto md:w-80 lg:w-[400px] xl:size-full xl:col-span-3 shadow-none border-neutral-100 bg-neutral-50 rounded-[10px]">
                <CardHeader className="pb-0 relative">
                    <MaximizeYourBudget className="size-full xl:w-full xl:h-[212px]" />

                    <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-b from-transparent to-[#F7F8F9]" />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl leading-[36px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold mb-2">Maximize Your Budget, Minimize the Guesswork</CardTitle>
                    <p className="font-plus-jakarta-sans leading-[26px] text-base text-neutral-700">Struggling to stretch your ad budget without burning cash on failures? Our top-performing ad ideas will make every dollar count. Say goodbye to wasted spend and test proven ad concepts.</p>
                </CardContent>
            </Card>

            <Card className="size-full h-auto md:w-80 lg:w-[400px] xl:size-full xl:col-span-3 shadow-none border-neutral-100 bg-neutral-50 rounded-[10px]">
                <CardHeader className="pb-0 relative">
                    <FreshIdeas className="size-full xl:w-full xl:h-[212px]" />

                    <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-b from-transparent to-[#F7F8F9]" />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl leading-[36px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold mb-2">Fresh Ideas When Your Ads Hit a Wall</CardTitle>
                    <p className="font-plus-jakarta-sans leading-[26px] text-base text-neutral-700">Feeling stuck with ads that just aren’t performing like they used to? Keep your campaigns fresh and effective with our constantly updated library of high-performing creative ideas.</p>
                </CardContent>
            </Card>

            <Card className="size-full h-auto md:w-80 lg:w-[400px] xl:size-full xl:col-span-4 shadow-none border-neutral-100 bg-neutral-50 rounded-[10px]">
                <CardHeader className="pb-0 relative">
                    <StayAhead className="size-full xl:w-full xl:h-[212px]" />

                    <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-b from-transparent to-[#F7F8F9]" />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl leading-[36px] px-0 font-plus-jakarta-sans text-neutral-700 font-bold mb-2">Stay Ahead Without Breaking A Sweat!</CardTitle>
                    <p className="font-plus-jakarta-sans leading-[26px] text-base text-neutral-700">Struggling to keep up with the fast-changing trends in Ecommerce? We keep you in the loop with the latest successful strategies, so you’re always a step ahead of the competition, without the stress.</p>
                </CardContent>
            </Card>
        </div>
    </section>
    )
}

