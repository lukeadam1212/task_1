import React from "react";
import styled from "styled-components";

const StyledCountry = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  background-color: #ccffcc;
  margin: 0.5rem;
  padding: 0 0.7rem;
  border-radius: 1rem;
  p {
    margin: 0.3rem;
    padding: 0 4rem 0 1rem;
    background-color: #869686;
    color: white;
    border-radius: 0.4rem;
  }
`;

const Countries = ({ countries, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {countries.map((country) => (
        <StyledCountry key={country.name}>
          <p>{country.name}</p>
          <p>{country.region}</p>
          <p>{country.area}</p>
        </StyledCountry>
      ))}
    </>
  );
};

export default Countries;
