import React from 'react';
import styled from 'styled-components';

const Empty = () => {
    return (
        <EmptyBasket>
            <div className='empty-inner'>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/b4a2d9186675387.6579a15197415.jpg' alt='empty-cat' />
                <div className='empty-btn'>
                    <button>상품 담으러 가기</button>
                </div>
            </div>
        </EmptyBasket>
    );
};

export default Empty;

const EmptyBasket = styled.div`

.empty-inner {
    width: 100%;
    height: 600px;
    background-color: #D4F9B7;
    margin-top: 20px;
}

img {    
    margin-top: 50px;
    margin-bottom: 20px;
    border-radius: 50%;
    width: 400px;
    height: 400px;
    margin-left: 550px;
}

.empty-btn {
    display: flex;
    justify-content: center;
}

button {
    background-color: #6EB636;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 30px;
    border-style: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}

`;