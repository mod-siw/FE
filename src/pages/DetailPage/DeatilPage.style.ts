import styled from 'styled-components';

export const Entire = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

/* 배경이미지 + 그림자 관련 */
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  position: absolute;
  will-change: transform;
  transform: none;
`;

export const ShadowLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  will-change: transform;
  transform: none;
`;

/* 컨텐츠 관련 */
export const Container = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
`;

export const UpperBtn = styled.div`
  position: absolute;
  top: 3.26rem;
  right: 3rem;
  cursor: pointer;
  z-index: 900;
`;

export const Title = styled.div<{ color: string }>`
  ${({ theme }) => theme.fonts.body16_medium}
  color: ${({ color }) => color};
  margin: 5.66rem 0 0 2.9rem;
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CenterContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2.5rem;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  padding: 0 3rem;
`;

export const Information = styled.div`
  ${({ theme }) => theme.fonts.body14_medium}
  color: ${({ theme }) => theme.colors.white};
  width: 27.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Name = styled.div`
  ${({ theme }) => theme.fonts.title_semibold}
  color: ${({ theme }) => theme.colors.white};
  white-space: pre-wrap;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  margin-top: -10rem;
`;

export const Comment = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  ${({ theme }) => theme.fonts.body16_semibold}
  color: ${({ color }) => color};
`;

export const Line = styled.div<{ color: string }>`
  width: 100%;
  height: 0.13rem;
  background-color: ${({ color }) => color};
  margin: 1.1rem 0;
`;
export const Description = styled.div<{ color: string }>`
  ${({ theme }) => theme.fonts.body14_medium}
  color: ${({ color }) => color};
`;
