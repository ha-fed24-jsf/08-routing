// import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import './App.css'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div className="app">
			<header>
				<h1> Go away! </h1>
				<div className="links">
					<NavLink to="/"> Hem </NavLink>
					<NavLink to="/destination"> Resmål </NavLink>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default App
