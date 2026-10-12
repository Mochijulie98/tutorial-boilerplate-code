import './App.css'
import { List } from './components/list/List'
import usePokemon from './hooks/usePokemon';


function App() {

  const { data, error, loading } = usePokemon();

  if(loading) {
    return <p>Loading...</p>;
  }

  if(error) {
    return <p>Error: {error.message}</p>;
  }

  if(data.length === 0) {
    return <p>No Pokemon found.</p>;
  }

  return (
    <>
      <h1>Hello World!</h1>
      <section>
        <input placeholder='search by name'/>
      </section>
      <section>
        <h2>Pokemon</h2>
        <List pokemonJSON={data} />
      </section>
    </>
  )
}

export default App
