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
  font-size: 4rem;
  margin: 0 0 0 2rem;
  position: relative;
  z-index: 2;
  font-weight: normal;
  font-style: normal;
  letter-spacing: 0.05rem;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    background: var(--green);
    &:hover {
      text-decoration: none;
    }
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
`;

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
        <Logo>
          <Link href="/">Pampa Argentina</Link>
        </Logo>
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
