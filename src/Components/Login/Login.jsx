import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import validator from "validator";
import styled from "styled-components";

import titlepic from "./assets/titlepic.png";

const UserLogin = styled.div`
  .user-login-main {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
  .user-login {
    padding: 15px;
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid rgb(240, 200, 200);
  }

  .user-title-image-login {
    width: 260px;
    margin: 30px 10px 30px 10px;
  }

  .user-title-image-login img {
    width: 50%;
  }

  input {
    font-weight: bold;
    height: 40px;
    color: rgb(200, 200, 200);
    font-size: 15px;
    width: 260px;

    border-width: 1px;
    border-color: rgb(250, 250, 250);
  }

  input::placeholder {
    color: rgb(200, 200, 200);
  }

  input:hover {
    background-color: rgb(250, 250, 250);
  }

  .user-login-button {
    margin: 30px 0px 30px 0px;
    color: white;
    font-weight: bold;
    font-size: 15px;
    width: 270px;
    height: 50px;

    border: none;
    border-radius: 5px;
    background-color: rgb(48, 192, 224);
  }

  .user-login-button:hover {
    background-color: rgb(40, 182, 214);
    cursor: pointer;
  }

  .id-message-login {
    color: red;
    font-size: 12px;
    text-align: left;
  }

  .link-login {
    width: 270px;
    text-align: right;
  }
`;

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [idMessage, setIdMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");

  const onUserIdChange = (e) => {
    setUserId(e.target.value);

    if (validator.isEmail(e.target.value)) {
      setIdMessage("");
      //console.log(userId + ", " + userPassword);
    } else {
      setIdMessage("이메일 형식이 올바르지 않습니다!");
    }
  };

  const onUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
    setPassMessage("");
  };

  const onLoginButtonClickHandler = () => {
    //입력된 이메일 유효성 검사 모듈
    if (userId === "") {
      setIdMessage("이메일란이 공백입니다!");
    } else {
      setIdMessage("");
    }

    if (validator.isEmail(userId)) {
      setIdMessage("");
      //console.log(userId + ", " + userPassword);
    } else {
      setIdMessage("이메일 형식이 올바르지 않습니다!");
    }

    if (userPassword === "") {
      setPassMessage("비밀번호란이 공백입니다!");
    } else {
      setPassMessage("");
    }

    if (idMessage === "" && userId !== "" && userPassword !== "") {
      alert(userId + ", " + userPassword + " 로그인 요청합니다!");
    }
  };

  return (
    <>
      <UserLogin>
        <div className="user-login-main">
          <div className="user-login">
            <div className="user-title-image-login">
              <Link to="/">
                <img src={titlepic} alt="" />
              </Link>
            </div>
            <div className="user-id-login">
              <input
                type="email"
                name="user_id"
                value={userId}
                onChange={onUserIdChange}
                placeholder=" 이메일"
              />
              <div className="id-message-login">{idMessage}</div>
            </div>
            <div className="user-pwd-login">
              <input
                type="password"
                name="user_pwd"
                value={userPassword}
                onChange={onUserPasswordChange}
                placeholder=" 비밀번호"
              />
              <div className="id-message-login">{passMessage}</div>
            </div>
            <button
              onClick={onLoginButtonClickHandler}
              className="user-login-button"
            >
              로그인
            </button>
            <Link className="link-login" to="/signup">
              회원가입 하기
            </Link>
          </div>
        </div>
      </UserLogin>
    </>
  );
};

export default Login;
