import React from 'react';
import styled from 'styled-components';

const PaymentDetailGuide = () => {
    return (
        <>
            <PaymentDetailGuideWrapper>
                <PaymentIsFinishedImg src="https://www.codemshop.com/manual/wp-content/uploads/2022/11/%E1%84%80%E1%85%A7%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%85%E1%85%AD.png" />
                <PaymentDetailGuideButton>주문현황 보기</PaymentDetailGuideButton>
            </PaymentDetailGuideWrapper>
        </>
    );
};

export default PaymentDetailGuide;


const PaymentDetailGuideWrapper = styled.div`
  max-width: 1830px;
  justify-content: center;
  margin: 0 auto;
  padding: 3rem 12rem;


/* Flexbox 속성 추가 */
  display: flex;
  flex-direction: column;
  align-items: center; 
`

const PaymentIsFinishedImg = styled.img`
`


/*추후에 링크 정리 */
const PaymentDetailGuideButton = styled.button`
   background-color: #6EB636;
    width: 300px;
    height: 50px;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    font-size: 30px;
    border: none;
    margin: 50px 20px;
`

