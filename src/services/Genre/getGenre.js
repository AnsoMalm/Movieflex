import data from '../../data/feature-films.json'
import colors from '../../data/colors.js'

export function getGenre(numGenres) {
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

	const labels = Object.keys(genreCount).slice(0, numGenres)
	console.log('min ändrade label', labels)

	const datasetData = labels.map(label => genreCount[label])

	return {
		labels: labels,
		datasets: [{
			label: 'Genrer i Features-filmer',
			data: datasetData,
			backgroundColor: Object.values(colors), 
		}]
	}
}