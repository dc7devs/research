import { cn } from "@/lib/utils";
import { badgeVariants } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { buttonVariants } from "./ui/button";
import { TickCircle } from "./ui/icons";
import { CircleX } from "lucide-react";

export function PriceTable({ className }: { className?: string }) {
    return (
        <Table className={cn(className, "border-b border-neutral-200")}>
            <TableHeader>
                <TableRow className="hover:bg-transparent border-neutral-200">
                    <TableHead className="align-bottom max-[1024px]:pr-6 lg:px-6 pb-4 w-[280px] md:w-[44%] border-r border-neutral-200">
                        <p className="text-xl leading-6 text-dark font-bold">Features</p>
                    </TableHead>
                    <TableHead className="px-6 pb-4 w-[250px] md:w-[28%] border-r border-neutral-200">
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
                    </TableHead>
                    <TableHead className="px-6 pb-4 w-[250px] md:w-[28%]">
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
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow className="hover:bg-transparent border-b border-neutral-200">
                    <TableCell className="max-[1024px]:pr-6 lg:px-6 py-4 border-r border-neutral-200">
                        <div>
                            <p className="text-lg leading-6 text-dark font-bold font-plus-jakarta-sans mb-2">Winning Ecommerce Meta Ads Library</p>
                            <p className="text-base font-normal text-neutral-600 font-plus-jakarta-sans">Handpicked top-performing ads from industry leaders and up-and-comers. We’ve done the digging so you can see what’s working!</p>
                        </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 border-r">
                        <TickCircle className="size-6 m-auto" />
                    </TableCell>
                    <TableCell className="px-6 py-4">
                        <TickCircle className="size-6 m-auto" />
                    </TableCell>
                </TableRow>

                <TableRow className="hover:bg-transparent border-b border-neutral-200">
                    <TableCell className="max-[1024px]:pr-6 lg:px-6 py-4 border-r border-neutral-200">
                        <div>
                            <p className="text-lg leading-6 text-dark font-bold font-plus-jakarta-sans mb-2">Viral Organic Ecommerce Videos Library</p>
                            <p className="text-base font-normal text-neutral-600 font-plus-jakarta-sans">Want to know what’s catching everyone’s eye online? Fresh viral content from ecommerce brands, not influencers, to inspire your next big idea.</p>
                        </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 border-r">
                        <TickCircle className="size-6 m-auto" />
                    </TableCell>
                    <TableCell className="px-6 py-4">
                        <TickCircle className="size-6 m-auto" />
                    </TableCell>
                </TableRow>

                <TableRow className="hover:bg-transparent border-b border-neutral-200">
                    <TableCell className="max-[1024px]:pr-6 lg:px-6 py-4 border-r border-neutral-200">
                        <div>
                            <p className="text-lg leading-6 text-dark font-bold font-plus-jakarta-sans mb-2">Industry-Specific Insights</p>
                            <p className="text-base font-normal text-neutral-600 font-plus-jakarta-sans">Stay on top of eCommerce trends effortlessly.</p>
                        </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 border-r">
                        <TickCircle className="size-6 m-auto" />
                    </TableCell>
                    <TableCell className="px-6 py-4">
                        <TickCircle className="size-6 m-auto" />
                    </TableCell>
                </TableRow>

                <TableRow className="hover:bg-transparent border-b border-neutral-200">
                    <TableCell className="max-[1024px]:pr-6 lg:px-6 py-4 border-r border-neutral-200">
                        <div>
                            <p className="text-lg leading-6 text-dark font-bold font-plus-jakarta-sans mb-2">Templates of Top-Performing Ads</p>
                            <p className="text-base font-normal text-neutral-600 font-plus-jakarta-sans">Ready-to-use Static  templates built on proven success. Just grab, tweak, and go!</p>
                        </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 border-r">
                        <CircleX color="#323A46" strokeWidth={1.5} className="size-6 m-auto" />
                    </TableCell>
                    <TableCell className="px-6 py-4">
                        <TickCircle className="size-6 m-auto" />
                    </TableCell>
                </TableRow>

                <TableRow className="hover:bg-transparent border-b border-neutral-200">
                    <TableCell className="max-[1024px]:pr-6 lg:px-6 py-4 border-r border-neutral-200">
                        <p className="text-lg leading-6 text-dark font-bold font-plus-jakarta-sans mb-2">Cancel Anytime</p>
                    </TableCell>
                    <TableCell className="px-6 py-4 border-r">
                        <TickCircle className="size-6 m-auto" />
                    </TableCell>
                    <TableCell className="px-6 py-4">
                        <TickCircle className="size-6 m-auto" />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}