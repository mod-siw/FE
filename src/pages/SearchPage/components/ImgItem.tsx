import styled from 'styled-components';

interface ImgItemProps {
  id: number;
  img: string;
  onClick?: () => void;
}

const ImgItem: React.FC<ImgItemProps> = ({ id, img, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Image src={img} alt="item_img" />
    </Wrapper>
  );
};

export default ImgItem;

const Wrapper = styled.div`
  width: 16rem;
  height: 16rem;
  background-color: white;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
