import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import validator from "validator";

import "./Login.css";
import titlepic from "./assets/titlepic.png";

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
    </>
  );
};

export default Login;
