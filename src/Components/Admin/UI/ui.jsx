import styled from "styled-components";

export { Board, Wrapper, Button, ButtonVer2, Input, Ul, Span };

const Board = styled.div`
  background-color: #e9f4e1;
  width: 100%;
  padding: 1rem 0.8rem 0.3rem 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  padding: 0.2rem;
  justify-content: end;
`;

const Button = styled.button`
  background-color: green;
  color: white;
  border-radius: 15px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: 1px solid #fff;
  font-size: 1rem;
  font-weight: bolder;

  &:hover {
    background-color: #6eb636;
    color: white;
  }
`;
const Input = styled.input`
  background-color: #fff;
  border-radius: 10px;
  border: none;
  height: 20px;
  width: 30%;
  margin: 10px;
  transition: all 0.6s;

  &:focus {
    background-color: rgba(109, 207, 136, 0.3);
    outline: none;
  }
  &:hover {
    background-color: rgba(109, 207, 136, 0.8);
    outline: none;
  }
`;

const Ul = styled.ul`
background-color: rgba(255, 255, 255, 0.3);
border: 1px solid green;
padding: 20px;
border-radius: 30px;
width: 85%;
}
`;
const ButtonVer2 = styled.button`
  background-color: rgba(3, 67, 21, 0.9);
  color: #fff;
  border: none;
  padding: 7px 12px 7px 12px;
  border-radius: 4px;
  transition: all 0.6s;

  &:hover {
    padding: 8px 14px;
  }
`;

const Span = styled.span`
  font-size: 17px;
  font-weight: bolder;
  color: rgba(3, 67, 21, 0.9);
`;
