import { SVGProps } from "react";

export function Happyemoji(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M9.974 18.334a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667z"
            stroke="#FFD400"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.008 13.333a4.86 4.86 0 003.991 2.083 4.87 4.87 0 003.992-2.083"
            stroke="#FFD400"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
}