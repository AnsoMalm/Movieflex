import { Chart as ChartJS, Tooltip, BarElement, LinearScale, CategoryScale, Legend, Title } from 'chart.js'
ChartJS.register(Tooltip, BarElement, LinearScale, CategoryScale, Legend, Title)
import { Bar } from 'react-chartjs-2'
import { getPremiere } from '../../services/getPremiere'
import './premier.css'

const barPremiereConfig = getPremiere()

const Premiere = () => {
	return (
		<section className="premier-chart-container">
			<h2 className='premier-text'>När filmerna hade premiär:</h2>
			<div className='premier-bar-box'>
			<Bar data ={barPremiereConfig}/>
			</div>
		</section>
	)
}

export default Premiere