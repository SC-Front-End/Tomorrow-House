import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import ScrollToTopButton from '../ProductList/ScrollToTopButton';

const ProductDetail = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionPrice, setSelectedOptionPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const { productId } = useParams();
    const [productDetail, setProductDetail] = useState(null);
  
    useEffect(() => {
      const fetchProductDetail = async () => {
          try {
              console.log("productId",productId);
              const response = await axios.get(`http://mini.jh1105.xyz:5305/api/post/${productId}`);
              setProductDetail(response.data);
              console.log("데이터",response.data)
          } catch (error) {
              console.error("상품 정보를 불러오는데 실패했습니다", error);
          }
      };
  
      fetchProductDetail();
  }, [productId]);
  
    const handleOptionChange = (event) => {
        const selectedContent = event.target.value;
        const selectedOptionData = productDetail.itemOptionList.find(option => option.optionContent === selectedContent);
        
        setSelectedOption(selectedContent);
        setSelectedOptionPrice(selectedOptionData ? selectedOptionData.addPrice : 0);
    };
  
    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };
  
    const productTitle = productDetail ? productDetail.itemName : "제품 정보 로딩 중...";
    const productPrice = productDetail ? productDetail.unitPrice : 0;
    const productImg = productDetail ? productDetail.thumbNailImgPath : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1W_MG7qY-hvsjhCYeSpIAiyFnsY-XXGryhRcMzzZlmY2Ac78SGV06RbrzSQ&s";
    const totalPrice = (productPrice + selectedOptionPrice) * quantity;
    
  
    return (
      <>
        <ProductDetailContainer>
          <ItemImgOverview>
            <ItemCoverImg>
                <img alt="상품" src={productImg} />
            </ItemCoverImg>
          </ItemImgOverview>
          <ItemContent>
            <ItemContentOverview>
                <div>
                  <ItemContentCompany>휴도</ItemContentCompany>
                  <ItemContentName>{productTitle}</ItemContentName>
                  <ItemPriceInfo>
                    <ItemDiscountPrice>
                      {productPrice.toLocaleString()}원
                    </ItemDiscountPrice>
                      <ItemContentReduced>특가</ItemContentReduced>
                  </ItemPriceInfo>
                  <ItemDeliveryInfo>
                      <ItemContentDelivery>무료배송</ItemContentDelivery>
                      <DeliveryContent>• 조건에 따라 추가비용 발생 가능 (상품 상세 정보 참고)</DeliveryContent>
                      <DeliveryContent>• 제주도/도서산간 지역 배송 불가</DeliveryContent>
                  </ItemDeliveryInfo>
                </div>
            </ItemContentOverview>
  
            <OptionInputBox>
            {productDetail && productDetail.itemOptionList && productDetail.itemOptionList.length > 0&& (
                    <FilterSelect onChange={handleOptionChange}>
                        <option hidden value='옵션'>옵션 (선택)</option>
                        {productDetail.itemOptionList.map((option, idx) => (
                            <option key={idx} value={option.optionContent}>
                                {option.optionContent} (+{option.addPrice.toLocaleString()}원)
                            </option>
                        ))}
                    </FilterSelect>
                )}
            <FilterSelect onChange={handleQuantityChange}>
                <option value='1'>수량 1</option>
                <option value="2">수량 2</option>
                <option value="3">수량 3</option>
                <option value="4">수량 4</option>
                <option value="5">수량 5</option>
            </FilterSelect>
            <optionPriceBox>주문금액: {totalPrice.toLocaleString()}원</optionPriceBox>
            <ItemBuyOption>
              <Cart>장바구니</Cart>
              <Buy>바로구매</Buy>
            </ItemBuyOption>
          </OptionInputBox>
          </ItemContent>
        </ProductDetailContainer>
  
        <ProductInfoContainer>
          <InfoNavigation>상품정보</InfoNavigation>
          {productDetail && productDetail.otherImgPathList && productDetail.otherImgPathList.length > 0 && (
          productDetail.otherImgPathList.map((imageUrl, index) => (
            <ProductImage key={index} src={imageUrl} alt={`상품 이미지 ${index + 1}`} />
          ))
          )}
        </ProductInfoContainer>
        <ScrollToTopButton/>
      </>
      );
    };
    

export default ProductDetail;


const themeColor = '#008000';
const fontBlack = '#000000';
const lightGray = 'lightgray';

const ProductInfoContainer =styled.div`
  display:flex
  flex-direction:colum;
  width: 1136px;
  margin: 0 auto;
  margin-top: 50px;
`;
const InfoNavigation=styled.div`
 display: block
 width:100%;
 height: 50px; 
 line-height: 50px;
 background-color:#FAFAFA;
 border-top: 1px solid #CCCCCC;
 border-bottom: 1px solid #CCCCCC;
 text-align: center;
 color: ${themeColor};
`;
const ProductImage = styled.img`
  width: 100%; // 부모 컨테이너의 너비에 맞춤
  height: auto; // 이미지의 원래 비율 유지
  margin-top: 10px; // 이미지 간의 간격
`;


const ProductDetailContainer = styled.div`
  display: flex;
  width: 1136px;
  margin: 0 auto;
  margin-top: 50px;
`;

const ItemImgOverview = styled.div`
  display: flex;
  margin-right: 30px;
`;

const ItemCoverImg = styled.div`
  width: 475px;
  height: 475px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const ItemContent = styled.div`
  width: 437px;
`;

const ItemContentOverview = styled.div`
  width: 437px;
`;

const ItemContentCompany = styled.div`
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: bold;
  color: #76797C;
`;

const ItemContentName = styled.h1`
  margin-top: 10px;
  font-size: 25px;
`;

const ItemPriceInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;


const ItemDiscountPrice = styled.span`
  margin-left: 10px;
  font-size: 32px;
`;

const ItemContentReduced = styled.div`
  margin-left: 8px;
  width: 30px;
  height: 20px;
  background-color: #f77;
  text-align: center;
  line-height: 20px;
  font-size: 11px;
  color: white;
  border-radius: 5px;
`;

const ItemDeliveryInfo = styled.div`
  margin-top: 13px;
  padding: 13px 0;
  border-top: 1px solid ${lightGray};
  border-bottom: 1px solid ${lightGray};
`;

const ItemContentDelivery = styled.div`
  margin: 0 10px 10px 0;
  width: 50px;
  height: 20px;
  background-color: #eeeeee;
  text-align: center;
  line-height: 20px;
  font-size: 11px;
  color: ${fontBlack};
  border-radius: 5px;
`;

const DeliveryContent = styled.p`
`;


const OptionInputBox = styled.div`
  max-width: 437px;
`;

const FilterSelect = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 0 15px;
  border: 1px solid ${themeColor};
  border-radius: 5px;
  font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`;

const ItemBuyOption = styled.div`
    display: flex;
    margin: 20px -3px 0px;


    button {
      width: 100%;
      height: 55px;
      margin: 0px 3px;
      padding: 13px 10px 14px;
      border-radius: 4px;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
`;

const Cart = styled.button`
      border: 1px solid ${themeColor};
      color: ${themeColor};
      font-size: 18px;
      font-weight: 700;
`;
const Buy = styled.button`
    border: none;
    background-color: ${themeColor};
    color: white;
    font-size: 17px;
    font-weight: 700;
`;