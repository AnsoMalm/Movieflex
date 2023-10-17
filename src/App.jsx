import { useState } from 'react'
import './App.css'
import MovieLanguage from './components/MovieLanguage'
import Premiere from './components/Premiere'
import MoviesRunTime from './components/MoviesRuntime'
import Genre from './components/Genre'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <main> 
      <h1>MovieFlex</h1> 
      <MovieLanguage />
      <Premiere />
      <MoviesRunTime/>
      <Genre />
    </main>
  )
}

export default App
