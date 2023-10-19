import data1 from '../data/specials.json'
import data2 from '../data/documentaries.json'
import data3 from '../data/feature-films.json'


function convertToMinutes(runtime) {
	const parts = runtime.split(' '); 
	const number = parseInt(parts[0]);
	const unit = parts[1]
	if (unit === 'h') {
		return number * 60; 
	} else {
		return number
	}
} 

export function getMoviesRunTime(data, label) {
	const convertedData = data.map(movie => {
		const runtimeinMinutes = convertToMinutes(movie.Runtime);
		return {
			...movie,
			Runtime: runtimeinMinutes 
		}
	})
	
	const sortedData = convertedData.sort((a,b) => a.Runtime - b.Runtime)
	
	const labels = sortedData.map((movie, index) => index)
	const runtimes = sortedData.map(movie => movie.Runtime)
	
	return {
		labels: labels,
		datasets: [{
			label: label,
			data: , 
			backgroundColor: ['#D26277'], 
			borderColor: ['#F8B2D5']
		}]
	}
}
const specialsData = getMoviesRunTime(data, 'Specials tidslängd');
const documentariesData = getMoviesRunTime(data1, 'Dokumentärers tidslängd')
const featureFilmsData = getMoviesRunTime(data2, 'Feature Films tidslängd')