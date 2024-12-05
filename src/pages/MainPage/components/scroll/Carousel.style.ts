import styled, { css } from 'styled-components';

const maskStyles = css`
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
`;

export const Container = styled.div`
  margin-top: 10%;
  .swiper-wrapper {
    transition-timing-function: linear;
  }
`;

export const Slide = styled.img<{ maskId: string }>`
  width: 35.2rem;
  height: 35.2rem;
  flex-shrink: 0;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;

  ${({ maskId }) => css`
    mask: url(#${maskId});
    -webkit-mask: url(#${maskId});
  `}

  ${maskStyles}
`;

export const Gradient = styled.div<{ maskId: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25%, #000 100%);

  ${({ maskId }) => css`
    mask: url(#${maskId});
    -webkit-mask: url(#${maskId});
  `}

  ${maskStyles}
`;
