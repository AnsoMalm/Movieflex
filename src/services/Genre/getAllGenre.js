import data1 from '../../data/documentaries.json'
import data2 from '../../data/feature-films.json'
import data3 from '../../data/specials.json'

export function getGenreData() {

	let genreCount = {
		"Dokumentärer": data1.length,
		"Features Filmer": data2.length, 
		"Specialer": data3.length
	}

	const sortedGenreData = Object.entries(genreCount).sort((a,b) => a[1] - b[1])
	console.log('min sortedgenredata', sortedGenreData)

	const labels = sortedGenreData.map(item => item[0])

	const datasetData = sortedGenreData.map(item => item[1])

	return {
		labels: labels, 
		datasets: [{
			label: 'Antal filmer', 
			data: datasetData, 
			backgroundColor: ['#44EB7E', '#88EB44', '#EB4495'],
		}
	]
	}
}