import * as React from 'react';
import type { SVGProps } from 'react';
import { useTheme } from 'styled-components';

const SvgSymbolMan1 = ({
  color,
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) => {
  const theme = useTheme();

  const defaultColor = color || (theme.isDarkMode ? '#fff' : '#E8E8E8');
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}>
      <g clipPath="url(#symbolMan1_svg__a)">
        {/* <path fill="#000" d="M0 0h100v100H0z" /> */}
        <path
          fill={defaultColor}
          fillRule="evenodd"
          d="M100 0H0v100h100zM69.683 23.948a19.87 19.87 0 0 1-4.758 12.932C74.783 42.264 81.47 52.726 81.47 64.75c0 17.527-14.208 31.736-31.735 31.736S18 82.278 18 64.75c0-12.025 6.688-22.487 16.546-27.871a19.87 19.87 0 0 1-4.759-12.932C29.787 12.931 38.718 4 49.735 4s19.948 8.931 19.948 19.948"
          clipRule="evenodd"
        />
      </g>
      <path stroke={defaultColor} d="M.5.5h99v99H.5z" />
      <defs>
        <clipPath id="symbolMan1_svg__a">
          <path fill={defaultColor} d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgSymbolMan1;
