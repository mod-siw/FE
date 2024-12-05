import * as React from 'react';
import type { SVGProps } from 'react';

const SvgSymbolMask01 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" {...props}>
    <defs>
      <mask id="symbol01-mask" x="0" y="0" width="100%" height="100%">
        <path
          fill="white"
          d="M209.999 0h-70v90.502L76.006 26.508 26.508 76.006 90.503 140H0v70h90.503l-63.995 63.994 49.498 49.498 63.993-63.994V350h70v-90.503l63.997 63.996 49.497-49.497-63.995-63.995H350v-70h-90.502l63.995-63.996-49.497-49.497-63.997 63.997z"
        />
      </mask>
    </defs>
    <rect width="350" height="350" mask="url(#symbol01-mask)" />
  </svg>
);

export default SvgSymbolMask01;
