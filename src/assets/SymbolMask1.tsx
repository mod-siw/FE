import * as React from 'react';
import type { SVGProps } from 'react';

const SvgSymbolMask1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 330"
    width="330"
    height="330"
    {...props}
  >
    <defs>
      <mask id="symbol1-mask" maskUnits="userSpaceOnUse">
        <path
          fill="white"
          d="M197.999 0h-66v85.33L71.663 24.994l-46.67 46.668 60.339 60.339H0v66h85.331l-60.337 60.337 46.669 46.669 60.336-60.336V330h66v-85.332l60.34 60.34 46.669-46.669-60.338-60.338H330v-66h-85.331l60.339-60.339-46.669-46.669-60.34 60.34z"
        />
      </mask>
    </defs>
    <rect width="330" height="330" mask="url(#symbol1-mask)" />
  </svg>
);

export default SvgSymbolMask1;
