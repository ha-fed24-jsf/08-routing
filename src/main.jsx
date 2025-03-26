import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import Destination from './pages/Destination.jsx'

// Använd HASH ROUTER här
const router = createHashRouter([
	{
		path: "/",
		Component: App,
		children: [
			// Alla children lägger vi i mappen "pages"
			{
				index: true,
				Component: Home
			},
			{
				path: "/destination",
				Component: Destination
			}
		]
	}
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
