import { Chart as ChartJS, Tooltip, BarElement, LinearScale, CategoryScale, Legend, Title } from 'chart.js'
ChartJS.register(Tooltip, BarElement, LinearScale, CategoryScale, Legend, Title)
import { Bar } from 'react-chartjs-2'
import { getPremiere } from '../services/getPremiere'

const barPremiereConfig = getPremiere()

const Premiere = () => {
	return (
		<section>
			<h2>Vilka premiärer som filmerna har:</h2>
			<Bar data ={barPremiereConfig}/>
		</section>
	)
}

export default Premiere