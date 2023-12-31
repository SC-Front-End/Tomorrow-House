import React from "react";
import styled from "styled-components";

const GiftItem = () => {
  return (
    <>
      <GiftComponent>
        <div className="gift-title">
          <p className="title-1"> 감사를 전하는 연말 선물 </p>
          <p className="title-2"> 2023 & 2024 연말, 새해 선물 추천 </p>
        </div>

        <div className="about-img">
          <img
            src="https://open.lge.co.kr/link/2023/usp/01_TV/05_LIFESTYLE/27ART10CKPL/27ART10CKPL_08.gif"
            alt="gift"
          />
          <div className="img-content">
            <div className="img-content-title">
              <p>2024년 내일의 집의 제품추천</p>
            </div>
            <div className="img-content-text">
              <p>LG전자 가전, 꿈꾸던 삶이 되다. LG 오브제컬렉션</p>
            </div>
          </div>
        </div>
        <div className="about-user">
          <div className="user-1">
            <div className="user-center">
              <div>
                <div>
                  <img
                    className="user-face"
                    src="https://i.pinimg.com/564x/2b/62/6f/2b626f3f0dc0fdd67d97db604a8af895.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="user">
                <div className="user-name">서울에 사는 김00님</div>
                <div className="user-text">
                  내일의 집을 이용한 후기후기후기후기후기후기
                </div>
              </div>
            </div>
          </div>
          <div className="user-1">
            <div className="user-center">
              <div>
                <div>
                  <img
                    className="user-face"
                    src="https://i.pinimg.com/originals/4b/e5/f3/4be5f377959674df9c2fe172df272482.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="user">
                <div className="user-name">서울에 사는 김00님</div>
                <div className="user-text">
                  내일의 집을 이용한 후기후기후기후기후기후기
                </div>
              </div>
            </div>
          </div>
        </div>
      </GiftComponent>
    </>
  );
};

export default GiftItem;

const GiftComponent = styled.div`
  .gift-title {
    float: left;
    margin-left: 150px;
  }

  .title-1 {
    font-size: 30px;
    font-weight: bold;
  }

  .title-2 {
    font-size: 16px;
    font-weight: bold;
  }

  img {
    position: relative;
    margin-top: 150px;
    margin-left: -330px;
    width: 700px;
    height: 500px;
    border-radius: 10px;
    z-index: -1;
  }

  .img-content {
    background-color: #d9d9d9;
    width: 704.4px;
    height: 150px;
    margin-top: -20px;
    margin-left: 142px;
    border-radius: 10px;
  }

  p {
    font-size: 20px;
  }

  .img-content-title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 10px;
    margin-left: 40px;
  }

  .img-content-text {
    margin-left: 40px;
  }

  .about-user {
    float: right;
    margin-top: -620px;
    margin-right: 65px;
    border-radius: 10px;
  }

  .user-1 {
    position: relative;
    background-color: #d9d9d9;
    width: 550px;
    height: 300px;
    margin-top: -10px;
    border-radius: 10px;
    margin-bottom: 40px;
    margin-right: 100px;
    z-index: -1;
  }

  .user-center {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .user-face {
    width: 255px;
    height: 255px;
    border-radius: 50%;
    position: absolute;
    margin-top: 25px;
    margin-left: 30px;

    object-fit: cover;
  }

  .user-name {
    background-color: #fff;
    color: #000;
    width: 190px;
    height: 50px;
    border-radius: 30px;
    margin-top: 40px;
    text-align: center;
    padding-top: 25px;
    font-weight: bold;
  }

  .user-text {
    background-color: #fff;
    color: #000;
    width: 180px;
    height: 80px;
    border-radius: 30px;
    margin-top: 30px;
    text-align: center;
    padding-top: 30px;
    padding-left: 8px;
    padding-right: 8px;
    margin-right: 40px;
  }
  /* 768 반응형 */
  @media (max-width: 768px) {
    .gift-title {
      float: none;
      margin-left: 5%;
    }

    .title-1 {
      margin-top: 10px;
      margin-left: 55px;
    }

    .title-2 {
      margin-top: 5px;
      margin-left: 55px;
    }

    img {
      margin-top: 20px;
      margin-left: 0;
      width: 600px;
      margin-left: 85px;
    }

    .img-content {
      width: 580px;
      height: 120px;
      margin-left: 85px;
      padding: 10px;
      margin-bottom: 330px;
    }

    .about-user {
      float: none;
      margin-top: -350px;
      margin-right: 5%;
    }

    .user-1 {
      display: none;
    }
  }

  /* 360 반응형 */
  @media (max-width: 360px) {
    .gift-title,
    .about-img {
      display: none;
    }
  }
`;
