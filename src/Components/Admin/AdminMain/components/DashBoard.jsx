import React from 'react';
import styled from 'styled-components';



const DashBoard = () => {
  return (

    <>
    <MenuBoard></MenuBoard>
    <SummaryBoard>
    </SummaryBoard>
    </>
  


  );
};


export default DashBoard;


const SummaryBoard = () => {
  return (
   
      <Board width={"#fff"}  style={{padding:"3rem"}}>
        <Box>
          <Title>오늘 판매 개수</Title>
          <Count>642</Count>
        </Box>
        <Box>
          <Title>상품 등록 개수</Title>
          <Count>32</Count>
        </Box>
        <Box>
          <Title>고객 문의글</Title>
          <Count>22</Count>
        </Box>
        <Box>
          <Title>알림/ CSS</Title>
          <Count>3</Count>
        </Box>
      </Board>
      
 
  );
};

const MenuBoard = () => {
  return (
  <Board color={"#E9F4E1"} > 
  <Title style={{fontSize:"1.4rem"}}>DashBoard</Title>
  </Board>
  )
}



const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


const Board =styled.div`
background-color: ${({ color }) => color};
width: 100%;
padding: 1.3rem  ;
display: flex;
align-items: center;
justify-content: center;
gap:2rem;
`
const Box = styled.div`
width: 125px;
height: 100px;
padding: 1.3rem 1.1rem  1.6rem 1.1rem  ;
background-color: #fff;
border-radius: 10px; 
border: 2px solid #E9F4E1;
display: flex;
flex-direction: column;
justify-content: space-around;

`

const  Title = styled.div`
font-size: 1.1rem;
color: #404040;
text-align: center;
`

const  Count = styled.div`
font-size: 2rem;
font-weight: bold;
color: #404040;
text-align: center;
`