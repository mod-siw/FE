import styled from 'styled-components';
import { DeleteMyPost } from 'api/my';
import { useTheme } from 'contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

interface DetailMenuProps {
  post_id: number;
}
const DetailMenu = ({ post_id }: DetailMenuProps) => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  // 삭제
  const handleDelete = () => {
    DeleteMyPost(isDarkMode, post_id);
    navigate('/my');
  };

  // 내보내기
  const handleCapture = () => {
    // 캡처~~
  };

  return (
    <>
      <Wrapper>
        <Btn onClick={handleDelete}>삭제</Btn>
        <Btn onClick={handleCapture}>내보내기</Btn>
      </Wrapper>
    </>
  );
};

export default DetailMenu;

const Wrapper = styled.div`
  position: absolute;
  top: 4.2rem;
  left: -4rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.8rem;
  height: 3rem;
  background-color: black;
  color: white;
  ${({ theme }) => theme.fonts.body14_medium}
  border: 1px #686868 solid;
  cursor: pointer;
`;
