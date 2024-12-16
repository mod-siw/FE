import { useRef, useState } from 'react';
import { useTheme } from 'contexts/ThemeContext';
import * as S from './MainPage.style';
import { PanInfo } from 'framer-motion';

import Landing from './components/landing/Landing';
import Scroll from './components/scroll/Scroll';
import Header from './components/Header';
import FAB from 'components/FAB/FAB';
import { mainCategoryBlack, mainCategoryWhite } from 'constants/main/mainCategory';

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const yOffsetRef = useRef(0);

  const { isDarkMode } = useTheme();
  const mainCategories = isDarkMode ? mainCategoryBlack : mainCategoryWhite;

  const pages = [
    <Landing />,
    ...mainCategories.map((category, index) => (
      <Scroll key={index} category={category} />
    )),
  ];

  const handleDrag = (event: MouseEvent | TouchEvent, info: PanInfo) => {
    yOffsetRef.current = info.offset.y;
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent, info: PanInfo) => {
    if (info.offset.y < -100) {
      setCurrentPage((prev) => (prev + 1) % pages.length);
    }
  };

  return (
    <S.Wrapper>
      <Header />
      <S.Page
        key={currentPage}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        initial={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {pages[currentPage]}
      </S.Page>
      <FAB />
    </S.Wrapper>
  );
};

export default MainPage;
