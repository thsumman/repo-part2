import React from 'react'

const CountriesAll = ({countries}) => {
  return (
    countries.map((country) => {
      return (
        <div key={country.name}>
          <h1>{country.name} {country.nativeName}</h1>
          <p>capital: {country.capital}</p>
          <p>population: {country.population}</p>
          <img alt="lipun kuva" src={country.flag}/>
        </div>
      )
    })
  )
}

export default CountriesAll