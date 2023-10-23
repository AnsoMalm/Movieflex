import { createHashRouter } from "react-router-dom";
import Root from './routes/Root.jsx'
import Home from './routes/Home/Home.jsx'
import MovieLanguage from './routes/Language/MovieLanguage.jsx'
import Genre from './routes/Genre/Genre.jsx'
import Premier from './routes/Premier/Premiere.jsx'
import MovieRuntime from './routes/Runtime/MoviesRuntime.jsx'


export const router = createHashRouter([
	{
		path: '/', 
		element: <Root />,

		children: [
			{
				path: '', 
				element: <Home />,
			}, 
		
			{
				path: 'movie-language', 
				element: <MovieLanguage />
			}, 
			{
				path: 'genre', 
				element: <Genre />
			}, 
			{
				path: 'premier', 
				element: <Premier />
			}, 
			{
				path: 'movie-runtime', 
				element: <MovieRuntime />
			}, 
		
		]

}])