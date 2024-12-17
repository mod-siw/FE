import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './components/Auth.style';
import TopBar from './components/TopBar';
import { Kakaotalk } from '../../assets';

import { useTheme } from 'contexts/ThemeContext';
import { useUser } from 'contexts/UserContext';
import { PostLogIn } from 'api/auth';
import { clearCookies } from 'api/http';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { setUsername, setNickname } = useUser();
  const [inputData, setInputData] = useState({
    username: '',
    password: '',
  });

  const isActive = inputData.username.trim() !== '' && inputData.password.trim() !== '';

  const handleLogin = async () => {
    if (isActive) {
      try {
        clearCookies();
        const response = await PostLogIn(inputData.username, inputData.password);
        setUsername(inputData.username);
        setNickname(response.data.data.nickname);
        alert('로그인 성공!');
        navigate('/');
      } catch (error) {
        alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
      }
    }
  };

  const handleKakaoLogin = () => {
    clearCookies();
    const kakaoAuthUrl = process.env.REACT_APP_KAKAO_AUTH_URL || '';
    if (!kakaoAuthUrl) {
      alert('카카오 로그인 URL이 설정되지 않았습니다.');
      return;
    }
    window.location.href = kakaoAuthUrl;
  };

  const handleSignup = () => {
    navigate('/signup');
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
      <TopBar buttonText="로그인" onClick={handleLogin} isActive={isActive} />
      <S.Wrapper>
        <S.Input
          name="username"
          placeholder="아이디"
          num1="8.9rem"
          num2="2.1rem"
          onChange={handleInputChange}
        />
        <S.Input
          name="password"
          placeholder="비밀번호"
          type="password"
          num2="9.8rem"
          onChange={handleInputChange}
        />
        <S.KakaoBtn onClick={handleKakaoLogin}>
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
