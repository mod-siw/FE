import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { MiniSymbol } from '../../../assets';

interface SelectPopupProps {
  onAlbumClick: () => void;
  onClose: () => void;
}

const SelectPopup = ({ onAlbumClick, onClose }: SelectPopupProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <BtnBox onClick={() => navigate('/made/img')}>
          <MiniSymbol width={12.75} color="#fff" />
          <p>검색</p>
          <MiniSymbol width={12.75} color="#fff" />
        </BtnBox>
        <Line />
        <BtnBox onClick={onAlbumClick}>
          <MiniSymbol width={12.75} color="#fff" />
          <p>앨범</p>
          <MiniSymbol width={12.75} color="#fff" />
        </BtnBox>
      </Container>
    </Wrapper>
  );
};

export default SelectPopup;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
`;

const Container = styled.div`
  position: relative;
  z-index: 30;
  display: inline-flex;
  padding: 21px 41px;
  align-items: center;
  gap: 36px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.bgColor};
`;

const Line = styled.div`
  height: 112px;
  border: 0.5px solid ${({ theme }) => theme.colors.gray03};
`;

const BtnBox = styled.div`
  display: flex;
  padding: 7.5px 0px;
  justify-content: center;
  align-items: center;
  gap: 7.5px;
  flex-shrink: 0;
  cursor: pointer;

  p {
    font: ${({ theme }) => theme.fonts.body16_semibold};
    flex-shrink: 0;
  }
`;
