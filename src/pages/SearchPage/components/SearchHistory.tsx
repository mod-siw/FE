import * as S from './SearchHistory.style';
import { Diagonalarrow } from '../../../assets';
import { SearchBarProps } from './SearchBar';

interface SearchHistoryProps extends SearchBarProps {
  data: { keyword: string }[];
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ data, setQuery }) => {
  return (
    <S.Container>
      <div>최근 검색어</div>
      <ul>
        {data.map((item, index) => (
          <S.HistoryItem key={index} onClick={() => setQuery(item.keyword)}>
            <span>{item.keyword}</span>
            <Diagonalarrow width={24} height={24} />
          </S.HistoryItem>
        ))}
      </ul>
    </S.Container>
  );
};

export default SearchHistory;
