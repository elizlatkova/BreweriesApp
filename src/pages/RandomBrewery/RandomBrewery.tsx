import "./RandomBrewery.css"
import RandomBreweryGenerator from "../../api/RandomBreweryGenerator/RandomBrewery";

export function RandomBrewery() {
    return (
        <>
            <h1 className="random-page-title">Random brewery generator</h1>
            <RandomBreweryGenerator/>
            <button className="btn-generate-random-brewery">Generate new brewery</button>
        </>
    );
}