import "./RandomBrewery.css"

export function RandomBrewery() {
    return (
        <>
            <h1 className="randomPageTitle">Random brewery generator</h1>
            <hr/>
            <div className="randomBrewery"></div>
            <button className="btnGenerateRandomBrewery">Generate new brewery</button>
        </>
    );
}