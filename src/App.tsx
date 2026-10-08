import './App.css'
import { List } from './components/list/List'
import pokemonJSON from './pokemon.json'

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <section>
        <input placeholder='search by name'/>
      </section>
      <section>
        <h2>Pokemon</h2>
        <List pokemonJSON={pokemonJSON} />
      </section>
    </>
  )
}

export default App
