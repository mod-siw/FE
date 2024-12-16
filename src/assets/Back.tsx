import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" {...props}>
    <path
      stroke={props.stroke}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.8}
      d="m10 5-7 7 7 7M22 12H4"
    />
  </svg>
);
export default SvgBack;
