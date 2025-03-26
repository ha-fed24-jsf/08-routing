import { Link } from 'react-router'
import './Home.css'

const Home = () => (
	<div className="home">
		<h2> Läs om våra populära resmål! </h2>
		<div className="destinations">
			<Link to="/destination/paris">
				<section>
					Paris
				</section>
			</Link>
			<Link to="/destination/copenhagen">
				<section>
					Köpenhamn
				</section>
			</Link>
			<Link to="/destination/new-york">
				<section>
					New York
				</section>
			</Link>
		</div>
	</div>
)

export default Home
