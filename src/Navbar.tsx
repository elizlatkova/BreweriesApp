import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";

export function NavBar() {
    return (
        <nav className="navbar-container">
            <img src={logo} alt="Logo" />
            <div className="navbarItemsRight">
                <NavLink to="/"><span className="navbarItem">Home</span></NavLink>
                <NavLink to="/random"><span className="navbarItem">Random brewery</span></NavLink>
                <NavLink to="/favorites"><span className="navbarItem">Favorites</span></NavLink>
            </div>
        </nav>
    );
}