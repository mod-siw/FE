import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { S } from './MyPage.style';
import { useTheme } from 'contexts/ThemeContext';
import MyGridBox from './components/MyGridBox';
import Popup from './components/Popup';

import { GetShareBlack, GetShareWhite } from 'api/my';

const ShareMyPage = () => {
  const location = useLocation();
  const { id, mode } = useParams<{ id: string; mode: string }>();
  const [isPopupVisible, setIsPopupVisible] = useState(location.state?.isCopied || false);
  const [items, setItems] = useState([]);
  const [nickname, setNickname] = useState('');
  const isDarkMode = mode === 'black';

  const { setIsDarkMode } = useTheme();
  useEffect(() => {
    if (!isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const GetMyList = async () => {
      if (!id) throw new Error('유저 ID가 없습니다.');
      const user_id = parseInt(id, 10);
      const response = isDarkMode
        ? await GetShareBlack(user_id)
        : await GetShareWhite(user_id);
      setItems(response.data.posts || []);
      setNickname(response.data.nickname || '');
    };

    GetMyList();
  }, [id, isDarkMode]);

  return (
    <S.Wrapper2>
      <S.Top>
        <S.HomeBtn isHidden />
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
      <MyGridBox data={items} num="14.4rem" isDarkMode={isDarkMode} />
      {isPopupVisible && (
        <Popup type="clipboard" onClose={() => setIsPopupVisible(false)} />
      )}
    </S.Wrapper2>
  );
};

export default ShareMyPage;
