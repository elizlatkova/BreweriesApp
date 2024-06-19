import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";

export function NavBar() {
    return (
        <nav className="navbarContainer">
            <img src={logo} alt="Logo" />
            <div className="navbarItemsRight">
                <NavLink to="/" className="navbarLink"><span className="navbarItem">Home</span></NavLink>
                <NavLink to="/random" className="navbarLink"><span className="navbarItem">Random brewery</span></NavLink>
                <NavLink to="/favorites" className="navbarLink"><span className="navbarItem">Favorites</span></NavLink>
            </div>
        </nav>
    );
}