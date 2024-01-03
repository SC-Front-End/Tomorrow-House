import React, {useState} from 'react';
import styled from "styled-components"

const ProductsFilter = (props) => {
    const dropdownChangeHandler = (e) => {
        props.onChangeFilter(e.target.value);
    };
    return (
        <FilterControl>
            <FilterSelect value={props.selected} onChange={dropdownChangeHandler}>
                <option value='인기순'>인기순:</option>
                <option value='최신순'>최신순</option>
                <option value='높은 가격순'>높은 가격순</option>
                <option value='낮은 가격순'>낮은 가격순</option>
            </FilterSelect>
        </FilterControl>
    );
};

export default ProductsFilter;


const FilterControl = styled.div`
    display: flex;
    flex-grow: 1; /* 남은 공간을 모두 차지 */
    justify-content: flex-end; /* 오른쪽 정렬 */
    width: 95%;
    margin: 0.3rem 0;
`;

const FilterSelect =styled.select`
    font: inherit;
    font-Size: 1rem;
    margin: 0rem 2.5rem;
    padding: 0.5rem 0.6rem 0.5rem 0.5rem;
    border:none;
    text-align: right;
    background-color: white;
    font-weight: 500;
`;
