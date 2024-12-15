import { useState } from 'react';
import * as S from './ThumbSearchTap.style';

import MadeBox from './MadeBox';
import { useFormContext } from '../MadeFormContext';

import { colorList, thumbFrames } from '../dataList';

interface MadeProps {
  conditions: boolean;
  setConditions: (value: boolean) => void;
}

const ThumbSearchTap = ({ conditions, setConditions }: MadeProps) => {
  const { formData, setFormData } = useFormContext();

  const [selectedCircle, setSelectedCircle] = useState<string | null>('#FF2C2C');
  const [selectedFrame, setSelectedFrame] = useState<string>('SNOW');

  const handleCircleClick = (colorHex: string) => {
    const newColor = colorHex === selectedCircle ? '#FF2C2C' : colorHex;
    setSelectedCircle(newColor);

    // newColor에 해당하는 colorList id 찾기
    const found = colorList.find((c) => c.color === newColor);
    const colorId = found ? found.id : 1;
    setFormData((prev) => ({ ...prev, color: colorId }));
  };

  const handleFrameClick = (name: string) => {
    const newName = name === selectedFrame ? 'SNOW' : name;
    setSelectedFrame(newName);
    setFormData((prev) => ({ ...prev, frame: newName }));
  };

  return (
    <>
      <MadeBox
        color={selectedCircle || '#FF2C2C'}
        frame={selectedFrame}
        conditions={conditions}
        setConditions={setConditions}
      />
      <S.Container style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
        {colorList.map((c) => (
          <S.Circle
            key={c.id}
            style={{ backgroundColor: c.color }}
            title={`color-${c.id}`}
            isSelected={selectedCircle === c.color}
            onClick={() => handleCircleClick(c.color)}
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
    </>
  );
};

export default ThumbSearchTap;
