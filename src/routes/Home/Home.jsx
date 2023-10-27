import SearchMovie from './SearchMovie'
import './home.css'

const Home = () => {

  return (
    <>
	     <section className='header-container'>
        <h1 className='movie-text'>Movieflex</h1>
        <h2 className='home-header'>Välkommen till våra fräscha och nya streamningtjänst!</h2>
        <p>På denna sidan har vi samlat all vår filmdata. Vid varje flik du får mer info om vår data.</p>
        <br></br>
        <p>Här nedanför kan du söka efter vårt utbud</p> 
        <p>av våra filmer med all information du behöver. </p>
      </section>
      <SearchMovie />
    </>
  )
}


export default Home