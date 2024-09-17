import { Separator } from "../ui/separator";

export function SectionSixteen() {
    return (
        <section className="flex lg:flex-col justify-center items-center size-full pb-20 px-5">
        <Separator
          orientation="horizontal"
          className="hidden lg:flex border-t-2 w-[80%] mb-9 border-neutral-100 bg-transparent"
        />

        <div className="flex flex-col lg:flex-row ml-11 lg:m-0 lg:w-[80%] h-full gap-8">
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
    )
}