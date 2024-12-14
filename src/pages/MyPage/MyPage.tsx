import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './MyPage.style';

import GiftBox from './components/GiftBox';
import MyGridBox from './components/MyGridBox';
import Popup from './components/Popup';

import { Union } from '../../assets';
import { mock } from './components/Mock';

import { useUser } from 'contexts/UserContext';
import { PostLogout } from 'api/auth';

interface MyPageProps {
  nickname: string;
}

const MyPage = () => {
  const navigate = useNavigate();
  const { nickname, clearUserData } = useUser();

  const [isOpened, setIsOpened] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);

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

  // 로그아웃
  const handleLogout = async () => {
    try {
      await PostLogout();
      clearUserData();
      navigate('/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
      alert('로그아웃에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  useEffect(() => {
    console.log('nickname in MyPage:', nickname);
  }, [nickname]);

  return (
    <S.Wrapper>
      <S.Top>
        <S.Title>
          2024년
          <br />
          {nickname}님의 가슴을
          <br />
          뛰게 만든
        </S.Title>
        {isGridVisible && <S.HomeBtn onClick={handleMain}>home</S.HomeBtn>}
      </S.Top>
      {!isGridVisible ? (
        <GiftBox isOpened={isOpened} onOpen={handleOpen} />
      ) : (
        <MyGridBox data={mock.data} animate={false} />
      )}
      {isGridVisible && (
        <>
          <S.ShareBtn onClick={handleShare}>
            <Union width={17} />
            <span>공유하기</span>
            <Union width={17} />
          </S.ShareBtn>
          <S.LogoutBtn onClick={() => setLogoutPopupVisible(true)}>로그아웃</S.LogoutBtn>
        </>
      )}
      {isLogoutPopupVisible && (
        <Popup
          type="logout"
          onClose={() => setLogoutPopupVisible(false)}
          onConfirm={handleLogout}
        />
      )}
    </S.Wrapper>
  );
};

export default MyPage;
