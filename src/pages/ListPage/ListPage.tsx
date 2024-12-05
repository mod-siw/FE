import { useState } from 'react';
import * as S from './ListPage.style';
import { Union } from '../../assets';
import Lists from './components/Lists';

const ListPage = () => {
  const [category, setCategory] = useState('영화');

  return (
    <S.Container>
      <S.Title>
        2024년
        <br />
        인생 {category}들
      </S.Title>
      <S.CreateBtn>
        <Union width={12.75} height={12.75} />
        <span>내 인생작 소개하기</span>
        <Union width={12.75} height={12.75} />
      </S.CreateBtn>
      <Lists />
    </S.Container>
  );
};

export default ListPage;
