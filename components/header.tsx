'use client';
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { MenuNavMobile } from "./menu-mobile";

export function Header({ className }: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={cn(
            "mx-auto flex min-h-20 md:min-h-6 w-full md:px-[2rem] items-center xl:max-w-[1400px] md:drop-shadow-lg",
            className
        )}>
            <div className="flex w-full items-center justify-between md:rounded-[40px] md:bg-white px-8 py-3 md:mt-4">
                <a
                    href="https://adinspiration.com/"
                    target="_blank"
                    className="font-inter font-semibold text-base leading-normal text-yellow-900 md:text-center"
                    rel="noreferrer"
                >
                    ADINSPIRATION.COM
                </a>

                <nav className="hidden grow items-center justify-end text-end md:flex">
                    <a 
                        href="#pricing"
                        className={cn(
                            'text-base font-plus-jakarta-sans font-medium text-dark',
                            'hover:text-yellow-600'
                        )}
                    >
                        Pricing
                    </a>
                    <a
                        target="_blank"
                        href={'https://adinspiration.com/signin'}
                        className={cn(
                            buttonVariants({ variant: 'outline' }),
                            'ml-[21px] h-[48px] w-max rounded-full px-[32px] py-[12px] font-plus-jakarta-sans text-lg font-semibold bg-transparent hover:bg-primary/10',
                            'text-yellow-600 border-yellow-300 hover:text-yellow-600'
                        )}
                        rel="noreferrer"
                    >
                        Login
                    </a>
                    <a
                        target="_blank"
                        href={'https://adinspiration.com/signup'}
                        className={cn(
                            buttonVariants(),
                            'ml-[24px] h-[48px] w-max rounded-full px-[32px] py-[12px] text-lg font-plus-jakarta-sans font-semibold',
                        )}
                        rel="noreferrer"
                    >
                        Join Now
                    </a>
                </nav>

                <button
                    className="my-auto md:hidden"
                    onClick={() => {
                    setIsOpen(!isOpen);
                    }}
                >
                    <Menu
                        className={cn(
                            'size-6 transition-transform delay-100 duration-200 group-data-[state=open]:block',
                            isOpen ? 'hidden' : 'block'
                        )}
                        strokeWidth={2}
                    />
                    <X
                        className={cn('size-6', isOpen ? 'block' : 'hidden')}
                        strokeWidth={2}
                    />
                </button>
                <MenuNavMobile
                    active={isOpen}
                    className="absolute left-0 top-[68px] border-y border-solid border-black/10 bg-white"
                />
            </div>
        </header>
    )
}