import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { addCount } from './store';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const navigate = useNavigate();

    // 결제하기
    const navigatePayment = () => {
        if (navigate) {
            navigate("/payment");
        }
    };

    return (
        <Table>
            <div className='cart-box'>
                <div className='item-box'>
                    {state.cart.map((item, i) => (
                        <div className='cart-card' key={i}>
                            <img
                                src={item.imageUrls}
                                alt="01"
                            />
                            <div className='cart-name'>{item.name}</div>
                            <div className='count'>
                                <div className='count-number'>{item.count}</div>
                                <button onClick={() => dispatch(addCount(i))}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={navigatePayment} className='order-btn'>주문하기</button>
                </div>
            </div>
        </Table>
    );
};

export default Cart;

const Table = styled.div`

.cart-box{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
}

.cart-card{
    width: 700px;
    height: 330px;
    background-color: gray;
    border-radius: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
    align-item: center;
    padding-right: 26px;
}

.cart-name {
    background-color: #fff;
    width: 300px;
    color: #000;
    font-weight: 700;
    float: right;
    margin-right: 53px;
    margin-top: 20px;
    border-radius: 10px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}

.item{
    margin-left: 30px;
   
}

img {
    width: 220px;
    border-radius: 10px;
    margin-left: 80px;
    margin-top: 20px;
  }

.count{
    width: 570px;
    height: 45px;
    border-radius: 10px;
    background-color: #fff;
    margin-left: 80px;
    margin-top: 17px;

    padding-rihgt: 30px;
    padding-left: 30px;
}

.count-number{
    float: left;
    font-size: 20px;
    margin-top: 8px;
    padding-left: 20px;
    font-weight: bold;
}

button {
    background-color: #6eb636;
    border-radius: 20px;
    width: 150px;
    height: 30px;
    color: #fff;
    font-size: 20px;
    margin-left: 350px;
    margin-top: 7px;
}

.order-btn{
    margin-top: 30px;
    width: 400px;
    margin-left: 80px;
    margin-top: 40px;
    height: 70px;
}
.order-btn:hover{
   ${'' /* hover 속성 추가하기 */}
}
`;