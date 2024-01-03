import React from "react";
import { useNavigate } from "react-router-dom";
import { Board, Wrapper, Button } from "../../UI/ui";

const AddButton = () => {
  const navigate = useNavigate();

  return (
    <Board>
      <Wrapper>
        <Button
          onClick={() => {
            navigate("/admin/addproduct");
          }}
        >
          상품 추가
        </Button>
      </Wrapper>
    </Board>
  );
};

export default AddButton;
