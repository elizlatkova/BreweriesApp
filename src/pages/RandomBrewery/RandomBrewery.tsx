import "./RandomBrewery.css"
import RandomBreweryGenerator from "../../components/RandomBreweryGenerator/RandomBreweryGenerator";

export function RandomBrewery() {
    return (
        <>
            <h1 className="random-page-title">Random brewery generator</h1>
            <RandomBreweryGenerator />
            <div className="btn-new-brewery">
                <button className="btn-generate-random-brewery">Generate new brewery</button>
            </div>
        </>
    );
}