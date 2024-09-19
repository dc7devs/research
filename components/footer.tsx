import { AppleLogo, FacebookLogo, GoogleLogo, InstagramLogo } from "./ui/icons";

export function Footer() {
    return (
        <footer className="mx-auto w-full bg-neutral-900 py-14 md:py-16 md:px-20">
            <div className="mx-auto flex flex-col xl:max-w-[1400px]">
                <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between w-full px-5 md:px-0">
                    <p className="font-plus-jakarta-sans text-[1.6rem] md:text-[1.25rem] font-semibold text-white">
                        <a href="https://adinspiration.com/">ADINSPIRATION.COM</a>
                    </p>

                    <nav>
                        <ul className="flex gap-7 md:gap-12 text-neutral-300 font-plus-jakarta-sans font-medium text-base leading-6 tracking-[-0.1px]">
                            <li>
                                <a className="hover:text-white/90" href="https://adinspiration.com/blog">Blog</a>
                            </li>
                            <li>
                                <a className="hover:text-white/90" href="https://adinspiration.com/tools/meta-ads-cost-calculator">ROI Calculator</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <hr className="border-neutral-700 my-8 mx-5 md:mx-0" />

                <div className="flex-col flex gap-5 px-5 md:px-0 md:gap-0 md:flex-row items-center justify-between">
                    <p className="text-base self-start font-plus-jakarta-sans text-neutral-300">©{new Date().getFullYear()} Adinspiration. All Rights Reserved.- <a href="mailto:hello@adinspiration.com" className="hover:text-white/90">hello@adinspiration.com</a></p>

                    <nav className="self-end">
                        <ul className="flex gap-7 md:gap-12 text-neutral-300 font-plus-jakarta-sans font-medium text-base leading-6 tracking-[-0.1px]">
                            <li>
                                <a href="https://adinspiration.com/privacy" className="hover:text-white/90">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="https://adinspiration.com/terms" className="hover:text-white/90">Terms & Conditions</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}