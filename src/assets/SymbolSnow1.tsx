import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSymbolSnow1 = ({
  color = '#fff',
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}>
    <g clipPath="url(#symbolSnow1_svg__a)">
      {/* <path fill="#000" d="M0 0h100v100H0z" /> */}
      <path
        fill={color}
        fillRule="evenodd"
        d="M100 0H0v100h100zM76 11l13 13L72.19 40.807h23.771v18.384h-23.77L89 76 76 89 59.193 72.193v23.77H40.808V72.19L24 88.999 11 76l16.807-16.807H4.038V40.808h23.77L11 24l13-13 16.808 16.808V4.038h18.385v23.768z"
        clipRule="evenodd"
      />
    </g>
    <path stroke={color} d="M.5.5h99v99H.5z" />
    <defs>
      <clipPath id="symbolSnow1_svg__a">
        <path fill={color} d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSymbolSnow1;
