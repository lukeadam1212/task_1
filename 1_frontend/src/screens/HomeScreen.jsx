import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Countries from "../components/molecules/Countries";
import Pagination from "../components/molecules/Pagination";
import Button from "../components/atoms/Button";
import SizeButton from "../components/atoms/SizeButton";

// style
const StyledHomeScreen = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 90vh;
  .sorting {
    height: 10vh;
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #e3ffe3;
    .sorting-by-size {
      width: 100%;
      height: 40%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-left: 2rem;
    }
    .buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40%;
    }
    .ascending_descending {
      margin-left: 1rem;
    }
  }
  section {
    background-color: #e3ffe3;
    width: 70vw;
  }
`;

const HomeScreen = () => {
  // hooks
  // state
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(7);
  const [filteredData, setFilteredData] = useState([]);

  // side effects
  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://restcountries.com/v2/all?fields=name,region,area"
      );
      setCountries(res.data);
      setFilteredData(res.data);
      setLoading(false);
    };
    fetchCountries();
  }, []);

  // get countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredData.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // custom functions
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const ascendingHandler = () => {
    setFilteredData(countries.sort((a, b) => (a.area > b.area ? 1 : -1)));
    console.log(filteredData);
  };

  const descendingHandler = () => {
    setFilteredData(countries.sort((a, b) => (a.area > b.area ? -1 : 1)));
    console.log(filteredData);
  };

  return (
    <StyledHomeScreen>
      <h1>Country list</h1>
      <div className="sorting">
        <div className="sorting-by-size">
          <SizeButton
            text="smaller than Lithuania"
            action={() => console.log("smaller than Lithuania")}
          />
        </div>
        <div className="buttons">
          <div className="ascending_descending">
            <Button text="Ascending" action={() => ascendingHandler()} />
            <Button text="Descending" action={() => descendingHandler()} />
          </div>
          <div className="oceania">
            <Button text="Oceania" action={() => console.log("oceania")} />
          </div>
        </div>
      </div>
      <section>
        <Countries countries={filteredData} loading={loading} />
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={filteredData.length}
          paginate={paginate}
        />
      </section>
    </StyledHomeScreen>
  );
};

export default HomeScreen;
