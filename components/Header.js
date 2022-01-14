import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Cart from "./Cart";
import Nav from "./Nav";
import Search from "./Search";

const Logo = styled.h1`
  @font-face {
    font-family: "ZCOOL QingKe HuangYou";
    src: url("/static/ZCOOLQingKeHuangYou-Regular.ttf") format("ttf");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "ZCOOL QingKe HuangYou";
  font-size: 2rem;
  margin: 1rem 0 0 2rem;
  position: relative;
  z-index: 2;
  font-weight: normal;
  font-style: normal;
  letter-spacing: 0.15rem;
  background: var(--green);
  padding: 0.5rem 1rem;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25px 25px;
  align-items: center;
  color: white;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      text-decoration: none;
    }
  }
  @media all and (max-width: 850px) {
    margin: 1rem 0.5rem 0 0.5rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid black;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid black;
  }
  @media all and (max-width: 850px) {
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: white;
  }
`;

// Fixed infinite load of page when spreading
function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...delegated}>{children}</div>;
}

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Link href="/" passHref>
          <Logo>
            <span>Pampa </span>
            <span>Argentina</span>
          </Logo>
        </Link>
        <Nav />
      </div>
      <div className="sub-bar">
        <ClientOnly>
          <Search />
        </ClientOnly>
      </div>
      <Cart />
    </HeaderStyles>
  );
}
