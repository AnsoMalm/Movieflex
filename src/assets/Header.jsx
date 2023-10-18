import { Link } from 'react-dom'
import './header.css'


const Header = () => {

	return (
		<header>
			<h1 className='header-movie'>MovieFlex</h1>
			<div className='menu-bar-container'>
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
			</div>
		</header>
	)
}

export default Header
