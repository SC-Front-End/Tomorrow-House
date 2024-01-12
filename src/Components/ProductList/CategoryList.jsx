import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import Skeleton from '../../Shared/Skeleton';

const CategoryList = ({ categoryId }) => {
  const categoryList = [
    {name: '가구', id: 1},
    {name: '페브릭', id: 2},
    {name: '주방', id: 3},
    {name: '생활/수납', id: 4},
    {name: '홈 데코', id: 5},
    {name: '조명', id: 6},
  ];
      const navigate = useNavigate();
      const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId);
      const [sortedCategoryList, setSortedCategoryList] = useState(categoryList);
    
      useEffect(() => {
        if (selectedCategoryId) {
          const selectedCategory = categoryList.find(category => category.id === selectedCategoryId);
          const otherCategories = categoryList.filter(category => category.id !== selectedCategoryId);
          setSortedCategoryList([selectedCategory, ...otherCategories]);
        } else {
          setSortedCategoryList(categoryList);
        }
      }, [selectedCategoryId]);
    
      const handleCategoryClick = (id) => {
        setSelectedCategoryId(id); // 선택된 카테고리 ID 업데이트
        navigate(`/productList/${id}`); // 클릭 시 해당 카테고리 ID로 URL 변경
      };
    
      return (
        <CategoryContainer>
            <CategoryListWrap>
              {sortedCategoryList.map((category) => (
                <CategoryItem key={category.id} onClick={() => handleCategoryClick(category.id)}>
                  {category.name}
                </CategoryItem>
              ))}
            </CategoryListWrap>
        </CategoryContainer>
      )
    };
    function ListSkeleton() {
      return (
        <CategoryContainer>
            <CategoryListWrap>
            {[...new Array(5)].map((_, idx) => (<CategoryItem key={idx}><Skeleton width="100px" height="15px" /></CategoryItem>))}
              
            </CategoryListWrap>
        </CategoryContainer>
      )
    }
    CategoryList.Skeleton = ListSkeleton;

export default CategoryList;

const CategoryContainer = styled.div`
  width: 100%;
  max-width: 165px;
`;
const CategorySideBar = styled.div`
  max-width: 160px;
`;

const CategoryListWrap = styled.ul`
  list-style: none;
`;

const CategoryItem = styled.li`
  margin-bottom: 15px;
  font-size: 17px;
  font-weight: 800;
  color: #000;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
  &:nth-child(1) {
    padding-bottom: 20px;
    border-bottom: 1px solid #dbdbdb;
  }
`;
