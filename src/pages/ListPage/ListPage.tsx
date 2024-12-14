import { useParams } from 'react-router-dom';
import * as S from './ListPage.style';
import ItemList from 'components/ItemList/ItemList';
import FAB from 'components/FAB/FAB';
import { pathToCategory } from 'constants/category';
import { Union } from 'assets';

import Onboarding from './components/Onboarding';
import { useItemContext } from 'contexts/ItemContext';
import { useCategoryInfiniteQuery } from 'hooks/useInfiniteQuery';

const ListPage = () => {
  const { category } = useParams<{ category: string }>();
  const { isItemClicked } = useItemContext();

  const { items, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useCategoryInfiniteQuery(category || 'movie');

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
      <ItemList
        data={items}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
      <FAB />
      {isItemClicked && <Onboarding />}
    </S.Wrapper>
  );
};

export default ListPage;
