import { Link } from 'react-router'
import './Home.css'

const Home = () => (
	<div className="home">
		<h2> Läs om våra populära resmål! </h2>
		<div className="destinations">
			<Link to="/destination">
				<section>
					Paris
				</section>
			</Link>
			<Link to="/destination">
				<section>
					Köpenhamn
				</section>
			</Link>
			<Link to="/destination">
				<section>
					New York
				</section>
			</Link>
		</div>
	</div>
)

export default Home
