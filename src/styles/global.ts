import { createGlobalStyle } from 'styled-components';
import Reset from './reset';
import Font from './font';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Font}

  html,
  body {
    background: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.textColor};
    font-family: Pretendard;
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }

  input, textarea, button {
    border: none;
    outline: none;
    resize: none;
    background: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 576px) {
    body {
      width: 402px;
      margin: 0 auto;
    } 
  }
`;

export default GlobalStyle;
