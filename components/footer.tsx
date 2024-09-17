import { AppleLogo, FacebookLogo, GoogleLogo, InstagramLogo } from "./ui/icons";

export function Footer() {
    return (
        <footer className="mx-auto w-full bg-neutral-900 py-14 md:py-16 md:px-20">
            <div className="mx-auto flex flex-col">
                <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between w-full px-5 md:px-0">
                    <p className="font-plus-jakarta-sans text-[1.6rem] md:text-[1.25rem] font-semibold text-white">
                        <a href="https://adinspiration.com/">ADINSPIRATION.COM</a>
                    </p>

                    <nav>
                        <ul className="flex gap-7 md:gap-12 text-neutral-300 font-plus-jakarta-sans font-medium text-base leading-6 tracking-[-0.1px]">
                            <li><a href="">Blog</a></li>
                            <li><a href="">ROI Calculator</a></li>
                            <li><a href="">Support</a></li>
                        </ul>
                    </nav>


                    <div className="flex items-center gap-6">
                        <a href="#">
                            <FacebookLogo />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#">
                            <GoogleLogo />
                            <span className="sr-only">Google</span>
                        </a>
                        <a href="#">
                            <AppleLogo />
                            <span className="sr-only">Apple</span>
                        </a>
                        <a href="#">
                            <InstagramLogo />
                            <span className="sr-only">Instagram</span>
                        </a>
                    </div>
                </div>

                <hr className="border-neutral-700 my-8 mx-5 md:mx-0" />

                <div className="flex-col flex gap-5 px-5 md:px-0 md:gap-0 md:flex-row items-center justify-between">
                    <p className="text-base self-start font-plus-jakarta-sans text-neutral-300">©{new Date().getFullYear()} Adinspiration. All Rights Reserved.- hello@adinspiration.com</p>

                    <nav className="self-end">
                        <ul className="flex gap-7 md:gap-12 text-neutral-300 font-plus-jakarta-sans font-medium text-base leading-6 tracking-[-0.1px]">
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

// https://adinspiration.com/privacy
// https://adinspiration.com/terms