import { useEffect, useState } from 'react';
import * as S from './SearchPage.style';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';
import SearchResult from './components/SearchResult';

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

  const [query, setQuery] = useState(''); // 검색어

  useEffect(() => {
    console.log(query);
    // 하위 컴포넌트에서 setQuery로 query가 변경되었을 때 함수 호출
  }, [query]);

  return (
    <S.Wrapper>
      <SearchBar setQuery={setQuery} />
      <SearchHistory data={mock.data} setQuery={setQuery} />
      {/* <SearchResult query={query} /> */}
    </S.Wrapper>
  );
};

export default SearchPage;
