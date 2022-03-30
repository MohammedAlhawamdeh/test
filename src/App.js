import { clients } from './data/clients'
import './App.css';

const App = () => {
  return (
    clients.map((client) => {
      return (
        <>
          <p>{client.clientName}</p>
          <p>{client.description}</p>
          <img src={client.logo} alt="" />
          {
            client.stackTech.map(st => {
              return (
                <span>{`${st} `}</span>
              )
            })
          }
          {

          }
        </>
      )
    })
  )
}

export default App;
