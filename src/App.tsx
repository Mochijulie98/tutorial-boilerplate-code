import './App.css'
import { List } from './components/list/List'
import usePokemon from './hooks/usePokemon'
import usePokemonList from './hooks/usePokemonList'

function App() {
  const {pokemon, isFetchLoading, fetchError, fetchSelectedPokemon} = usePokemon();
  const { data, error, loading } = usePokemonList();



  if(isFetchLoading) {
    return <p>Loading from API...</p>;
  }

  
  if(loading) {
    return <p>Loading...</p>;
  }

  if(fetchError) {
    return <p>Error: {fetchError.message}</p>;
  }

  if(error) {
    return <p>Error: {error.message}</p>;
  }

  if(data.length === 0) {
    return <p>No Pokemon found.</p>;
  }


  console.log("Selected Pokemon:", pokemon);

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Selected Pokemon: {pokemon?.name}</h2>
      <section>
        <input placeholder='search by name'/>
      </section>
      <section>
        <h2>Pokemon</h2>
        <List pokemonJSON={data} handleClick={(pokeName) => fetchSelectedPokemon(pokeName)}/>
      </section>
    </>
  )
}

export default App
