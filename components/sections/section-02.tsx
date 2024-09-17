import Image from "next/image";

export function SectionTwo() {
    return (
        <section className="flex flex-col justify-center items-center w-full gap-10 py-10">
        <h4 className="font-plus-jakarta-sans text-[25px] font-bold text-yellow-900 px-10 md:px-0 text-center">Trusted by some of the best ecommerce Brands And Agencies</h4>

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
    )
}