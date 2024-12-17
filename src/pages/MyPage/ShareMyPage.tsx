import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { S } from './MyPage.style';
import MyGridBox from './components/MyGridBox';
import Popup from './components/Popup';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme';

import { GetShareBlack, GetShareWhite } from 'api/my';
import { getCookie } from 'api/http';

const ShareMyPage: React.FC = () => {
  const { nickname, id, mode } = useParams<{
    nickname: string;
    id: string;
    mode: string;
  }>();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [items, setItems] = useState([]);
  const isDarkMode = mode === 'black';
  const theme = isDarkMode ? darkTheme : lightTheme;
  const token = getCookie('access_token');

  useEffect(() => {
    if (token) {
      // URL 복사 후 팝업 표시
      const url = `${window.location.origin}/${nickname}/${id}/${mode}`;
      navigator.clipboard.writeText(url).then(() => {
        setIsPopupVisible(true);
      });
    }
  }, [nickname, id, mode]);

  useEffect(() => {
    const GetMyList = async () => {
      try {
        if (!id) throw new Error('유저 ID가 없습니다.');
        const user_id = parseInt(id, 10);
        const response = isDarkMode
          ? await GetShareBlack(user_id)
          : await GetShareWhite(user_id);
        setItems(response.data.posts || []);
      } catch (error) {
        console.error('데이터 로드 실패:', error);
      }
    };

    GetMyList();
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <S.SharePageGlobalStyle />
      <S.Wrapper2>
        <S.Top>
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
        <MyGridBox data={items} num="14.4rem" />
        {isPopupVisible && (
          <Popup type="clipboard" onClose={() => setIsPopupVisible(false)} />
        )}
      </S.Wrapper2>
    </ThemeProvider>
  );
};

export default ShareMyPage;
