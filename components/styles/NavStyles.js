import styled from "styled-components";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  height: 80px;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: "";
      width: 3px;
      background: var(--lightGrey);
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 3px;
      background: var(--green);
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.5, 0, 2);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
    @media (max-width: 700px) {
      &:hover,
      &:focus {
        &:after {
          width: calc(100% - 60px);
        }
      }
    }
  }
  @media all and (max-width: 1300px) {
    border-top: 1px solid var(--lightGrey);
    width: 100%;
    justify-content: right;
    font-size: 1.5rem;
  }
  @media all and (max-width: 850px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
    grid-template-rows: repeat(2, minmax(40px, 1fr));
    font-size: 1.5rem;
    border-top: 0;
    grid-auto-flow: dense;
    & > :nth-child(1) {
      grid-column: 2/3;
    }
    & > :nth-child(2) {
      grid-column: 3/4;
    }
    & > :nth-child(-n + 3) {
      border-bottom: 5px solid var(--lightGrey);
    }
    a,
    button {
      padding: 1rem 1.5rem;
    }
  }
`;

export default NavStyles;
