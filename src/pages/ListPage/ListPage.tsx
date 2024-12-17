import * as S from './ListPage.style';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { pathToCategory } from 'constants/category';
import { useTheme } from 'contexts/ThemeContext';

// components
import { Union } from 'assets';
import FAB from 'components/FAB/FAB';
import Onboarding from './components/Onboarding';
import ItemList from 'components/ItemList/ItemList';
import ListPopup from './components/ListPopup';

// data
import { useItemContext } from 'contexts/ItemContext';
import { useCategoryInfiniteQuery } from 'hooks/useInfiniteQuery';
import { getLocalStorageItem } from 'contexts/UserContext';

const ListPage = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const { isItemClicked } = useItemContext();
  const { isDarkMode } = useTheme();
  const nickname = getLocalStorageItem('nickname');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const categoryName = pathToCategory[category || 'movie']?.name || '영화';

  const { items, userPostCount, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useCategoryInfiniteQuery(categoryName);

  const handleGoMake = () => {
    if (nickname) {
      if (userPostCount < 9) {
        navigate('/made', { state: { prev: `/list/${category}` } });
      } else {
        setPopupVisible(true);
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <S.Wrapper>
      <S.Title $titleColor={pathToCategory[category || 'movie'].color}>
        2024년
        <br />
        인생 {pathToCategory[category || 'movie'].name}들
      </S.Title>
      <S.CreateBtn isDarkMode={isDarkMode} onClick={handleGoMake}>
        <Union width={12.75} height={12.75} fill={isDarkMode ? '#FFFFFF' : '#000000'} />
        <span>{isDarkMode ? '내 인생작 소개하기' : '나의 순간 소개하기'}</span>
        <Union width={12.75} height={12.75} fill={isDarkMode ? '#FFFFFF' : '#000000'} />
      </S.CreateBtn>
      <S.ListDiv>
        <ItemList
          data={items}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </S.ListDiv>
      {isItemClicked && <Onboarding />}
      <FAB />
      {isPopupVisible && <ListPopup onClose={() => setPopupVisible(false)} />}
    </S.Wrapper>
  );
};

export default ListPage;
