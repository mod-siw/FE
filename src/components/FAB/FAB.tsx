import { Search } from '../../assets';
import * as S from './FAB.style';

const FAB = () => {
  return (
    <S.Container>
      <S.FloatingBtn>
        <Search width={23} height={138} />
      </S.FloatingBtn>
    </S.Container>
  );
};

export default FAB;
