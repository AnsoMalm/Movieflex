import SearchMovie from './SearchMovie'

const Home = () => {

  return (
    <main>
	     <section className='welcome-container'>
        <h1 
          className='header-welcome'>
          Välkommen till våra fräscha och nya streamningtjänst!
        </h1>
      </section>
      <SearchMovie />
    </main>
  )
}


export default Home