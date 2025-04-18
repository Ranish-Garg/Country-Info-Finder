import React, { useState, useEffect, memo } from 'react';
import './Card.css';

function Card(props) {
  const [flag, setFlag] = useState(null);
  const [capital, setCapital] = useState(null);
  const [population, setPopulation] = useState(null);
  const [continent, setContinent] = useState(null);
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    if (props.countrydata) {
      setFlag(props.countrydata.flags.png);
      setCapital(props.countrydata.capital ? props.countrydata.capital[0] : 'N/A');
      setPopulation(props.countrydata.population);
      setContinent(props.countrydata.continents[0]);
      setCurrency(
        props.countrydata.currencies
          ? Object.values(props.countrydata.currencies)[0].name
          : 'N/A'
      );
    }
  }, [props.countrydata]);

  if (!props.countrydata) {
    return null;
  }

  return (
    <div className="card">
      <img src={flag} alt="Flag" className="flag" />
      <h2>{props.countrydata.name.common}</h2>
      <ul>
        <li><strong>Capital:</strong> {capital}</li>
        <li><strong>Population:</strong> {population ? population.toLocaleString() : 'N/A'}</li>
        <li><strong>Continent:</strong> {continent}</li>
        <li><strong>Currency:</strong> {currency}</li>
      </ul>
    </div>
  );
}

export default memo(Card);
