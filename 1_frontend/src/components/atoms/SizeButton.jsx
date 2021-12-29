import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// style
const StyledSizeButton = styled.button`
  background-color: #869686;
  color: #ffffff;
  width: 14rem;
  height: 2rem;
  border-radius: 1rem;
  margin-right: 1rem;
`;

const SizeButton = ({ action, text }) => {
  return <StyledSizeButton onClick={action}>{text}</StyledSizeButton>;
};

SizeButton.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string,
};

export default SizeButton;
