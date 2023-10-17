import data from '../data/specials.json'

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
export function getMoviesRunTime() {
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
			label: 'Dokumentärers tidslängd',
			data: runtimes, 
			backgroundColor: ['#D26277'], 
			borderColor: ['#F8B2D5']
		}], 
	}
}