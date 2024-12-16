import { useNavigate } from 'react-router-dom';
import { Search } from 'assets';
import * as S from './FAB.style';

const FAB = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/search');
  };

  return (
    <S.Container>
      <S.FloatingBtn onClick={handleNavigate}>
        <Search width={22} height={22} />
      </S.FloatingBtn>
    </S.Container>
  );
};

export default FAB;
