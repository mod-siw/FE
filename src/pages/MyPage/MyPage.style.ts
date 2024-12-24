import { styled, createGlobalStyle, css } from 'styled-components';

const Wrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SharePageGlobalStyle = createGlobalStyle`
 html,
  body {
    background: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.textColor};
    font-family: Pretendard;
    font-size: 62.5%;
    transition: background 0.3s ease;
  }

  &::-webkit-scrollbar {
      display: none; 
    }

    @media (min-width: 425px) {
    body {
      width: 390px;
      margin: 0 auto;
    } 
    }
`;

const Wrapper2 = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const Top = styled.div`
  margin-top: 4.2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0;
`;

const HomeBtn = styled.div<{ isHidden?: boolean }>`
  padding: 0.3rem 3rem 0 0;
  color: ${({ theme }) => theme.colors.textColor};
  height: 1.7rem;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: flex-end;

  cursor: pointer;

  ${({ isHidden }) =>
    isHidden &&
    css`
      visibility: hidden;
    `}
`;

const Title = styled.div`
  padding-left: 3rem;

  //width: 29.6rem;
  color: ${({ theme }) => theme.colors.textColor};
  ${({ theme }) => theme.fonts.head_medium}

  white-space: pre-wrap;
`;

const ShareBtn = styled.div`
  margin-bottom: 4.8rem;

  display: flex;
  width: 15.6rem;
  height: 5.6rem;
  padding: 0.9rem 2.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  border: 1px solid ${({ theme }) => theme.colors.gray03};
  background: ${({ theme }) => theme.colors.bgColor};

  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.textColor};

    ${({ theme }) => theme.fonts.body16_semibold}
  }
`;

const LogoutBtn = styled.div`
  margin-bottom: 4.1rem;

  color: ${({ theme }) => theme.colors.gray03};
  text-align: center;

  ${({ theme }) => theme.fonts.body14_medium}
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;

  cursor: pointer;
`;

export const S = {
  Wrapper,
  SharePageGlobalStyle,
  Wrapper2,
  Top,
  Title,
  HomeBtn,
  ShareBtn,
  LogoutBtn,
};
