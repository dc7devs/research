import { SVGProps } from "react";

export function EosJewelry(props: SVGProps<SVGSVGElement>) {
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
            d="M8.999 2.833l-3 3.583c-.083.167-.167.417-.25.584l-1.417 7.166c-.083.5.167 1.084.584 1.334L9.332 18c.334.166.917.166 1.25 0L15 15.5c.417-.25.667-.834.583-1.334L14.166 7c0-.167-.167-.417-.25-.584l-3-3.583c-.5-.667-1.334-.667-1.917 0z"
            stroke="#FFD400"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 7.083L10.417 17.25c-.167.333-.667.333-.75 0L6 7.083"
            stroke="#FFD400"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )    
}