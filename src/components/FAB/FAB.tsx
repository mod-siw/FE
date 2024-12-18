import { useNavigate } from 'react-router-dom';
import { Search } from 'assets';
import * as S from './FAB.style';
import { useTheme } from 'contexts/ThemeContext';

const FAB = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/search');
  };

  return (
    <S.Container>
      <S.FloatingBtn onClick={handleNavigate}>
        <Search stroke={isDarkMode ? '#fff' : '#000'} width={22} height={22} />
      </S.FloatingBtn>
    </S.Container>
  );
};

export default FAB;
