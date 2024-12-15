import { Link } from 'react-router-dom';
import { Search } from 'assets';
import * as S from './FAB.style';

const FAB = () => {
  return (
    <S.Container>
      <Link to="/search">
        <S.FloatingBtn>
          <Search width={22} height={22} />
        </S.FloatingBtn>
      </Link>
    </S.Container>
  );
};

export default FAB;
