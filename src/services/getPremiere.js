import data1 from '../data/documentaries.json'
import data2 from '../data/feature-films.json'
import data3 from '../data/specials.json'

const labels = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September','Oktober', 'November', 'December']

function countPremieres(data) {
		return data.reduce((acc, obj) => {
		const date = new Date(obj.Premiere)
		const month = date.getMonth()
		if(acc[month]) {
			acc[month] += 1
		} else {
			acc[month] = 1; 
		}
		return acc
	}, {})
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
			backgroundColor: ['rgba(75, 192, 192, 0.2)'],
			borderColor: ['rgb(75, 192, 192)'] 
		}, 
		{
			label: 'Feauture Films Premiärer',
			data: Object.values(monthCount2),
			backgroundColor: ['rgba(54, 162, 235, 0.2)'],
			borderColor: ['rgb(54, 162, 235)']
		},
		{
			label: 'Specials Premiärer',
			data: Object.values(monthCount3),
			backgroundColor: ['rgba(153, 102, 255, 0.2)'],
			borderColor: ['rgb(153, 102, 255)'] 
		}]

	}
}