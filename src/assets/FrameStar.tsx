import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFrameStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
    <g clipPath="url(#Frame-STAR_svg__a)">
      <path d="M0 0h100v100H0z" />
      <path
        fill={props.fill}
        fillRule="evenodd"
        d="M100 0H0v100h100zM62.107 37.394 49.75 4 37.393 37.394 4 49.75l33.393 12.357L49.75 95.5l12.357-33.393L95.5 49.75z"
        clipRule="evenodd"
      />
    </g>
    <path stroke={props.fill} d="M.5.5h99v99H.5z" />
    <defs>
      <clipPath id="Frame-STAR_svg__a">
        <path fill={props.fill} d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFrameStar;
