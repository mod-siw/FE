import * as S from './SearchResult.style';
import Lists from '../../ListPage/components/Lists';

import { mock } from '../../ListPage/components/Mock';

interface SearchResultProps {
  query: string;
}
const SearchResult: React.FC<SearchResultProps> = ({ query }) => {
  return (
    <>
      <S.Container>
        <div>"{query}"에 대한 검색결과입니다</div>
      </S.Container>
      <Lists data={mock.data} />
    </>
  );
};

export default SearchResult;
