import React, { useState } from 'react';
import styled from 'styled-components';

import ProductGrid from './ProductGrid';
import BestProductFilter from './BestProductFilter';



//비즈니스 로직부분
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
                // 역대베스트로 정렬 (기본 순서는 판매량 순서) 추후 로직 수정해야함
                return itemsCopy;

            case "최다클릭순":
                // 최다클릭순으로 정렬
                return itemsCopy.sort((a, b) => b.view_count - a.view_count);

            case "가격낮은순":
                // 가격낮은순으로 정렬
                return itemsCopy.sort((a, b) => a.unit_price - b.unit_price);
            case "가격높은순":
                // 가격높은순으로 정렬
                return itemsCopy.sort((a, b) => b.unit_price - a.unit_price);

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
                            key={index}
                            rank={index + 1} // 순위 값 전달 임의로 넣은거임 삭제해야함
                            item_code={bestitem.bestitem_code}
                            option_code={bestitem.option_code}
                            item_title={bestitem.item_title}
                            unit_price={bestitem.unit_price}
                            stock_quantity={bestitem.stock_quantity}
                            image_path_1={bestitem.image_path_1}
                            view_count={bestitem.view_count}
                            start_date={bestitem.start_date}
                            end_date={bestitem.end_date}
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





