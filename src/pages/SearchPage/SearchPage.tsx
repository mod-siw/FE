import { useEffect, useState } from 'react';
import * as S from './SearchPage.style';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';
import SearchResult from './components/SearchResult';
import { useSearchInfiniteQuery } from 'hooks/useInfiniteQuery';
import { useItemContext } from 'contexts/ItemContext';
import Onboarding from 'pages/ListPage/components/Onboarding';

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
    console.log('query: ' + query);
  }, [query]);

  const { isItemClicked } = useItemContext();

  return (
    <S.Wrapper>
      <SearchBar isBack={true} query={query} setQuery={setQuery} />
      {/* {query ? (
        <SearchResult
          query={query}
          data={items}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      ) : (
        <SearchHistory query={query} setQuery={setQuery} />
      )} */}
      <SearchResult
        query={query}
        data={items}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
      {isItemClicked && <Onboarding />}
    </S.Wrapper>
  );
};

export default SearchPage;
