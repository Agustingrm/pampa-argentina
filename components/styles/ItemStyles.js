import styled from "styled-components";

const ItemStyles = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid var(--lightGrey);
    grid-template-columns: repeat(2, minmax(50px, 1fr));
    grid-gap: 1px;
    background: var(--lightGrey);
    text-align: center;
    a:hover {
      text-decoration: none;
    }
    button:hover {
      cursor: pointer;
    }
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
      height: 3.5rem;
      &:last-child {
        grid-row: 2/3;
        grid-column: 1/3;
      }
    }
  }
`;

export default ItemStyles;
