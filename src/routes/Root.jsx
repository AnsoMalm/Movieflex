import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {

	return (
		<body>
		<Header />
		<main>
			<Outlet />
		</main>
		</body>
	)
}

export default Root