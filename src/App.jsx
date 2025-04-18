import React from 'react'
import { useState } from 'react';
import Card from './components/card.jsx';

function App() {

  

  const [country, setCountry] = useState('null');
  const [countrydata, setcountrydata] = useState(null);

  const searchcountry = () => {
  const api=fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {

       setcountrydata(data[0]);
       console.log(data[0])
      
      
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });

  }
  return (
    <>
    <h1>Country-Info-Finder</h1>

    <input type="text" 
    onChange={(e) => {setCountry(e.target.value)}}
    placeholder="Enter country name" 
    />
    <button onClick={searchcountry}>Search</button>


    <Card countrydata={countrydata}/>

     </>
  )
}

export default App
