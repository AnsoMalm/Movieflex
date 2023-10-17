import data1 from '../data/documentaries.json'
import data2 from '../data/feature-films.json'
import data3 from '../data/specials.json'

let allData = data1.concat(data2, data3)

let result = getLanguage(allData)

export function getLanguage() {
	console.log('Get language', allData)
	
	//att se efter vilka språk som finns och räkna utifrån om det finns eller inte, isåfall lägg till. 
	const languageCount = allData.reduce((acc, obj) => {
		const language = obj.Language; 
		if(acc[language]) {
			acc[language] += 1
		} else {
			acc[language] = 1;
		}
		return acc; 
	}, {})
	
	//Sortera språken
	const sortedLanguage = Object.entries(languageCount).sort((a,b) => b[1] - a[1]); 
	console.log('sorterad data', sortedLanguage)

	const labels = sortedLanguage.map(item => item[0])
	const datasetData = sortedLanguage.map(item => item[1])

	return {
		labels: labels,
		datasets: [{
			label: 'All Movie Languages', 
			data: datasetData,
			backgroundColor: ['#ECFF00','#AD0000','#B8FF00','#FFEE00', '#FFC900','#FFC900','#FF7700', '#FF4300', '#FF1100', '#C80000', ]
		}]
	}
}