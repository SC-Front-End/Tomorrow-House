import React, { useEffect, useState } from 'react';
import bestProducts_data from '../../Data/BestProducts_data.json'
import BestProducts from './BestProducts';
import Nav from '../MainPage/Nav';
import Footer from '../MainPage/Footer';

import axios from 'axios';

//'http://mini.jh1105.xyz:5305/api/post/normal/?page=0&size=10'

const BestProductList = () => {

    const [bestProducts, setBestProducts] = useState([]);

    useEffect(() => {
        const fetchDataFromSpring = async () => {
            try {
                const response = await axios.get('http://mini.jh1105.xyz:5305/api/post/normal/?page=0&size=10');
                setBestProducts(response.data.content);   //아 이게 원인임.
                console.log('불러왔나요?',response.data);
                console.log('bestProducts 체크 첫번째 유즈에펙트안임', bestProducts);
            } catch (error) {
                console.error('Error fetching data from Spring:', error);
            }
        };

        fetchDataFromSpring();
    }, []);


    //test중
    useEffect(() => {
       
        console.log('bestProducts 체크 useEffect', bestProducts);
    }, [bestProducts]);

    return (
        <>
            <Nav/>
            <BestProducts items={bestProducts} />
            <Footer />
        </>
    );
};

export default BestProductList;
