import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// style
const StyledButton = styled.button`
  background-color: #8fff8f;
  color: gray;
  width: 8rem;
  height: 2rem;
  border-radius: 1rem;
  margin-right: 1rem;
`;

const Button = ({ text, action }) => {
  return <StyledButton onClick={action}>{text}</StyledButton>;
};

Button.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
