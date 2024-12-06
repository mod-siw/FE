import { useState, useRef } from 'react';
import * as S from './MadeBox.style';

import {
  SymbolSnow1,
  SymbolTree1,
  SymbolHat1,
  SymbolYear1,
  SymbolMan1,
  SymbolStar1,
} from '../../../assets';

interface MadeProps {
  color: string | null;
  frame: number | null;
}

const MadeBox = ({ color = '#FF2C2C', frame = 1 }: MadeProps) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
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

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setThumbnailUrl(url);
    }
  };

  return (
    <S.Wrapper>
      {thumbnailUrl && <S.ImgBox thumbnailUrl={thumbnailUrl} />}
      {/* Symbol을 감싸는 래퍼에 z-index 부여 */}
      <S.SymbolWrapper>
        {selectedFrame || <SymbolSnow1 color="FF2C2C" width={361} />}
      </S.SymbolWrapper>
      <S.UploBtn onClick={handleButtonClick}>썸네일 가져오기</S.UploBtn>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
    </S.Wrapper>
  );
};

export default MadeBox;
