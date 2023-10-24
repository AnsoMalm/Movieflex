import data1 from '../data/documentaries.json'
import data2 from '../data/feature-films.json'
import data3 from '../data/specials.json'

const labels = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September','Oktober', 'November', 'December']

function countPremieres(data) {
		return data.reduce((acc, obj) => {
		const date = new Date(obj.Premiere)
		const month = date.getMonth()
		acc[month] += 1
		return acc
	}, Array(12).fill(0))
}

export function getPremiere() {
	//data från dokumentärer
	const monthCount1 = countPremieres(data1)
	//data från feature-films
	const monthCount2 = countPremieres(data2)
	//data från specials
	const monthCount3 = countPremieres(data3)

	return {
		labels: labels,
		datasets: [{
			label: 'Dokumentärernas Premiärer',
			data: Object.values(monthCount1),
			backgroundColor: ['rgba(255, 182, 193, 0.8)'],
			borderColor: ['rgb(255, 182, 193)'] 
		}, 
		{
			label: 'Feauture Films Premiärer',
			data: Object.values(monthCount2),
			backgroundColor: ['rgba(255, 160, 122, 0.8)'],
			borderColor: ['rgb(255, 160, 122)']
		},
		{
			label: 'Specials Premiärer',
			data: Object.values(monthCount3),
			backgroundColor: ['rgba(240, 230, 140, 0.8)'],
			borderColor: ['rgb(240, 230, 140)'] 
		}]

	}
}