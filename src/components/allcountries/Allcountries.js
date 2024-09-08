import "./Allcountries.css";
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';
import HashLoader from "react-spinners/FadeLoader";
function Allcountries(props) {
  const [loading,setLoading]=useState(false);
  let str = props.searching;
  const lower = str.toLowerCase();
  str = str.charAt(0).toUpperCase() + lower.slice(1);

  useEffect(()=>{
    setLoading(false)
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  },[])
  function check(items) {
    if (str !== "") {
      return items.name.common.includes(str);
    }
    return items.region.includes(props.optn);
  }

  const ans = props.countries.filter(check);
  
  return (
    <div className="details">
      {loading ? (
        <div>
        <HashLoader
          color={"#d90b0b"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
      ) : (
        ans.map((elm) => {
          return (
            <div key={props.cca2}>
              <Link
              style={{ textDecoration: "none", color: "black" }}
              data-aos="slide-left"
              to={elm.cca2}
            >
              <div className="All-cards">
                <img
                  src={elm.flags.png}
                  className="country-flag"
                  alt="no flag found"
                />
                <p className="allcountries-contents">
                  <b className="allcountries-data">Name: </b>
                  {elm.name.common}
                </p>
                <p className="allcountries-contents">
                  <b className="allcountries-data">Population: </b>
                  {elm.population}
                </p>
                <p className="allcountries-contents">
                  <b className="allcountries-data">Region: </b>
                  {elm.region}
                </p>
                <p className="allcountries-contents">
                  <b className="allcountries-data">Capital: </b>
                  {elm.capital}
                </p>
              </div>
            </Link>
            </div>
          );
        })
      )}
    </div>
  );
}
export default Allcountries;
