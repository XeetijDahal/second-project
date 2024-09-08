import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Allcountries from "./components/allcountries/Allcountries";
import Navbar from "./components/navbar/navbar";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [search, setsearch] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };
  const searchChange = (option) => {
    setsearch(option);
  };
  countries.sort(function (a, b) {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;
  });
  return (
    <>
      <Navbar
        onSearchChange={searchChange}
        onDropdownChange={handleDropdownChange}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Allcountries
              optn={selectedOption}
              searching={search}
              countries={countries}
              cca2={countries.cca2}
            />
          }
        />
        <Route path="/:id" element={<CountryDetails countries={countries} />} />
      </Routes>
    </>
  );
};

export default App;
