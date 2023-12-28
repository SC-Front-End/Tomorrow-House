import React from 'react';
import styled from 'styled-components';


const Use = () => {
    return (
        <UseInfo>
            <div className='use-section'>
                <div className='use-header'>
                    <p className='use-title'>내일의 집 이용안내</p>
                </div>
                <div className='use-box'>
                    <div className='box'>
                        <span className='box-text'>매장찾기</span>
                    </div>
                    <div className='box'>
                        <span className='box-text'>고객의 소리</span>
                    </div>
                </div>
                <div className='use-box'>
                    <div className='box'>
                        <span className='box-text'>제품 교환 안내</span>
                    </div>
                    <div className='box'>
                        <span className='box-text'>고객 서비스 블로그</span>
                    </div>
                </div>
            </div>
        </UseInfo>
    );
};

export default Use;

const UseInfo = styled.div`

.use-section {
    background-color: #A9EF72;
    width: 100%;
    height: 630px;
    margin-bottom: 150px;
    margin-top: 150px;
 
}

p {
    margin-left: 100px;
}

.use-title {
    font-size: 42px;
    font-weight: 700;
    float: left;

    margin-top: 80px;
    margin-bottom: 30px;
    color: #fff;
    font-weight: bold;
}

.use-box {
    display: flex;
    justify-content: center;
    float: left;
}

.box {
    margin-top: 30px;
    width: 600px;
    height: 150px;
    border-radius: 20px;
    background-color: #fff;
    margin-right: 40px;
    margin-left: 100px;
    margin-bottom: 10px;
}

.box-text {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    
    float: right;
    margin-right: 40px;
}


`;
