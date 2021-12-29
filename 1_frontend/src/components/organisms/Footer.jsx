import React from "react";
import styled from "styled-components";

// style
const StyledFooter = styled.footer`
  height: 5vh;
  display: flex;
  alight-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear()} all rights reserved</p>
    </StyledFooter>
  );
};

export default Footer;
