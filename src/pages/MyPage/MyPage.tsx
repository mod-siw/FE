import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './MyPage.style';

import GiftBox from './components/GiftBox';
import MyGridBox from './components/MyGridBox';
import Popup from './components/Popup';

import { Union } from '../../assets';
import { mock } from './components/Mock';

interface MyPageProps {
  nickname: string;
}

const MyPage = () => {
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);

    // 리본 애니메이션 후 블록 API 호출
    setTimeout(() => {
      setIsGridVisible(true);
    }, 1000);
  };

  // 홈
  const handleMain = () => {
    navigate('/');
  };

  // 공유하기
  const handleShare = () => {
    navigate('/my/share');
  };

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
        {isGridVisible && <S.HomeBtn onClick={handleMain}>home</S.HomeBtn>}
      </S.Top>
      {!isGridVisible ? (
        <GiftBox isOpened={isOpened} onOpen={handleOpen} />
      ) : (
        <MyGridBox data={mock.data} />
      )}
      {isGridVisible && (
        <S.ShareBtn onClick={handleShare}>
          <Union width={17} />
          <span>공유하기</span>
          <Union width={17} />
        </S.ShareBtn>
      )}
    </S.Wrapper>
  );
};

export default MyPage;
