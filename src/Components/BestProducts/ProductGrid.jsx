import styled from "styled-components";

const fontFamily = "맑은 고딕";


const Cardbox = styled.div`
  width: calc(25% - 25px);
  padding: 40px 10px;
  vertical-align: baseline;
  margin: 0.5rem;
  margin-bottom: 30px;
  box-sizing: border-box;

  @media (max-width: 768px){
  width: calc(33% - 8px);
  padding: 4px 1px;
  vertical-align: baseline;
  margin: 0.2rem;
  margin-bottom: 2px;
  box-sizing: border-box;
  }
`;
const Link = styled.a`
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: block;
  position: relative; 
  overflow: hidden;  

  @media (max-width: 768px){
  display: block;
  position: relative; 
  overflow: hidden; 
  }

`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  max-width: 650px;
  max-height: 640px;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
}

@media (max-width: 768px){
  width: 100%;
  height: 100%;
  max-width: 768px;
  max-height: 768px;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}
`;

const Title = styled.div`
  font-size: 1.1rem;
  margin-top: 10px;
  color: #111111;
  line-height: 1.75;
  font-family: ${fontFamily};
  font-weight: 900;

  @media (max-width: 768px){
  font-size: 10px;
  margin-top: 2px;
  color: #111111;
  line-height: 1.75;
  font-family: ${fontFamily};
  font-weight: 900;
}

`;
const SubInfo = styled.div`
  font-size: 1.1rem;
  color: #8e7b7b;
  font-family: ${fontFamily};
  font-weight: 550;
  margin-top: 2px;

  @media (max-width: 768px){
  font-size: 10px;
  color: #8e7b7b;
  font-family: ${fontFamily};
  font-weight: 550;
  margin-top: 2px;
}
`;
const Price = styled.div`
  font-size: 1.1rem;
  margin: 15px 0; /* 위아래 15px, 좌우는 0 */
  color: #111111;
  line-height: 1.75;
  font-family: ${fontFamily};
  font-weight: 900;

  @media (max-width: 768px){
  font-size: 10px;
  margin-top: 2px;
  color: #111111;
  line-height: 1.75;
  font-family: ${fontFamily};
  font-weight: 900;
}
`;

const RankIcon = styled.div`
  position: absolute;
  left: 10px;
  background-color: #35C5F0;
  color: #fff;
  padding: 10px;
  border-radius: 8px;   
  font-size: 1rem;
  font-weight: 700;
   /* 다른 요소보다 위에 나타나도록 설정 */
   z-index: 1;
`;


const IconWrapper = styled.div`
  top: 90px;
  display: flex;
  align-items: center;

`;

const FreeShippingIcon = styled.div`
  background-color: #EEEEEE;
  color: #000000;
  padding: 10px 20px;
  border-radius: 8px;   
  font-size: 0.8rem;
  font-weight: 700;

  @media (max-width: 768px){
  background-color: #EEEEEE;
  color: #000000;
  padding: 1px 2px;
  border-radius: 8px;   
  font-size: 10px;
  font-weight: 700;
}
`;

const SpecialPriceIcon = styled.div`
  margin-left: 10px;
  background-color: #E87C6C;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;   
  font-size: 0.8rem;
  font-weight: 700;
  flex-direction: row;

  @media (max-width: 768px){
  margin-left: 10px;
  background-color: #E87C6C;
  color: #fff;
  padding: 1px 2px;
  border-radius: 8px;   
  font-size: 10px;
  font-weight: 700;
  flex-direction: row;
}
`;


//UI부분


const ProductGrid = (props) => {

  return (
    <>
      <Cardbox>
        <Link>
          <Wrapper>
            <RankIcon>{props.rank}</RankIcon>
            <Img src={props.image_path_1} />
            <Title>{props.name}</Title>
            <SubInfo>{props.item_title}</SubInfo>
            <SubInfo>확인중</SubInfo>
            <Price>{props.unit_price}원</Price>
            <IconWrapper><FreeShippingIcon>무료배송</FreeShippingIcon><SpecialPriceIcon>특가</SpecialPriceIcon></IconWrapper>
          </Wrapper>
        </Link>
      </Cardbox>
    </>
  );
}

export default ProductGrid;