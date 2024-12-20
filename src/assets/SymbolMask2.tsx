import * as React from 'react';
import type { SVGProps } from 'react';

const SvgSymbolMask2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 330"
    width="330"
    height="330"
    {...props}
  >
    <defs>
      <mask
        id="symbol2-mask"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="330"
        height="330"
      >
        <path
          fill="white"
          fillRule="evenodd"
          d="m198.569.927 60.95 25.247-32.641 78.803 78.802-32.641 25.247 60.951-78.802 32.64 78.802 32.641-25.246 60.951-78.805-32.642 32.642 78.804-60.951 25.246-32.64-78.801-32.64 78.801-60.951-25.247 32.641-78.802-78.803 32.641-25.247-60.95 78.804-32.642L.928 133.286l25.246-60.95 78.801 32.64-32.64-78.802L133.284.927l32.642 78.805z"
          clipRule="evenodd"
        />
      </mask>
    </defs>
    <rect width="330" height="330" mask="url(#symbol2-mask)" />
  </svg>
);

export default SvgSymbolMask2;
