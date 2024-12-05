import { useRenderFrame } from '../../../hooks/useRenderFrame';
import * as S from './Lists.style';

interface ListsProps {
  data: { id: number; img: string; frame: string; color: number }[];
}

const Lists: React.FC<ListsProps> = ({ data }) => {
  const { renderFrame } = useRenderFrame();

  return (
    <S.Container>
      {data.map((item) => (
        <S.Item key={item.id}>
          <S.FrameWrapper>{renderFrame(item.frame, item.color)}</S.FrameWrapper>
          <S.Image src={item.img} />
        </S.Item>
      ))}
    </S.Container>
  );
};

export default Lists;
