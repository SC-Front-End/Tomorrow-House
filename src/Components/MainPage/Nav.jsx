import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  //장바구니
  const navigateCart = () => {
    if (navigate) {
      navigate("/cart");
    }
  };
  //메인페이지
  const navigateMainPage = () => {
    if (navigate) {
      navigate("/");
    }
  };
  //로그인
  const navigateLogin = () => {
    navigate("/login")
  };
  //베스트상품페이지
  const navigateProductList = () => {
    navigate("/products")
  };

  //alert 구현
  let [alert, setAlert] = useState(true)
  // 재랜더링 마다 코드 실행
  useEffect(() => {
    let a = setTimeout(() => { setAlert(false) }, 10000)
    // mout시 실행안됨, unmout시 실행됨
    return () => {
      clearTimeout(a)
    }
  }, [])

  return (
    <NavComponent>
      <div className="nav-menu1">
        <div className="logo">
          <span onClick={navigateMainPage}>내일의 집</span>
        </div>
        <ul className="menu-text">
          <li>커뮤니티</li>
          <li>쇼핑</li>
          <li onClick={navigateProductList}>베스트샵</li>
        </ul>
        <div className="nav-menu2">
          <ul>

            <li onClick={navigateCart}>
              장바구니
            </li>
            <li onClick={navigateLogin}>로그인</li>
            <li>회원가입</li>
            <li>고객센터</li>
          </ul>
        </div>
      </div>
      <div className="nav-footer">
        {
          alert === true
            ? <div className="alert" >
              5시간 이내 구매시 할인
            </div>
            : null
        }
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
  
  .alert {
    background-color: gray;
    width: 100%;
    height: 10px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 20px;
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
