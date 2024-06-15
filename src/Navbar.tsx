import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <nav className="navbar-container">
            <span>Logo</span>
            <NavLink to="/"><span className="navbarItem">Home</span></NavLink>
            <NavLink to="/random"><span className="navbarItem">Random brewery</span></NavLink>
            <NavLink to="/favorites"><span className="navbarItem">Favorites</span></NavLink>
        </nav>
    );
}