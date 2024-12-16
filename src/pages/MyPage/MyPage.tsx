import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './MyPage.style';

import GiftBox from './components/GiftBox';
import MyGridBox from './components/MyGridBox';
import Popup from './components/Popup';

import { Union } from '../../assets';
import { useTheme } from 'contexts/ThemeContext';

import { useUser } from 'contexts/UserContext';
import { GetMyBlack, GetMyWhite } from 'api/my';
import { PostLogout } from 'api/auth';

interface MyPageProps {
  nickname: string;
}

const MyPage = () => {
  const navigate = useNavigate();
  const { nickname, clearUserData } = useUser();
  const { isDarkMode } = useTheme();

  const [isOpened, setIsOpened] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const GetMyList = async () => {
      try {
        const response = isDarkMode ? await GetMyBlack() : await GetMyWhite();
        setItems(response.data.content_list || []);
      } catch (error) {
        console.error('데이터 로드 실패:', error);
      }
    };

    GetMyList();
  }, [isDarkMode]);

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
    const id = localStorage.getItem('id');
    const mode = isDarkMode ? 'black' : 'white';
    if (id) {
      navigate(`/${nickname}/${id}/${mode}`);
    } else {
      console.error('유저 ID를 찾을 수 없습니다.');
      alert('유저 ID를 확인할 수 없습니다.');
    }
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
          {isDarkMode ? (
            <>
              2024년
              <br />
              {nickname} 님의 가슴을
              <br />
              뛰게 만든
            </>
          ) : (
            <>
              2024년
              <br />
              {nickname} 님의 순간들을
              <br />
              함께한
            </>
          )}
        </S.Title>
        {isGridVisible && <S.HomeBtn onClick={handleMain}>home</S.HomeBtn>}
      </S.Top>
      {!isGridVisible ? (
        <GiftBox isOpened={isOpened} onOpen={handleOpen} />
      ) : (
        <MyGridBox data={items} animate={false} />
      )}
      {isGridVisible && (
        <>
          <S.ShareBtn onClick={handleShare}>
            <Union width={17} fill={isDarkMode ? '#FFFFFF' : '#0E0C0C'} />
            <span>공유하기</span>
            <Union width={17} fill={isDarkMode ? '#FFFFFF' : '#0E0C0C'} />
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
