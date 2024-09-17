import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TickCircle } from "../ui/icons";
import { FastGrowingChart, MetaAdLibrary, QualityOverQuantity } from "../ui/svgs";

export function SectionNine() {
    return (
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
    )
}