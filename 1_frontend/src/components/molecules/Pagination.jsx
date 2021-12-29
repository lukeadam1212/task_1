import React from "react";
import styled from "styled-components";

// style
const StyledPagination = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin: 0 0.1rem;
      a {
        text-decoration: none;
        padding: 0 0.4rem;
        color: gray;
        background-color: #b5e2b5;
        :hover {
          background-color: #8caf8c;
          color: white;
        }
      }
    }
  }
`;

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <StyledPagination>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
};

export default Pagination;
