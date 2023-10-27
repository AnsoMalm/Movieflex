import data1 from '../../data/documentaries.json'
import data2 from '../../data/feature-films.json'
import data3 from '../../data/specials.json'
import colors from '../../data/colors.js'

const documentariesWithGenre = data1.map(doc => ({
	...doc, 
	Genre: 'Dokumentärer'
}))

const allData = data2.concat(data3, documentariesWithGenre)
console.log('detta är min genre data data2, data3', allData)

export function getGenreData() {
	const allDataWithGenre = allData.filter(obj => obj.Genre)

	const genreCount = allDataWithGenre.reduce((acc, obj) => {
		const genre = obj.Genre; 
		if(acc[genre] ) {
			acc[genre] += 1
		} else {
			acc[genre] = 1
		}
		return acc; 
	}, {})

	const sortedGenreCount = Object.entries(genreCount).map(([genre, count]) => ({
		genre, count
	})); 
	sortedGenreCount.sort((a, b) => b.count - a.count)

	const labels = sortedGenreCount.map(obj => obj.genre); 
	const datasetData = sortedGenreCount.map(obj => obj.count)

	return {
		labels: labels, 
		datasets: [{
			label: 'Alla våra genrer', 
			data: datasetData, 
			backgroundColor: Object.values(colors),
		}], 
		options: {
			type: 'bar',
			indexAxis: 'y', 
			scales: {
				x: {
					title: {
						display: true, 
						text: 'Antal Filmer'
					}
				}, 
				y: {
					beginAtZero: true,
				}
			}
			
		}
	}
}
