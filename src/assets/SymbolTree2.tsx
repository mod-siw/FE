import * as React from 'react';
import type { SVGProps } from 'react';
import { useTheme } from 'contexts/ThemeContext';
import { darkTheme, lightTheme } from 'styles/theme';

const SvgSymbolTree2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M50.25 4 84.5 44.545H63.004l21.498 25.18H62.989L84.501 95.19H16l21.512-25.465H16l21.498-25.18H16z"
        stroke={borderColor}
        strokeWidth={0.38}
        fill="transparent"
      />
    </svg>
  );
};

export default SvgSymbolTree2;
