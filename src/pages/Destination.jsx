import { useNavigate, useParams } from 'react-router'
import { destinations } from '../data/destinations.js'

const Destination = () => {
	const { destId } = useParams()
	const navigate = useNavigate()
	// console.log('Destination: destId=', destId)

	const place = destinations.find(d => d.id === destId)
	// console.log('Destination: hittade place=', place)

	if( !place ) {
		return (
			<div className="destination">
			<h2> Välj ett av våra resmål </h2>
			</div>
		)
	}

	// <Link to={'/book/' + place.id}> Boka </Link>
	const handleBook = () => {
		console.log('Destination: place.id = ', place.id)
		navigate('/book/' + place.id)
	}

	return (
		<div className="destination">
			<h2> {place.name} </h2>
			<div className="activities">
				{place.activities.map(activity => (
					<section key={activity.id}>
						<h3> {activity.name} </h3>
						<p> {activity.description} </p>
					</section>
				))}
			</div>
			<button onClick={handleBook}> Boka resa </button>
		</div>
	)
}

export default Destination
