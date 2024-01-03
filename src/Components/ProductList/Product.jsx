import React from 'react';
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import Skeleton from '../../shared/Skeleton';

const Product = (props) => {
    const navigate = useNavigate();

    const handleProductClick = () => {
        console.log("props.id확인",props.id);
        navigate(`/productDetail/${props.id}`);
    };

    return (
        <Container onClick={handleProductClick}>
                <Wrapper>
                    <ImgContainer><Img src={props.src} /></ImgContainer>
                    <Title>{props.name}</Title>
                    <Price>{props.price}원</Price>
                </Wrapper>
        </Container>
    );
};

function ListSkeleton() {
    return (
        <Container>
          <Wrapper>
            <ImgContainer><Skeleton width="100%" height="100%"/></ImgContainer>
            <Title><Skeleton width="100px" height="15px" /></Title>
            <Price><Skeleton width="100px" height="10px" /></Price>
          </Wrapper>
        </Container>
    );
  }
  Product.Skeleton = ListSkeleton;

export default Product;

const Container = styled.div`
    padding: 5px 0;
    vertical-align: baseline;
    margin: 0.6em;
    margin-bottom: 30px;
    box-sizing: border-box;
`;
const Link =styled.a`
`;
const Wrapper =styled.div`
    cursor: pointer;
    display: block;
`;


const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
    background:#f5f5f5;
`;
const ImgContainer = styled.div`
    width: 258px;
    height: 258px;
    border-radius: 4px;
    background-color: #f1f3f5;
    max-width: 650px;
    max-height: 640px;
`;

const Title = styled.div`
    font-size: 16px;
    width: 258px;
    margin-top:10px;
    color: #111111;
    line-Height: 1.75;
    font-Family: 맑은 고딕;
    font-Weight: 900;
`;
const Content = styled.div`
    display: block;
`;
const Price = styled.div`
    font-size: 16px;
    margin-top:15px;
    color: #111111;
    line-Height: 1.75;
    font-Family: 맑은 고딕;
    font-Weight: 900;
`;
