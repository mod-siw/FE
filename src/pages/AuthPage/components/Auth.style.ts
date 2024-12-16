import styled from 'styled-components';

// 공통
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 2rem 0rem 2rem;
`;

interface MarginProps {
  num1?: string;
  num2?: string;
}

const Input = styled.input<MarginProps>`
  margin-top: ${({ num1 }) => num1 || '0rem'};
  margin-bottom: ${({ num2 }) => num2 || '0rem'};
  display: flex;
  width: 36.2rem;
  padding: 1.8rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  background: transparent;

  color: ${({ theme }) => theme.colors.gray03};

  ${({ theme }) => theme.fonts.body16_medium}

  &:focus {
    outline: none;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.bgColor} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.gray03};
    transition: background-color 5000s ease-in-out 0s;
  }
`;

// 로그인 페이지
const KakaoBtn = styled.div`
  margin-bottom: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
  width: 33.6rem;
  height: 4.7rem;
  flex-shrink: 0;
  border-radius: 1.2rem;
  background: ${({ theme }) => theme.colors.yellow03};
  box-shadow: 0px 0px 11.2px 1.6px rgba(0, 0, 0, 0.03);

  span {
    width: 8.2rem;
    color: ${({ theme }) => theme.colors.black};
    text-align: center;

    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  cursor: pointer;
`;

const Line = styled.div`
  margin-bottom: 2.6rem;
  width: 32.8rem;
  height: 0.1rem;
  background: ${({ theme }) => theme.colors.gray02};
`;

const SignupBtn = styled.div`
  margin-bottom: 14.8rem;
  color: ${({ theme }) => theme.colors.gray03};
  text-align: center;

  ${({ theme }) => theme.fonts.body14_medium}

  cursor: pointer;
`;

// 회원가입 페이지
const Container = styled.div`
  padding: 0;
`;

const Title = styled.div<MarginProps>`
  margin-top: ${({ num1 }) => num1 || '0rem'};
  margin-bottom: 1.7rem;

  align-self: flex-start;
  color: ${({ theme }) => theme.colors.textColor};

  ${({ theme }) => theme.fonts.body16_semibold}
`;

interface MessageProps {
  isValid: boolean | null;
}

const Message = styled.div<MessageProps>`
  align-self: flex-start;
  color: ${({ theme, isValid }) =>
    isValid === null
      ? 'transparent'
      : isValid
        ? theme.colors.mint01 // 유효
        : theme.colors.magenta01}; // 유효X

  ${({ theme }) => theme.fonts.body16_medium}
`;

export const S = {
  Wrapper,
  Input,
  KakaoBtn,
  Line,
  SignupBtn,
  Container,
  Title,
  Message,
};
