import { useState } from 'react'
import data1 from '../../data/documentaries.json'
import data2 from '../../data/feature-films.json'
import data3 from '../../data/specials.json'
import './searchmovie.css'

const allData = data1.concat(data2, data3)

console.log('Detta är min data från mina databaser', allData)


const SearchMovie = () => {
	const [matchesMovie, setMatchesMovie] = useState([])

	const handleChange = (event) => {
		let searchString = event.target.value; 
		if (searchString === '') {
			setMatchesMovie([]);
		} else {
			const filterAllMovies = allData.filter(movie => movie.Title.toLowerCase().includes(searchString.toLowerCase()))

			return setMatchesMovie(filterAllMovies)
		}
	}
		return (
			<>
			<section className='search-container'>
				<label>Sök efter filmer här:</label>
					<input 
					onChange={handleChange}
					className='search-input'
					type="text"
					/>
			</section>
			<div className='movie-container'>
				<ul className='movie-list'>
					{matchesMovie.map((movie, index) => (
						<li key={index} style={{animationDelay: `${index * 0.3}s`}}>
							<div className='movie-titel'>{movie.Title}</div> 
							<div className='movie-desc'>
								<div>Premiär: {movie.Premiere}</div>
								<div>Tidslängd: {movie.Runtime}</div>
								<div>Språk: {movie.Language}</div>
							</div>
						</li>
					))}
				</ul>
			</div>
			</>
		)
	}

export default SearchMovie
