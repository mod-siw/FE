import React from 'react';
import styled from 'styled-components';

interface GridProps {
  blocks: string[];
}

const MyGridBox: React.FC<GridProps> = ({ blocks }) => {
  return (
    <Wrapper>
      <GridContainer>
        {blocks.map((block, index) => (
          <Block key={index}>{block}</Block>
        ))}
      </GridContainer>
    </Wrapper>
  );
};

export default MyGridBox;

const Wrapper = styled.div`
  padding: 3.7rem;
  margin: 4.3rem 0rem 4.3rem 0rem;
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

const Block = styled.div`
  display: flex;
  width: 10rem;
  height: 10rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  cursor: pointer;
`;
