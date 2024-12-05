import { useState } from 'react';
import styled from 'styled-components';

const ThumbSearchTap = () => {
  const [selectedCircle, setSelectedCircle] = useState<string | null>(null);
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

  const handleCircleClick = (name: string) => {
    setSelectedCircle(name === selectedCircle ? null : name);
  };

  return (
    <Container>
      {colorList.map((color) => (
        <Circle
          key={color.name}
          style={{ backgroundColor: color.color }}
          title={color.name}
          isSelected={selectedCircle === color.name}
          onClick={() => handleCircleClick(color.name)}
        />
      ))}
    </Container>
  );
};

export default ThumbSearchTap;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  gap: 1.6rem;
  overflow-x: auto;
  padding: 1rem 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

interface CircleProps {
  isSelected: boolean;
}

const Circle = styled.div<CircleProps>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  transition: 0.3s ease;

  ${({ isSelected }) =>
    isSelected &&
    `
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.30); 
    border: 2px solid rgba(255, 255, 255, 0.30);
  `}
`;
