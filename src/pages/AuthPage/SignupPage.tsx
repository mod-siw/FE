import React, { useState, useRef } from 'react';
import { S } from './components/Auth.style';
import TopBar from './components/TopBar';

const SignupPage = () => {
  const [isIdValid, setIsIdValid] = useState<boolean | null>(null);
  const [isPwMatching, setIsPwMatching] = useState<boolean | null>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const confirmPwRef = useRef<HTMLInputElement>(null);

  const handleSignup = () => {
    // 회원가입 API 호출 로직
    console.log('회원가입 요청');
  };

  // 비밀번호 확인
  const handlePwMatch = () => {
    const pw = pwRef.current?.value || '';
    const confirmPw = confirmPwRef.current?.value || '';

    if (!pw || !confirmPw) {
      setIsPwMatching(null);
    } else if (confirmPw.length > 0) {
      setIsPwMatching(pw === confirmPw);
    }
  };

  return (
    <>
      <TopBar buttonText="회원가입" onClick={handleSignup} />
      <S.Wrapper>
        <S.Container>
          <S.Title num1="4.8rem">아이디</S.Title>
          <S.Input
            placeholder="아이디를 입력해주세요"
            num2="1rem"
            onChange={(e) => {
              // 백엔드 API 나오면 추가 및 수정 예정
              const value = e.target.value;
              setIsIdValid(value.length > 0 && value !== '사용불가'); // 임시
            }}
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
            placeholder="비밀번호를 입력해주세요"
            type="password"
            num2="0.8rem"
            ref={pwRef}
            onChange={handlePwMatch}
          />
          <S.Input
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            num2="1.0rem"
            ref={confirmPwRef}
            onChange={handlePwMatch}
          />
          <S.Message isValid={isPwMatching}>
            {isPwMatching === null
              ? '' // 초기 상태일 때는 텍스트 표시 안 함
              : isPwMatching
                ? '비밀번호가 일치해요'
                : '비밀번호가 일치하지 않아요'}
          </S.Message>
        </S.Container>
        <S.Container>
          <S.Title num1="3.2rem">닉네임</S.Title>
          <S.Input placeholder="닉네임을 입력해주세요" num2="7.1rem" />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default SignupPage;
