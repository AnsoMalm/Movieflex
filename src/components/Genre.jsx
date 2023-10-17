import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
import { Doughnut } from 'react-chartjs-2'
import { getGenre } from '../services/getGenre'

const doughnutGenreConfig = getGenre()

const movieGenre = () => {
	return (
		<section>
			<h2>Här är alla våra genrer!</h2>
			<Doughnut data={doughnutGenreConfig} />
		</section>
	)
}

export default movieGenre
