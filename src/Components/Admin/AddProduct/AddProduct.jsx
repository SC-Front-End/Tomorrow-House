import axios from "axios";
import React, { useState } from "react";
import OptionInput from "./component/OptionInput";
import { Cookies } from "react-cookie";
import { Board, Button } from "../UI/ui";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [data, setData] = useState({
    email: "",
    categoryId: "",
    itemName: "",
    description: "",
    unitPrice: "",
  });
  const [option, setOption] = useState([{ content: null, addprice: 0 }]);
  const [stock, setStock] = useState([
    {
      quantity: null,
      itemStatus: null,
      startDate: null,
      endDate: null,
    },
  ]);
  const [img, setImg] = useState("");

  //옵션추가버튼 eventhandler 관련옵셥 state 변경
  const addItemOption = (addoptionnum) => {
    option[addoptionnum] = { content: null, addprice: 0 };
    let newOption = [...option];
    setOption(newOption);
    console.log(option);
  };

  const addStockOption = (addoptionnum) => {
    stock[addoptionnum] = {
      quantity: null,
      itemStatus: null,
      startDate: null,
      endDate: null,
    };
    let newOption = [...stock];
    setStock(newOption);
    console.log(stock);
  };

  const changeOptionFn = (name, category, index, value) => {
    //상품 옵션바꾸기
    if (name === "data") {
      //재고 옵션바꾸기
      data[category] = value;
      let newOption = data;
      setData(newOption);
    } else if (name === "item") {
      option[index][category] = value;
      let newOption = [...option];
      setOption(newOption);
    } else if (name === "stock") {
      //재고 옵션바꾸기
      stock[index][category] = value;
      let newOption = [...stock];
      setStock(newOption);
    }
  };

  //data관련 옵션은 편이를 위해 추가정의
  function changeDataFn(category, value) {
    changeOptionFn("data", category, 0, value);
  }

  const handleSubmit = async () => {
    // 각 섹션의 값을 JSON으로 변환할 부분 =>postData : creationDtoJson
    const beforeDtoJson = {
      item: data,
      addItemOptions: option,
      stockItems: stock,
    };
    const creationDtoJson = JSON.stringify(beforeDtoJson);
    const postData = {
      title: title,
      content: content,
      creationDtoJson: creationDtoJson,
      thumbNailImgFile: img,
      files: null,
    };

    const basicURL = "http://mini.jh1105.xyz:5305/api/post/add";
    // JSON 데이터를 서버로 전송
    try {
      const response = await axios.post(basicURL, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // 성공적으로 전송된 경우의 처리
        console.log("데이터가 성공적으로 전송되었습니다.");
        alert("저장되었습니다.");
      } else {
        // 전송 중 에러가 발생한 경우의 처리
        console.error("데이터 전송 중 에러가 발생했습니다.");
        alert("에러가 발생하였습니다.");
      }
    } catch (error) {
      console.error("데이터 전송 중 예기치 못한 에러가 발생했습니다.", error);
      alert("에러가 발생하였습니다.");
    }
  };
  const cookie = new Cookies();

  return (
    <Board>
      <div id="container">
        <h2>상품추가</h2>
        <ul>
          <li>
            <label htmlFor="title">
              제목
              <input
                id="title"
                onChange={(e) => {
                  setTitle("title", e.target.value);
                }}
              />
            </label>
            <input
              style={{ width: "20px" }}
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked === true) {
                  setTitle("");
                }
              }}
            ></input>
          </li>
          <li>
            <label htmlFor="content">
              내용
              <input
                id="content"
                onChange={(e) => setContent(e.target.value)}
              />
              <input
                style={{ width: "20px" }}
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    setContent("");
                  }
                }}
              ></input>
            </label>
          </li>
        </ul>
        <ul>
          <div id="box">
            <span>상품 정보</span>
          </div>
          <li>
            <label htmlFor="email">
              계정
              <input
                id="email"
                onChange={(e) => changeDataFn("email", e.target.value)}
              />
            </label>
          </li>
          <li>
            <label htmlFor="categoryId">
              카테고리
              <input
                id="categoryid"
                onChange={(e) => changeDataFn("categoryId", e.target.value)}
              />
            </label>
          </li>
          <li>
            <label htmlFor="itemName">
              상품명
              <input
                id="itemName"
                onChange={(e) => changeDataFn("itemName", e.target.value)}
              />
            </label>
          </li>
          <li>
            <label htmlFor="description">
              설명
              <input
                id="description"
                onChange={(e) => changeDataFn("description", e.target.value)}
              />
            </label>
          </li>
          <li>
            <label htmlFor="unitPrice">
              개당 가격
              <input
                id="unitPrice"
                onChange={(e) => changeDataFn("unitprice", e.target.value)}
              />
            </label>
          </li>
        </ul>
        <ul>
          <div id="box">
            <span>상품옵션</span>
            <input
              style={{ width: "20px" }}
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked === true) {
                  setOption([{ content: null, addprice: 0 }]);
                }
              }}
            ></input>
          </div>
          <li id="option">
            {option.map((data, i) => {
              return (
                <OptionInput
                  key={i}
                  optionName={"item"}
                  optionnum={i}
                  addIOption={addItemOption}
                  changeOptionFn={changeOptionFn}
                ></OptionInput>
              );
            })}
          </li>
        </ul>
        <ul>
          <div id="box">
            <span>상품재고</span>
            <input
              style={{ width: "20px" }}
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked === true) {
                  setStock([
                    {
                      quantity: null,
                      itemStatus: null,
                      startDate: null,
                      endDate: null,
                    },
                  ]);
                }
              }}
            ></input>
          </div>
          <li>
            {stock.map((data, i) => {
              return (
                <OptionInput
                  key={i}
                  optionName={"stock"}
                  optionnum={i}
                  addIOption={addStockOption}
                  changeOptionFn={changeOptionFn}
                ></OptionInput>
              );
            })}
          </li>
        </ul>
        <ul>
          <li>
            <div id="box">
              <span>대표이미지</span>
              <input
                style={{ width: "20px" }}
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    setImg(null);
                  }
                }}
              ></input>
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                style={{ width: "300px", borderRadius: "10px", padding: "5px" }}
              />
            </div>
          </li>
        </ul>
        <div>
          <Button
            onClick={() => {
              if (
                data.email !== "" &&
                data.unitPrice !== "" &&
                data.categoryId !== "" &&
                data.itemName !== "" &&
                data.description !== ""
              ) {
                handleSubmit();
              } else {
                alert("상품 정보를 모두 채워주세요.");
              }
            }}
          >
            {" "}
            데이터 전송
          </Button>
          <Button
            onClick={() => {
              navigate("/admin");
            }}
          >
            닫기
          </Button>
        </div>
      </div>
    </Board>
  );
};

export default AddProduct;
