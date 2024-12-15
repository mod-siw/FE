import { useState, useRef, useEffect } from 'react';
import * as S from './MadeBox.style';

import { madeBoxFrames, colorList } from '../dataList';
import { useFormContext } from '../MadeFormContext';
import { SymbolSnow1 } from '../../../assets';
import SelectPopup from './SelectPopup';

interface MadeProps {
  color: string | null;
  frame: string | null;
  conditions: boolean;
  setConditions: (value: boolean) => void;
}

const MadeBox = ({
  color = '#FF2C2C',
  frame = 'SNOW',
  conditions,
  setConditions,
}: MadeProps) => {
  const { formData, setFormData } = useFormContext();
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [showSelectPopup, setShowSelectPopup] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const foundColor = colorList.find((c) => c.color === color)?.color || '#FF2C2C';
  const frameItem = madeBoxFrames.find((item) => item.name === frame);

  const selectedFrame = frameItem ? (
    frameItem.component(foundColor)
  ) : (
    <SymbolSnow1 color="#FF2C2C" width={361} />
  );

  const handleUploBtnClick = () => {
    setShowSelectPopup(true);
  };

  const handleAlbumClick = () => {
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
    setConditions(Boolean(thumbnailUrl));
    setFormData((prev) => ({ ...prev, img: thumbnailUrl }));
    console.log(formData);
  }, [thumbnailUrl]);

  return (
    <>
      <S.Wrapper>
        {thumbnailUrl && <S.ImgBox thumbnailUrl={thumbnailUrl} />}
        <S.SymbolWrapper>{selectedFrame}</S.SymbolWrapper>
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
