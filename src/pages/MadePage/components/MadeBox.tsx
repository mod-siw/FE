import { useState, useRef, useEffect } from 'react';
import * as S from './MadeBox.style';

import { madeBoxFrames } from '../dataList';
import { useFormContext } from 'contexts/MadeFormContext';
import { useTheme } from 'contexts/ThemeContext';
import { useRenderFrame } from 'hooks/useRenderFrame';

import { SymbolSnow1 } from '../../../assets';
import SelectPopup from './SelectPopup';

interface MadeProps {
  color: number;
  frame: string | null;
  conditions: boolean;
  setConditions: (value: boolean) => void;
}

const MadeBox = ({ color = 1, frame = 'SNOW', conditions, setConditions }: MadeProps) => {
  const { formData, setFormData } = useFormContext();
  const { isDarkMode } = useTheme();

  const { colorMap } = useRenderFrame();

  const [file, setFile] = useState<File | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(
    typeof formData.img === 'string' ? formData.img : null,
  );
  const [showSelectPopup, setShowSelectPopup] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const selectedColorHex = colorMap[color] || '#FF2C2C';
  const frameItem = madeBoxFrames.find((item) => item.name === frame);

  const selectedFrame = frameItem ? (
    frameItem.component(selectedColorHex)
  ) : (
    <SymbolSnow1 color="#FF2C2C" width={361} />
  );

  const handleAlbumClick = () => {
    inputRef.current?.click();
    setShowSelectPopup(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setThumbnailUrl(url);
      setFile(file);
    }
  };

  const handleBtn = () => {
    if (isDarkMode) {
      setShowSelectPopup(true);
    } else {
      handleAlbumClick();
    }
  };

  useEffect(() => {
    // file이 있으면 file을 img로, 없으면 thumbnailUrl 사용
    setFormData((prev) => ({
      ...prev,
      img: file || thumbnailUrl || null,
    }));

    setConditions(Boolean(thumbnailUrl || file));
  }, [thumbnailUrl, file]);

  return (
    <>
      <S.Wrapper>
        {thumbnailUrl && <S.ImgBox thumbnailUrl={thumbnailUrl} />}
        <S.SymbolWrapper>{selectedFrame}</S.SymbolWrapper>
        <S.UploBtn onClick={handleBtn} isDarkMode={isDarkMode}>
          썸네일 가져오기
        </S.UploBtn>
        <input
          type="file"
          ref={inputRef}
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleFileChange}
        />
      </S.Wrapper>
      {showSelectPopup && isDarkMode && (
        <SelectPopup
          onAlbumClick={handleAlbumClick}
          onClose={() => setShowSelectPopup(false)}
        />
      )}
    </>
  );
};

export default MadeBox;
