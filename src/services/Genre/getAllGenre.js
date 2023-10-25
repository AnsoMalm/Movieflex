import data1 from '../../data/documentaries.json'
import data2 from '../../data/feature-films.json'
import data3 from '../../data/specials.json'
import colors from '../../data/colors.js'

const allData = data2.concat(data3)
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

	const labels = Object.keys(genreCount)

	const datasetData = Object.values(genreCount)

	console.log('labels', labels)
	console.log('datasetDATA:', datasetData)

	return {
		labels: labels, 
		datasets: [{
			label: 'Antal filmer', 
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
					title: {
						display: true, 
						text: 'Genre'
					}	
				}
			}
			
		}
	}
}
