import * as S from './SearchBar.style';
import { Back, Search } from 'assets';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useRef } from 'react';

export interface SearchBarProps {
  isBack: boolean;
  query: string;
  setQuery: (value: string) => void;
}

const SearchImgBar: React.FC<SearchBarProps> = ({ isBack, query, setQuery }) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBack = () => navigate(-1);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <S.Container>
      {isBack && (
        <Back width={24} height={24} style={{ cursor: 'pointer' }} onClick={handleBack} />
      )}
      <S.InputContainer>
        <input
          ref={inputRef}
          placeholder="작품 분야, 제목, 작성자로 검색해보세요"
          value={query}
          onChange={handleInputChange}
        />
        <Search width={22} height={22} style={{ cursor: 'pointer' }} />
      </S.InputContainer>
    </S.Container>
  );
};

export default SearchImgBar;
