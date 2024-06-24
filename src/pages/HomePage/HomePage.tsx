import AllBreweriesHome from "../../components/AllBreweriesHome/AllBreweriesHome";
import "./HomePage.css"

export function HomePage() {
    return (
        <>
            <h1 className="home-page-title">Breweries</h1>
            <AllBreweriesHome />
        </>
    );
}