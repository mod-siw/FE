import styled from 'styled-components';

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

  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.2rem;
`;

const KakaoBtn = styled.div`
  margin-bottom: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.1rem;
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

  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Container = styled.div`
  padding: 0;
`;

const Title = styled.div<MarginProps>`
  margin-top: ${({ num1 }) => num1 || '0rem'};
  margin-bottom: 1.7rem;

  align-self: flex-start;
  color: ${({ theme }) => theme.colors.white};

  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.2rem;
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

  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
