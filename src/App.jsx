import { useState } from 'react'
import './App.css'
import MovieLanguage from './components/MovieLanguage'
import Premiere from './components/Premiere'
import MoviesRunTime from './components/MoviesRuntime'
import Genre from './components/Genre'
import Header from './assets/Header'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main> 
      <h1>Välkommen till streamningtjänsten MovieFlex</h1>
      <MovieLanguage />
      <Premiere />
      <MoviesRunTime/>
      <Genre />
    </main>
    </>
  )
}

export default App
