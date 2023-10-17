import data from '../data/feature-films.json'

export function getGenre() {
	console.log('min genredata', data)

	const genreCount = data.reduce((acc, obj) => {
		const genre = obj.Genre; 
		if(acc[genre]) {
			acc[genre] += 1
		} else {
			acc[genre] = 1
		}
		return acc;
	}, {})

	const labels = Object.keys(genreCount)

	const datasetData = labels.map(label => genreCount[label])

	return {
		labels: labels,
		datasets: [{
			label: 'Genrer i Features-filmer',
			data: datasetData,
			backgroundColor: ['#ECFF00','#AD0000','#B8FF00','#FFEE00', '#FFC900','#FFC900','#FF7700', '#FF4300', '#FF1100', '#C80000',], 
		}]
	}
}