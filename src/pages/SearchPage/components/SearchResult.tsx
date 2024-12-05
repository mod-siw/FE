import * as S from './SearchResult.style';

interface SearchResultProps {
  query: string;
}
const SearchResult: React.FC<SearchResultProps> = ({ query }) => {
  return (
    <S.Container>
      <div>"{query}"에 대한 검색결과입니다</div>
    </S.Container>
  );
};

export default SearchResult;
