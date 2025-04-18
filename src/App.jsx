import React, { useState } from 'react';
import Card from './components/card.jsx';
import './App.css';

function App() {
  const [country, setCountry] = useState('');
  const [countrydata, setcountrydata] = useState(null);

  const searchcountry = () => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setcountrydata(data[0]);
        console.log(data[0]);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setcountrydata(null);
      });
  };

  return (
    <div className="app">
      <h1>Country Info Finder</h1>
      <div className="search-box">
        <input 
          type="text" 
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter country name" 
        />
        <button onClick={searchcountry}>Search</button>
      </div>
      <Card countrydata={countrydata} />
    </div>
  );
}

export default App;
