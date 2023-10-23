import {Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, CategoryScale, Title} from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, LinearScale, CategoryScale, Title )
import { Doughnut } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import { getGenre } from '../../services/Genre/getGenre'
import { getGenreData } from '../../services/Genre/getAllGenre'
import { useState } from 'react'
import './genre.css'

const barGenreConfig = getGenreData()

const movieGenre = () => {
	const [numGenresToShow, setNumGenresToShow ] = useState(10)
	
	const minNumGenres = 2; 
	const doughnutGenreConfig = getGenre(numGenresToShow)

	const showMoreGenres = () => {
		setNumGenresToShow(prevNumGenres => prevNumGenres + 2)
	}

	const showLessGenres = () => {
		if(numGenresToShow > minNumGenres)
		setNumGenresToShow(prevNumGenres => prevNumGenres - 2)
	}

	return (
		<>
			<div>
				<section className='genre-container-doughnut'>
					<h2>Här är genrer i specials-filmer!</h2>
					<Doughnut data={doughnutGenreConfig} />
				</section>
				<section className='button-container'>
					<button className='genre-button'onClick={showLessGenres}>Visa färre genrer</button>
					<button className='genre-button' onClick={showMoreGenres}>Visa fler genrer</button>
				</section>
			</div>
			<section className='genre-container2'>
				<h2>Här har vi alla våra genrer!</h2>
				<Bar data={barGenreConfig} />
			</section>
		</>
	)
}

export default movieGenre
