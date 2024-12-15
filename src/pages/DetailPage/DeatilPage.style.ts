import styled from 'styled-components';

export const Wrapper = styled.div<{ img: string }>`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const UpperBtn = styled.div`
  position: absolute;
  top: 1.76rem;
  right: 1.5rem;
  cursor: pointer;
`;

export const Container = styled.div`
  z-index: 2;
`;

export const Title = styled.div<{ color: string }>`
  ${({ theme }) => theme.fonts.body16_medium}
  color: ${({ color }) => color};
  margin: 4.16rem 0 0 2.9rem;
`;

export const Background = styled.div`
  position: absolute;
  top: 12rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;
  margin: 33.75rem 0 13.3rem 0;
`;

export const Information = styled.div`
  ${({ theme }) => theme.fonts.body14_medium}
  color: ${({ theme }) => theme.colors.white};
`;

export const Name = styled.div`
  ${({ theme }) => theme.fonts.title_semibold}
  color: ${({ theme }) => theme.colors.white};
`;

export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
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
