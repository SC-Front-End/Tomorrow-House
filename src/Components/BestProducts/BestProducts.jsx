import React, { useState } from 'react';
import styled from 'styled-components';

import ProductGrid from './ProductGrid';
import BestProductFilter from './BestProductFilter';


const BestProducts = (props) => {

    const [filtered, setFiltered] = useState("");

    const filterChangeHandler = (selected) => {
        setFiltered(selected);
    }

    const sortItems = () => {
        // const itemsCopy = [...props.items];
        const itemsCopy = [...(props.items ?? [])];

        switch (filtered) {
            case "역대베스트":
                // TODO: 역대베스트로 정렬 (기본 순서는 판매량 순서) 추후 로직 수정해야함
                return itemsCopy;

            case "최다클릭순":
                return itemsCopy.sort((a, b) => b.viewCnt - a.viewCnt);

            case "가격낮은순":
                return itemsCopy.sort((a, b) => a.unitPrice - b.unitPrice);
            case "가격높은순":
                return itemsCopy.sort((a, b) => b.unitPrice - a.unitPrice);

            default:
                // 기본 역대베스트로 정렬
                return itemsCopy;
        }
    };



    return (
        <>
            <Box>
                <BestProductFilter selected={filtered} onChangeFilter={filterChangeHandler} />
                <List>
                    {sortItems().map((bestitem, index) => (
                        <ProductGrid
                            postId={index + 1}
                            itemId={bestitem.itemId}
                            sellerUserId={bestitem.sellerUserId}
                            title={bestitem.title}
                            content={bestitem.content}
                            unitPrice={bestitem.unitPrice}
                            thumbNailImgPath={bestitem.thumbNailImgPath}
                        />
                    ))}
                </List>
            </Box>
        </>
    );
};

export default BestProducts;



const Box = styled.div`
  max-width: 1830px;
  justify-content: center;
  margin: 0 auto;
  padding: 3rem 12rem;

  @media (max-width: 768px){
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 3rem;

    
}
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px){
  width: 100%;
  display: flex;
  flex-wrap: wrap;
 
  }
`;

