import { Search } from 'assets';
import * as S from './FAB.style';

const FAB = () => {
  return (
    <S.Container>
      <S.FloatingBtn>
        <Search width={22} height={22} />
      </S.FloatingBtn>
    </S.Container>
  );
};

export default FAB;
