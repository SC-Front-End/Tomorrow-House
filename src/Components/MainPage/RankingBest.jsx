import React from "react";
import styled from "styled-components";

const RankingBest = () => {
  return (
    <>
      <RankingHere>
        <div className="ranking-main">
          <div className="ranking-first">
            <h1 className="ranking-title">베스트 랭킹</h1>
            <h3 className="ranking-content">내일의 집 제품 추천</h3>
            <div className="more-box">
              <p className="more-text">See more</p>
            </div>
            <div className="ranking-second">
              <div className="img-box">
                <img
                  src="https://bucketplace-v2-development.s3.amazonaws.com/uploads/contests/contest_description/169580441231104161.png"
                  alt="01"
                />

                <img
                  src="https://bucketplace-v2-development.s3.amazonaws.com/uploads/contests/contest_description/168690424366598430.png"
                  alt="01"
                />
                <img
                  src="https://bucketplace-v2-development.s3.amazonaws.com/uploads/contests/contest_description/167539952744370429.png"
                  alt="01"
                />
              </div>
              {/* <div className="ranking-btn">
                <button>Carrier more</button>
                <button>Carrier more</button>
                <button>Carrier more</button>
              </div> */}
            </div>
          </div>
        </div>
      </RankingHere>
    </>
  );
};

export default RankingBest;

const RankingHere = styled.div`
  .ranking-main {
    margin-top: 80px;
    background-color: #d9d9d9;
    width: 100%;
    height: 600px;
    margin-bottom: 80px;
  }

  .ranking-first {
  }

  .ranking-title {
    font-size: 35px;
    font-weight: bold;
    margin-left: 150px;
    padding-top: 60px;
  }
  .ranking-content {
    margin-top: 0px;
    margin-left: 150px;
  }
  .more-box {
    background-color: #fff;
    width: 230px;
    height: 330px;
    border-radius: 15px;
    margin-left: 150px;
    box-shadow: 3px 3px 3px 3px #fff;
  }
  .more-text {
    margin-top: 20px;
    padding-top: 150px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }

  .img-box {
    margin-left: 440px;
    margin-top: -30px;
  }

  img {
    margin-top: -400px;
    margin-left: 30px;
    width: 320px;
    border-radius: 10px;
  }

  /* .ranking-btn {
    display: flex;
    justify-content: center;
  }
  button {
    display: flex;
    justify-content: center;

    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;

    background-color: #fff;
    color: #000;
    border-radius: 10px;
    border-style: none;

    margin-right: -20px;
    margin-left: 190px;
  } */
`;
