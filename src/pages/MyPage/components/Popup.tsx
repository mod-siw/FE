import styled from 'styled-components';
import { useTheme } from 'contexts/ThemeContext';
import { Union } from '../../../assets';

interface PopupProps {
  type: 'clipboard' | 'logout';
  onClose: () => void;
  onConfirm?: () => void;
}

const Popup: React.FC<PopupProps> = ({ type, onClose, onConfirm }) => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Overlay onClick={onClose} />
      <Wrapper>
        {type === 'clipboard' && (
          <Text>
            <Union width={12.75} fill={isDarkMode ? '#FFFFFF' : '#0E0C0C'} />
            <span>클립보드에 링크 복사 완료</span>
            <Union width={12.75} fill={isDarkMode ? '#FFFFFF' : '#0E0C0C'} />
          </Text>
        )}
        {type === 'logout' && (
          <Text>
            <Union width={12.75} fill={isDarkMode ? '#FFFFFF' : '#0E0C0C'} />
            <span>로그아웃 하시겠어요?</span>
            <Union width={12.75} fill={isDarkMode ? '#FFFFFF' : '#0E0C0C'} />
          </Text>
        )}
        <Line />
        {type === 'clipboard' ? (
          <CloseBtn onClick={onClose}>닫기</CloseBtn>
        ) : (
          <Container>
            <ActionBtn onClick={onConfirm}>예</ActionBtn>
            <ActionBtn onClick={onClose}>아니오</ActionBtn>
          </Container>
        )}
      </Wrapper>
    </>
  );
};

export default Popup;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 98;
`;

const Wrapper = styled.div`
  padding-top: 3.7rem;
  padding-bottom: 2.2rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29.1rem;
  height: 16.2rem;

  border: 1px solid ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.bgColor};

  z-index: 99;
`;

const Text = styled.div`
  margin-bottom: 2.9rem;

  display: inline-flex;
  height: 4.2rem;
  padding: 0.75rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;

  span {
    color: ${({ theme }) => theme.colors.textColor};
    ${({ theme }) => theme.fonts.body16_semibold}
  }
`;
const Line = styled.div`
  margin-bottom: 1rem;
  width: 25.865rem;
  height: 0.1rem;
  flex-shrink: 0;
  stroke-width: 0.1rem;
  background: ${({ theme }) => theme.colors.gray03};
`;

const CloseBtn = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  ${({ theme }) => theme.fonts.body16_medium}

  cursor: pointer;
`;

const Container = styled.div`
  margin-top: 0.3rem;

  display: flex;
  gap: 7.5rem;
`;

const ActionBtn = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  ${({ theme }) => theme.fonts.body16_medium}

  cursor: pointer;
`;
