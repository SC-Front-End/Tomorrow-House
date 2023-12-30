import React, { useState } from "react";
import validator from "validator";
import styled from "styled-components";
import titlepic from "./assets/titlepic.png";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const UserSignup = styled.div`
  .user-signup-main {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  .user-signup {
    padding: 15px;
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid rgb(240, 200, 200);
  }

  .user-title-image-signup {
    text-align: left;
    width: 260px;
    margin: 30px 10px 30px 10px;
  }

  .user-title-image-signup img {
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

  .checkbox-box-signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .checkbox-signup {
    width: 260px;
    font-size: 15px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  input[type="checkbox"] {
    width: 50px;
    padding: 0px;
    zoom: 0.5;
  }

  .user-signup-button {
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

  .user-signup-button:hover {
    background-color: rgb(40, 182, 214);
    cursor: pointer;
  }

  .id-message-signup {
    width: 260px;
    font-size: 12px;
    text-align: left;
    color: red;
  }

  .link-signup {
    width: 270px;
    text-align: right;
  }
`;

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPassword2, setUserPassword2] = useState("");

  const [nameMessage, setNameMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [addressMessage, setAddressMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");
  const [pass2Message, setPass2Message] = useState("");
  const [passMatchMessage, setPassMatchMessage] = useState("");

  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [userCheck, setUserCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);
  const [allCheckMessage, setAllCheckMessage] = useState("");

  const onUserNameChange = (e) => {
    setUserName(e.target.value.trim());

    if (e.target.value.trim() === "") {
      setNameMessage("이름란이 공백입니다!");
    } else {
      setNameMessage("");
    }
  };

  const onUserNickNameChange = (e) => {
    setUserNickName(e.target.value.trim());

    if (e.target.value.trim() === "") {
      setNickNameMessage("닉네임란이 공백입니다!");
    } else {
      setNickNameMessage("");
    }
  };

  const onUserEmailChange = (e) => {
    setUserEmail(e.target.value);

    if (validator.isEmail(e.target.value)) {
      setEmailMessage("");
    } else {
      setEmailMessage("이메일 형식이 올바르지 않습니다!");
    }
  };

  const onUserPhoneChange = (e) => {
    setUserPhone(e.target.value);

    if (validator.isMobilePhone(e.target.value)) {
      setPhoneMessage("");
    } else {
      setPhoneMessage("핸드폰 번호 형식이 올바르지 않습니다!");
    }
  };

  const onUserAddressChange = (e) => {
    setUserAddress(e.target.value);

    if (e.target.value === "") {
      setAddressMessage("주소란이 공백입니다!");
    } else {
      setAddressMessage("");
    }
  };

  const onUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
    setPassMessage("");

    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPassMessage("");
    } else {
      setPassMessage(
        "비밀번호가 강력하지 않습니다. (최소길이: 8, 최소 소문자: 1, 최소 대문자: 1, 최소 숫자: 1,최소 특수문자: 1)"
      );
    }

    if (e.target.value === userPassword2) {
      setPassMatchMessage("");
    } else {
      setPassMatchMessage("비밀번호와 비밀번호 확인란이 일치하지 않습니다!");
    }
  };

  const onUserPassword2Change = (e) => {
    setUserPassword2(e.target.value);
    setPass2Message("");

    if (userPassword === e.target.value) {
      setPassMatchMessage("");
    } else {
      setPassMatchMessage("비밀번호와 비밀번호 확인란이 일치하지 않습니다!");
    }
  };

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUserCheck(true);
      setMarketingCheck(true);

      setAllCheckMessage("");
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUserCheck(false);
      setMarketingCheck(false);

      setAllCheckMessage("모든 내용에 동의 해주시기 바랍니다!");
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const userBtnEvent = () => {
    if (userCheck === false) {
      setUserCheck(true);
    } else {
      setUserCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  const onSignupButtonClickHandler = () => {
    if (userName === "") {
      setNameMessage("이름란이 공백입니다!");
    } else {
      setNameMessage("");
    }

    if (userNickName === "") {
      setNickNameMessage("닉네임란이 공백입니다!");
    } else {
      setNickNameMessage("");
    }

    if (userEmail === "") {
      setEmailMessage("이메일란이 공백입니다!");
    } else {
      setEmailMessage("");
    }

    if (validator.isEmail(userEmail)) {
      setEmailMessage("");
    } else {
      setEmailMessage("이메일 형식이 올바르지 않습니다!");
    }

    if (validator.isMobilePhone(userPhone)) {
      setPhoneMessage("");
    } else {
      setPhoneMessage("핸드폰 번호 형식이 올바르지 않습니다!");
    }

    if (userAddress === "") {
      setAddressMessage("주소란이 공백입니다!");
    } else {
      setAddressMessage("");
    }

    /*
    if (userPassword === "") {
      setPassMessage("비밀번호란이 공백입니다!");
    } else {
      setPassMessage("");
    }
    */

    if (userPassword2 === "") {
      setPass2Message("비밀번호 확인란이 공백입니다!");
    } else {
      setPass2Message("");
    }

    if (
      validator.isStrongPassword(userPassword, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPassMessage("");
    } else {
      setPassMessage(
        "비밀번호가 강력하지 않습니다.\n (최소길이: 8, 최소 소문자: 1, 최소 대문자: 1, 최소 숫자: 1,최소 특수문자: 1"
      );
    }

    if (allCheck !== true || ageCheck !== true || userCheck !== true) {
      setAllCheck(false);
    }

    if (allCheck === true) {
      setAllCheckMessage("");
    } else {
      setAllCheckMessage("모든 내용에 동의 해주시기 바랍니다!");
    }

    /*
    if (userPassword !== userPassword2) {
      setPassMatchMessage("비밀번호와 비밀번호 확인란이 일치하지 않습니다!");
    } else {
      setPassMatchMessage("");
    }
    */

    if (
      userName !== "" &&
      userNickName !== "" &&
      validator.isEmail(userEmail) &&
      validator.isMobilePhone(userPhone) &&
      userAddress !== "" &&
      userPassword !== "" &&
      userPassword2 !== "" &&
      userPassword === userPassword2 &&
      validator.isStrongPassword(userPassword, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }) &&
      allCheck === true
    ) {
      alert(
        userName +
          ", " +
          userNickName +
          ", " +
          userEmail +
          ", " +
          userPhone +
          ", " +
          userAddress +
          ", " +
          userPassword +
          " 회원가입 요청합니다!"
      );
    }
  };

  return (
    <UserSignup>
      <Tooltip id="my-tooltip" />
      <div className="user-signup-main">
        <div className="user-signup">
          <div className="user-title-image-signup">
            <Link to="/">
              <img src={titlepic} alt="" />
            </Link>
            <div className="user-title-text-signup">
              <h1>회원가입</h1>
            </div>
          </div>
          <div className="user-name-signup">
            <input
              type="text"
              name="user_name"
              value={userName}
              onChange={onUserNameChange}
              placeholder=" 이름"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="이름"
              data-tooltip-place="left-start"
            />
            {nameMessage && (
              <div className="id-message-signup">{nameMessage}</div>
            )}
          </div>
          <div className="user-nickname-signup">
            <input
              type="text"
              name="user_nickname"
              value={userNickName}
              onChange={onUserNickNameChange}
              placeholder=" 닉네임"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="닉네임"
              data-tooltip-place="left-start"
            />
            {nickNameMessage && (
              <div className="id-message-signup">{nickNameMessage}</div>
            )}
          </div>
          <div className="user-id-signup">
            <input
              type="email"
              name="user_id"
              value={userEmail}
              onChange={onUserEmailChange}
              placeholder=" 이메일"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="이메일"
              data-tooltip-place="left-start"
            />
            {emailMessage && (
              <div className="id-message-signup">{emailMessage}</div>
            )}
          </div>
          <div className="user-phone-signup">
            <input
              type="text"
              name="user_phone"
              value={userPhone}
              onChange={onUserPhoneChange}
              placeholder=" 핸드폰 번호"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="핸드폰 번호"
              data-tooltip-place="left-start"
            />
            {phoneMessage && (
              <div className="id-message-signup">{phoneMessage}</div>
            )}
          </div>
          <div className="user-address-signup">
            <input
              type="text"
              name="user_address"
              value={userAddress}
              onChange={onUserAddressChange}
              placeholder=" 주소"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="주소"
              data-tooltip-place="left-start"
            />
            {addressMessage && (
              <div className="id-message-signup">{addressMessage}</div>
            )}
          </div>
          <div className="user-pwd-signup">
            <input
              type="password"
              name="user_pwd"
              value={userPassword}
              onChange={onUserPasswordChange}
              placeholder=" 비밀번호"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="비밀번호"
              data-tooltip-place="left-start"
            />
            {passMessage && (
              <div className="id-message-signup">{passMessage}</div>
            )}
          </div>
          <div className="user-pwd2-signup">
            <input
              type="password"
              name="user_pwd2"
              value={userPassword2}
              onChange={onUserPassword2Change}
              placeholder=" 비밀번호 확인"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="비밀번호 확인"
              data-tooltip-place="left-start"
            />
            {pass2Message && (
              <div className="id-message-signup">{pass2Message}</div>
            )}
            <br />
            {passMatchMessage && (
              <div className="id-message-signup">{passMatchMessage}</div>
            )}
          </div>

          {/* 동의 사항 체크 */}
          <div className="checkbox-box-signup">
            <div className="checkbox-signup">
              <input
                type="checkbox"
                id="all-check"
                checked={allCheck}
                onChange={allBtnEvent}
              />
              <label htmlFor="all-check">
                <b>전체동의</b>
              </label>
            </div>
            <div className="checkbox-signup">
              <input
                type="checkbox"
                id="check1"
                checked={ageCheck}
                onChange={ageBtnEvent}
              />
              <label htmlFor="check1">
                만 14세 이상입니다 <span>(필수)</span>
              </label>
            </div>
            <div className="checkbox-signup">
              <input
                type="checkbox"
                id="check2"
                checked={userCheck}
                onChange={userBtnEvent}
              />
              <label htmlFor="check2">
                이용약관 <span>(필수)</span>
              </label>
            </div>
            <div className="checkbox-signup">
              <input
                type="checkbox"
                id="check3"
                checked={marketingCheck}
                onChange={marketingBtnEvent}
              />
              <label htmlFor="check3">
                마케팅 동의 <span>(선택)</span>
              </label>
            </div>
            {allCheckMessage && (
              <div className="id-message-signup">{allCheckMessage}</div>
            )}
          </div>

          <button
            className="user-signup-button"
            onClick={onSignupButtonClickHandler}
          >
            회원 가입
          </button>
          <Link className="link-signup" to="/">
            로그인 하기
          </Link>
        </div>
      </div>
    </UserSignup>
  );
};

export default Signup;
