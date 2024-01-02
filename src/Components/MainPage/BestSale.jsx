import React from "react";
import styled from "styled-components";

const BestSale = () => {
  return (
    <SaleSection>
      <header className="new-title">
        <h2>오늘의 베스트 상품</h2>
      </header>
      <div className="bigsale-item">
        <ul>
          <li className="item-img">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162303132447303472.jpeg?gif=1&w=360&h=360&c=c&q=0.8&webp=1"
              alt="01"
            />
            <div className="product-img-text">
              <p className="item-title">비침없는 도톰 레이스/쉬폰 커튼</p>
              <span className="item-rate">23%</span>
              <span className="item-price">16,800</span>
            </div>
            <div className="item-btn">
              <button className="free-btn">할인 쿠폰</button>
              <button className="big-btn">특가</button>
            </div>
          </li>
          <li className="item-img">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168610157896491054.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1"
              alt="01"
            />
            <div className="product-img-text">
              <p className="item-title">
                삼성전자 스마트모니터 M7 S43 화이트 4K UHD
              </p>
              <span className="item-rate">42%</span>
              <span className="item-price">579,000</span>
            </div>
            <div className="item-btn">
              <button className="free-btn">무료 배송</button>
              <button className="big-btn">특가</button>
            </div>
          </li>
          <li className="item-img">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168974772932722622.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1"
              alt="01"
            />
            <div className="product-img-text">
              <p className="item-title">
                삼성 81cm M5 S32 삼탠바이미 패키지 OTT
              </p>
              <span className="item-rate">23%</span>
              <span className="item-price">419,000</span>
            </div>
            <div className="item-btn">
              <button className="free-btn">무료 배송</button>
              <button className="big-btn">특가</button>
            </div>
          </li>
          <li className="item-img">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168731059927618146.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1"
              alt="01"
            />
            <div className="product-img-text">
              <p className="item-title">
                후기6만돌파! 40수 코마사 호텔수건 200g 10장
              </p>
              <span className="item-rate">62%</span>
              <span className="item-price">28,900</span>
            </div>
            <div className="item-btn">
              <button className="free-btn">오늘 출발</button>
              <button className="big-btn">특가</button>
            </div>
          </li>
        </ul>
      </div>
    </SaleSection>
  );
};

export default BestSale;

const SaleSection = styled.div`
  .new-title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-left: 160px;
    margin-top: 40px;
  }

  .bigsale-item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .item-img {
    padding-left: 30px;
    padding-right: 36px;
  }

  img {
    width: 280px;

    border-radius: 10px;
  }

  ul {
    list-style: none;
  }

  li {
    float: left;
  }

  .item-title {
    font-size: 12px;
    font-weight: bold;
  }

  .item-rate {
    font-size: 20px;
    color: #6eb636;
    font-weight: bold;
    float: left;
    margin-right: 28px;
  }

  .item-price {
    font-weight: bold;
    margin-right: 150px;
    font-size: 20px;
  }

  .item-btn {
    float: left;
    margin-top: 14px;
  }

  .free-btn {
    margin-right: 20px;
    background-color: #d9d9d9;
    border-radius: 10px;
    padding: 5px;
    color: #413f3f;
    font-weight: bold;
    font-size: 15px;
    border: none;
  }

  .big-btn {
    background-color: #ff9e9e;
    border-radius: 10px;
    padding: 5px;
    color: #413f3f;
    font-weight: bold;
    font-size: 15px;
    border: none;
  }

  /* 모바일 768 */
  @media (max-width: 768px) {
    .new-title {
      flex-direction: column;
      align-items: center;
    }

    .item-img {
      padding: 0 20px;
      margin-left: 20px;
      margin-top: 20px;

      .item-rate {
        margin-left: 0;
        margin-right: 20px;
      }

      .item-price {
        margin-right: 0;
      }
      .item-btn {
        margin-left: -2px;
        margin-bottom: 10px;
      }
    }
  }

  /* 360 반응형 */
  @media (max-width: 360px) {
    .new-title {
      display: none;
    }

    .item-img:nth-child(n + 3) {
      box-sizing: border-box;
      width: 50%;
      margin-right: 50px;
      margin-top: 20px;
      float: left;
    }

    .item-title {
      font-size: 12px;
    }

    .item-rate {
      margin-left: 0;
      margin-right: 20px;
    }

    .item-price {
      margin-right: 0;
    }

    .item-btn {
      margin-left: -2px;
    }
  }
`;
