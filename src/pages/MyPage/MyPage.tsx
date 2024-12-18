import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { S } from './MyPage.style';

import GiftBox from './components/GiftBox';
import MyGridBox from './components/MyGridBox';
import Popup from './components/Popup';

import { Union } from '../../assets';
import { useTheme } from 'contexts/ThemeContext';

import { useUser } from 'contexts/UserContext';
import { useItemContext } from 'contexts/ItemContext';
import { GetMyBlack, GetMyWhite } from 'api/my';
import { PostLogout } from 'api/auth';
import { getCookie } from 'api/http';

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { nickname, clearUserData } = useUser();
  const { setIsItemClicked, setItemId } = useItemContext();
  const { isDarkMode } = useTheme();

  const [isOpened, setIsOpened] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(
    sessionStorage.getItem('isGiftBoxShown') === 'true' ||
      location.state?.isGridVisible ||
      false,
  );
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const [items, setItems] = useState([]);
  const token = getCookie('access_token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

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

  // 상세페이지 갔다가 다시 돌아올 경우 대비 클릭 상태 초기화
  useEffect(() => {
    setIsItemClicked(false);
    setItemId(0);
  }, [setIsItemClicked, setItemId]);

  // GiftBox 열기
  const handleOpen = () => {
    setIsOpened(true);

    // 리본 애니메이션 후 블록 API 호출
    setTimeout(() => {
      setIsGridVisible(true);
      sessionStorage.setItem('isGiftBoxShown', 'true'); // GiftBox가 보여졌음을 저장
    }, 1000);
  };

  // 홈
  const handleMain = () => {
    sessionStorage.removeItem('isGiftBoxShown'); // 상태 초기화
    navigate('/');
  };

  // 공유하기
  const handleShare = () => {
    const id = localStorage.getItem('id');
    const mode = isDarkMode ? 'black' : 'white';
    if (id) {
      const url = `${window.location.origin}/${nickname}/${id}/${mode}`;
      navigator.clipboard
        .writeText(url)
        .then(() => {
          navigate(`/${nickname}/${id}/${mode}`, { state: { isCopied: true } }); // 상태 전달
        })
        .catch((error) => {
          alert('링크를 클립보드에 복사할 수 없습니다. 다시 시도해주세요.');
        });
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
      navigate('/');
    } catch (error) {
      console.error('로그아웃 실패:', error);
      alert('로그아웃에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <S.Wrapper>
      <S.Top>
        {isGridVisible && <S.HomeBtn onClick={handleMain}>home</S.HomeBtn>}
        <S.Title>
          {isDarkMode ? (
            <>
              2024년
              <br />
              {nickname}님의 가슴을
              <br />
              뛰게 만든
            </>
          ) : (
            <>
              2024년
              <br />
              {nickname}님의 순간을
              <br />
              함께한
            </>
          )}
        </S.Title>
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
