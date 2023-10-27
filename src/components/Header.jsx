import { NavLink } from 'react-router-dom'

const Header = () => {

	return (
		<header>
			<div className='header-movie'>
				<h1 className='movie-flex'>MovieStats</h1>
			</div>
			<nav>
					<NavLink to="/">Home</NavLink>

					<NavLink to="movie-language">Olika Språk</NavLink>

					<NavLink to="genre">Genre</NavLink>

					<NavLink to="premier">Filmernas premier</NavLink>

					<NavLink to="movie-runtime">Filmernas tidslängd</NavLink>	
			</nav>
		</header>
	)
}

export default Header
