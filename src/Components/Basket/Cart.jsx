import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";


const Cart = () => {

    let a = useSelector((state) => { return state })

    return (
        <Table>
            <div className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>안녕</td>
                        <td>안녕</td>
                        <td>안녕</td>
                    </tr>
                </tbody>
            </div>
        </Table>

    );
};

export default Cart;

const Table = styled.div`

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