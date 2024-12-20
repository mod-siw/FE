import * as S from './SearchResult.style';

// components
import ItemList from 'components/ItemList/ItemList';

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
  const isNone = data.length === 0; // 데이터 유무

  return (
    <>
      <S.Container>
        <div>"{query}"에 대한 검색결과입니다</div>
      </S.Container>
      {isNone ? (
        <S.NoneDiv>검색결과를 찾을 수 없어요</S.NoneDiv>
      ) : (
        <ItemList
          data={data}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isSearch={true}
        />
      )}
    </>
  );
};

export default SearchResult;
