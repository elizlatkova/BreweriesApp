import AllBreweriesHome from "../../api/AllBreweriesHome/AllBreweriesHome";
import "./HomePage.css"

export function HomePage() {
    return (
        <>
            <h1 className="home-page-title">Breweries</h1>
            <AllBreweriesHome />
        </>
    );
}