import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUnion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 14" {...props}>
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M7.275.625h-1.65v4.5l-3-3L1.46 3.292l2.583 2.583H0v1.65h4.757l-3.631 3.631 1.166 1.167L5.625 8.99v4.385h1.65V9.108l3.2 3.2 1.166-1.167-3.616-3.616h4.725v-1.65H8.74l2.568-2.568-1.167-1.166-2.866 2.866z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUnion;
