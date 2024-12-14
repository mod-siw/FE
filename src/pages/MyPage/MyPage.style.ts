import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  margin-top: 4.2rem;

  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
`;

const Title = styled.div`
  padding-left: 3rem;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.head_medium}

  white-space: pre-wrap;
`;

const HomeBtn = styled.div`
  padding: 0.3rem 3rem 0 0;
  color: ${({ theme }) => theme.colors.white};

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
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
  background: ${({ theme }) => theme.colors.black};

  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.body16_semibold}
  }
`;

const LogoutBtn = styled.div`
  margin-bottom: 28.6rem;

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

export const S = { Wrapper, Top, Title, HomeBtn, ShareBtn, LogoutBtn };
