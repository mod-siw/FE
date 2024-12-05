import * as S from './SearchHistory.style';
import { Diagonalarrow } from '../../../assets';

interface SearchHistoryProps {
  data: { keyword: string }[];
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ data }) => {
  return (
    <S.Container>
      <div>최근 검색어</div>
      <ul>
        {data.map((item, index) => (
          <S.HistoryItem key={index}>
            <span>{item.keyword}</span>
            <Diagonalarrow
              width={24}
              height={24}
              style={{ cursor: 'pointer' /*커서 포인터 정의 위치 추후 qa*/ }}
            />
          </S.HistoryItem>
        ))}
      </ul>
    </S.Container>
  );
};

export default SearchHistory;
