import React, { useEffect, useState } from 'react';
import BestProducts from '../../Components/BestProducts/BestProducts';
import axios from 'axios';
import { getBestApiList } from '../../Remote/api';

const BestProductList = () => {

    const [bestProducts, setBestProducts] = useState([]);

    useEffect(() => {
        const fetchDataFromSpring = async () => {
            try {
                const data = await getBestApiList();
                
                setBestProducts(data);   
            } catch (error) {
                console.error('Error fetching data from Spring:', error);
            }
        };
        
        fetchDataFromSpring();
    }, []);

    useEffect(() => {

    }, [bestProducts]);

    return (
        <>
            <BestProducts items={bestProducts} />
        </>
    );
};

export default BestProductList;
