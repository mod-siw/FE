import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDiagonalarrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <g stroke="#fff" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit={10}>
      <path d="m7 7 11 11M6 15V6h9" />
    </g>
  </svg>
);
export default SvgDiagonalarrow;
