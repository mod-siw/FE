import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSymbolHat1 = ({
  color = '#fff',
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}>
    <g clipPath="url(#symbolHat1_svg__a)">
      {/* <path fill="#000" d="M0 0h100v100H0z" /> */}
      <path
        fill={color}
        fillRule="evenodd"
        d="M100 0H0v100h100zM64.501 19.022c0 6.117-3.917 11.32-9.38 13.236l35.837 62.07H10l35.836-62.07c-5.462-1.917-9.38-7.119-9.38-13.236C36.457 11.278 42.736 5 50.48 5s14.022 6.278 14.022 14.022"
        clipRule="evenodd"
      />
    </g>
    <path stroke={color} d="M.5.5h99v99H.5z" />
    <defs>
      <clipPath id="symbolHat1_svg__a">
        <path fill={color} d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSymbolHat1;
