import * as React from 'react';
import type { SVGProps } from 'react';
import { useTheme } from 'contexts/ThemeContext';
import { darkTheme, lightTheme } from 'styles/theme';

const SvgSymbolMan2 = (props: SVGProps<SVGSVGElement>) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const borderColor = theme.colors.textColor; // 도형 테두리 색상
  const backgroundColor = theme.colors.bgColor; // 도형 바깥 배경
  const outerBorder = isDarkMode ? '#333' : '#E8E8E8'; // 네모 테두리 색상

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      {/* 전체 네모 테두리 */}
      <rect
        x="0.5"
        y="0.5"
        width="99"
        height="99"
        stroke={outerBorder}
        fill={backgroundColor}
      />

      {/* 도형 */}
      <path
        d="M64.925 36.88a19.87 19.87 0 0 0 4.758-12.932C69.683 12.931 60.753 4 49.735 4c-11.017 0-19.948 8.931-19.948 19.948a19.87 19.87 0 0 0 4.759 12.932C24.687 42.264 18 52.726 18 64.75c0 17.527 14.209 31.736 31.736 31.736S81.47 82.278 81.47 64.75c0-12.025-6.688-22.487-16.546-27.871"
        stroke={borderColor}
        strokeWidth={0.38}
        fill="transparent"
      />
    </svg>
  );
};

export default SvgSymbolMan2;
