import React from 'react'
import { useState,useEffect } from 'react';
import { memo } from 'react';


function Card(props) {

    const [flag, setflag] = useState(null);
    const [capital, setcapital] = useState(null);
    const [population, setpopulation] = useState(null);
    const [continent, setcontinent] = useState(null);
    const [currency, setcurrency] = useState(null);



    useEffect(() => {
        if (props.countrydata) {
          setflag(props.countrydata.flags.png); 
          setcapital(props.countrydata.capital ? props.countrydata.capital[0] : 'N/A'); 
          setpopulation(props.countrydata.population);
          setcontinent(props.countrydata.continents[0]);
        setcurrency(props.countrydata.currencies ? Object.values(props.countrydata.currencies)[0].name : 'N/A');


        }
      }, [props.countrydata]); 
  


    if (!props.countrydata) {
        return <></>; 
      }

    return 
    (
        <>

<div 
//   className="flag" 
//   style={{
//     height: '20vh',
//     width: '20vh',
//     backgroundImage: flag ? `url(${flag})` : 'none',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//   }}
></div> 


        </>
    )
}



export default memo(Card)
