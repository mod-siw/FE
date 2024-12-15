import * as S from './ListPage.style';
import { useParams } from 'react-router-dom';
import { pathToCategory } from 'constants/category';
import { useTheme } from 'contexts/ThemeContext';

// components
import { Union } from 'assets';
import FAB from 'components/FAB/FAB';
import Onboarding from './components/Onboarding';
import ItemList from 'components/ItemList/ItemList';

// data
import { useItemContext } from 'contexts/ItemContext';
import { useCategoryInfiniteQuery } from 'hooks/useInfiniteQuery';

const ListPage = () => {
  const { category } = useParams<{ category: string }>();
  const { isItemClicked } = useItemContext();
  const { isDarkMode } = useTheme();

  const { items, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useCategoryInfiniteQuery(category || 'movie');

  return (
    <S.Wrapper>
      <S.Title $titleColor={pathToCategory[category || 'movie'].color}>
        2024년
        <br />
        인생 {pathToCategory[category || 'movie'].name}들
      </S.Title>
      <S.CreateBtn isDarkMode={isDarkMode}>
        <Union width={12.75} height={12.75} fill={isDarkMode ? '#FFFFFF' : '#000000'} />
        <span>내 인생작 소개하기</span>
        <Union width={12.75} height={12.75} fill={isDarkMode ? '#FFFFFF' : '#000000'} />
      </S.CreateBtn>
      <ItemList
        data={items}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
      {isItemClicked && <Onboarding />}
      <FAB />
    </S.Wrapper>
  );
};

export default ListPage;
