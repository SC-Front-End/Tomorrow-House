import React from 'react';
import styled from 'styled-components';

const Ranking = () => {
  return (
    <>
      <BestRanking>
        <div className='item-background'>
          <div>
            <h1 className='best-title'>베스트 랭킹</h1>
            <h3 className='best-content'>내일의 집 제품 추천</h3>
          </div>
          <div className='ranking-img'>
            <div className='ranking-one'>
              <p>1</p>
              <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166780549677949077.jpg?w=360&h=360&c=c&q=50' alt='01' />
            </div>
            <div className='ranking-one'>
              <p>2</p>
              <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166780549677949077.jpg?w=360&h=360&c=c&q=50' alt='01' />
            </div>
            <div className='ranking-one'>
              <p>3</p>
              <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166780549677949077.jpg?w=360&h=360&c=c&q=50' alt='01' />
            </div>
          </div>
        </div>

      </BestRanking>
    </>

  );
};

export default Ranking;

const BestRanking = styled.div`

.item-background {
    margin-top: 80px;
    background-color: #A9EF72;
    width: 100%;
    height: 660px;
    margin-bottom: 80px;
  }

  .best-title {
    float: left;
    font-size: 35px;
    font-weight: bold;
    margin-left: 120px;
    margin-top: 50px;

  }

  .best-content {
    float: left;
    margin-top: 120px;
    margin-left: -185px;
  }

  .ranking-img{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-right: 160px;
    position: relative;
  }

  .ranking-one {
    width: 300px;
    height: 300px;
    margin-top: 200px;
    margin-left: -180px;
  }

  img {
    border-radius: 10px;
    margin-left: -10px;

  }

  p {
    position: absolute;
    margin-left: 10px;
    background-color: #fff;
    width: 40px;
    height: 30px;
    text-align: center;
    padding-top: 3px;

    border-radius: 50px;
    font-weight: bold;
  }


`;