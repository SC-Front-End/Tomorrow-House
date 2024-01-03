import styled from "styled-components";

export { Board, Wrapper, Button };

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
