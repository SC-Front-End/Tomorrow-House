import React from 'react';
import Banner from './Banner';
import CategoryList from './CategoryList';
import BestSale from './BestSale';
import Ranking from './Ranking';
import GiftItem from './GiftItem';
import Use from './Use';


const MainPage = () => {
    return (
        <>
            <Banner />
            <CategoryList />
            <BestSale />
            <Ranking />
            <GiftItem />
            <Use />
        </>
    );
};

export default MainPage;