import { SVGProps } from "react";

export function TickCircle(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
          width={16}
          height={17}
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M8 15.166c3.667 0 6.667-3 6.667-6.666 0-3.667-3-6.667-6.666-6.667-3.667 0-6.667 3-6.667 6.667 0 3.666 3 6.666 6.667 6.666z"
            stroke="#FFD400"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.166 8.5l1.887 1.887 3.78-3.774"
            stroke="#FFD400"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
}