import React from 'react';
import styled from 'styled-components';
import { S } from './components/Auth.style';

import TopBar from './components/TopBar';

const SignupPage = () => {
  return (
    <>
      <TopBar buttonText="로그인" />
      <S.Title>아이디</S.Title>
      <S.Input placeholder="아이디를 입력해주세요" />
      <S.Title>비밀번호</S.Title>
      <S.Input placeholder="비밀번호를 입력해주세요" type="password" />
      <S.Input placeholder="비밀번호를 다시 입력해주세요" type="password" />
      <S.Title>닉네임</S.Title>
      <S.Input placeholder="닉네임을 입력해주세요" />
    </>
  );
};

export default SignupPage;
