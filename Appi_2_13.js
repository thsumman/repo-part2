import React from 'react'
import axios from 'axios'
import Countries from './Countries_2_13'
import CountriesAll from './CountriesAll_2_13'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        countries: [
        ],
        filter: '',
        countriesToShow: [
        ]
      }
    }
  
    handleChoose = (event) => {
      console.log("event0",event)
      const countriesToShow = this.state.countries.filter((country) => country.name.toLowerCase().indexOf(event.target.value.toLowerCase(),0) === 0)
      this.setState({ filter: event.target.value })
      this.setState({countriesToShow: countriesToShow})
    }

    handleClick = (event) => {
      console.log("div_val",event.target.textContent)
      const countriesToShow = this.state.countries.filter((country) => country.name.toLowerCase().indexOf(event.target.textContent.toLowerCase(),0) === 0)
      this.setState({ filter: '' })
      this.setState({countriesToShow: countriesToShow})
    }
  
    componentWillMount() {
//      console.log('will mount')
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then(response => {
//          console.log(response)
          this.setState({countries: response.data})
        }
      )

    }

    render() {
      console.log("render")
      
      if (this.state.countriesToShow.length > 10) {
        return (
          <div>
            <p>Find countries: <input value={this.state.filter} onChange={this.handleChoose}/></p>
            <p>too many matches, specify another filter</p>
          </div>
        )
      }
      else if ((this.state.countriesToShow.length > 1) & (this.state.countriesToShow.length < 10)) {
        return (
          <div>
            Find countries: <input value={this.state.filter} onChange={this.handleChoose}/>
            <div>
              {this.state.countriesToShow.map((country) => <div key={country.name} onClick={this.handleClick}>{country.name}</div>)}
            </div>
          </div>
        )
      }
      else if (this.state.countriesToShow.length === 1) {
        return (
          <div>
            Find countries: <input value={this.state.filter} onChange={this.handleChoose}/>
            <div>
              <CountriesAll countries={this.state.countriesToShow}/>
            </div>
          </div>
        )
      }
      else {
        return (
          <div>
            Find countries: <input value={this.state.filter} onChange={this.handleChoose}/>
          </div>
        )
      }
    }
  }

  export default App