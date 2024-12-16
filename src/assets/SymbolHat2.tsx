import * as React from 'react';
import type { SVGProps } from 'react';
import { useTheme } from 'contexts/ThemeContext';
import { darkTheme, lightTheme } from 'styles/theme';

const SvgSymbolHat2 = (props: SVGProps<SVGSVGElement>) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const borderColor = theme.colors.textColor; // 도형 테두리 색상
  const backgroundColor = isDarkMode ? theme.colors.bgColor : '#fff'; // 도형 바깥 배경
  const outerBorder = isDarkMode ? '#333' : '#E8E8E8'; // 전체 네모 테두리 색상

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

      {/* 도형 바깥 배경 */}
      <mask id="mask" fill={backgroundColor}>
        <path
          fillRule="evenodd"
          d="M55.122 32.258c5.462-1.916 9.38-7.119 9.38-13.236C64.501 11.278 58.222 5 50.478 5s-14.022 6.278-14.022 14.022c0 6.117 3.916 11.32 9.379 13.236L10 94.328h80.958z"
          clipRule="evenodd"
        />
      </mask>
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        fill={backgroundColor}
        mask="url(#mask)"
      />

      {/* 도형 테두리 */}
      <path
        d="M55.122 32.258c5.462-1.916 9.38-7.119 9.38-13.236C64.501 11.278 58.222 5 50.478 5s-14.022 6.278-14.022 14.022c0 6.117 3.916 11.32 9.379 13.236L10 94.328h80.958z"
        stroke={borderColor}
        fill="transparent"
        strokeWidth={0.38}
      />
    </svg>
  );
};

export default SvgSymbolHat2;
