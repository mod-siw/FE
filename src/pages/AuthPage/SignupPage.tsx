import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './components/Auth.style';
import TopBar from './components/TopBar';

import { useUser } from 'contexts/UserContext';
import { PostSignUp, PostDuplicateId } from 'api/auth';
import { clearCookies } from 'api/http';

const SignupPage = () => {
  const navigate = useNavigate();
  const { setUsername, setNickname } = useUser();
  const [inputData, setInputData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  });
  const [isUsernameValid, setIsUsernameValid] = useState<boolean | null>(null);

  const isActive = () =>
    inputData.username.trim() !== '' &&
    inputData.password.trim() !== '' &&
    inputData.confirmPassword.trim() !== '' &&
    inputData.nickname.trim() !== '' &&
    isPasswordMatching();

  // 비밀번호 일치 여부
  const isPasswordMatching = () => inputData.password === inputData.confirmPassword;

  const handleSignup = async () => {
    if (isActive()) {
      try {
        clearCookies();
        const response = await PostSignUp(
          inputData.username,
          inputData.password,
          inputData.nickname,
        );
        setUsername(inputData.username);
        setNickname(inputData.nickname);
        alert('회원가입 성공!');
        navigate('/');
      } catch (error) {
        console.error('회원가입 실패:', error);
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));

    // 아이디 입력 중 초기화
    if (name === 'username') {
      setIsUsernameValid(null);
    }
  };

  const handleUsernameBlur = async () => {
    if (inputData.username.trim() === '') {
      setIsUsernameValid(null);
      return;
    }

    try {
      const isDuplicate = await PostDuplicateId(inputData.username);
      setIsUsernameValid(!isDuplicate);
    } catch (error) {
      setIsUsernameValid(false);
    }
  };

  return (
    <>
      <TopBar buttonText="회원가입" onClick={handleSignup} isActive={isActive()} />
      <S.Wrapper>
        <S.Container>
          <S.Title num1="4.8rem">아이디</S.Title>
          <S.Input
            name="username"
            placeholder="아이디를 입력해주세요"
            num2="1rem"
            onChange={handleInputChange}
            onBlur={handleUsernameBlur}
          />
          <S.Message isValid={isUsernameValid}>
            {isUsernameValid === null
              ? '' // 초기 상태
              : isUsernameValid
                ? '사용 가능한 아이디예요'
                : '다른 아이디를 입력해주세요'}
          </S.Message>
        </S.Container>
        <S.Container>
          <S.Title num1="3.2rem">비밀번호</S.Title>
          <S.Input
            name="password"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            num2="0.8rem"
            onChange={handleInputChange}
          />
          <S.Input
            name="confirmPassword"
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            num2="1.0rem"
            onChange={handleInputChange}
          />
          <S.Message isValid={isPasswordMatching()}>
            {inputData.password === '' || inputData.confirmPassword === ''
              ? ''
              : !isPasswordMatching()
                ? '비밀번호가 일치하지 않아요'
                : '비밀번호가 일치해요'}
          </S.Message>
        </S.Container>
        <S.Container>
          <S.Title num1="3.2rem">닉네임</S.Title>
          <S.Input
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            num2="7.1rem"
            onChange={handleInputChange}
          />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default SignupPage;
