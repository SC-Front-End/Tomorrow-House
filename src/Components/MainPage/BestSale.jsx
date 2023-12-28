import React from 'react';
import styled from 'styled-components';

const BestSale = () => {
    return (
        <SaleSection>
            <header className='new-title'>
                <h2>오늘의 베스트 상품</h2>
                {/* <p>더보기</p> */}
            </header>
            <div className='bigsale-item'>
                <ul>
                    <li className='item-img'>
                        <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168731059927618146.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1' alt='01' />
                        <div className='product-img-text'>
                            <p className='item-title'>후기6만돌파! 40수 코마사 호텔수건 200g 10장</p>
                            <span className='item-rate'>63%</span>
                            <span className='item-price'>28,900</span>
                        </div>
                        <div className='item-btn'>
                            <button className='free-btn'>무료 배송</button>
                            <button className='big-btn'>특가</button>
                        </div>
                    </li>
                    <li className='item-img'>
                        <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168731059927618146.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1' alt='01' />
                        <div className='product-img-text'>
                            <p className='item-title'>후기6만돌파! 40수 코마사 호텔수건 200g 10장</p>
                            <span className='item-rate'>63%</span>
                            <span className='item-price'>28,900</span>
                        </div>
                        <div className='item-btn'>
                            <button className='free-btn'>무료 배송</button>
                            <button className='big-btn'>특가</button>
                        </div>
                    </li>
                    <li className='item-img'>
                        <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168731059927618146.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1' alt='01' />
                        <div className='product-img-text'>
                            <p className='item-title'>후기6만돌파! 40수 코마사 호텔수건 200g 10장</p>
                            <span className='item-rate'>63%</span>
                            <span className='item-price'>28,900</span>
                        </div>
                        <div className='item-btn'>
                            <button className='free-btn'>무료 배송</button>
                            <button className='big-btn'>특가</button>
                        </div>
                    </li>
                    <li className='item-img'>
                        <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168731059927618146.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1' alt='01' />
                        <div className='product-img-text'>
                            <p className='item-title'>후기6만돌파! 40수 코마사 호텔수건 200g 10장</p>
                            <span className='item-rate'>63%</span>
                            <span className='item-price'>28,900</span>
                        </div>
                        <div className='item-btn'>
                            <button className='free-btn'>무료 배송</button>
                            <button className='big-btn'>특가</button>
                        </div>
                    </li>
                </ul>
            </div>

        </SaleSection>
    );
};

export default BestSale;

const SaleSection = styled.div`

.new-title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-left: 130px;
    margin-right: 120px;
    margin-top: 70px;
}


.bigsale-item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}

.item-img {
    padding-left: 30px;
    padding-right: 30px;
}

img {
    width: 280px;

    border-radius: 10px;
}

ul {
    list-style: none;
}

li {
    float: left;
}

.item-title {
    font-size: 12px;
    font-weight: bold;
}

.item-rate{
    font-size: 20px;
    color: #6EB636;
    font-weight: bold;
    float: left;
    margin-left: 0px;
}

.item-price {
    font-weight: bold;
    margin-right: 150px;
    font-size: 20px;
    margin-left: 20px;
}

.item-btn {
    float: left;
    margin-left: 0px;
    margin-top: 13px;
}

.free-btn {
    margin-right: 20px;
    background-color: #D9D9D9;
    border-radius: 10px;
    padding: 5px;
    color: #413F3F;
    font-weight: bold;
    font-size: 15px;
    border: none;
}

.big-btn {
    background-color: #FF9E9E;
    border-radius: 10px;
    padding: 5px;
    color: #413F3F;
    font-weight: bold;
    font-size: 15px;
    border: none;
}

`;