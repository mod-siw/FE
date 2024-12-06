import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFrameMan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
    <g clipPath="url(#Frame-MAN_svg__a)">
      <path d="M0 0h100v100H0z" />
      <path
        fill={props.fill}
        fillRule="evenodd"
        d="M100 0H0v100h100zM69.683 23.948a19.87 19.87 0 0 1-4.758 12.932C74.783 42.264 81.47 52.726 81.47 64.75c0 17.527-14.208 31.736-31.735 31.736S18 82.278 18 64.75c0-12.025 6.688-22.487 16.546-27.871a19.87 19.87 0 0 1-4.759-12.932C29.787 12.931 38.718 4 49.735 4s19.948 8.931 19.948 19.948"
        clipRule="evenodd"
      />
    </g>
    <path stroke={props.fill} d="M.5.5h99v99H.5z" />
    <defs>
      <clipPath id="Frame-MAN_svg__a">
        <path fill={props.fill} d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFrameMan;
