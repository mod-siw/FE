import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './components/Auth.style';
import TopBar from './components/TopBar';

import { useUser } from 'contexts/UserContext';
import { PostKakaoNickname } from 'api/auth';
import { clearCookies } from 'api/http';

const KakaoSignupPage = () => {
  const navigate = useNavigate();
  const { setNickname } = useUser();
  const [inputData, setInputData] = useState({
    nickname: '',
  });

  const isActive = inputData.nickname.trim() !== '';

  const handleKakaoSignup = async () => {
    if (!isActive) return;

    try {
      clearCookies();
      const username = localStorage.getItem('kakaoUsername');
      if (!username) throw new Error('카카오 회원가입 중 username을 찾을 수 없습니다.');

      const response = await PostKakaoNickname(inputData.nickname, username);

      setNickname(inputData.nickname);
      alert('카카오 회원가입이 완료되었습니다!');
      navigate('/');
    } catch (error) {
      console.error('카카오 회원가입 실패:', error);
      alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
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
            maxLength={5}
          />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default KakaoSignupPage;
