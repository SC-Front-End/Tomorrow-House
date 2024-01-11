import React, { useEffect, useState } from 'react';
import BestProducts from '../../Components/BestProducts/BestProducts';
import axios from 'axios';

const BestProductList = () => {

    const [bestProducts, setBestProducts] = useState([]);

    useEffect(() => {
        const fetchDataFromSpring = async () => {
            try {
                const response = await axios.get('http://34.192.1.4:8080/api/post/normal/?page=0&size=10');
                setBestProducts(response.data.content);   
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
