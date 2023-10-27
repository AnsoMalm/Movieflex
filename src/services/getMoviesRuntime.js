import data from '../data/specials.json'


function convertToMinutes(runtime) {
	const parts = runtime.split(' '); 
	const number = parseInt(parts[0]);
	const unit = parts[1]
	if (unit === 'h') {
		return number * 60; 
	} else {
		return number
	}
} 

export function getMoviesRunTime() {
	const convertedData = data.map(movie => {
		const runtimeinMinutes = convertToMinutes(movie.Runtime);
		return {
			...movie,
			Runtime: runtimeinMinutes 
		}
	})
	
	const sortedData = convertedData.sort((a,b) => a.Runtime - b.Runtime)
	
	const movies = sortedData.map((movie, index) => ({
		label: index,
		runtime: movie.Runtime, 
		title: movie.Title
	}))
	const labels = movies.map(movie => movie.label)
	const runtimes = movies.map(movie => movie.runtime)
	// const labels = sortedData.map((movie, index) => index)
	// const runtimes = sortedData.map(movie => movie.Runtime)

	console.log('min labels ', labels)
	
	return {
		labels: labels,
		datasets: [{
			label: 'Specials tidslängd',
			data: runtimes, 
			backgroundColor: ['#CA35A9'], 
			borderColor: ['rgb(143, 82, 140)']
		}],
		options: {
			plugins: {
				tooltip: {
					callbacks: {
						label: function(context) {
							const movie = movies[context.dataIndex]
							return `Film: ${movie.title}, Tidslängd: ${movie.runtime} minuter`;
						}
					}
				}
			}
		}
	}
}

