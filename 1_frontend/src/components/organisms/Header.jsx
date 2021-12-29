import React from "react";
import styled from "styled-components";

// images
import logo from "../../assets/images/globe.png";

// style
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  nav {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 3rem;
    }

    ul {
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <img src={logo} alt="" />
        <ul>
          <a href="home">Home</a>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
