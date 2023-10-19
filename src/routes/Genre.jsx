import {Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, CategoryScale, Title} from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, LinearScale, CategoryScale, Title )
import { Doughnut } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import { getGenre } from '../services/Genre/getGenre'
import { getGenreData } from '../services/Genre/getAllGenre'

const doughnutGenreConfig = getGenre()
const barGenreConfig = getGenreData()

const movieGenre = () => {
	return (
		<section>
			<h2>Här är genrer i specials-filmer!</h2>
			<Doughnut data={doughnutGenreConfig} />
			<h2>Här har vi alla våra genrer!</h2>
			<Bar data={barGenreConfig} />
		</section>
	)
}

export default movieGenre
