import SearchMovie from './SearchMovie'
import './home.css'

const Home = () => {

  return (
    <>
	     <section className='header-container'>
        <h1>Välkommen till våra fräscha och nya streamningtjänst!</h1>
        <p>På denna sidan har vi samlat all vår filmdata. Vid varje flik du får mer info om vår data.</p>
        <p>Här nedanför kan du söka efter vårt utbud av filmer. </p>
      </section>
      <SearchMovie />
    </>
  )
}


export default Home