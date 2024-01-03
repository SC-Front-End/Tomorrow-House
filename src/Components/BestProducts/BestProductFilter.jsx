import React from 'react';
import styled from 'styled-components';


const BestProductFilter = (props) => {

    const buttonClickChangeHandler = (value) => {
        props.onChangeFilter(value);
    };

    return (
        <>
          <FilterControl>
          <FilterButton  onClick={() => buttonClickChangeHandler('실시간베스트')}>실시간베스트</FilterButton>
          <FilterButton  onClick={() => buttonClickChangeHandler('역대베스트')}>역대베스트</FilterButton>
          <FilterButton  onClick={() => buttonClickChangeHandler('가격낮은순')}>가격낮은순테스트</FilterButton>
          <FilterButton  onClick={() => buttonClickChangeHandler('가격높은순')}>가격높은순테스트</FilterButton>
        </FilterControl>
        </>
    );
};

export default BestProductFilter;


const FilterControl = styled.div`
    display: flex;
    flex-direction: row; /* 자식요소 세로 정렬 */
    align-items:center; /*자식요소를 수직으로 중앙 정렬 */
    justify-content:center;
    width: 100%;
    margin: 0.3rem 0;

    @media (max-width: 768px){
    display: flex;
    flex-direction: row; /* 자식요소 세로 정렬 */
    align-items:center; /*자식요소를 수직으로 중앙 정렬 */
    justify-content:center;
    width: 100%;
    margin: 0.1rem 0;
}
`;


// background-color: white;
const FilterButton =styled.button`
    font: inherit;
    font-Size: 1rem;
    margin: 0rem 0.3rem;
    padding: 0.8rem 0.9rem 0.8rem 0.9rem;
    text-align: right;
    font-weight: 550;
    cursor: pointer;

    /*스타일 */
  
    border: 2px solid #35C5F0;
    background-color: #35C5F0;
    border-radius: 20px;
    color: #fff;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 8px 8px #8ee1fa;
        transition: 0.3s;
    }
     /*스타일 */


    @media (max-width: 768px){
    font: inherit;
    font-Size: 0.8rem;
    margin: 0rem 0.3rem;
    padding: 0.5rem 0.6rem 0.5rem 0.5rem;
    border:none;
    text-align: right;
    background-color: white;
    font-weight: 500;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    
}
`




