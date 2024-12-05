import { useParams } from 'react-router-dom';
import * as S from './ListPage.style';
import Lists from './components/Lists';
import FAB from 'components/FAB/FAB';
import { useTheme } from 'styled-components';
import { Union } from 'assets';

import { mock } from './components/Mock';

const ListPage = () => {
  const theme = useTheme();
  const { category } = useParams<{ category: string }>();

  const pathToCategory: Record<
    string,
    { name: string; color: keyof typeof theme.colors }
  > = {
    movie: { name: '영화', color: 'mint01' },
    music: { name: '음악', color: 'sky01' },
    books: { name: '책', color: 'magenta01' },
    youtube: { name: '유튜브', color: 'red01' },
    ott: { name: 'OTT', color: 'orange01' },
    performance: { name: '공연', color: 'yellow01' },
  };

  return (
    <S.Wrapper>
      <S.Title $titleColor={pathToCategory[category || 'movie'].color}>
        2024년
        <br />
        인생 {pathToCategory[category || 'movie'].name}들
      </S.Title>
      <S.CreateBtn>
        <Union width={12.75} height={12.75} />
        <span>내 인생작 소개하기</span>
        <Union width={12.75} height={12.75} />
      </S.CreateBtn>
      <Lists data={mock.data} />
      <FAB />
    </S.Wrapper>
  );
};

export default ListPage;
