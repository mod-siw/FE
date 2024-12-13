import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './components/Auth.style';
import TopBar from './components/TopBar';
import { Kakaotalk } from '../../assets';

const LoginPage = () => {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    id: '',
    pw: '',
  });

  const isActive = inputData.id.trim() !== '' && inputData.pw.trim() !== '';

  const handleLogin = () => {
    if (isActive) {
      // 로그인 API 호출 로직
      console.log('로그인 요청');
    }
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
          name="id"
          placeholder="아이디"
          num1="8.9rem"
          num2="2.1rem"
          onChange={handleInputChange}
        />
        <S.Input
          name="pw"
          placeholder="비밀번호"
          type="password"
          num2="9.8rem"
          onChange={handleInputChange}
        />
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
