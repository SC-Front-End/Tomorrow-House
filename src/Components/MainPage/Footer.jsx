import React from 'react';
import styled from 'styled-components';
import Share from './Share';


const Footer = () => {
    return (
        <>
            <FooterSection>
                <div className='footer-inner'>
                    <div className='info-01'>
                        <span className='tel-number'>1614 - 0016</span>
                        <p className='time'>09:00 ~ 18:00</p>
                        <p className='time-info01'>평일: 전체 문의 상담</p>
                        <p className='time-info02'>토요일 : 내일의집 직접배송</p>
                        <p className='time-info03'>일요일 휴무</p>
                    </div>
                    <div className='info-02'>
                        <div className='kakao'>카톡상담(평일가능)</div>
                        <div className='email'>이메일 문의</div>
                    </div>
                    <div className='share'>
                        <Share />
                        <div className='info-03'>
                            <p className='info-text01'>안전거래 센터</p>
                            <p className='info-text02'>채용정보</p>
                            <p className='info-text03'>이용약관</p>
                        </div>
                    </div>
                </div>
            </FooterSection>
        </>
    );
};

export default Footer;

const FooterSection = styled.div`

.footer-inner {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: #F1F1F1;
    widht: 100%;
    height: 300px;
    padding-left: 290px;
    padding-right: 290px;
}

.info-01 {
    margin-top: 50px;
}

.tel-number {
    font-size: 20px;
    font-weight: bold;
    margin-right: 30px;
}

.time {
    font-size: 20px;
    margin-right: 24px;
}
.time-info01 {
    font-size: 15px;
    margin-right: 45px;
}
.time-info02{
    font-size: 15px;

}
.time-info03 {
    font-size: 15px;
    margin-right: 100px;

}


.info-02 {
    margin-top: 50px
}

.kakao {
    background-color: #fff;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
}

.email {
    background-color: #fff;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 30px;
}

.share {
    margin-top: 50px
}

.info-03 {
    margin-right: 130px;
    font-size: 17px;
    font-weight: bold;
}
.info-text02 {
    margin-right: 40px;
}
.info-text03 {
    margin-right: 40px;
}


`;