import './navbar.css'
import React, { useState } from "react";
function Navbar(props){
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
      const option = event.target.value;
      setSelectedOption(option);
      props.onDropdownChange(option);
    };
    const SearchChange = (event) => {
      const ans = event.target.value;
      setSelectedOption(ans);
      props.onSearchChange(ans);
    };console.log(selectedOption);
    return (
      <div className="nav-items">
        <h3 className='text-nav'>What do you want to know???</h3>
        <div className='nav-right'>
          <input className="search-text" placeholder='Enter the name of a country??? ' onChange={SearchChange} type="text" />
          <select className="dropdown-btn"onChange={handleChange}>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    );
}
export default Navbar;