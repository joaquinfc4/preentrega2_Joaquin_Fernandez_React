import logo from '../../assets/logo.jpg'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand ms-4" to="/">
                    <img className="logo rounded shopmate" src={logo} alt="market_logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/category/remeras">Remeras</Link>
                                <Link className="dropdown-item" to="/category/buzos">Buzos</Link>
                                <Link className="dropdown-item" to="category/calzado">Calzado</Link>
                            </ul>
                        </li>
                        <CartWidget />
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar