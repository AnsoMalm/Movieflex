import { useState } from 'react'
import data1 from '../data/documentaries.json'
import data2 from '../data/feature-films.json'
import data3 from '../data/specials.json'

const allData = data1.concat(data2, data3)

let newData = allData
console.log('Detta är min data från mina databaser', allData)


const SearchMovie = () => {
	const [searchValue, setSearchValue] = useState('')

	const movieData = newData
	console.log('min moviedata', movieData)

	const handleChange = (event) => {
		setSearchValue(event.target.value)
	}

	// const filterAllMovies = movieData.filter((movie) => movie.Title.toLowerCase().includes(searchValue.toLowerCase()))

		return (
			<main>
				<section className='search-container'>
				<label>Sök efter din favoritfilm:</label>
					<input 
					onChange={handleChange}
					className='search-input'
					type="text"
					placeholder='ex. HorrorNight'>
					</input>
				</section>
				<div className='movie-container'></div>
			</main>
		)
	}

export default SearchMovie