import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
import { Pie } from 'react-chartjs-2'
import { getLanguage } from '../services/getLanguage'

const pieLanguageConfig = getLanguage()

const MovieLanguage = () => {
	return (
		<section>
			<h2>Olika språk i alla filmer</h2>
			<Pie data={pieLanguageConfig}/>
		</section>
	)
}

export default MovieLanguage