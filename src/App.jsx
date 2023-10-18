import { useState } from 'react'
import './App.css'
import MovieLanguage from './components/MovieLanguage'
import Premiere from './components/Premiere'
import MoviesRunTime from './components/MoviesRuntime'
import Genre from './components/Genre'
import Header from './assets/Header'
import SearchMovie from './components/searchMovie'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main> 
      <section className='welcome-container'>
        <h1 
          className='header-welcome'>
          Välkommen till våra fräscha och nya streamningtjänst!
        </h1>
      </section>
      <SearchMovie />
      <MovieLanguage />
      <Premiere />
      <MoviesRunTime/>
      <Genre />
    </main>
    </>
  )
}

export default App
