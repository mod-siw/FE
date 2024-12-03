import React from 'react';
import styled from 'styled-components';
import { S } from './components/Auth.style';
import TopBar from './components/TopBar';
import { Kakaotalk } from '../../assets';

const LoginPage = () => {
  return (
    <>
      <TopBar buttonText="로그인" />
      <S.Input placeholder="아이디" />
      <S.Input placeholder="비밀번호" type="password" />
      <KakaoBtn>
        <Kakaotalk width={20} />
        카카오 로그인
      </KakaoBtn>
      <Line />
      <SignupBtn>회원가입하기</SignupBtn>
    </>
  );
};

export default LoginPage;

const KakaoBtn = styled.div`
  width: 336px;
  height: 47px;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--yellow03);
  box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);
`;
const Line = styled.div`
  width: 328px;
  height: 1px;
  background: var(--gray02);
`;
const SignupBtn = styled.div`
  color: var(--gray03);
  text-align: center;

  /* body14_medium */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
