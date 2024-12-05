import React, { useState } from 'react';
import styled from 'styled-components';
import MyGridBox from './components/MyGridBox';

import { Eximg } from '../../assets';

const ShareMyPage: React.FC = () => {
  // 목데이터
  const [blocks, setBlocks] = useState<JSX.Element[]>([
    <Eximg key={0} />,
    <Eximg key={1} />,
    <Eximg key={2} />,
    <Eximg key={3} />,
  ]);

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
      <MyGridBox blocks={blocks} num="14.4rem" />
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
  margin-top: 4.2rem;

  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
`;

const Title = styled.div`
  padding-left: 3rem;
  color: ${({ theme }) => theme.colors.white};

  /* head_medium */
  font-family: Pretendard;
  font-size: 3.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  white-space: pre-wrap;
`;
