import { useState } from 'react'
import './App.css'
import MovieLanguage from './components/MovieLanguage'
import Premiere from './components/Premiere'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <main> 
      <h1>MovieFlex</h1> 
      <MovieLanguage />
      <Premiere />
    </main>
  )
}

export default App
