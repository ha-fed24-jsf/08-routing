import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import Destination from './pages/Destination.jsx'
import Book from './pages/Book.jsx'

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
				// URL param "destId" är valfri eftersom vi använder frågetecken
				path: "/destination/:destId?",
				Component: Destination
			},
			{
				path: "/book/:destId",
				Component: Book
			}
		]
	}
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
