import { useEffect, useState } from 'react';
import * as S from './SearchPage.style';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';
import SearchResult from './components/SearchResult';
import { useSearchInfiniteQuery } from 'hooks/useInfiniteQuery';

const SearchPage = () => {
  // const mock = {
  //   message: '블랙 검색기록 조회 성공',
  //   data: [
  //     { keyword: '허채린' },
  //     { keyword: '에스파' },
  //     { keyword: '영화' },
  //     { keyword: '음악' },
  //     { keyword: '디자인' },
  //   ],
  // };

  const [query, setQuery] = useState(''); // 검색어
  const { items, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useSearchInfiniteQuery(query);

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <S.Wrapper>
      <SearchBar isBack={true} query={query} setQuery={setQuery} />
      {query ? (
        <SearchResult
          query={query}
          data={items}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      ) : (
        <SearchHistory query={query} setQuery={setQuery} />
      )}
    </S.Wrapper>
  );
};

export default SearchPage;
