import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFrameTree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
    <g clipPath="url(#Frame-TREE_svg__a)">
      <path d="M0 0h100v100H0z" />
      <path
        fill={props.fill}
        fillRule="evenodd"
        d="M100 1H0v100h100zM84.5 44.545 50.25 4 16 44.545h21.497L16 69.725H37.51L16 95.19h68.5L62.99 69.725h21.512l-21.498-25.18z"
        clipRule="evenodd"
      />
    </g>
    <path stroke={props.fill} d="M.5.5h99v99H.5z" />
    <defs>
      <clipPath id="Frame-TREE_svg__a">
        <path fill={props.fill} d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFrameTree;
