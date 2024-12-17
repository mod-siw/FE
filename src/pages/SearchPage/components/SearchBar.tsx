import * as S from './SearchBar.style';
import { BackBtn } from 'assets';
import { Search } from 'assets';
import { useTheme } from 'contexts/ThemeContext';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export interface SearchBarProps {
  isBack: boolean;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ isBack, query, setQuery }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const { isDarkMode } = useTheme();
  console.log(isDarkMode, ': isDarkMode');
  const inputRef = useRef<HTMLInputElement>(null); // 입력창 ref

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = query;
    }
  }, [query]);

  const handleSearch = () => {
    if (inputRef.current) {
      const value = inputRef.current.value.trim();
      if (value) {
        setQuery(value);
      }
    }
  };

  return (
    <S.Container>
      {isBack ? (
        <BackBtn
          width={24}
          height={24}
          stroke={isDarkMode ? '#ffffff' : '#000000'}
          style={{ cursor: 'pointer' }}
          onClick={handleBack}
        />
      ) : (
        <></>
      )}
      <S.InputContainer isDarkMode={isDarkMode}>
        <input ref={inputRef} placeholder="제목, 작성자로 검색해보세요" />
        <Search
          width={22}
          height={22}
          style={{ cursor: 'pointer' }}
          onClick={handleSearch}
          stroke={isDarkMode ? '#ffffff' : '#000000'}
        />
      </S.InputContainer>
    </S.Container>
  );
};

export default SearchBar;
