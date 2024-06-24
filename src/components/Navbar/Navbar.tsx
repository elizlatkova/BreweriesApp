import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";

export function NavBar() {
    return (
        <nav className="navbar-container">
            <img src={logo} alt="Logo" />
            <div className="navbar-itemsRight">
                <NavLink to="/" className="navbar-link"><span className="navbar-item">Home</span></NavLink>
                <NavLink to="/random" className="navbar-link"><span className="navbar-item">Random brewery</span></NavLink>
                <NavLink to="/favorites" className="navbar-link"><span className="navbar-item">Favorites</span></NavLink>
            </div>
        </nav>
    );
}