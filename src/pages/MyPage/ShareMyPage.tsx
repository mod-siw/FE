import React, { useState } from 'react';
import { S } from './MyPage.style';
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
    <S.Wrapper>
      <S.Top>
        <S.Title>
          2024년
          <br />
          채린님의 가슴을
          <br />
          뛰게 만든
        </S.Title>
      </S.Top>
      <MyGridBox blocks={blocks} num="14.4rem" />
    </S.Wrapper>
  );
};

export default ShareMyPage;
