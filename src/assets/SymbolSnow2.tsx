import * as React from 'react';
import type { SVGProps } from 'react';
import { useTheme } from 'contexts/ThemeContext';
import { darkTheme, lightTheme } from 'styles/theme';

const SvgSymbolSnow2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M89 24 76 11 59.192 27.806V4.04H40.808v23.769L24 11 11 24l16.808 16.808H4.038v18.384h23.769L11 76l13 13 16.808-16.808v23.772h18.385v-23.77L76 89l13-13-16.808-16.808h23.77V40.808h-23.77z"
        stroke={borderColor}
        strokeWidth={0.38}
        fill="transparent"
      />
    </svg>
  );
};

export default SvgSymbolSnow2;
