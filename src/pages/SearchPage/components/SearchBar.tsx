import * as S from './SearchBar.style';
import { Back } from 'assets';
import { Search } from 'assets';
import { useEffect, useRef } from 'react';

export interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  const inputRef = useRef<HTMLInputElement>(null);

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
      <Back width={24} height={24} style={{ cursor: 'pointer' }} />
      <S.InputContainer>
        <input ref={inputRef} placeholder="작품 분야, 제목, 작성자로 검색해보세요" />
        <Search
          width={22}
          height={22}
          style={{ cursor: 'pointer' }}
          onClick={handleSearch}
        />
      </S.InputContainer>
    </S.Container>
  );
};

export default SearchBar;
