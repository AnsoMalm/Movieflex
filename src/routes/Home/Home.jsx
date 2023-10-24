import SearchMovie from './SearchMovie'
import './home.css'

const Home = () => {

  return (
    <>
	     <section className='header-container'>
        <h1>Välkommen till våra fräscha och nya streamningtjänst!</h1>
        <p>Vilka filmer är du sugen på idag? Här finns allt i det mesta som du kan tänka dig. </p>
      </section>
      <SearchMovie />
    </>
  )
}


export default Home