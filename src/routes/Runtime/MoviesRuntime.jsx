import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend)
import { Line } from 'react-chartjs-2'
import { getMoviesRunTime } from '../../services/getMoviesRuntime'
import './runtime.css'

const moviesLineConfig = getMoviesRunTime()

const MoviesRunTime = () => {
	return (
		<section className='runtime-container'>
			<h2>Hur lång filmerna är: </h2>
			<Line data={moviesLineConfig}/>
		</section>
	)
}

export default MoviesRunTime