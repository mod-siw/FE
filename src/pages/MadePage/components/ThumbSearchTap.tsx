import { useState } from 'react';
import styled from 'styled-components';

import MadeBox from './MadeBox';

import {
  SymbolHat1,
  SymbolSnow1,
  SymbolTree1,
  SymbolYear1,
  SymbolMan1,
  SymbolStar1,
  SymbolHat2,
  SymbolSnow2,
  SymbolTree2,
  SymbolYear2,
  SymbolMan2,
  SymbolStar2,
} from '../../../assets';

interface MadeProps {
  conditions: boolean;
  setConditions: (value: boolean) => void;
}

const ThumbSearchTap = ({ conditions, setConditions }: MadeProps) => {
  const [selectedCircle, setSelectedCircle] = useState<string | null>('#FF2C2C');
  const [selectedFrame, setSelectedFrame] = useState<number | null>(1);

  const colorList = [
    { name: 'red01', color: '#FF2C2C' },
    { name: 'orange01', color: '#FF8E2C' },
    { name: 'yellow01', color: '#F9EE19' },
    { name: 'green01', color: '#29FF22' },
    { name: 'mint01', color: '#00FF8C' },
    { name: 'cyon01', color: '#24FFE9' },
    { name: 'sky01', color: '#27BBFF' },
    { name: 'aqua01', color: '#3859FF' },
    { name: 'violet01', color: '#2605FD' },
    { name: 'purple01', color: '#5929F7' },
    { name: 'pink01', color: '#FB24FF' },
    { name: 'magenta01', color: '#FF2D7A' },
    { name: 'red02', color: '#FF9292' },
    { name: 'orange02', color: '#FFB379' },
    { name: 'yellow02', color: '#FFF875' },
    { name: 'green02', color: '#96FF92' },
    { name: 'mint02', color: '#8EFFCE' },
    { name: 'cyon02', color: '#C9FFFA' },
    { name: 'sky02', color: '#7ED6FF' },
    { name: 'aqua02', color: '#788EFF' },
    { name: 'violet02', color: '#8F7EFF' },
    { name: 'purple02', color: '#B098FF' },
    { name: 'pink02', color: '#FEBBFF' },
    { name: 'magenta02', color: '#FFA0C3' },
  ];

  const frameList = [
    {
      id: 1,
      selected: <SymbolSnow1 width={75} />,
      unselected: <SymbolSnow2 width={75} />,
    },
    {
      id: 2,
      selected: <SymbolTree1 width={75} />,
      unselected: <SymbolTree2 width={75} />,
    },
    {
      id: 3,
      selected: <SymbolHat1 width={75} />,
      unselected: <SymbolHat2 width={75} />,
    },
    {
      id: 4,
      selected: <SymbolYear1 width={75} />,
      unselected: <SymbolYear2 width={75} />,
    },
    {
      id: 5,
      selected: <SymbolMan1 width={75} />,
      unselected: <SymbolMan2 width={75} />,
    },
    {
      id: 6,
      selected: <SymbolStar1 width={75} />,
      unselected: <SymbolStar2 width={75} />,
    },
  ];

  const handleCircleClick = (color: string) => {
    setSelectedCircle(color === selectedCircle ? '#FF2C2C' : color);
  };

  const handleFrameClick = (id: number) => {
    setSelectedFrame(id === selectedFrame ? 1 : id);
  };

  return (
    <>
      <MadeBox color={selectedCircle} frame={selectedFrame} />
      <Container style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
        {colorList.map((color) => (
          <Circle
            key={color.name}
            style={{ backgroundColor: color.color }}
            title={color.name}
            isSelected={selectedCircle === color.color}
            onClick={() => handleCircleClick(color.color)}
          />
        ))}
      </Container>
      <Container>
        {frameList.map((frame) => (
          <FrameBox key={frame.id} onClick={() => handleFrameClick(frame.id)}>
            {selectedFrame === frame.id ? frame.selected : frame.unselected}
          </FrameBox>
        ))}
      </Container>
    </>
  );
};

export default ThumbSearchTap;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  gap: 1.6rem;
  overflow-x: auto;
  padding: 1rem 0 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Circle = styled.div<{ isSelected: boolean }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  transition: 0.3s ease;

  ${({ isSelected }) =>
    isSelected &&
    `box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.3); 
     border: 2px solid rgba(255, 255, 255, 0.3);`}
`;

const FrameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  height: 7.5rem;
  cursor: pointer;
`;
