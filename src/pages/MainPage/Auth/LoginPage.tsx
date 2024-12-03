import styled from 'styled-components';
import { S } from './styles/Auth.style';

const LoginPage = () => {
  return (
    <>
      <S.Input placeholder="아이디" />
      <S.Input placeholder="비밀번호" type="password" />
      <KakaoBtn>카카오 로그인</KakaoBtn>
      <Line />
      <SignupBtn>회원가입하기</SignupBtn>
    </>
  );
};

export default LoginPage;

const InputWrapper = styled.div`
  display: flex;
  width: 361px;
  padding: 18px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border: 1px solid var(--gray_02, #333);
  background: var(--background, #0e0c0c);
`;

const Input = styled.input`
  color: var(--gray_03, #686868);

  /* body16_medium */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
`;
const KakaoBtn = styled.div`
  width: 336px;
  height: 47px;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--yellow, #fee500);
  box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);
`;
const Line = styled.div`
  width: 328px;
  height: 1px;
  background: var(--gray_02, #333);
`;
const SignupBtn = styled.div`
  color: var(--gray_03, #686868);
  text-align: center;

  /* body14_medium */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
