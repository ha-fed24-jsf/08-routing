import { Link, useNavigate, useParams } from "react-router"
import { destinations } from "../data/destinations"

const Book = () => {
	const { destId } = useParams()
	const navigate = useNavigate()
	const place = destinations.find(d => d.id === destId)
	// båda id är strängar, behöver inte omvandla typer

	const handleBack = () => {
		console.log('Book: vi backar ett steg')
		navigate(-1)
	}

	return (
		<div className="book">
			<h2> Boka resa </h2>
			<p> Du vill åka till {place.name}. </p>
			<button onClick={handleBack}> Backa till föregående sida </button>
			<Link to="/"> Välj annat resmål </Link>
		</div>
	)
}

export default Book
