import React from 'react';
import { S } from './components/Auth.style';
import TopBar from './components/TopBar';

const handleKakaoSignup = () => {
  // 카카오 회원가입 API 호출 로직
  console.log('카카오 회원가입 요청');
};

const KakaoSignupPage = () => {
  return (
    <>
      <TopBar buttonText="회원가입" onClick={handleKakaoSignup} />
      <S.Wrapper>
        <S.Container>
          <S.Title num1="4.7rem">닉네임</S.Title>
          <S.Input placeholder="닉네임을 입력해주세요" num2="44.4rem" />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default KakaoSignupPage;
