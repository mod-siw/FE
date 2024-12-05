import { Rectangle } from '../../../assets';
import * as S from './Arrow.style';

const Arrow = () => {
  return (
    <S.Container>
      <Rectangle width={23} height={138} className="left-bottom" />
      <Rectangle width={23} height={138} className="left-top" />
      <Rectangle width={23} height={138} className="right-top" />
      <Rectangle width={23} height={138} className="right-bottom" />
    </S.Container>
  );
};

export default Arrow;
