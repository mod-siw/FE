import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="#fff"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.8}
      d="m9 5-7 7 7 7M21 12H3"
    />
  </svg>
);
export default SvgArrowBack;
