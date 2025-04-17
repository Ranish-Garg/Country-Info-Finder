import React from 'react'
import { useState } from 'react';

function App() {

  const [country, setCountry] = useState('null');

  const searchcountry = () => {
  const api=fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((response) => {
      console.log(response[0]);
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

    </>
  )
}

export default App
