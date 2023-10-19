import { NavLink } from 'react-router-dom'

const Header = () => {

	return (
		<header>
			<h1>MovieFlex</h1>
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

{/* <div className='menu-bar-container'>
	<a href="#"
	className='menu-bar'>
		Olika Språk</a>
	<a href="#" 
		className='menu-bar'>
		Filmernas premiärer
	</a>
	<a href='#'
	className='menu-bar'>
		Filmers tidslängd
	</a>
	<a href='#'
	className='menu-bar'>
		Special-filmers genrerar
	</a>
	<a href='#'
	className='menu-bar'>
		Våra genrerar
	</a>
</div> */}