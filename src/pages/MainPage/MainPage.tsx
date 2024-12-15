import { useState } from 'react';
import * as S from './MainPage.style';
import { PanInfo } from 'framer-motion';

import Landing from './components/landing/Landing';
import Scroll from './components/scroll/Scroll';
import Header from './components/Header';
import FAB from 'components/FAB/FAB';
import { mainCategory } from 'constants/main/mainCategory';

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [yOffset, setYOffset] = useState(0);

  const pages = [
    <Landing />,
    ...mainCategory.map((category, index) => <Scroll key={index} category={category} />),
  ];

  const handleDrag = (event: MouseEvent | TouchEvent, info: PanInfo) => {
    setYOffset(info.offset.y);

    if (info.offset.y < -100) {
      setDragging(true);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent, info: PanInfo) => {
    if (info.offset.y < -100) {
      setCurrentPage((prev) => (prev + 1) % pages.length);
      setDragging(true);
    }
    setYOffset(0);
    setDragging(false);
  };

  return (
    <S.Wrapper>
      <Header />
      <S.Page
        key={currentPage}
        dragging={dragging}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.8}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        initial={{ y: 0 }}
        animate={dragging ? { y: yOffset } : { y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {pages[currentPage]}
      </S.Page>

      <S.NextPage
        key={`next-${currentPage}`}
        initial={{ y: '50%' }}
        animate={dragging ? { y: yOffset > 0 ? yOffset : 0 } : { y: '50%' }}
        transition={{ duration: 1 }}
        style={{ opacity: dragging ? 0.5 : 1 }}
      >
        {pages[(currentPage + 1) % pages.length]}
      </S.NextPage>
      <FAB />
    </S.Wrapper>
  );
};

export default MainPage;
