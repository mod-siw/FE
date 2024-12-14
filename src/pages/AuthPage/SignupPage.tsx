import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './components/Auth.style';
import TopBar from './components/TopBar';

import { PostSignUp } from 'api/auth';
import { clearCookies } from 'api/http';

const SignupPage = () => {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    id: '',
    pw: '',
    confirmPw: '',
    nickname: '',
  });
  const [isIdValid, setIsIdValid] = useState<boolean | null>(null);

  const isActive = () =>
    inputData.id.trim() !== '' &&
    inputData.pw.trim() !== '' &&
    inputData.confirmPw.trim() !== '' &&
    inputData.nickname.trim() !== '' &&
    isPwMatching();

  // 비밀번호 일치 여부
  const isPwMatching = () => inputData.pw === inputData.confirmPw;

  const handleSignup = async () => {
    if (isActive()) {
      try {
        clearCookies();
        await PostSignUp(inputData.id, inputData.pw, inputData.nickname);
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

    // 아이디 유효성 검사
    if (name === 'id') {
      setIsIdValid(value.length > 0 && value !== '사용불가'); // 임시 로직
    }
  };

  return (
    <>
      <TopBar buttonText="회원가입" onClick={handleSignup} isActive={isActive()} />
      <S.Wrapper>
        <S.Container>
          <S.Title num1="4.8rem">아이디</S.Title>
          <S.Input
            name="id"
            placeholder="아이디를 입력해주세요"
            num2="1rem"
            onChange={handleInputChange}
          />
          <S.Message isValid={isIdValid}>
            {isIdValid === null
              ? '' // 초기 상태
              : isIdValid
                ? '사용 가능한 아이디예요'
                : '다른 아이디를 입력해주세요'}
          </S.Message>
        </S.Container>
        <S.Container>
          <S.Title num1="3.2rem">비밀번호</S.Title>
          <S.Input
            name="pw"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            num2="0.8rem"
            onChange={handleInputChange}
          />
          <S.Input
            name="confirmPw"
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            num2="1.0rem"
            onChange={handleInputChange}
          />
          <S.Message isValid={isPwMatching()}>
            {inputData.pw && inputData.confirmPw && !isPwMatching()
              ? '비밀번호가 일치하지 않아요'
              : isPwMatching()
                ? '비밀번호가 일치해요'
                : ''}
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
