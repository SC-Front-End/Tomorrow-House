import React from "react";
import styled from "styled-components";
import { Board } from "../../UI/ui";

//itemList은 axios 성공시 db에서 가져올 데이터 대체
let itemList = [
  { num: "1", name: "딸기", price: "11,000", quantity: "470" },
  { num: "2", name: "사과", price: "5,000", quantity: "562" },
];

const ProductList = (dbData) => {
  return (
    <Board>
      <Products
        color={"green"}
        textcolor={"white"}
        data={["No", "상품명", "가격", "수량"]}
        onclick={"off"}
      ></Products>
      {/* 
        {dbData.map((item) => {
        return (
          <Products
            data={[item.num, item.name, item.price, item.quantity]}
            onclick={"on"}
          ></Products>
        );
      })}
      
      */}
      {itemList.map((item, i) => {
        return (
          <Products
            key={i}
            data={[item.num, item.name, item.price, item.quantity]}
            onclick={"on"}
          ></Products>
        );
      })}
    </Board>
  );
};

export default ProductList;

const Products = ({ color, textcolor, data, onclick }) => {
  let [number, name, price, quantity] = data;
  function productmodipy(e) {
    console.log(e.target.parentElement.id);
  }

  function productdelete(e) {
    console.log(e.target.parentElement.id);
  }
  if (onclick === "on") {
    return (
      <Wrapper id={name}>
        <Number textcolor={textcolor}>{number}</Number>
        <Name color={color} textcolor={textcolor}>
          {name}
        </Name>
        <Price color={color} textcolor={textcolor}>
          {price}
        </Price>
        <Quantity color={color} textcolor={textcolor}>
          {quantity}
        </Quantity>
        <Modipy
          color={color}
          textcolor={textcolor}
          onClick={(e) => productmodipy(e)}
        >
          수정
        </Modipy>
        <Delete
          color={color}
          textcolor={textcolor}
          onClick={(e) => productdelete(e)}
        >
          삭제
        </Delete>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Number textcolor={textcolor}>{number}</Number>
        <Name color={color} textcolor={textcolor}>
          {name}
        </Name>
        <Price color={color} textcolor={textcolor}>
          {price}
        </Price>
        <Quantity color={color} textcolor={textcolor}>
          {quantity}
        </Quantity>
        <Modipy color={color} textcolor={textcolor}>
          수정
        </Modipy>
        <Delete color={color} textcolor={textcolor}>
          삭제
        </Delete>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  padding: 0.2rem;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.div`
  background-color: ${({ color }) => (color === "green" ? "#6EB636" : "white")};
  color: ${({ textcolor }) => (textcolor === "white" ? "white" : "black")};
  height: 1.5rem;
  text-align: center;
  padding: 0.2rem;
`;

const Number = styled(Box)`
  background-color: #6eb636;
  color: white;
  width: 3%;
`;
const Name = styled(Box)`
  width: 45%;
`;
const Price = styled(Box)`
  width: 12%;
`;
const Quantity = styled(Box)`
  width: 12%;
`;
const Modipy = styled(Box)`
  color: ${({ textcolor }) => (textcolor === "white" ? "white" : "blue")};
  width: 8%;
`;
const Delete = styled(Box)`
  color: ${({ textcolor }) => (textcolor === "white" ? "white" : "red")};
  width: 8%;
`;
