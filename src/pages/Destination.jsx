import { useParams } from 'react-router'
import { destinations } from '../data/destinations.js'

const Destination = () => {
	const { destId } = useParams()
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
		</div>
	)
}

export default Destination
