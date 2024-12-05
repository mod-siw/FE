import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  width: 33.6rem;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
  margin-bottom: 9.8rem;
  justify-self: center;
`;

export const Item = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const FrameWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 16rem;
  height: 16rem;
`;
