import * as React from 'react';
import type { SVGProps } from 'react';

const SvgRectangle = ({
  fill = '#D2D2D2',
  fillOpacity = '0.1',
  ...restProps
}: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...restProps}>
    <path fill={fill} fillOpacity={fillOpacity} d="M23.897 137.831H.86V.171h23.037z" />
  </svg>
);

export default SvgRectangle;
