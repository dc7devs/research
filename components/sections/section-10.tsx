import Image from "next/image";
import { BrushSkincareConsmetics, EosJewelry, Happyemoji, UserClothing } from "../ui/icons";

export function SectionTen() {
    return (
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

            <div className="flex items-center space-x-2">
              <UserClothing className="size-5 shrink" />
              <p className="font-plus-jakarta-sans leading-[36px] text-2xl text-neutral-800">Clothing</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className="rounded-[16px]"
              src={"/images/skingcare-cosmetics.png"}
              alt="clothing"
              width={282}
              height={160}
            />

            <div className="flex items-center space-x-2">
              <BrushSkincareConsmetics className="size-5 shrink" />
              <p className="font-plus-jakarta-sans leading-[36px] text-2xl text-neutral-800">Skincare/Cosmetics</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className="rounded-[16px]"
              src={"/images/jewelry.png"}
              alt="clothing"
              width={282}
              height={160}
            />

            <div className="flex items-center space-x-2">
              <EosJewelry className="size-5 shrink" />
              <p className="font-plus-jakarta-sans leading-[36px] text-2xl text-neutral-800">Jewelry</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className="rounded-[16px]"
              src={"/images/supplements.png"}
              alt="clothing"
              width={282}
              height={160}
            />

            <div className="flex items-center space-x-2">
              <Happyemoji className="size-5 shrink" />
              <p className="font-plus-jakarta-sans leading-[36px] text-2xl text-neutral-800">Supplements</p>
            </div>
          </div>
        </div>
      </section>
    )
}