import { useEffect, useState } from 'react';
import * as S from './SearchHistory.style';
import { Diagonalarrow } from 'assets';

// data
import { GetSearchHistory } from 'api/search';

interface HistoryData {
  keyword: string;
}

interface SearchHistoryProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ setQuery }) => {
  const [historyData, setHistoryData] = useState<HistoryData[] | null>(null);

  useEffect(() => {
    GetSearchHistory().then((res) => setHistoryData(res.data));
  }, []);

  return (
    <S.Container>
      <div>최근 검색어</div>
      <ul>
        {historyData?.map((item, index) => (
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
