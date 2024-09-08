import { useParams,Link } from "react-router-dom";
import './CountryDetails.css'
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/PacmanLoader";
function CountryDetails(props) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  function checks(items){
    if(items.cca2===id){
      console.log(items.cioc);
        return true;
    }
    else{
        return false;
    }
  }
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const ans=props.countries.filter(checks);
  return (
    <div>

      {loading ? (
        <div className="details">
        <HashLoader
          color={"#d90b0b"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
      ) : (
    <div className="outer">
      <div className="back-btn">
      <Link
        to="/"
        style={{
          textDecoration: "none"
        }}
      >
        Back
      </Link>
      </div>
      <img className="flags" src={ans[0].flags.png} alt="no img" />
      <div className="right-side">
        <p className="country-name">{ans[0].name.common}</p>
        <div className="contents">
          <p className="Contents-info">
            <b className="Contents-title">Domain: </b>
            {ans[0].tld[0]}
          </p>
          <p className="Contents-info">
            <b className="Contents-title">Capital: </b>
            {ans[0].capital}
          </p>
          <p className="Contents-info">
            <b className="Contents-title">Region: </b>
            {ans[0].region}
          </p>
          <p className="Contents-info">
            <b className="Contents-title">Population: </b> {ans[0].population}
          </p>
          <p className="Contents-info">
            <b className="Contents-title">Subregion: </b>
            {ans[0].subregion}
          </p>
        </div>
        <div className="border-content">
          <b className="bordered-title">Borders:</b>
          <div className="bordered">
            {ans[0].borders.map((elm) => (
              <p className="borders-data">{elm}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
      )}
    </div>
      
  );
}
export default CountryDetails;
