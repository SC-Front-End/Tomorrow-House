import styled, { keyframes } from "styled-components";

const opacity = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const Skeleton = styled.div.attrs(props => ({
    style: {
      width: props.width,
      height: props.height
    }
  }))`
    background-color: gray;
    animation: ${opacity} 2s ease-in-out 0.5s infinite;
  `;

  export default Skeleton