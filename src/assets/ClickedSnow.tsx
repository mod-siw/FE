import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClickedSnow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 160" {...props}>
    <g clipPath="url(#Clicked-SNOW_svg__a)">
      <path fill="#0E0C0C" d="M0 0h160v160H0z" />
      <g fill="#161616" stroke="#333" strokeWidth={0.8}>
        <path d="M64.4-.4h32.8v160.8H64.4z" />
        <path d="M161.2 63.6v32.8H.4V63.6z" />
        <path d="m126.055 11.552 23.193 23.193L35.546 148.448l-23.194-23.193z" />
        <path d="m149.249 125.255-23.193 23.193L12.353 34.745l23.193-23.193z" />
        <path d="M80.7 56.907 103.893 80.1 80.7 103.293 57.507 80.1z" />
      </g>
    </g>
    <path stroke="#333" strokeWidth={1.2} d="M.6.6h158.8v158.8H.6z" />
    <defs>
      <clipPath id="Clicked-SNOW_svg__a">
        <path fill="#fff" d="M0 0h160v160H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClickedSnow;
