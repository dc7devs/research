import { SVGProps } from "react";

export function UserClothing(props: SVGProps<SVGSVGElement>) {
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
            d="M10 10a4.167 4.167 0 100-8.333A4.167 4.167 0 0010 10zM17.159 18.333c0-3.225-3.209-5.833-7.159-5.833-3.95 0-7.158 2.608-7.158 5.833"
            stroke="#FFD400"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
}