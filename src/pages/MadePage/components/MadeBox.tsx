import { useState, useRef, useEffect } from 'react';
import * as S from './MadeBox.style';

import {
  SymbolSnow1,
  SymbolTree1,
  SymbolHat1,
  SymbolYear1,
  SymbolMan1,
  SymbolStar1,
} from '../../../assets';
import SelectPopup from './SelectPopup';

interface MadeProps {
  color: string | null;
  frame: number | null;
  conditions: boolean;
  setConditions: (value: boolean) => void;
}

const MadeBox = ({
  color = '#FF2C2C',
  frame = 1,
  conditions,
  setConditions,
}: MadeProps) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [showSelectPopup, setShowSelectPopup] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const frameList = [
    { id: 1, component: <SymbolSnow1 color={color || '#fff'} width={361} /> },
    { id: 2, component: <SymbolTree1 color={color || '#fff'} width={361} /> },
    { id: 3, component: <SymbolHat1 color={color || '#fff'} width={361} /> },
    { id: 4, component: <SymbolYear1 color={color || '#fff'} width={361} /> },
    { id: 5, component: <SymbolMan1 color={color || '#fff'} width={361} /> },
    { id: 6, component: <SymbolStar1 color={color || '#fff'} width={361} /> },
  ];

  const selectedFrame = frameList.find((item) => item.id === frame)?.component;

  const handleUploBtnClick = () => {
    // UploBtn 클릭 시 SelectPopup 표시
    setShowSelectPopup(true);
  };

  const handleAlbumClick = () => {
    // Album 버튼 클릭 시 파일 업로드 창 열기
    inputRef.current?.click();
    setShowSelectPopup(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setThumbnailUrl(url);
    }
  };

  useEffect(() => {
    // thumbnailUrl이 있으면 썸네일 존재, 없으면 없음
    setConditions(Boolean(thumbnailUrl));
  }, [thumbnailUrl, setConditions]);

  return (
    <>
      <S.Wrapper>
        {thumbnailUrl && <S.ImgBox thumbnailUrl={thumbnailUrl} />}
        <S.SymbolWrapper>
          {selectedFrame || <SymbolSnow1 color="FF2C2C" width={361} />}
        </S.SymbolWrapper>
        <S.UploBtn onClick={handleUploBtnClick}>썸네일 가져오기</S.UploBtn>
        <input
          type="file"
          ref={inputRef}
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleFileChange}
        />
      </S.Wrapper>
      {showSelectPopup && (
        <SelectPopup
          onAlbumClick={handleAlbumClick}
          onClose={() => setShowSelectPopup(false)}
        />
      )}
    </>
  );
};

export default MadeBox;
