import {Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, CategoryScale, Title} from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, LinearScale, CategoryScale, Title )
import { Doughnut} from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import { getGenre } from '../../services/Genre/getGenre'
import { getGenreData } from '../../services/Genre/getAllGenre'
import { useState } from 'react'
import { motion } from 'framer-motion'
import './genre.css'

const barGenreConfig = getGenreData()

const buttonInitial = {
	transform: 'scale(1)',
	backgroundColor: 'rgba(240, 230, 140, 0.8)',
	color: 'black'
}
const buttonHover = {
	transform: 'scale(1.2)', 
	boxShadow: '-0.4em 0.5em 1em #9A9A9A', 
	backgroundColor: 'rgba(243, 181, 164, 0.8)',
	border: '2px solid rgba(255, 192, 203)',
	
}
const buttonTransition = {duration: 1.2}

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
					<h2 className='genre-text'>Här är genrer i feature-filmer!</h2>
					<Doughnut data={doughnutGenreConfig} />
				</section>
				<section className='button-container'>
					<motion.button 
					className='genre-button'
					onClick={showLessGenres}
					initial={buttonInitial}
					whileHover={buttonHover}
					transition={buttonTransition}
					>
						Visa färre genrer</motion.button>

					<motion.button 
					className='genre-button' 
					onClick={showMoreGenres}
					initial={buttonInitial}
					whileHover={buttonHover}
					transition={buttonTransition}
					>
						Visa fler genrer</motion.button>
				</section>
			</div>
			<section className='genre-container2'>
				<h2 className='genre-text'>Här har vi alla våra genrer!</h2>
				<Bar data={barGenreConfig} options={barGenreConfig.options}/>
			</section>
		</>
	)
}

export default movieGenre
