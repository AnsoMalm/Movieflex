import { createHashRouter } from "react-router-dom";
import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx'
import SearchMovie from "./routes/SearchMovie.jsx";
import MovieLanguage from './routes/MovieLanguage.jsx'
import Genre from './routes/Genre.jsx'
import Premier from './routes/Premiere.jsx'
import MovieRuntime from './routes/MoviesRuntime.jsx'


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