import React, { useState, useEffect } from 'react';
import { S } from './MyPage.style';
import MyGridBox from './components/MyGridBox';
import Popup from './components/Popup';

import { mock } from './components/Mock';

const ShareMyPage: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // URL 복사 후 팝업 표시
    const url = `${window.location.origin}/my/share`;
    navigator.clipboard.writeText(url).then(() => {
      setIsPopupVisible(true);
    });
  }, []);

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
      <MyGridBox data={mock.data} num="14.4rem" />
      {isPopupVisible && <Popup onClose={() => setIsPopupVisible(false)} />}
    </S.Wrapper>
  );
};

export default ShareMyPage;
