import React, { useState } from "react";
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
        <input
          id={`content${optionnum}`}
          onChange={(e) =>
            changeOptionFn("item", "content", optionnum, e.target.value)
          }
        />
      </label>
      <label htmlFor={`addprice${optionnum}`}>
        추가금액
        <input
          id={`addprice${optionnum}`}
          onChange={(e) =>
            changeOptionFn("item", "addprice", optionnum, e.target.value)
          }
        />
      </label>
      <button
        onClick={() => {
          itemoptioncount += 1;
          optionnum = itemoptioncount;
          addIOption(optionnum);
        }}
      >
        추가
      </button>
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
        <input
          id={`quantity${optionnum}`}
          onChange={(e) =>
            changeOptionFn("stock", "quantity", optionnum, e.target.value)
          }
        />
      </label>
      <label htmlFor={`itemStatus${optionnum}`}>
        추가금액
        <input
          id={`itemStatus${optionnum}`}
          onChange={(e) =>
            changeOptionFn("stock", "itemStatus", optionnum, e.target.value)
          }
        />
      </label>
      <label htmlFor={`startdate${optionnum}`}>
        From
        <input
          id={`startdate${optionnum}`}
          onChange={(e) =>
            changeOptionFn("stock", "startdate", optionnum, e.target.value)
          }
        />
      </label>
      <label htmlFor={`enddate${optionnum}`}>
        To
        <input
          id={`enddate${optionnum}`}
          onChange={(e) =>
            changeOptionFn("stock", "enddate", optionnum, e.target.value)
          }
        />
      </label>
      <button
        onClick={() => {
          stockOptionCount += 1;
          optionnum = stockOptionCount;
          addIOption(optionnum);
        }}
      >
        추가
      </button>
    </div>
  );
};
