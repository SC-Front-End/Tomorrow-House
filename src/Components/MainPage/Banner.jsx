import React from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// style
import styled from 'styled-components';

const Banner = () => {
    return (
        <>
            <BannerContainer>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='one'>
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170286185854259852.png?w=1920" alt="Slide 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170262736504856880.png?w=1920" alt="Slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170287539103779806.png?w=1920" alt="Slide 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170263254946502263.png?w=1920" alt="Slide 4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170262263585901460.png?w=1920" alt="Slide 5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170262360526589476.png?w=1920" alt="Slide 6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170262424892763350.png?w=1920" alt="Slide 7" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170262133428083955.png?w=1920" alt="Slide 8" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170262821608607502.png?w=1920" alt="Slide 9" />
                    </SwiperSlide>
                </Swiper>
            </BannerContainer>
        </>
    );
}

export default Banner;

const BannerContainer = styled.div`

img {
    margin-top: 10px;
    height: 300px;
    widht: max-widht;
    padding-right: 20px;
}

.swiper-button-prev {
    background-color: #d3d3d3;
    margin-left: 40px;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;

}

.swiper-button-next {
    background-color: #d3d3d3;
    margin-right: 40px;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;

}
`;
