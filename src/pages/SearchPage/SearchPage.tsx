import * as S from './SearchPage.style';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';

const SearchPage = () => {
  const mock = {
    message: '블랙 검색기록 조회 성공',
    data: [
      { keyword: '허채린' },
      { keyword: '에스파' },
      { keyword: '영화' },
      { keyword: '음악' },
      { keyword: '디자인' },
    ],
  };

  return (
    <S.Wrapper>
      <SearchBar />
      <SearchHistory data={mock.data} />
    </S.Wrapper>
  );
};

export default SearchPage;
