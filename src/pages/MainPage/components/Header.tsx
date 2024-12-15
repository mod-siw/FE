import { useNavigate } from 'react-router-dom';
import { SymbolMask02 } from 'assets';
import * as S from './Header.style';
import { useTheme } from 'contexts/ThemeContext';
import { getCookie } from 'api/http';

const Header = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();
  const token = getCookie('access_token');

  const goToMyPage = () => {
    if (token) {
      navigate('/my');
    } else {
      navigate('/login');
    }
  };

  return (
    <S.Container>
      <S.ToggleBtn onClick={toggleTheme} isDarkMode={isDarkMode}>
        {isDarkMode ? (
          <>
            <SymbolMask02 width={29} height={29} fill={'#FFFFFF'} />
            <S.Line />
            <p>문화</p>
          </>
        ) : (
          <>
            <p>일상</p>
            <S.Line />
            <SymbolMask02 width={29} height={29} fill={'#0E0C0C'} />
          </>
        )}
      </S.ToggleBtn>
      <span onClick={goToMyPage}>MY</span>
    </S.Container>
  );
};

export default Header;
