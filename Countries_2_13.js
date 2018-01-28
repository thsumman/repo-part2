import React from 'react'

const Countries = ({countries}) => {
  return (
      countries.map((country) => <div key={country.name} onClick={this.handleClick}>{country.name}</div>)
  )
}

export default Countries