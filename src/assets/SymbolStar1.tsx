import * as React from 'react';
import type { SVGProps } from 'react';
import { useTheme } from 'styled-components';

const SvgSymbolStar1 = ({
  color,
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) => {
  const theme = useTheme();

  const defaultColor = color || (theme.isDarkMode ? '#fff' : '#E8E8E8');
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}>
      <g clipPath="url(#symbolStar1_svg__a)">
        {/* <path fill="#000" d="M0 0h100v100H0z" /> */}
        <path
          fill={defaultColor}
          fillRule="evenodd"
          d="M100 0H0v100h100zM62.107 37.394 49.75 4 37.393 37.394 4 49.75l33.393 12.357L49.75 95.5l12.357-33.393L95.5 49.75z"
          clipRule="evenodd"
        />
      </g>
      <path stroke={defaultColor} d="M.5.5h99v99H.5z" />
      <defs>
        <clipPath id="symbolStar1_svg__a">
          <path fill={defaultColor} d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgSymbolStar1;
