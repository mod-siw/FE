import * as React from 'react';
import type { SVGProps } from 'react';

const SvgSymbolMask02 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 352" {...props}>
    <defs>
      <mask id="symbol02-mask">
        <path
          d="m210.635.927 64.671 26.788-34.634 83.614 83.613-34.634 26.788 64.672L267.46 176l83.614 34.634-26.788 64.672-83.616-34.635 34.634 83.614-64.671 26.788L176 267.462l-34.633 83.611-64.671-26.788 34.633-83.613-83.614 34.634L.927 210.635 84.542 176 .928 141.366l26.788-64.671 83.611 34.633-34.633-83.613L141.365.927 176 84.543z"
          fill="white"
        />
      </mask>
    </defs>
    <rect width="352" height="352" mask="url(#symbol02-mask)" />
  </svg>
);

export default SvgSymbolMask02;
