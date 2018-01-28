import React from 'react'
import Numerot from './Numerot_2_6__2_10'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        persons: [
          { name: 'Arto Hellas', number: '040-123456' },
          { name: 'Martti Tienari', number: '040-123456' },
          { name: 'Arto Järvinen', number: '040-123456' },
          { name: 'Lea Kutvonen', number: '040-123456' }
        ],
        newName: 'jotain',
        newNumber: 'joku numero',
        filter: '',
        personsToShow: [
          { name: 'Arto Hellas', number: '040-123456' },
          { name: 'Martti Tienari', number: '040-123456' },
          { name: 'Arto Järvinen', number: '040-123456' },
          { name: 'Lea Kutvonen', number: '040-123456' }
        ]
      }
    }
  
    addName = (event) => {
      event.preventDefault()
      const findSameName = (element) => {
        return (
          element.name === this.state.newName
        )
      }
      const apu_ind = this.state.persons.findIndex(findSameName);
  
      if (apu_ind === -1) {
        const personObject = {
          name: this.state.newName,
          number: this.state.newNumber
        }
        const persons = this.state.persons.concat(personObject)
        const personsToShow = persons
        this.setState({
          persons,
          newName: '',
          newNumber: '',
          filter: '',
          personsToShow
        })
      }
      else {
        alert("Nimi on jo luettelossa")
      }
    }
  
    handleNameChange = (event) => {
      console.log(event.target.value)
      this.setState({ newName: event.target.value })
    }
  
    handleNumberChange = (event) => {
      console.log(event.target.value)
      this.setState({ newNumber: event.target.value })
    }
  
    handleChoose = (event) => {
      const personsToShow = this.state.persons.filter((person) => person.name.toLowerCase().indexOf(event.target.value.toLowerCase(),0) === 0
      )
      this.setState({ filter: event.target.value })
      this.setState({personsToShow: personsToShow})
    }
  
    render() {
      return (
        <div>
          <h1>Puhelinluettelo</h1>
          Rajaa näytettäviä: <input value={this.state.filter} onChange={this.handleChoose}/>
          <h2>Lisää numero</h2>
          <form onSubmit={this.addName}>
            <div>
              nimi: <input value={this.state.newName}  onChange={this.handleNameChange} />
            </div>
            <div>
              numero: <input value={this.state.newNumber}  onChange={this.handleNumberChange}/>
            </div>
            <div>
              <button type="submit">lisää</button>
            </div>
          </form>
          <h2>Numerot</h2>
          <div>
            <Numerot persons={this.state.personsToShow}/>
          </div>
        </div>
      )
    }
  }

  export default App