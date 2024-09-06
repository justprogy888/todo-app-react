import { Link } from "react-router-dom"
import "./Header.scss"
const Header = () => {

	return (
		<header>
			<div className="container">
				<div className="header__wrapper">
					<div className="header__logo">
						Todo list
					</div>
					<nav className="header__nav">
						<Link to="/" className="nav-link">Home</Link>
						<Link to="/todo" className="nav-link">Todo</Link>
						<Link to="/trash-bin" className="nav-link">Trash bin</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header