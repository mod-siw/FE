import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Page = styled(motion.div)<{ dragging: boolean }>`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: ${({ dragging, theme }) =>
    dragging ? 'transparent' : theme.colors.bgColor};
  transition: background 0.3s ease;
`;

export const NextPage = styled(motion.div)`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
`;
