import React from 'react';
import Banner from './Banner';
import CategoryList from './CategoryList';
import BestSale from './BestSale';
import Ranking from './Ranking';



const MainPage = () => {
    return (
        <>
            <Banner />
            <CategoryList />
            <BestSale />
            <Ranking />
        </>
    );
};

export default MainPage;