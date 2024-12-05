import React from 'react';
import styled from 'styled-components';

import { Mydefaultimg } from '../../../assets';

interface GridProps {
  blocks: JSX.Element[];
  num?: string;
}

const MyGridBox: React.FC<GridProps> = ({ blocks, num }) => {
  const filledBlocks = [...blocks];
  while (filledBlocks.length < 9) {
    filledBlocks.push(<Mydefaultimg data-default={true} />);
  }

  return (
    <Wrapper marginBottom={num}>
      <GridContainer>
        {filledBlocks.map((BlockComponent, index) => (
          <Block key={index} isDefault={(BlockComponent as any).props['data-default']}>
            {BlockComponent}
          </Block>
        ))}
      </GridContainer>
    </Wrapper>
  );
};

export default MyGridBox;

const Wrapper = styled.div<{ marginBottom?: string }>`
  padding: 3.7rem;
  margin: 4.3rem 0rem ${({ marginBottom }) => marginBottom || '4.3rem'} 0rem;
  width: 40.2rem;
  height: 40.2rem;
  flex-shrink: 0;

  border: ${({ theme }) => theme.colors.gray02};
  background: ${({ theme }) => theme.colors.gray01};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 33.2rem;
  gap: 1.6rem;
`;

const Block = styled.div<{ isDefault?: boolean }>`
  display: flex;
  width: 10rem;
  height: 10rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  cursor: ${({ isDefault }) => (isDefault ? 'default' : 'pointer')};
`;
