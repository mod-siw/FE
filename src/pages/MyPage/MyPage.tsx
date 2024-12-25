import { useState, useEffect } from 'react';
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
  const [isSharePopupVisible, setSharePopupVisible] = useState(false);
  const [items, setItems] = useState([]);
  const token = getCookie('access_token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  useEffect(() => {
    const GetMyList = async () => {
      const response = isDarkMode ? await GetMyBlack() : await GetMyWhite();
      setItems(response.data.content_list || []);
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
  const getUserInfo = (isDarkMode: boolean) => {
    const id = localStorage.getItem('id');
    const mode = isDarkMode ? 'black' : 'white';
    return { id, mode };
  };

  const handleShare = () => {
    const { id, mode } = getUserInfo(isDarkMode);

    if (!id) {
      alert('유저 ID를 확인할 수 없습니다.');
      return;
    }

    const url = `${window.location.origin}/share/${id}/${mode}`;
    navigator.clipboard
      .writeText(url)
      .then(() => setSharePopupVisible(true))
      .catch(() => {
        alert('링크를 클립보드에 복사할 수 없습니다. 다시 시도해주세요.');
      });
  };

  // 로그아웃
  const handleLogout = async () => {
    try {
      await PostLogout();
      clearUserData();
      navigate('/');
    } catch (error) {
      alert('로그아웃에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  const handleCloseSharePopup = () => {
    const { id, mode } = getUserInfo(isDarkMode);
    setSharePopupVisible(false);
    if (id) navigate(`/share/${id}/${mode}`);
    else alert('유저 ID를 확인할 수 없습니다.');
  };

  return (
    <S.Wrapper>
      <S.Top>
        {isGridVisible ? (
          <S.HomeBtn onClick={handleMain}>home</S.HomeBtn>
        ) : (
          <S.HomeBtn isHidden />
        )}
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
      {isSharePopupVisible && <Popup type="clipboard" onClose={handleCloseSharePopup} />}
    </S.Wrapper>
  );
};

export default MyPage;
