import React, { useState, useEffect } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const cookie = new Cookies();

const Logout = () => {
  const navigator = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    let pass = cookie.get("token");
    const pass2 = decodeURI(pass);
    setUserEmail(pass2);

    if (pass === undefined) {
      setUserEmail("");
    }
  }, []);

  const logoutHandler = (e) => {
    cookie.remove("token", { path: "/" });

    alert("로그아웃 되셨습니다!");
    navigator("/");
  };

  const onClickHandler = () => {
    navigator("/");
  };

  if (userEmail) {
    return (
      <>
        <div>{userEmail} 님 로그아웃 하시겠습니까?</div>
        <button onClick={logoutHandler}>로그 아웃</button>
      </>
    );
  } else if (userEmail === "") {
    return (
      <button onClick={onClickHandler}>
        로그인 상태가 아닙니다! 메인홈페이지로 이동합니다!
      </button>
    );
  }
};

export default Logout;
