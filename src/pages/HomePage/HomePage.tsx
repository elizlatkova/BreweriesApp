import { AllBreweriesHome } from "../../components/AllBreweriesHome/AllBreweriesHome";
import "./HomePage.css"

export function HomePage() {
    return (
        <>
            <h1 className="homePageTitle">Breweries</h1>
            <hr />
            <AllBreweriesHome />
            
        </>
    );
}