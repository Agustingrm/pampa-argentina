import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border-radius: 5px;
  & > * {
    margin: 0;
    padding: 5px 50px;
    border: 1px solid var(--lightGrey);
    border-right: 0;
    &:last-child {
      border-right: 1px solid var(--lightGrey);
      border-radius: 0 5px 5px 0;
    }
    &:first-child {
      border-radius: 5px 0 0 5px;
    }
  }
  a[aria-disabled="true"] {
    color: grey;
    pointer-events: none;
  }
  @media all and (max-width: 750px) {
    margin: 0 0 1.5rem 0;
    & > * {
      padding: 5px 5px;
    }
  } ;
`;

export default PaginationStyles;
