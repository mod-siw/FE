import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSymbolTree2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}>
    <path fill="#000" d="M.5.5h99v99H.5z" />
    <path stroke="#fff" d="M.5.5h99v99H.5z" />
    <mask id="symbolTree2_svg__a" fill="#fff">
      <path
        fillRule="evenodd"
        d="M50.25 4 84.5 44.545H63.004l21.498 25.18H62.989L84.501 95.19H16l21.512-25.465H16l21.498-25.18H16z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="#fff"
      d="M84.5 44.545v.5h1.078l-.695-.823zM50.25 4l.382-.323-.382-.452-.382.452zm12.753 40.545v-.5H61.92l.704.825zm21.498 25.18v.5h1.084l-.704-.824zm-21.512 0v-.5h-1.077l.695.823zM84.501 95.19v.5h1.077l-.695-.822zM16 95.19l-.382-.322-.695.822H16zm21.512-25.465.382.323.695-.823h-1.077zm-21.512 0-.38-.324-.704.824H16zm21.498-25.18.38.325.704-.825h-1.084zm-21.498 0-.382-.323-.695.823H16zm68.883-.323L50.633 3.677l-.765.646 34.25 40.545zm-21.88.823h21.498v-1H63.003zM84.881 69.4 63.383 44.22l-.76.649L84.12 70.05zm-21.892.824h21.512v-1H62.989zm-.382-.177L84.12 95.513l.764-.645L63.37 69.403zM84.501 94.69H16v1h68.5zm-68.119.823 21.512-25.465-.764-.645-21.512 25.465zM16 70.225h21.512v-1H16zM37.117 44.22 15.62 69.4l.76.65 21.498-25.18zM16 45.045h21.498v-1H16zM49.868 3.677l-34.25 40.545.764.646 34.25-40.545z"
      mask="url(#symbolTree2_svg__a)"
    />
  </svg>
);
export default SvgSymbolTree2;
