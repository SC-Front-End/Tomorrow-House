import React, { useState } from "react";
import { Input, ButtonVer2 } from "../../../UI/ui";
import "./style.css";

const OptionInput = ({ optionName, optionnum, addIOption, changeOptionFn }) => {
  if (optionName === "item") {
    return itemOptionInput(optionnum, addIOption, changeOptionFn);
  } else if (optionName === "stock") {
    return stockOptionInput(optionnum, addIOption, changeOptionFn);
  }
};

export default OptionInput;

// 아이템 옵션 인풋 추가시.
let itemoptioncount = 0;

const itemOptionInput = (optionnum, addIOption, changeOptionFn) => {
  return (
    <div>
      <label htmlFor={`content${optionnum}`}>
        옵션
        <Input
          id={`content${optionnum}`}
          onChange={(e) =>
            changeOptionFn("item", "content", optionnum, e.target.value)
          }
        ></Input>
      </label>
      <label htmlFor={`addprice${optionnum}`}>
        추가금액
        <Input
          id={`addprice${optionnum}`}
          onChange={(e) =>
            changeOptionFn("item", "addprice", optionnum, e.target.value)
          }
        ></Input>
      </label>
      <ButtonVer2
        onClick={() => {
          itemoptioncount += 1;
          optionnum = itemoptioncount;
          addIOption(optionnum);
        }}
      >
        추가
      </ButtonVer2>
    </div>
  );
};

// 재고 옵션 인풋 추가시.

let stockOptionCount = 0;

const stockOptionInput = (optionnum, addIOption, changeOptionFn) => {
  return (
    <div>
      <label htmlFor={`quantity${optionnum}`}>
        옵션
        <Input
          id={`quantity${optionnum}`}
          onChange={(e) =>
            changeOptionFn("stock", "quantity", optionnum, e.target.value)
          }
        ></Input>
      </label>
      <label htmlFor={`itemStatus${optionnum}`}>
        추가금액
        <Input
          id={`itemStatus${optionnum}`}
          onChange={(e) =>
            changeOptionFn("stock", "itemStatus", optionnum, e.target.value)
          }
        ></Input>
      </label>
      <label htmlFor={`startdate${optionnum}`}>
        From
        <Input
          id={`startdate${optionnum}`}
          onChange={(e) =>
            changeOptionFn("stock", "startdate", optionnum, e.target.value)
          }
        ></Input>
      </label>
      <label htmlFor={`enddate${optionnum}`}>
        To
        <Input
          id={`enddate${optionnum}`}
          onChange={(e) =>
            changeOptionFn("stock", "enddate", optionnum, e.target.value)
          }
        ></Input>
      </label>
      <ButtonVer2
        onClick={() => {
          stockOptionCount += 1;
          optionnum = stockOptionCount;
          addIOption(optionnum);
        }}
      >
        추가
      </ButtonVer2>
    </div>
  );
};
