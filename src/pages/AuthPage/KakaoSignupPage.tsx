import React, { useState } from 'react';
import { S } from './components/Auth.style';
import TopBar from './components/TopBar';

const KakaoSignupPage = () => {
  const [inputData, setInputData] = useState({
    nickname: '',
  });

  const isActive = inputData.nickname.trim() !== '';

  const handleKakaoSignup = () => {
    if (isActive) {
      // API 로직 추가
      console.log('카카오 회원가입 요청');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <TopBar buttonText="회원가입" onClick={handleKakaoSignup} isActive={isActive} />
      <S.Wrapper>
        <S.Container>
          <S.Title num1="4.7rem">닉네임</S.Title>
          <S.Input
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            num2="44.4rem"
            value={inputData.nickname}
            onChange={handleInputChange}
          />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default KakaoSignupPage;
