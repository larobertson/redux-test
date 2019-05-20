import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";


const Spin = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

const SpyGlass = styled("span")`
  display: inline-block;
  animation: 1s ${Spin} linear infinite;
`;

const Container = styled("header")`
  background-color: #333;
  position: sticky;
  top: 0;
  z-index: 10;
`;


const NavBar = () => {
  return(
    <Container>
      <Link to="/">Adopt Me!</Link>
      <Link to="/search-params">
        <SpyGlass aria-label="search" role="img">
          🔍
        </SpyGlass>
      </Link>
    </Container>
  );
}

export default NavBar;