import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const navigateEmpty = () => {
    if (navigate) {
      navigate("/empty");
    }
  };

  const navigateMainPage = () => {
    if (navigate) {
      navigate("/");
    }
  };

  const navigateLogin = () => {
    navigate("/login")
  };

  const navigateProductList = () => {
    navigate("/products")
  };

  return (
    <NavComponent>
      <div className="nav-menu1">
        <div className="logo">
          <span onClick={navigateMainPage}>내일의 집</span>
        </div>
        <ul className="menu-text">
          <li>커뮤니티</li>
          <li onClick={navigateProductList}>쇼핑</li>
          <li>베스트샵</li>
        </ul>
        <div className="nav-menu2">
          <ul>

            <li onClick={navigateEmpty}>
              장바구니
            </li>
            <li onClick={navigateLogin}>로그인</li>

            <li onClick={navigateEmpty}>장바구니</li>
            <li>로그인</li>
            <li>회원가입</li>
            <li>고객센터</li>
          </ul>
        </div>
      </div>
    </NavComponent>
  );
};

export default Nav;

const NavComponent = styled.div`
  .nav-menu1 {
    display: flex;
    justify-content: center;
    background-color: #fff;
    margin-top: 8px;
    margin-bottom: 18px;

    width: 100%;
  }

  .logo {
    background-color: #6eb636;
    width: 200px;
    height: 50px;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    font-size: 30px;
    text-align: center;

    margin-top: 20px;
    margin-left: 50px;

    padding-top: 10px;
  }

  .logo:hover{
    background-color: green;
    color: #fff;
  }

  ul {
    list-style: none;
  }

  li {
    float: left;
    font-size: 15px;
    margin-left: 60px;
    margin-top: 24px;
    font-weight: bold;
  }

  .nav-menu2 {
    display: flex;
    justify-content: end;
    padding-left: 360px;
  }

  .nav-menu2 li:hover {
    cursor: pointer;
    background-image: linear-gradient(transparent 60%, #6eb636 40%);
    background-size: 100% 100%;
  }

  /* 768 반응형 */
  @media (max-width: 768px) {
    .nav-menu1 {
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
    }

    .logo {
      margin-bottom: 10px;
      margin-left: 0;
    }

    .menu-text {
      margin-bottom: 10px;
      margin-right: 100px;
    }

    .nav-menu2 {
      padding-left: 0;
      margin-right: 100px;
    }
  }

  /* 360 반응형 */
  @media (max-width: 360px) {
    .logo:hover {
      cursor: pointer;
      background: #ffe35e;
    }
    .menu-text {
      display: none;
    }
    .nav-menu2 {
      display: none;
    }
  }
`;
