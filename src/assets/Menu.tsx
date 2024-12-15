import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 34" {...props}>
    <g fill="#fff">
      <rect width={34} height={34} fillOpacity={0.15} rx={17} />
      <circle cx={17.5} cy={9.5} r={1.5} />
      <circle cx={17.5} cy={16.7} r={1.5} />
      <circle cx={17.5} cy={23.9} r={1.5} />
    </g>
  </svg>
);
export default SvgMenu;
