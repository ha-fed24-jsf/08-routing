// import { useState } from 'react'
import { Link, Outlet } from 'react-router'
import './App.css'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div className="app">
			<header>
				<h1> Go away! </h1>
				<div className="links">
					<Link to="/"> Hem </Link>
					<Link to="/destination"> Resmål </Link>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default App
