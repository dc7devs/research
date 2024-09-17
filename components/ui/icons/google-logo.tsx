import { SVGProps } from "react";

export function GoogleLogo(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        width={24}
        height={25}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_6259_28539)" fill="#fff">
          <path d="M23.764 12.776c0-.816-.066-1.636-.207-2.438H12.238v4.62h6.482a5.555 5.555 0 01-2.399 3.647v2.999h3.867c2.271-2.09 3.576-5.177 3.576-8.828z" />
          <path d="M12.24 24.5c3.236 0 5.965-1.063 7.954-2.898l-3.867-2.998c-1.076.732-2.465 1.146-4.084 1.146-3.13 0-5.785-2.112-6.737-4.951h-3.99v3.09a12.002 12.002 0 0010.723 6.61z" />
          <path d="M5.5 14.8a7.188 7.188 0 010-4.594v-3.09H1.516a12.01 12.01 0 000 10.776L5.5 14.8z" />
          <path d="M12.24 5.25a6.521 6.521 0 014.603 1.799l3.425-3.426A11.533 11.533 0 0012.24.5 11.998 11.998 0 001.516 7.115l3.986 3.09C6.45 7.363 9.108 5.25 12.239 5.25z" />
        </g>
        <defs>
          <clipPath id="clip0_6259_28539">
            <path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    )
  }