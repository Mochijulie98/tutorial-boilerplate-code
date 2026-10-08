import './App.css'
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
        <ul>
          {pokemonJSON.map((pokemon, index) => {
            return (
              <li className='pokemonCard' key={index}>
                {pokemon.name.english}
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default App
