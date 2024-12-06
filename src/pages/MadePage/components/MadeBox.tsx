import { useState, useRef } from 'react';
import styled from 'styled-components';

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
    <Wrapper>
      {thumbnailUrl && <ImgBox thumbnailUrl={thumbnailUrl} />}
      {/* Symbol을 감싸는 래퍼에 z-index 부여 */}
      <SymbolWrapper>
        {selectedFrame || <SymbolSnow1 color="FF2C2C" width={361} />}
      </SymbolWrapper>
      <UploBtn onClick={handleButtonClick}>썸네일 가져오기</UploBtn>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
    </Wrapper>
  );
};

export default MadeBox;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1.4rem 2rem;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div<{ thumbnailUrl: string }>`
  position: absolute;
  width: 359px;
  height: 359px;
  background-image: url(${({ thumbnailUrl }) => thumbnailUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SymbolWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const UploBtn = styled.button`
  position: absolute;
  z-index: 15;
  display: inline-flex;
  padding: 1.4rem 2rem;
  justify-content: center;
  align-items: center;

  border-radius: 5rem;
  background: rgba(255, 255, 255, 0.2);

  color: ${({ theme }) => theme.colors.textColor};
  font: ${({ theme }) => theme.fonts.button_semibold};
`;
