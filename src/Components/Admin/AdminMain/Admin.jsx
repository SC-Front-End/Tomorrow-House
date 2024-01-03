import React, { useEffect } from "react";
import styled from "styled-components";
import DashBoard from "./components/DashBoard";
import ProductList from "./components/ProductList";
import AddButton from "./components/AddButton";
import { Cookies } from "react-cookie";
import axios from "axios";

const AdminMain = () => {
  const cookie = new Cookies();

  useEffect(() => {
    const getItemList = async () => {
      const basicURL =
        "http://mini.jh1105.xyz:5305/api/post/seller-page/?page=0&size=30";
      const token = cookie.token;

      // JSON 데이터를 서버로 전송
      try {
        const response = await axios.get(
          "http://mini.jh1105.xyz:5305/api/post/seller-page/?page=0&size=30"
        );

        if (response.status === 200) {
          // 성공적으로 전송된 경우의 처리
          console.log("데이터가 성공적으로 전송되었습니다.");
        } else {
          // 전송 중 에러가 발생한 경우의 처리
          console.error("데이터 전송 중 에러가 발생했습니다.");
        }
      } catch (error) {
        console.error("데이터 전송 중 예기치 못한 에러가 발생했습니다.", error);
      }
    };
  });
  return (
    <Container>
      <DashBoard />
      <AddButton />
      <ProductList />
    </Container>
  );
};

export default AdminMain;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
