import React from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './components/Auth.style';
import TopBar from './components/TopBar';
import { Kakaotalk } from '../../assets';

const handleLogin = () => {
  // 로그인 API 호출 로직
  console.log('로그인 요청');
};

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <>
      <TopBar buttonText="로그인" onClick={handleLogin} />
      <S.Wrapper>
        <S.Input placeholder="아이디" num1="8.9rem" num2="2.1rem" />
        <S.Input placeholder="비밀번호" type="password" num2="9.8rem" />
        <S.KakaoBtn>
          <Kakaotalk width={20} />
          <span>카카오 로그인</span>
        </S.KakaoBtn>
        <S.Line />
        <S.SignupBtn onClick={handleSignup}>회원가입하기</S.SignupBtn>
      </S.Wrapper>
    </>
  );
};

export default LoginPage;
