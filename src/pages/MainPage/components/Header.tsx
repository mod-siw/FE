import { SymbolMask02 } from '../../../assets';
import * as S from './Header.style';
import { useTheme } from '../../../contexts/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
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
      <span>MY</span>
    </S.Container>
  );
};

export default Header;
