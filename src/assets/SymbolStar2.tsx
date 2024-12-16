import * as React from 'react';
import type { SVGProps } from 'react';
import { useTheme } from 'contexts/ThemeContext';
import { darkTheme, lightTheme } from 'styles/theme';

const SvgSymbolStar2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="m49.75 4.72 12.122 32.76.04.108.108.04L94.78 49.75 62.02 61.872l-.108.04-.04.108L49.75 94.78 37.628 62.02l-.04-.108-.108-.04L4.72 49.75l32.76-12.122.108-.04.04-.108z"
        stroke={borderColor}
        strokeWidth={0.38}
        fill="transparent"
      />
    </svg>
  );
};

export default SvgSymbolStar2;
