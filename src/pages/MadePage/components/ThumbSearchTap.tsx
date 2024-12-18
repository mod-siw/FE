import { useState } from 'react';
import * as S from './ThumbSearchTap.style';

import MadeBox from './MadeBox';
import { useTheme } from 'contexts/ThemeContext';
import { useFormContext } from '../../../contexts/MadeFormContext';
import { useRenderFrame } from 'hooks/useRenderFrame';

import { thumbFrames } from '../dataList';

interface MadeProps {
  conditions: boolean;
  setConditions: (value: boolean) => void;
}

const ThumbSearchTap = ({ conditions, setConditions }: MadeProps) => {
  const { isDarkMode } = useTheme();
  const { setFormData } = useFormContext();
  const { colorMap } = useRenderFrame();

  const [selectedColorId, setSelectedColorId] = useState<number>(1); // 기본 빨간색 ID: 1
  const [selectedFrame, setSelectedFrame] = useState<string>('SNOW');

  const handleCircleClick = (colorId: number) => {
    setSelectedColorId(colorId);
    setFormData((prev) => ({ ...prev, color: colorId }));
  };

  const handleFrameClick = (name: string) => {
    setSelectedFrame(name);
    setFormData((prev) => ({ ...prev, frame: name }));
  };

  return (
    <>
      <MadeBox
        color={selectedColorId}
        frame={selectedFrame}
        conditions={conditions}
        setConditions={setConditions}
      />
      <S.ControlBox isDarkMode={isDarkMode}>
        <S.Container style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
          {Object.entries(colorMap).map(([id, color]) => (
            <S.Circle
              key={id}
              style={{ backgroundColor: color }}
              title={`color-${id}`}
              isSelected={selectedColorId === Number(id)}
              isDarkMode={isDarkMode}
              onClick={() => handleCircleClick(Number(id))}
            />
          ))}
        </S.Container>
        <S.Container>
          {thumbFrames.map((frame) => (
            <S.FrameBox key={frame.name} onClick={() => handleFrameClick(frame.name)}>
              {selectedFrame === frame.name ? frame.selected : frame.unselected}
            </S.FrameBox>
          ))}
        </S.Container>
      </S.ControlBox>
    </>
  );
};

export default ThumbSearchTap;
