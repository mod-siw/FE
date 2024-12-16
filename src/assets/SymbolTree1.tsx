import * as React from 'react';
import type { SVGProps } from 'react';
import { useTheme } from 'styled-components';

const SvgSymbolTree1 = ({
  color,
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) => {
  const theme = useTheme();

  const defaultColor = color || (theme.isDarkMode ? '#fff' : '#E8E8E8');
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}>
      <g clipPath="url(#symbolTree1_svg__a)">
        {/* <path fill="#000" d="M0 0h100v100H0z" /> */}
        <path
          fill={defaultColor}
          fillRule="evenodd"
          d="M100 1H0v100h100zM84.5 44.545 50.25 4 16 44.545h21.497L16 69.725H37.51L16 95.19h68.5L62.99 69.725h21.512l-21.498-25.18z"
          clipRule="evenodd"
        />
      </g>
      <path stroke={defaultColor} d="M.5.5h99v99H.5z" />
      <defs>
        <clipPath id="symbolTree1_svg__a">
          <path fill={defaultColor} d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgSymbolTree1;
