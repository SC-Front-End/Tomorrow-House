import React from 'react';
import styled from 'styled-components';


const GiftItem = () => {
    return (
        <>
            <GiftComponent>
                <div className='gift-title'>
                    <p className='title-1'> 감사를 전하는 연말 선물 </p>
                    <p className='title-2'> 2023 & 2024 연말, 새해 선물 추천 </p>
                </div>

                <div className='about-img'>
                    <img src='https://open.lge.co.kr/link/2023/usp/01_TV/05_LIFESTYLE/27ART10CKPL/27ART10CKPL_08.gif' alt='gift' />
                    <div className='img-content'>
                        <div className='img-content-title'>
                            <p>내일의 집의 제품추천</p>
                        </div>
                        <div className='img-content-text'>
                            <p>내일의 집 제품 추천에 대한 설명설명설명설명설명</p>
                        </div>
                    </div>
                </div>
                <div className='about-user'>
                    <div className='user-1'>
                        <div className='user-center'>
                            <div>
                                <div className='user-face'></div>
                            </div>
                            <div className='user'>
                                <div className='user-name'>서울에 사는 김00님</div>
                                <div className='user-text'>내일의 집을 이용한 후기후기후기후기후기후기</div>
                            </div>
                        </div>
                    </div>
                    <div className='user-1'>
                        <div className='user-center'>
                            <div>
                                <div className='user-face'></div>
                            </div>
                            <div className='user'>
                                <div className='user-name'>서울에 사는 김00님</div>
                                <div className='user-text'>내일의 집을 이용한 후기후기후기후기후기후기</div>
                            </div>
                        </div>
                    </div>
                </div>




            </GiftComponent>
        </>
    );
};

export default GiftItem;

const GiftComponent = styled.div`

.gift-title{
    float: left;
    margin-left: 130px;
}

.title-1 {
    font-size: 30px;
    font-weight: bold;
}

.title-2 {
    font-size: 16px;
    font-weight: bold;
}

img {
    position: relative;
    margin-top: 150px;
    margin-left: -330px;
    width: 700px;
    height: 500px;
    border-radius: 10px;
    z-index: -1;
}

.img-content {
    background-color: #D9D9D9;
    width: 704.4px;
    height: 150px;
    margin-top: -30px;
    margin-left: 122px;
    border-radius: 10px;   
}

p {
    font-size: 20px;
}

.img-content-title{
    font-size: 20px;
    font-weight: bold;
    padding-top: 10px;
    margin-left: 40px;
}

.img-content-text {
    margin-left: 40px;
}

.about-user {
    float: right;
    margin-top: -620px;
    margin-right: 65px;
    border-radius: 10px; 
}

.user-1 {
    position: relative;
    background-color: #D9D9D9;
    width: 550px;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-right: 50px;
    z-index: -1;
}

.user-center {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}

.user-face {
    background: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/d8f932183398029.653f7910a4099.jpg');
    width: 255px;
    height: 255px;
    border-radius: 50%;
    position: absolute;
    margin-top: 25px;
    margin-left: 30px;
}

.user-name {
    background-color: #fff;
    color: #000;
    width: 190px;
    height: 50px;
    border-radius: 30px;
    margin-top: 40px;
    text-align: center;
    padding-top: 25px;
    font-weight: bold;
}

.user-text {
    background-color: #fff;
    color: #000;
    width: 180px;
    height: 80px;
    border-radius: 30px; 
    margin-top: 30px;
    text-align: center;
    padding-top: 30px;
    padding-left: 8px;
    padding-right: 8px;
    margin-right: 40px;
}



`;