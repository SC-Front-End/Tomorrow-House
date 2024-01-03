import React, { useState,Suspense } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Product from './Product';
import Products from './Products';
import CategoryList from './CategoryList';

const ProductList = () => {
    const { categoryId } = useParams();
    // console.log("카테고리확인",categoryId);
    const NumCategoryId = Number(categoryId)
    return (
        <AppContainer>

        <Suspense fallback={
            <Container>
                <CategoryList.Skeleton/>
                <Wrap>
                  {[...new Array(12)].map((_, idx) => (<Product.Skeleton key={idx} />))}
                </Wrap>
            </Container>

        }>
          <CategoryList categoryId={NumCategoryId}/>
          <Products categoryId={NumCategoryId}/>
        </Suspense>
      </AppContainer>
    );
};

export default ProductList;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: center; /* 가로 축에서 중앙 정렬 */
  margin-top: 50px;
  padding: 0 40px;
`;
const Container = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: center; /* 가로 축에서 중앙 정렬 */
    padding: 0 40px;
`;

const Wrap = styled.div`
    max-width: 940px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; 
    margin: 0 auto;
    padding: 0 1rem;
    margin-top: 40px;
                            
`;
