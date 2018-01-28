import React from 'react'
import ReactDOM from 'react-dom'
import Kurssi from './Kurssi_2_1__2_5'

const Kurssit = ({kurssit}) => {
  return(
    <div>
      <h1>Opetusohjelma</h1>
      {kurssit.map((kurssi) => <Kurssi key={kurssi.id_k} kurssi={kurssi}/>
      )
    }
    </div>
  )
}

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ],
      id_k: 1
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ],
      id_k: 2
    }
  ]
  return (
    <div>
      <Kurssit kurssit={kurssit} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)