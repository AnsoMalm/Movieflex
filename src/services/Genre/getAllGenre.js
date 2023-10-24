import data1 from '../../data/documentaries.json'
import data2 from '../../data/feature-films.json'
import data3 from '../../data/specials.json'
import colors from '../../data/colors.js'

const allData = data2.concat(data3)
console.log('detta är min genre data data2, data3', allData)

export function getGenreData() {
	const allDataWithGenre = allData.filter(obj => obj.Genre)

	const genreCount = allDataWithGenre.reduce((acc, obj) => {
		const genres = obj.Genre.split(" / ")
		genres.forEach( genre => {
			if(acc[genre]) {
				acc[genre] += 1
			} else {
				acc[genre] = 1
			}
		}) 
		return acc; 
	}, {})

	const sortedGenreData = Object.entries(genreCount).sort((a,b) => a[1] - b[1])
	console.log('min sortedgenredata', sortedGenreData)

	const labels = sortedGenreData.map(item => item[0])

	const datasetData = sortedGenreData.map(item => item[1])

	console.log('datasetDATA', datasetData)
	return {
		labels: labels, 
		datasets: [{
			label: 'Antal filmer', 
			data: datasetData, 
			backgroundColor: Object.values(colors),
		}], 
		options: {
			scales: {
				x: {
					type: 'linear', 
					position: 'bottom'
				},
				y: {
					type: 'category', 
					position: 'left', 
				},

			}
		}
	}
}