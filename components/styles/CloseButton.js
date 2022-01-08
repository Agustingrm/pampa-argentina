import styled from "styled-components";

const CloseButton = styled.button`
  background: black;
  color: white;
  font-size: 3rem;
  position: absolute;
  right: 20px;
  top: 20px;
  height: 50px;
  width: 40px;
  border: 0;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
`;

export default CloseButton;
