import React from 'react'
import axios from 'axios'
import Countries from './Countries_2_12'
import CountriesAll from './CountriesAll_2_12'

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
      console.log("countries",this.state.countries)
      const countriesToShow = this.state.countries.filter((country) => country.name.toLowerCase().indexOf(event.target.value.toLowerCase(),0) === 0)
      this.setState({ filter: event.target.value })
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
              <Countries countries={this.state.countriesToShow}/>
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