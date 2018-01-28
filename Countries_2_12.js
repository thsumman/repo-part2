import React from 'react'

const Countries = ({countries}) => {
  return (
      countries.map((country) => <p key={country.name}>{country.name}</p>)
  )
}

export default Countries