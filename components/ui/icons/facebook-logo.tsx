import { SVGProps } from "react";

export function FacebookLogo(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        width={24}
        height={25}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_6259_28538)">
          <path
            d="M24 12.5c0-6.627-5.373-12-12-12S0 5.873 0 12.5c0 5.99 4.388 10.954 10.125 11.854V15.97H7.078V12.5h3.047V9.856c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.454 24 18.49 24 12.5z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="clip0_6259_28538">
            <path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    )
  }