import { SVGProps } from "react";

export function InstagramLogo(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        width={24}
        height={25}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_6259_28541)" fill="#fff">
          <path d="M16.85.5h-9.7C3.207.5 0 3.707 0 7.65v9.7c0 3.943 3.207 7.15 7.15 7.15h9.7c3.943 0 7.15-3.207 7.15-7.15v-9.7C24 3.707 20.793.5 16.85.5zm4.736 16.85a4.735 4.735 0 01-4.736 4.736h-9.7a4.735 4.735 0 01-4.736-4.736v-9.7A4.735 4.735 0 017.15 2.914h9.7a4.735 4.735 0 014.736 4.736v9.7z" />
          <path d="M12 6.293A6.214 6.214 0 005.793 12.5 6.214 6.214 0 0012 18.707a6.214 6.214 0 006.207-6.207A6.214 6.214 0 0012 6.293zm0 10a3.793 3.793 0 110-7.586 3.793 3.793 0 010 7.586zM18.218 7.826a1.487 1.487 0 100-2.975 1.487 1.487 0 000 2.975z" />
        </g>
        <defs>
          <clipPath id="clip0_6259_28541">
            <path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    )
}