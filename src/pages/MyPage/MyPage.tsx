import React, { useState } from 'react';
import styled from 'styled-components';
import { Union } from '../../assets';
import GiftBox from './components/GiftBox';
import MyGridBox from './components/MyGridBox';

import { Eximg } from '../../assets';

interface MyPageProps {
  nickname: string;
}

const MyPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [blocks, setBlocks] = useState<JSX.Element[]>([]);

  const handleOpen = () => {
    setIsOpened(true);

    // 리본 애니메이션 후 블록 API 호출
    setTimeout(() => {
      // 목데이터
      const blocks = [<Eximg />, <Eximg />, <Eximg />, <Eximg />];
      setBlocks(blocks);
      setIsGridVisible(true);
    }, 1000);
  };

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
        {isGridVisible && <HomeBtn>home</HomeBtn>}
      </Top>
      {!isGridVisible ? (
        <GiftBox isOpened={isOpened} onOpen={handleOpen} />
      ) : (
        <MyGridBox blocks={blocks} />
      )}
      {isGridVisible && (
        <ShareBtn>
          <Union width={17} />
          <span>공유하기</span>
          <Union width={17} />
        </ShareBtn>
      )}
    </Wrapper>
  );
};

export default MyPage;

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

const HomeBtn = styled.div`
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.colors.white};

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
`;

const ShareBtn = styled.div`
  margin-bottom: 36.9rem;
  display: flex;
  width: 15.6rem;
  height: 5.6rem;
  padding: 0.9rem 2.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  border: 1px solid ${({ theme }) => theme.colors.gray03};
  background: ${({ theme }) => theme.colors.black};

  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.white};

    /* body16_semibold */
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.2rem; /* 137.5% */
  }
`;
