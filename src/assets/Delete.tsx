import * as React from 'react';
import type { SVGProps } from 'react';
import { useTheme } from 'styled-components';

const SvgDelete = (props: SVGProps<SVGSVGElement>) => {
  const { isDarkMode } = useTheme();

  const defaultColor = isDarkMode ? '#fff' : '#0E0C0C';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" {...props}>
      <path
        stroke={defaultColor}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M2 23L23 2M23 23L2 2"
      />
    </svg>
  );
};

export default SvgDelete;
