import * as S from './SearchResult.style';
import ItemList from 'components/ItemList/ItemList';

import { mock } from '../../ListPage/components/Mock';

interface SearchResultProps {
  query: string;
  data: { id: number; img: string; frame: string; color: number }[];
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
}
const SearchResult: React.FC<SearchResultProps> = ({
  query,
  data,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}) => {
  return (
    <>
      <S.Container>
        <div>"{query}"에 대한 검색결과입니다</div>
      </S.Container>
      <ItemList
        data={data}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
};

export default SearchResult;
