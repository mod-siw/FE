import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSymbolStar2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}>
    {/* <path fill="#000" d="M.5.5h99v99H.5z" /> */}
    <path stroke="#333333" d="M.5.5h99v99H.5z" />
    <path
      stroke="#fff"
      strokeWidth={0.5}
      d="m49.75 4.72 12.122 32.76.04.108.108.04L94.78 49.75 62.02 61.872l-.108.04-.04.108L49.75 94.78 37.628 62.02l-.04-.108-.108-.04L4.72 49.75l32.76-12.122.108-.04.04-.108z"
    />
  </svg>
);
export default SvgSymbolStar2;
