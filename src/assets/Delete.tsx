import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" {...props}>
    <path
      stroke="#fff"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M2 23 23 2M23 23 2 2"
    />
  </svg>
);
export default SvgDelete;
