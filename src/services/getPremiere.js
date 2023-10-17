import data1 from '../data/documentaries.json'
import data2 from '../data/feature-films.json'
import data3 from '../data/specials.json'

const labels = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September','Oktober', 'November', 'December']

export function getPremiere() {

	const monthCount = data1.reduce((acc, obj) => {
		const date = new Date(obj.Premiere)
		const month = date.getMonth()
		if(acc[month]) {
			acc[month] += 1
		} else {
			acc[month] = 1; 
		}
		return acc
	}, {})


	return {
		labels: labels,
		datasets: [{
			label: 'Dokumentärernas Premiärer',
			data: Object.values(monthCount),
			backgroundColor: ['red'], 
		}]

	}
}