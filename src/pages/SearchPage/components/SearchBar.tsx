import * as S from './SearchBar.style';
import { Back } from '../../../assets';
import { Search } from '../../../assets';

const SearchBar = () => {
  return (
    <S.Container>
      <Back width={24} height={24} style={{ cursor: 'pointer' }} />
      <S.InputContainer>
        <input placeholder="작품 분야, 제목, 작성자로 검색해보세요" />
        <Search width={22} height={22} style={{ cursor: 'pointer' }} />
      </S.InputContainer>
    </S.Container>
  );
};

export default SearchBar;
