import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MyGridBox from './components/MyGridBox';

const ShareMyPage: React.FC = () => {
  const location = useLocation();
  const { blocks } = location.state || { blocks: [] };

  return (
    <Wrapper>
      <Top>
        <Title>
          2024년
          <br />
          채린님의 가슴을
          <br />
          뛰게 만든
        </Title>
      </Top>

      <MyGridBox blocks={blocks} />
    </Wrapper>
  );
};

export default ShareMyPage;

const Wrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.white};

  /* head_medium */
  font-family: Pretendard;
  font-size: 3.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  white-space: pre-wrap;
`;
